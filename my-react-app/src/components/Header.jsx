import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="w-full shadow bg-white sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex justify-between px-6 py-4 text-lg font-medium">
                <div className="flex gap-6">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                </div>
            </nav>
        </header>
    );
}