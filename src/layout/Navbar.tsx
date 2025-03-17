import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const { cart } = useCart();

    return (
        <nav className="bg-[#052345] p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    🛒 Shopping App
                </Link>
                <div className="space-x-6">
                    <Link to="/" className="hover:underline">
                        Products
                    </Link>
                    <Link to="/cart" className="hover:underline relative">
                        Cart ({cart.length})
                    </Link>
                </div>
            </div>
        </nav>
    );
}
