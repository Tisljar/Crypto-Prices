const mockData = [
    {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        current_price: 24728,
        market_cap: 479665082587,
        market_cap_rank: 1,
        fully_diluted_valuation: 519298219436,
        total_volume: 10679699435,
        high_24h: 24823,
        low_24h: 24480,
        price_change_24h: 149.91,
        price_change_percentage_24h: 0.60993,
        market_cap_change_24h: 2602436056,
        market_cap_change_percentage_24h: 0.54551,
        circulating_supply: 19397268.0,
        total_supply: 21000000.0,
        max_supply: 21000000.0,
        ath: 59717,
        ath_change_percentage: -58.59919,
        ath_date: '2021-11-10T14:24:11.849Z',
        atl: 51.3,
        atl_change_percentage: 48094.96667,
        atl_date: '2013-07-05T00:00:00.000Z',
        roi: null,
        last_updated: '2023-06-09T12:39:24.154Z',
    },
    {
        id: 'ethereum',
        symbol: 'eth',
        name: 'Ethereum',
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
        current_price: 1713.72,
        market_cap: 206007671731,
        market_cap_rank: 2,
        fully_diluted_valuation: 206007671731,
        total_volume: 4645482151,
        high_24h: 1727.74,
        low_24h: 1701.19,
        price_change_24h: -1.9464410050441074,
        price_change_percentage_24h: -0.11345,
        market_cap_change_24h: -375608049.29953,
        market_cap_change_percentage_24h: -0.182,
        circulating_supply: 120229122.258725,
        total_supply: 120229122.258725,
        max_supply: null,
        ath: 4228.93,
        ath_change_percentage: -59.51362,
        ath_date: '2021-12-01T08:38:24.623Z',
        atl: 0.381455,
        atl_change_percentage: 448744.24127,
        atl_date: '2015-10-20T00:00:00.000Z',
        roi: { times: 91.65936618205352, currency: 'btc', percentage: 9165.936618205353 },
        last_updated: '2023-06-09T12:39:22.949Z',
    },
    {
        id: 'tether',
        symbol: 'usdt',
        name: 'Tether',
        image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663',
        current_price: 0.928238,
        market_cap: 77315331432,
        market_cap_rank: 3,
        fully_diluted_valuation: 77315331432,
        total_volume: 14856527107,
        high_24h: 0.934108,
        low_24h: 0.92557,
        price_change_24h: -0.002510208510144607,
        price_change_percentage_24h: -0.2697,
        market_cap_change_24h: -298521545.1606293,
        market_cap_change_percentage_24h: -0.38462,
        circulating_supply: 83321599071.5721,
        total_supply: 83321599071.5721,
        max_supply: null,
        ath: 1.13,
        ath_change_percentage: -17.99125,
        ath_date: '2018-07-24T00:00:00.000Z',
        atl: 0.533096,
        atl_change_percentage: 74.07963,
        atl_date: '2015-03-02T00:00:00.000Z',
        roi: null,
        last_updated: '2023-06-09T12:35:00.390Z',
    },
    {
        id: 'binancecoin',
        symbol: 'bnb',
        name: 'BNB',
        image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
        current_price: 243.39,
        market_cap: 37857173460,
        market_cap_rank: 4,
        fully_diluted_valuation: 48579931156,
        total_volume: 731502363,
        high_24h: 248.07,
        low_24h: 238.2,
        price_change_24h: -2.8044723900129327,
        price_change_percentage_24h: -1.13912,
        market_cap_change_24h: -522830596.6432724,
        market_cap_change_percentage_24h: -1.36225,
        circulating_supply: 155855196.0,
        total_supply: 157900174.0,
        max_supply: 200000000.0,
        ath: 583.17,
        ath_change_percentage: -58.38597,
        ath_date: '2021-11-26T02:58:28.000Z',
        atl: 0.03359941,
        atl_change_percentage: 722181.05831,
        atl_date: '2017-10-19T00:00:00.000Z',
        roi: null,
        last_updated: '2023-06-09T12:39:30.387Z',
    },
    {
        id: 'cardano',
        symbol: 'ada',
        name: 'Cardano',
        image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
        current_price: 0.297383,
        market_cap: 10429597809,
        market_cap_rank: 8,
        fully_diluted_valuation: 13392256312,
        total_volume: 293525427,
        high_24h: 0.307192,
        low_24h: 0.291556,
        price_change_24h: -0.007571138603340023,
        price_change_percentage_24h: -2.48272,
        market_cap_change_24h: -243750078.19252014,
        market_cap_change_percentage_24h: -2.28373,
        circulating_supply: 35045020830.3234,
        total_supply: 45000000000.0,
        max_supply: 45000000000.0,
        ath: 2.61,
        ath_change_percentage: -88.65222,
        ath_date: '2021-09-02T06:00:10.474Z',
        atl: 0.01722339,
        atl_change_percentage: 1617.41686,
        atl_date: '2020-03-13T02:22:55.044Z',
        roi: null,
        last_updated: '2023-06-09T12:39:25.136Z',
    },
    {
        id: 'dogecoin',
        symbol: 'doge',
        name: 'Dogecoin',
        image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
        current_price: 0.064049,
        market_cap: 8875648313,
        market_cap_rank: 9,
        fully_diluted_valuation: 8875629253,
        total_volume: 198296484,
        high_24h: 0.0637,
        low_24h: 0.06274,
        price_change_24h: 0.00071064,
        price_change_percentage_24h: 1.12197,
        market_cap_change_24h: 33344538,
        market_cap_change_percentage_24h: 0.3771,
        circulating_supply: 139695576383.705,
        total_supply: 139695626383.705,
        max_supply: null,
        ath: 0.601466,
        ath_change_percentage: -89.49843,
        ath_date: '2021-05-08T05:08:23.458Z',
        atl: 7.662e-5,
        atl_change_percentage: 82341.07655,
        atl_date: '2015-05-06T00:00:00.000Z',
        roi: null,
        last_updated: '2023-06-09T12:39:28.114Z',
    },
    {
        id: 'solana',
        symbol: 'sol',
        name: 'Solana',
        image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422',
        current_price: 17.83,
        market_cap: 7102063488,
        market_cap_rank: 10,
        fully_diluted_valuation: 9802102992,
        total_volume: 258000338,
        high_24h: 17.91,
        low_24h: 17.22,
        price_change_24h: 0.276438,
        price_change_percentage_24h: 1.57509,
        market_cap_change_24h: 141411255,
        market_cap_change_percentage_24h: 2.03158,
        circulating_supply: 398187102.969387,
        total_supply: 549568566.79842,
        max_supply: null,
        ath: 225.04,
        ath_change_percentage: -92.06676,
        ath_date: '2021-11-06T21:54:35.825Z',
        atl: 0.46316,
        atl_change_percentage: 3754.6595,
        atl_date: '2020-05-11T19:35:23.449Z',
        roi: null,
        last_updated: '2023-06-09T12:39:23.438Z',
    },
    {
        id: 'tron',
        symbol: 'trx',
        name: 'TRON',
        image: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066',
        current_price: 0.072577,
        market_cap: 6543584150,
        market_cap_rank: 12,
        fully_diluted_valuation: 6543618370,
        total_volume: 248765333,
        high_24h: 0.07266,
        low_24h: 0.071606,
        price_change_24h: 0.00049132,
        price_change_percentage_24h: 0.68157,
        market_cap_change_24h: 31712599,
        market_cap_change_percentage_24h: 0.487,
        circulating_supply: 90134507476.2892,
        total_supply: 90134481989.1116,
        max_supply: null,
        ath: 0.192595,
        ath_change_percentage: -62.35958,
        ath_date: '2018-01-05T00:00:00.000Z',
        atl: 0.00154713,
        atl_change_percentage: 4585.69658,
        atl_date: '2017-11-12T00:00:00.000Z',
        roi: { times: 40.16064393228674, currency: 'usd', percentage: 4016.064393228674 },
        last_updated: '2023-06-09T12:39:26.234Z',
    },
    {
        id: 'litecoin',
        symbol: 'ltc',
        name: 'Litecoin',
        image: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580',
        current_price: 82.75,
        market_cap: 6035238578,
        market_cap_rank: 13,
        fully_diluted_valuation: 6934500165,
        total_volume: 343041636,
        high_24h: 82.71,
        low_24h: 80.95,
        price_change_24h: 0.855852,
        price_change_percentage_24h: 1.04508,
        market_cap_change_24h: 52699151,
        market_cap_change_percentage_24h: 0.88088,
        circulating_supply: 73106933.2334713,
        total_supply: 84000000.0,
        max_supply: 84000000.0,
        ath: 337.56,
        ath_change_percentage: -75.65219,
        ath_date: '2021-05-10T03:13:07.904Z',
        atl: 0.981314,
        atl_change_percentage: 8275.45789,
        atl_date: '2015-01-14T00:00:00.000Z',
        roi: null,
        last_updated: '2023-06-09T12:39:26.705Z',
    },
    {
        id: 'polkadot',
        symbol: 'dot',
        name: 'Polkadot',
        image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644',
        current_price: 4.69,
        market_cap: 5811965378,
        market_cap_rank: 14,
        fully_diluted_valuation: 6190980856,
        total_volume: 90958969,
        high_24h: 4.7,
        low_24h: 4.63,
        price_change_24h: 0.0258427,
        price_change_percentage_24h: 0.55439,
        market_cap_change_24h: 23186615,
        market_cap_change_percentage_24h: 0.40054,
        circulating_supply: 1241304340.80588,
        total_supply: 1322253473.68733,
        max_supply: null,
        ath: 47.6,
        ath_change_percentage: -90.18196,
        ath_date: '2021-11-04T14:10:09.301Z',
        atl: 2.27,
        atl_change_percentage: 105.93524,
        atl_date: '2020-08-19T03:44:11.556Z',
        roi: null,
        last_updated: '2023-06-09T12:39:31.184Z',
    },
    {
        id: 'dai',
        symbol: 'dai',
        name: 'Dai',
        image: 'https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734',
        current_price: 0.928105,
        market_cap: 4219504773,
        market_cap_rank: 18,
        fully_diluted_valuation: 4219504773,
        total_volume: 353592198,
        high_24h: 0.931984,
        low_24h: 0.926011,
        price_change_24h: -0.002491170241804009,
        price_change_percentage_24h: -0.2677,
        market_cap_change_24h: -28624741.244246006,
        market_cap_change_percentage_24h: -0.67382,
        circulating_supply: 4547030672.71241,
        total_supply: 4547029912.60629,
        max_supply: 4547029912.60629,
        ath: 1.11,
        ath_change_percentage: -16.18676,
        ath_date: '2022-10-02T12:21:04.914Z',
        atl: 0.759326,
        atl_change_percentage: 22.18765,
        atl_date: '2021-05-19T13:05:49.822Z',
        roi: null,
        last_updated: '2023-06-09T12:35:00.161Z',
    },
    {
        id: 'chainlink',
        symbol: 'link',
        name: 'Chainlink',
        image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700',
        current_price: 5.59,
        market_cap: 2890231828,
        market_cap_rank: 22,
        fully_diluted_valuation: 5589309590,
        total_volume: 82577619,
        high_24h: 5.6,
        low_24h: 5.51,
        price_change_24h: 0.02409208,
        price_change_percentage_24h: 0.43267,
        market_cap_change_24h: 9200364,
        market_cap_change_percentage_24h: 0.31934,
        circulating_supply: 517099971.2305644,
        total_supply: 1000000000.0,
        max_supply: 1000000000.0,
        ath: 43.32,
        ath_change_percentage: -87.1207,
        ath_date: '2021-05-10T00:13:57.214Z',
        atl: 0.125048,
        atl_change_percentage: 4361.36733,
        atl_date: '2017-11-29T00:00:00.000Z',
        roi: null,
        last_updated: '2023-06-09T12:39:24.276Z',
    },
    {
        id: 'bitcoin-cash',
        symbol: 'bch',
        name: 'Bitcoin Cash',
        image: 'https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492',
        current_price: 103.38,
        market_cap: 2006803069,
        market_cap_rank: 29,
        fully_diluted_valuation: 2170648262,
        total_volume: 48658566,
        high_24h: 104.44,
        low_24h: 102.41,
        price_change_24h: -0.6924170650227808,
        price_change_percentage_24h: -0.66531,
        market_cap_change_24h: -15008305.181447268,
        market_cap_change_percentage_24h: -0.74232,
        circulating_supply: 19414874.8966508,
        total_supply: 21000000.0,
        max_supply: 21000000.0,
        ath: 3187.12,
        ath_change_percentage: -96.75939,
        ath_date: '2017-12-20T00:00:00.000Z',
        atl: 68.03,
        atl_change_percentage: 51.81269,
        atl_date: '2018-12-16T00:00:00.000Z',
        roi: null,
        last_updated: '2023-06-09T12:39:23.565Z',
    },
];

export default mockData;
