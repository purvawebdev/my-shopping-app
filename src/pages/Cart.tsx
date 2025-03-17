import { useCart } from "@/context/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

    if (cart.length === 0) {
        return <p className="text-center mt-10 text-lg">Your cart is empty.</p>;
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
            <div className="grid gap-4">
                {cart.map((item) => (
                    <Card key={item.id} className="p-4 shadow-lg rounded-lg">
                        <CardContent className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <span className="text-gray-600">${item.price.toFixed(2)}</span>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                className="w-16 border rounded p-1 text-center"
                            />
                            <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Total Price Display */}
            <div className="mt-6 text-center text-xl font-semibold">
                Total: ${getTotalPrice().toFixed(2)}
            </div>

            <div className="flex justify-center mt-4">
                <Button variant="destructive" onClick={clearCart}>Clear Cart</Button>
            </div>
        </div>
    );
}
