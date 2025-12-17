import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Kontakt.module.css"; 
import brev from "../assets/brev.webp"; 
import mobil from "../assets/mobil.webp"; 
import lokation from "../assets/lokation.webp"; 

export default function Kontakt() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_77b1ryk",
        "template_diif87h",
        formRef.current,
        "eoM5JnDexXH7ER75t"
      )
      .then(() => {
        alert("Tak! Din besked er sendt ✔️");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Der opstod en fejl. Prøv igen.");
      });
  };

  return (
    <section className={styles.kontaktContainer}>

        <div className={styles.bgFlowerLeft}></div>
  <div className={styles.bgFlowerRight}></div>

        <h1>Kontakt os</h1>
 
        

      <div className={styles.contactWrapper}>
    
        
        <div className={styles.infoBoxes}>

          <div className={styles.box}>
            <img src={brev} alt="brev" className={styles.brev} loading="lazy" />
            <p>
              Skriv direkte til os på kontaktformularen,<br />
              så vender vi tilbage hurtigst muligt.
            </p>
          </div>

          <div className={styles.box}>
            <img src={mobil} alt="mobil" className={styles.mobil} loading="lazy" />
            <p>
              Fang os på:<br />
              <strong>+45 42 37 30 35</strong>
            </p>
          </div>

          <div className={styles.box}>
            <img src={lokation} alt="lokation" className={styles.lokation} loading="lazy" />
            <p>
              Kom ned og fang os på Okay!<br />
              Nørreport 20, 8000 Aarhus C
            </p>
          </div>

        </div>


        <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
          <label className={styles.label}>Navn</label>
          <input className={styles.input} type="text" name="name" required />

          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" name="email" required />

          <label className={styles.label}>Besked</label>
          <textarea
            className={styles.textarea}
            name="message"
            rows="5"
            required
          />

          <button type="submit" className={styles.button}>
            Send besked
          </button>
        </form>

      </div>
    </section>
  );
}
