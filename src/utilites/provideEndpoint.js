const provideEndpoint = () => {
    const apiKey = '8DAB3F54-41B1-451E-A349-EE2F3C226E5F';
    const currencies = [
        'BTC/EUR',
        'ETH/EUR',
        'LTC/EUR',
        'BNB/EUR',
        'ADA/EUR',
        'XRP/EUR',
        'DOGE/EUR',
        'DOT/EUR',
        'BCH/EUR',
        'LINK/EUR',
    ];
    const currenciesQuery = currencies.join(',');
    const endpoint = `http://rest-sandbox.coinapi.io/v1/APIKEY-${apiKey}/exchangerate/${currenciesQuery}?invert=false?`;
    return endpoint;
};

export default provideEndpoint;
