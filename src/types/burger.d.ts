interface Burger {
    _id: string;
    name: string;
    des: string;
    price: number;
    images: BurgerImage[];
    veg: boolean;
    ingredients: Ingredient[];
}

interface BurgerImage {
    url: string;
    alt: string;
}

interface Ingredient {
    name: string;
    qty: string;
}
