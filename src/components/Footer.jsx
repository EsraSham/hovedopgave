import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import fb from "../assets/fb.webp";
import brev from "../assets/brev.webp";
import insta from "../assets/insta.webp";


function Footer() {
  return (
    <footer className={styles.footer}>

        <div className={styles.infoSection}>
        <h3>Kontakt</h3>
        <p>Nørreport 20, 8000 Aarhus C</p>
        <p>Email: okayaarhus@gmail.com</p>
        <p>Telefon: +45 42 37 30 35</p>
      </div>

        <div className={styles.openingSection}>
        <h3>Telefontider</h3>
        <p>Mandag – Torsdag: 10.00 – 16.00</p>
        <p>Fredag: 10.00 – 14.00</p>
        <p>Lørdag – Søndag: Lukket</p>
      </div>

        <div className={styles.linkWrapper}>
          <Link to="https://www.facebook.com/profile.php?id=61582008477346&locale=da_DK" className={styles.readMoreBtn}><img src={fb} alt="facebook logo" className={styles.fb} /></Link>
          <Link to="https://www.instagram.com/okay.aarhus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={styles.readMoreBtn}><img src={insta} alt="instagram logo" className={styles.insta} /></Link>
          <Link to="https://preview.mailerlite.io/forms/1905353/170412210829395754/share?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhPOc9QL6QEHAowDuXojOnFfQbEvzEdAQRLQELRSjJ23AIYHXOh41RmZuinQ_aem_U7GFmC_VgynXbOWa9ZiJxQ" className={styles.readMoreBtn}><img src={brev} alt="brev" className={styles.brev} /></Link>
        </div>
        

    </footer>
  );
}

export default Footer;