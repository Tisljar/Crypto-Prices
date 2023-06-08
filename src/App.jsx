import { useEffect, useState } from 'react';
import fecthCoinData from './utilites/fetchCoinData';

const App = () => {
    const [isload, setIsLoad] = useState(true);
    // useEffect(() => {
    //     const coinData = fecthCoinData(
    //         'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin,ethereum,binancecoin,cardano,xrp,dogecoin,polkadot,bitcoin-cash,litecoin,chainlink',
    //     );
    //     coinData
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);
    return (
        <div>
            <p className=" text-primary-100 font-robotoSlab text-2xl font-semibold">TEST</p>
            <p className="font-poppins text-xl">TEST 2</p>
        </div>
    );
};

export default App;

