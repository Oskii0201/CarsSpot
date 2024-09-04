import { useEffect } from "react";

export function MobileNavigation({ menuIsOpen, setMenuIsOpen }) {
    useEffect(() => {
        if (menuIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuIsOpen]);

    return (
        <section
            id="mobile-menu"
            className={`${menuIsOpen ? 'flex' : 'hidden'} fixed top-[4rem] left-0 w-full origin-top animate-open-menu flex-col bg-white text-3xl z-30 min-h-[calc(100vh-4rem)]`}
        >
            <nav className="flex flex-col items-center">
                <a
                    href="#gallery"
                    className="w-full py-6 text-center hover:opacity-90"
                    onClick={() => setMenuIsOpen(false)}
                >
                    Galeria zdjęć
                </a>
                <a
                    href="#faq"
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
    );
}
