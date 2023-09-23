import { useEffect, useState } from "react"
import { getCountries } from "service/country-service"

export const useFetchCountries = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
        try {
            const data = await getCountries()
            setCountries(data)
        } catch (error) {
            setError(error)
        } finally {
           setLoading(false)
        }
    }

    fetchData()
    }, [])
    
  return {countries, error, loading}
  
}
