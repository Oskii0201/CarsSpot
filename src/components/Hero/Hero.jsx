import {Button} from "../Button/Button.jsx";
import shadow from "../../assets/shadow.png"
import cars from "../../assets/cars.png"
export function Hero(){
    return(
        <section id="hero" className="relative py-10 overflow-hidden h-[560px] px-4 lg:px-0 lg:py-[120px] md:h-[730px] sm:h-[680px]">
            <div className="relative max-w-6xl mx-auto flex flex-col gap-12 z-10">
                <article className="sm:w-1/2 gap-8 text-darkgray flex flex-col">
                    <h1 className="font-bebas text-5xl font-normal leading-[84px] tracking-[-0.04em] text-left sm:text-7xl">
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

            <div className="absolute bottom-[20px] right-0 w-[100%] sm:bottom-[40px] sm:w-[80%] md:bottom-[82px] md:w-3/4 lg:w-3/4">
                <img src={shadow}
                     alt="Cień samochodów"
                     className="absolute bottom-0 right-0 h-auto object-cover opacity-70"
                />
                <img src={cars}
                     alt="Samochody"
                     className="absolute bottom-0 right-0 h-auto object-cover"
                />
            </div>
        </section>
    )
}