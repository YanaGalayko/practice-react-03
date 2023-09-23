import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCountry } from "service/country-service"

export const useFetchCountry = () => {
    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {id} = useParams()

    useEffect(() => {

    setLoading(true)

    const fetchData = async () => {
        try {
            const data = await fetchCountry(id)
            setCountry(data)
        } catch (error) {
            setError(error)
        } finally {
           setLoading(false)
        }
    }

    fetchData()
    }, [id])
    
  return {country, error, loading}
  
}