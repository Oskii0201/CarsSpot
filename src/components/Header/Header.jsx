import logo from "../../assets/logo.svg";
import { Navigation } from "./Navigation.jsx";
import { Button } from "../Button/Button.jsx";
export function Header() {
  return (
    <header className="relative bg-transparent text-darkgray">
      <section className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <img src={logo} alt="CarsSpot Logo" className="h-9 w-auto" />
        <div className="flex justify-between">
          <button
            id="mobile-open-button"
            className="text-3xl focus:outline-none sm:hidden"
          >
            &#9776;
          </button>
          <Navigation />
        </div>
        <Button secondary={true} smHidden={true}>
          Zadzwoń do Nas
        </Button>
      </section>
    </header>
  );
}
