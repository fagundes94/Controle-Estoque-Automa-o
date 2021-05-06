const request = require('./api-request');

const createProvider = async(body) => {
    const options = {
        method: "POST",
        body,
    };

    const reponse = await request(`https://controle-estoque-backend.herokuapp.com/api/v1/providers`, options);
    return reponse;

}

module.exports = { createProvider };