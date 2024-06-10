const axios = require("axios");
const fetchData = require("../../utils/fetchData.test");

jest.mock("axios");

test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 1, nome: "Mercado 1" } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
afterEach(() => {
    jest.resetAllMocks();
});

