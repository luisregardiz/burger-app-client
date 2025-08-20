import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetBurgers } from "@/hooks/use-get-burgers"

export default function Burger() {
    const { data, loading, error } = useGetBurgers()

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <>
            <div className="container mx-auto pt-6">
                <h2 className="text-2xl font-bold">
                    Lista de hamburgesas
                </h2>
                <div className="flex flex-wrap items-center gap-4 my-10">
                    {data?.map((burger) => (
                        <Card key={burger._id} className="w-xs pt-0">
                            <img src="https://lumenor.ai/cdn-cgi/imagedelivery/F5KOmplEz0rStV2qDKhYag/df99d90c-733b-471a-a1ff-23f09fdd8500/source" alt="Burger" className="rounded-t-xl" />
                            <CardHeader>
                                <CardTitle>{burger.name}</CardTitle>
                                <Badge variant="secondary" className="mt-2">{burger.veg ? "Vegetarian" : "Meat"}</Badge>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>USD$ {burger.price}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button>Add to cart</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}


