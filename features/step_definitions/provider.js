const { Given, When, Then } = require('cucumber');
const { createProvider } = require('../../clients/provider-ep');
const providerData = require('../fixtures/providerData')

var chai = require("chai");
const expect = chai.expect;

let responseProvider


When('a provider is registered', async() => {
    const dataProvider = providerData.getAllFilds();
    responseProvider = await createProvider(dataProvider);
});

When('a provider is registered with only mandatory fileds', async() => {
    const dataProvider = providerData.getAllFilds();
    dataProvider.cnpj = ""
    responseProvider = await createProvider(dataProvider);
});

When('a provider is registred whithout name field', async() => {
    const dataProvider = providerData.getAllFilds();
    dataProvider.name = ""
    responseProvider = await createProvider(dataProvider);
});

When('a provider is registred exceeding the maximum number of characters in the name field', async() => {
    const dataProvider = providerData.getAllFilds();
    dataProvider.name = "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste"
    responseProvider = await createProvider(dataProvider);
});

When('a provider is informed with the name field already registered', async() => {
    const dataProvider = providerData.getAllFilds();
    const request = await createProvider(dataProvider);
    const dataProv = providerData.getAllFilds();
    dataProv.name = request.data.prov.name;
    responseProvider = await createProvider(dataProv);
});

When('a provider is informed with the CNPJ field already registered', async() => {
    const dataProvider = providerData.getAllFilds();
    const request = await createProvider(dataProvider);
    const dataProv = providerData.getAllFilds();
    dataProv.cnpj = request.data.prov.cnpj;
    responseProvider = await createProvider(dataProv);
});

Then('status is {int}', function(status) {
    expect(responseProvider.status).to.equal(status)
});

Then('responce contains an {string}', function(param) {
    expect(responseProvider.data.prov).to.have.property(param)
});

Then('response is returned: {string}', function(response) {
    expect(responseProvider.data.message).to.equal(response)
});