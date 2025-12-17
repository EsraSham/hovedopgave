import styles from "./Om.module.css";
import teamImg from "../assets/mikkeloscar.webp";
import mikkel from "../assets/mikkel.webp";
import oscar from "../assets/oscar.webp";
import karoline from "../assets/karoline.webp";
import esra from "../assets/esra.webp";

export default function Om() {
  return (
    <section className={styles.page}>


      <div className={styles.bgFlowerLeft}></div>
      <div className={styles.bgFlowerRight}></div>

      <h1 className={styles.title}>Om Okay</h1>

      <section className={styles.section1}>
        <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Vores Vision</h2>
        <p className={styles.text}>
          Vores vision er at skabe et åbent, kreativt rum hvor mennesker kan mødes,
          udfolde ideer og opleve fællesskabet på nye måder. Vi tror på, at kultur
          vokser gennem samarbejde, nysgerrighed og modet til at tænke anderledes.
        </p>

        <h2 className={styles.sectionTitle}>Vores Mission</h2>
        <p className={styles.text}>
          Vi arbejder for at gøre det nemt og inspirerende at afholde events på tværs
          af musik, workshops, talks og sociale arrangementer. Med fleksible rammer,
          et passioneret team og en stærk lokal forankring står vi klar til at hjælpe
          visionære idéer på vej.
        </p>
        </div>

        <img src={teamImg} alt="Team" className={styles.missionPic} loading="lazy" />

      </section>

 
      <section className={styles}>
        <h2 className={styles.sectionTitle}>Teamet bag Okay</h2>

        <div className={styles.teamGrid}>


          <div className={styles.teamCard}>
            <div className={styles.teamImgWrapper}>
            <img src={mikkel} alt="Team medlem" className={styles.teamImg} loading="lazy" />
            </div>
            <h3 className={styles.teamName}>Mikkel Hæk</h3>
            <p className={styles.teamRole}>Medstifter</p>
            <p className={styles.teamDesc}>
              Mikkel brænder for at skabe levende kulturmiljøer og sørger for, at alle
              arrangementer får de bedste rammer og den rette stemning.
            </p>
          </div>


          <div className={styles.teamCard}>
            <div className={styles.teamImgWrapper}>
            <img src={oscar} alt="Team medlem" className={styles.teamImg} loading="lazy" />
            </div>
            <h3 className={styles.teamName}>Oscar O´shea</h3>
            <p className={styles.teamRole}>Medstifter</p>
            <p className={styles.teamDesc}>
              Oscar står for driften og sørger for, at stedet udvikler sig, fastholder
              sin vision og altid har plads til nye idéer og mennesker.
            </p>
          </div>


          <div className={styles.teamCard}>
           <div className={styles.teamImgWrapper}>
            <img src={karoline} alt="Team medlem" className={styles.teamImg} loading="lazy" />
            </div>
            <h3 className={styles.teamName}>Karoline Gordon</h3>
            <p className={styles.teamRole}>Medejer</p>
            <p className={styles.teamDesc}>
                Karoline sørger for, at huset kører smidigt bag kulisserne. 
                Hun skaber struktur, overblik og ro, så der er plads til, at idéerne kan blomstre.
            </p>
          </div>


          <div className={styles.teamCard}>
           <div className={styles.teamImgWrapper}>
            <img src={esra} alt="Team medlem" className={styles.teamImg} loading="lazy" />
            </div>
            <h3 className={styles.teamName}>Esra Shamasneh</h3>
            <p className={styles.teamRole}>Kommmunikationsansvarlig</p>
            <p className={styles.teamDesc}>
              Esra formidler fortællingerne, idéerne og stemningen i Okay, 
              så alle, både nye og gamle ansigter, føler sig inviteret indenfor.
            </p>
          </div>


        </div>
      </section>

    </section>
  );
}
