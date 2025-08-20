import { useEffect, useState } from "react"

export const useFetch = <T = any>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            const result = await response.json()
            setData(result)
            setLoading(false)
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unknown error occurred')
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, loading, error }
}