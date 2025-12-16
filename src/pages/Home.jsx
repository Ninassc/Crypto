import { useEffect, useState } from "react"
import fetchCryptos from "../api/coinGecko"
import CryptoCard from "../components/CryptoCard"


export const Home = () => {

    const [cryptoList, setCryptoList] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchCryptoData = async () => {
        try {
            const data = await fetchCryptos()
            setCryptoList(data)
            console.log(data)
        }
        catch (err) {
            console.log("Err fetching crypto: ", err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCryptoData()
    }, [])

    return (
        <>
            <div className="app">
                {loading ? (
                    <div className="loading">
                        <div className="spinner" />
                        <p>Loading Crypto Data...</p>
                    </div>) :
                    <div className="crypto-container">
                        {cryptoList.map((crypto, key) => {
                            return  <CryptoCard crypto={crypto} />
                        })}
                    </div>
                }
            </div>
        </>
    )
}