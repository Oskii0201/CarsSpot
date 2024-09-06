import {Button} from "../Button/Button.jsx";
import cars from "../../assets/cars.svg"
export function Hero(){
    return(
        <section id="hero" className="relative py-10 px-4 md:py-[120px] sm:py-28 lg:px-0">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 z-10">
                <article className="sm:w-1/2 gap-8 text-darkgray flex flex-col">
                    <h1 className="font-bebas text-5xl font-normal leading-[84px] tracking-[-0.04em] text-left sm:text-7xl uppercase">
                        SPRZEDAJEMY SAMOCHODY Z EUROPY
                    </h1>
                    <p className="font-roboto-condensed text-base font-normal leading-6 text-left">
                        Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
                    </p>
                </article>
                <div className="flex flex-row gap-6">
                    <Button secondary={true}>Zobacz zdjęcia</Button>
                    <Button>Zadzwoń do nas</Button>
                </div>
            </div>

            <div className="absolute -bottom-36 right-0 z-0">
                <img src={cars}
                     alt="Hero cars"
                     className="object-cover max-w-full h-auto"
                />
            </div>
        </section>
    )
}