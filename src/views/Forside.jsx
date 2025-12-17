import { useEffect } from "react";
import styles from "./Forside.module.css";
import gaard from "../assets/gaard.webp";
import team from "../assets/mikkeloscar.webp";
import { Link } from "react-router-dom";

function Forside() {
  useEffect(() => {

    const el = document.querySelector(`.${styles.imageWrapperMeeting}`);
    if (el) {
      setTimeout(() => {
        el.classList.add(styles.lazyLoaded);
      }, 300); 
    }
  }, []);

  return (
    <section className={styles.all}>

      <div className={styles.imageWrapperMeeting}></div>

      <div className={styles.imageWrapper}>
        <img src={gaard} alt="baggård" className={styles.gaard} loading="lazy" />

        <div className={styles.textWrapper1}>
          <h1>Velkommen til Okay</h1>

          <p>
    Her er plads til både det planlagte og det uforudsigelige - intime arrangementer, nye idéer og fællesskaber i bevægelse.
    
          </p>

          <Link to="/events" className={styles.readMoreBtn}>
            <strong>Se kommende events ➪</strong>
          </Link>
        </div>
      </div>

      <div className={styles.textWrapper12}>
        <div className={styles.textWrapper12Inner}>
          <div>
            <p>
              Hos os handler fællesskab også om det, vi samles om ved bordet. Vores kokke
              skaber en sæsonbaseret menu med enkle råvarer
            </p>
            <p>Kom og smag det, vi skaber sammen.</p>
          </div>

          <Link to="/om" className={styles.readMoreBtn12}>
            <strong>Se menuen ➪</strong>
          </Link>

          <div className={styles.bgFlowerTW12}></div>
          <div className={styles.bgFlowerTW13}></div>
        </div>

        <div className={styles.bgFlowerRight1}></div>
      </div>

      <div className={styles.textWrapper123}>
        <div className={styles.textWrapper123Inner}>
          <p>
            Sidder du med en idé, der bare venter på at blive levet ud - eller har du lyst
            til at være med i det fællesskab, der skaber Okay?
          </p>

          <Link to="/om" className={styles.readMoreBtn12}>
            <strong>Skriv til os ➪</strong>
          </Link>

          <div className={styles.bgFlowerTW123}></div>
          <div className={styles.bgFlowerTW1234}></div>
        </div>
      </div>

      <div className={styles.borderContainer}></div>

      <div className={styles.textWrapper2}>
        <div className={styles.textWrapper2Inner}>
          <div className={styles.bgFlowerLeft}></div>

          <div>
            <p>
              Vi skaber rammerne for koncerter, talks, workshops, langbordsmiddager,
              loppemarkeder og alt det, der opstår, når mennesker samles om noget, de
              brænder for. <strong>Du har visionen, vi har rummet.</strong>
            </p>

            <Link to="/om" className={styles.readMoreBtn2}>
              <strong>Læs mere ➪</strong>
            </Link>
          </div>

          <div className={styles.teamImgWrapper}>
            <img src={team} alt="Team" className={styles.teamImg} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forside;
