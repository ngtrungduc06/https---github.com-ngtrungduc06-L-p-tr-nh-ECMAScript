export default function Heading({ title }) {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-900 tracking-wide uppercase">
                {title}
            </h2>
            <div className="w-80 h-[3px] bg-orange-500 mx-auto mt-2 rounded"></div>
        </div>
    );
}
