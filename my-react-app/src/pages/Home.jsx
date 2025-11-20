import Heading from "../components/Heading";
import TourCard from "../components/TourCard";
import Banner from "../components/Banner";

function Home() {
    // ==== TOUR NỔI BẬT ====
    const featuredTours = [
        {
            id: 100,
            title: "Tour Đà Nẵng – Hội An",
            image:
                "https://datviettour.com.vn/uploads/images/tin-tuc-SEO/mien-trung/Da-Nang/danh-thang/ba-na-hills.jpg",
        },
        {
            id: 102,
            title: "Tour Nhật Bản Mùa Hoa Anh Đào",
            image:
                "https://www.vinagrouptravel.com/Media/images/NH%E1%BA%ACT%20HOA%20ANH%20%C4%90%C3%80O%20(2).png",
        },
        {
            id: 101,
            title: "Tour Sapa – Fansipan",
            image:
                "https://mettavoyage.com/wp-content/uploads/2023/01/sapa-fansipan.jpg",
        },
    ];

    // ==== TOUR TRONG NƯỚC ====
    const domesticTours = [
        {
            id: 1,
            title: "Tour Đà Nẵng – Hội An",
            image:
                "https://datviettour.com.vn/uploads/images/tin-tuc-SEO/mien-trung/Da-Nang/danh-thang/ba-na-hills.jpg",
        },
        {
            id: 2,
            title: "Tour Sapa – Fansipan",
            image:
                "https://mettavoyage.com/wp-content/uploads/2023/01/sapa-fansipan.jpg",
        },
        {
            id: 3,
            title: "Tour Phú Quốc",
            image:
                "https://static.vinwonders.com/2022/05/nam-dao-phu-quoc-co-nhung-gi.jpg",
        },
        {
            id: 4,
            title: "Tour Tam Đảo",
            image:
                "https://www.vntrip.vn/cam-nang/wp-content/uploads/2017/12/tam-dao-chim-trong-suong-khoi.jpg",
        },
        {
            id: 5,
            title: "Tour Mộc Châu",
            image:
                "https://file.hstatic.net/1000054905/file/hoa-dao-moc-chau_99e4a010dc4f4d2b8019ec258c816e77.jpg",
        },
        {
            id: 6,
            title: "Tour Hạ Long",
            image:
                "https://static-images.vnncdn.net/files/publish/2022/7/27/ha-long-bay-1-852.jpg",
        },
    ];

    // ==== TOUR NƯỚC NGOÀI ====
    const internationalTours = [
        {
            id: 7,
            title: "Tour Du Lịch Cuba",
            image:
                "https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg",
        },
        {
            id: 8,
            title: "Tour Du Lịch Hoa Kỳ",
            image:
                "https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg",
        },
        {
            id: 9,
            title: "Tour Du Lịch Nhật Bản",
            image:
                "https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg",
        },
        {
            id: 10,
            title: "Tour Du Lịch Trung Quốc",
            image:
                "https://media.travel.com.vn/Destination/tf__1_13107_van-ly-truong-thanh.webp",
        },
        {
            id: 11,
            title: "Tour Du Lịch Hàn Quốc",
            image:
                "https://tse3.mm.bing.net/th/id/OIP.5DAGUHJI3_FxT9bvICk4zAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
            id: 12,
            title: "Tour Du Lịch Thụy Điển",
            image:
                "https://tse3.mm.bing.net/th/id/OIP.fyY3eLrG_PA2oFNQg5E7mAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
        },
    ];

    return (
        <>
            <Banner />

            <main className="max-w-7xl mx-auto px-4 py-16">

                {/* ====== TOUR NỔI BẬT ====== */}
                <div className="text-center mb-12">
                    <Heading title="Tour Nổi Bật" />
                    <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
                        Những hành trình được khách hàng yêu thích nhất hiện nay.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {featuredTours.map((tour) => (
                        <TourCard
                            key={tour.id}
                            id={tour.id}
                            title={tour.title}
                            image={tour.image}
                        />
                    ))}
                </div>

                {/* ====== TOUR TRONG NƯỚC ====== */}
                <div className="text-center mb-10">
                    <Heading title="Tour Trong Nước" />
                    <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
                        Khám phá vẻ đẹp Việt Nam với những hành trình gần gũi nhưng đầy cảm xúc.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {domesticTours.map((tour) => (
                        <TourCard
                            key={tour.id}
                            id={tour.id}
                            title={tour.title}
                            image={tour.image}
                        />
                    ))}
                </div>

                {/* ====== TOUR NƯỚC NGOÀI ====== */}
                <div className="text-center mb-10">
                    <Heading title="Tour Nước Ngoài" />
                    <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
                        Trải nghiệm thế giới với những điểm đến ấn tượng và độc đáo khắp năm châu.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {internationalTours.map((tour) => (
                        <TourCard
                            key={tour.id}
                            id={tour.id}
                            title={tour.title}
                            image={tour.image}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}

export default Home;
