import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/context/CartContext";
import { Product } from "../types/product";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Products() {
    const { data: products, isLoading, error } = useProducts();
    const { addToCart } = useCart();

    if (isLoading) return <p className="text-center mt-10 text-lg">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Error fetching products.</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {(products ?? []).map((product: Product) => (
                    <Card key={product.id} className="p-4 shadow-lg rounded-lg">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-40 w-full object-contain mx-auto mb-4"
                        />
                        <CardContent className="text-center">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-gray-600 my-2">${product.price}</p>
                            <Button
                                onClick={() => addToCart(product)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
