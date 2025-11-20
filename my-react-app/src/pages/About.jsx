export default function About() {
    return (
        <div className="bg-gradient-to-r from-orange-100 via-white to-orange-100 min-h-screen flex flex-col items-center justify-center px-6 py-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-6">
                Chào mừng đến với TDTourist
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl text-center mb-8">
                Chúng tôi cung cấp những trải nghiệm du lịch tuyệt vời, giúp bạn khám phá
                thế giới một cách trọn vẹn và đáng nhớ. Hãy đồng hành cùng TDTourist để mỗi chuyến đi là một kỷ niệm khó quên.
            </p>
            <button className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors shadow-lg">
                Khám phá ngay
            </button>
        </div>
    );
}
