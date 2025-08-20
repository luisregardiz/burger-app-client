import { API_ROUTES } from "@/config/api-routes"
import { useFetch } from "./use-fetch"

export const useGetBurgers = () => {
    const { data, loading, error } = useFetch<Burger[]>(API_ROUTES.BURGERS)

    return { data, loading, error }
}
