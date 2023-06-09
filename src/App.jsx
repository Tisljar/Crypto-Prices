import { useEffect, useState } from 'react';
import fecthCoinData from './utilites/fetchCoinData';
import mockData from './utilites/mockData';

const App = () => {
    const [isLoad, setIsLoad] = useState(false);
    const [allCoins, setAllCoins] = useState([]); // mockData when not using api
    useEffect(() => {
        setIsLoad(true);
        const coinData = fecthCoinData(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin,ethereum,binancecoin,cardano,xrp,dogecoin,polkadot,bitcoin-cash,litecoin,chainlink,tether,solana,dai,tron,',
        );
        coinData
            .then((coins) => {
                console.log(coins);
                setAllCoins(coins);
                setIsLoad(false);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            {isLoad && (
                <div className="loader-container">
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
            <div className=" max-w-[1200px] mx-auto">
                <div className="flex justify-center items-center flex-col">
                    <h3 className=" text-primary-100 font-robotoSlab text-6xl font-semibold my-8">CRYPTO PRICES</h3>
                    <p className="font-poppins text-2xl mb-12">Keep up with the latest crypto prices</p>
                </div>
                <div className="pb-24">
                    <table className="min-w-full text-left text-sm table">
                        <thead className="border-b border-bg-300 font-semibold bg-primary-100 text-xl">
                            <tr>
                                <th scope="col" className="px-6 py-4"></th>
                                <th scope="col" className="px-6 py-4">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    24h
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Market Cap
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCoins.map((data, index) => {
                                const colorCss =
                                    data.price_change_percentage_24h >= 0
                                        ? ' whitespace-nowrap px-6 py-4 text-green-500'
                                        : 'whitespace-nowrap px-6 py-4 text-red-500';
                                return (
                                    <tr
                                        className="border-b border-bg-300 transition duration-300 ease-in-out hover:bg-bg-300 text-xl"
                                        key={data.id}
                                    >
                                        <td className=" whitespace-nowrap px-6 py-4">
                                            <img src={data.image} alt={data.id} className="w-8 h-8" />
                                        </td>
                                        <td className=" whitespace-nowrap px-6 py-4">{data.name}</td>
                                        <td className=" whitespace-nowrap px-6 py-4">{data.current_price}&#x20AC;</td>
                                        <td className={colorCss}>{data.price_change_percentage_24h.toFixed(2)}%</td>
                                        <td className=" whitespace-nowrap px-6 py-4">{data.market_cap}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default App;

