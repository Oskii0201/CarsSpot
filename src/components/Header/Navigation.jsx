export function Navigation() {
  return (
    <nav className="hidden sm:block" aria-label="main">
      <div className="flex gap-6 font-roboto">
        <a
          href="#gallery"
          className="transition hover:scale-105 hover:text-darkblue"
        >
          Galeria zdjęć
        </a>
        <a
          href="#faq"
          className="transition hover:scale-105 hover:text-darkblue"
        >
          FaQ
        </a>
      </div>
    </nav>
  );
}
