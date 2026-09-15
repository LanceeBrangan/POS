import { Product } from '@/types';

interface Props {
    products: Product[];
    onAdd: (product: Product) => void;
}

export default function ProductGrid({ products, onAdd }: Props) {
    if (products.length === 0) {
        return (
            <div className="text-muted-foreground flex flex-1 items-center justify-center">
                No Products found.
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {products.map((product) => (
                    <button
                        key={product.id}
                        onClick={() => onAdd(product)}
                        className="group bg-card hover:border-primary focus-visible:ring-primary flex flex-col overflow-hidden rounded-xl border text-left transition-all hover:shadow-md focus:outline-none focus-visible:ring-2"
                    >
                        {product.image ? (
                            <img
                                src={'/storage/${product.image}'}
                                alt="{product.name}"
                                className="aspect-square w-full object-cover"
                            />
                        ) : (
                            <div className="bg-muted text-muted-foreground flex aspect-square w-full items-center justify-center text-3xl">
                                {product.name.charAt(0)}
                            </div>
                        )}
                        <div className="p-2">
                            <p className="truncate text-sm font-medium">
                                {product.name}
                            </p>
                            <p className="fond-bold text-primary text-sm">
                                ${product.price}
                            </p>
                            <p className="text-muted-foreground text-xs">
                                Stock: {product.stock}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
