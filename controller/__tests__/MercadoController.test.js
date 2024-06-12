const axios = require("axios");
const fetchData = require("../../utils/fetchData");

jest.mock("axios");

test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 1, nome: "Mercado 1" } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 2, nome: "Mercado 2" } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 3, nome: "Mercado 3" } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 4, nome: "Mercado 4" } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 5, nome: "Mercado 5" } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
afterEach(() => {
    jest.resetAllMocks();
});