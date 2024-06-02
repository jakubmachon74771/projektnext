import * as React from "react"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Galeria() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-700">
            <div className="max-w-screen-lg w-full">
                <p className="flex justify-center text-blue-500 text-4xl font-bold mb-4">Przykładowe zdjęcia gór z całego świata:</p>
                <Carousel>
                    <CarouselContent className="flex gap-1 p-1">
                        <CarouselItem className="flex justify-center"><Image src="/gora1.jpg" alt="gora1" width={500} height={500}/></CarouselItem>
                        <CarouselItem className="flex justify-center"><Image src="/gora2.jpg" alt="gora2" width={500} height={500}/></CarouselItem>
                        <CarouselItem className="flex justify-center"><Image src="/gora3.jpg" alt="gora3" width={500} height={500}/></CarouselItem>
                        <CarouselItem className="flex justify-center"><Image src="/gora4.jpg" alt="gora4" width={500} height={500}/></CarouselItem>
                        <CarouselItem className="flex justify-center"><Image src="/gora5.jpg" alt="gora5" width={500} height={500}/></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
                <div className="flex justify-center mt-4"> {/* Dodajemy kontener z klasą flex justify-center i marginesem na górze */}
                    <Dialog>
                        <DialogTrigger>
                            {/* Zamieniamy tekst na komponent Button */}
                            <Button className="bg-green-600 hover:bg-green-700">Czym jest góra?</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Czym jest góra?</DialogTitle>
                                <DialogDescription>
                                    Góra – wypukła forma ukształtowania terenu o wysokości względnej większej niż 300 m. W Europie za tereny górskie uważa się tereny położone powyżej 500 m n.p.m., lub według kryteriów anglosaskich powyżej 2000 stóp (609,6 m n.p.m.). Ze względu na wysokości bezwzględne wyróżnia się góry niskie, średnie i wysokie. Ze względu na sposób powstania wyróżnia się góry fałdowe, zrębowe, wulkaniczne i ostańce.

                                    W rzeźbie górskiej wyróżnić można formy wklęsłe (doliny, kotliny, kotły) i wypukłe (szczyty, turnie, kopy, bule). Formy wypukłe łączą się w grzbiety górskie lub masywy górskie, te z kolei w pasma górskie. Pasma i masywy wraz z pogórzami i kotlinami śródgórskimi tworzą łańcuchy górskie. Kilka łańcuchów górskich o wspólnych cechach geologicznych, powstałych w czasie tego samego fałdowania, nosi nazwę systemu górskiego. Góry fałdowe i zrębowe powstają w wyniku procesów orogenicznych, natomiast wulkaniczne w wyniku działalności wulkanicznej, a ostańce w wyniku działalności erozyjnej i denudacyjnej, głównie wody.
                                    <p>Źródło: wikipedia.pl</p>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}
