import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-700">
            <p className="text-blue-500 text-5xl font-bold">Jakub Machoń</p>
            <p className="text-blue-500 text-3xl font-bold">Nr albumu: 74771</p>
            <div className="p-3">
                <Link href="/galeria">
                    <Button className="bg-green-600 hover:bg-green-700">Kliknij, aby otworzyć galerię zdjęć gór</Button>
                </Link>
            </div>
            <div className="p-3">
                <Link href="/piesek">
                    <Button className="bg-green-600 hover:bg-green-700">Potrzebujesz dodatkowej motywacji? Kliknij!</Button>
                </Link>
            </div>
        </div>
    );
}

