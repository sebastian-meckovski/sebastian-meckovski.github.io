import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import BurgerButtonClient from "./BurgerButtonClient";

// Server component: renders static markup; interaction logic is in BurgerButtonClient (client component)
export default function BurgerButton() {
  return (
    <>
      <button
        id="burger-button"
        aria-label="Open menu"
        aria-controls="main-nav"
        type="button"
        className="md:hidden"
      >
        <span className="sr-only" data-state="closed">
          Open menu
        </span>
        <FontAwesomeIcon icon={faBars} size="3x" />
      </button>
      <BurgerButtonClient />
    </>
  );
}
