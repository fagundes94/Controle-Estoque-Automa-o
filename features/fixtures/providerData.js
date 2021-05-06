var chance = require('chance').Chance();

const providerMock = () => {
    return {
        name: chance.name({ max: 70 }),
        cnpj: chance.cnpj({})

    }


};

module.exports = {

    getAllFilds: () => {
        return providerMock();
    }

}