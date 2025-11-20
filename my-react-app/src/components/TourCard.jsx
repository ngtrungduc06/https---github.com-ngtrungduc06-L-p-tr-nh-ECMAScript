import { Link } from "react-router-dom";

export default function TourCard({ id, title, image }) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    {title}
                </h2>
                <div className="flex gap-3">
                    <Link
                        to={`/tour/${id}`}
                        className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Xem chi tiết
                    </Link>

                    <Link
                        to={`/dat-tour/${id}`}
                        className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
                    >
                        Đặt tour
                    </Link>
                </div>
            </div>
        </div>
    );
}
