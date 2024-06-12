const axios = require("axios");
const fetchData = require("../../utils/fetchData");

jest.mock("axios");

test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 1, nome: "Produto 1", quantidade: 5, preco: 50 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 2, nome: "Produto 2", quantidade: 5, preco: 100 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 3, nome: "Produto 3", quantidade: 5, preco: 150 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 4, nome: "Produto 4", quantidade: 10, preco: 200 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 5, nome: "Produto 5", quantidade: 15, preco: 250 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 6, nome: "Produto 6", quantidade: 15, preco: 300 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 7, nome: "Produto 7", quantidade: 15, preco: 350 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 8, nome: "Produto 8", quantidade: 15, preco: 400 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 9, nome: "Produto 9", quantidade: 15, preco: 450 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
test("fetches successfully data from an API", async () => {
    const mockData = { data: { id: 10, nome: "Produto 10", quantidade: 15, preco: 500 } };
    axios.get.mockResolvedValue(mockData);
    const result = await fetchData();
    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
});
afterEach(() => {
    jest.resetAllMocks();
});