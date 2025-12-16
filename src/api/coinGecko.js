const Base_Url = "http://api.coingecko.com/api/v3"

export default async function fetchCryptos(){
    const response = await fetch(`${Base_Url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    
    if(!response.ok){
        throw new Error("Failed to fetch cryptos")
    }

    return response.json()
}