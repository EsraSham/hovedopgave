import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/logo.webp";
import { useState } from "react";

function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        

        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Okay logo" className={styles.logo} />
        </Link>


        <button 
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Luk menu" : "Åbn menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        <div className={`${styles.links} ${open ? styles.open : ""}`}>
          <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
          <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link to="/om" onClick={() => setOpen(false)}>Om os</Link>
          <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
        </div>

      </nav>
    </header>
  );
}

export default Header;
