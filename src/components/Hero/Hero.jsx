import {Button} from "../Button/Button.jsx";

export function Hero(){
    return(
        <section id="hero" className="relative py-[120px] overflow-hidden h-[825px] ">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
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

            <div className="absolute bottom-[82px] right-0 w-3/4">
                <img src="/src/assets/shadow.png"
                     alt="Cień samochodów"
                     className="absolute bottom-0 right-0 h-auto object-cover opacity-70"
                />
                <img src="/src/assets/cars.png"
                     alt="Samochody"
                     className="absolute bottom-0 right-0 h-auto object-cover"
                />
            </div>
        </section>
    )
}