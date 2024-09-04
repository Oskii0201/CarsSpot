import {useState} from "react";

export function GalleryHeader() {
    const [proffesionalCars, setProffesionalCars] = useState(false);
    const linkStyles= "font-roboto font-normal text-[15px] leading-[22.5px] tracking-[-0.02em] cursor-pointer"
    const isActiveStyles = "text-darkblue border-b border-darkblue"
    return(
        <section id="header" className="flex justify-center flex-col pt-20 max-w-6xl mx-auto px-4 lg:px-0">
            <div className="gap-8 text-darkgray flex flex-col">
                <div>
                    <span className="leading-8 text-21.5 text-darkblue font-roboto-condensed">Prezentacja firmy</span>
                    <h1 className="text-40px leading-48px font-normal	font-bebas text-[#1D1D1B] text-">Zobacz naszą galerię zdjęć</h1>
                </div>
                <div className="flex flex-row gap-10 lg:gap-12">
                    <a onClick={()=>setProffesionalCars(false)} className={`${linkStyles} ${!proffesionalCars ? isActiveStyles : ''}`}>Samochody osobowe</a>
                    <a onClick={()=>setProffesionalCars(true)} className={`${linkStyles} ${proffesionalCars ? isActiveStyles : ''}`}>Samochody dostawcze</a>
                </div>
            </div>
        </section>
    )
}