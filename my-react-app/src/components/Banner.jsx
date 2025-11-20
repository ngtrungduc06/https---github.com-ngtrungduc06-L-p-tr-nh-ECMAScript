export default function Banner() {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-6">
            <div className="relative w-full h-[330px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md">
                <img
                    src="https://mettavoyage.com/wp-content/uploads/2023/01/sapa3.jpg" 
                    alt="banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h2 className="text-3xl sm:text-5xl font-bold drop-shadow-lg uppercase">
                        Khám phá thế giới quanh ta
                    </h2>
                    <p className="mt-3 text-lg opacity-90">
                        Những hành trình mở ra khung trời mới
                    </p>
                </div>
            </div>
        </div>
    );
}
