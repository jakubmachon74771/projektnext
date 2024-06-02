export default function Piesek() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-700">
            <h1 className="text-blue-500 text-5xl font-bold mb-20">Piesek prawdę Ci powie!</h1>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NJRB0QGLhfg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
