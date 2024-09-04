import {DropDown} from "./DropDown.jsx";

export function Seo(){
    return(
        <section id="seo" className="bg-darkgray py-[88px]">
            <div className="flex justify-center flex-row py-22 max-w-6xl mx-auto gap-10 bg-darkgray px-4 lg:px-0 lg:gap-20">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bebas text-xl font-normal leading-[37.5px] tracking-[-0.03em] text-left md:text-[25px]">
                        Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
                    </h1>
                    <DropDown>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </DropDown>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bebas text-xl font-normal leading-[37.5px] tracking-[-0.03em] text-left md:text-[25px]">
                        Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
                    </h1>
                    <DropDown>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </DropDown>
                </div>
            </div>
        </section>
    )
}