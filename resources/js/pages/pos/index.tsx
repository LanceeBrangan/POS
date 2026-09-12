import { useState } from "react";
import { Product, CartItem } from "@/types";
import { Head } from "@inertiajs/react";



interface Props {
    products: Product[];
}

export default function PosIndex({products}: Props) {
    const [search, setSearch] = useState('');
    const [set, setCart] = useState<CartItem[]>([]);

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.name.toLowerCase().includes(search.toLowerCase())
     );


    function addItem(product: Product) {
        setCart(current => {
            const existing = current.find(item=>item.product.id === product.id);
            if (existing) {
                return current.map(item=>
                    item.product.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                );
            }
            return [...current, {product, quantity: 1}]
        });
    }


    return (
        <>
            <Head title="Point of Sales"></Head>
        </>
    )

}
