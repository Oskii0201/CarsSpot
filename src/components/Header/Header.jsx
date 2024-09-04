import logo from "../../assets/logo.svg";
import { Navigation } from "./Navigation.jsx";
import { Button } from "../Button/Button.jsx";
import {useState} from "react";
import {MobileNavigation} from "./MobileNavigation.jsx";
export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <header className="relative bg-transparent text-darkgray">
      <section className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <img src={logo} alt="CarsSpot Logo" className="h-9 w-auto" />
        <div className="flex items-center justify-between">
          <button
            id="mobile-open-button"
            className="px-3 text-center text-3xl focus:outline-none sm:hidden"
            onClick={() => setMenuIsOpen(true)}
          >
            &#9776;
          </button>
          <Navigation />
        </div>
        <Button secondary={true} smHidden={true}>
          Zadzwoń do Nas
        </Button>
      </section>
      <MobileNavigation menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
    </header>
  );
}
