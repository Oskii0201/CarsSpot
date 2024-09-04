export function MobileNavigation({ menuIsOpen,  setMenuIsOpen}) {
    return(
        <section
            id="mobile-menu"
            className={`${menuIsOpen ? 'flex' : 'hidden'} absolute top-0 w-full origin-top animate-open-menu flex-col justify-center bg-white text-3xl`}
        >
            <button className="self-end px-3 text-6xl" onClick={() => setMenuIsOpen(false)}>&times;</button>
            <nav className="flex flex-col items-center py-8">
                <a
                    href="#gallery"
                    className="w-full py-6 text-center hover:opacity-90"
                    onClick={() => setMenuIsOpen(false)}
                >
                    Galeria zdjęć
                </a>
                <a href="#faq"
                   className="w-full py-6 text-center hover:opacity-90"
                   onClick={() => setMenuIsOpen(false)}
                >
                    FaQ
                </a>
                <a
                    href="#contact"
                    className="w-full py-6 text-center hover:opacity-90"
                    onClick={() => setMenuIsOpen(false)}
                >
                    Zadzwoń do Nas
                </a>
            </nav>
        </section>
    )
}