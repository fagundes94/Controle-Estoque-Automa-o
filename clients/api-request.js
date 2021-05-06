const axios = require('axios')
const https = require('https')

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

const request = async(url, params) => {
    const options = {
        url,
        method: params.method ? params.method : "GET",
        httpsAgent,
    }

    if (params.body) {
        options.data = params.body;
    }

    if (params.config && params.config.headers) {
        options.headers = params.config.headers;
    }

    if (params.query) {
        options.params = params.query;
    }

    try {
        const response = await axios(options)
        return response
    } catch (error) {
        return error.response
    }
}

module.exports = request