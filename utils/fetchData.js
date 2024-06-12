const axios = require("axios");

async function fetchData() {
    const response = await axios.get("http://127.0.0.1:3000");
    return response.data;
}

module.exports = fetchData;