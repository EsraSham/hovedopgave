import styles from "./Events.module.css";

export default function Events() {
  const events = [
    { title: "Åbningsevent", date: "18. April 2026", time: "19:00", price: "Gratis" },
    { title: "Laurits Wang Releasefest", date: "25. April 2026", time: "12:00", price: "20 kr." },
    { title: "SPOT Festival Takeover", date: "01. Maj 2026", time: "18:00", price: "Gratis" },
    { title: "Hackathon Extreme 3D", date: "15. Maj 2026", time: "16:00", price: "50 kr." },
    { title: "DOKTRIN afslutningsfest", date: "30. Maj 2026", time: "19:00", price: "Gratis" },
    { title: "Langbordsmiddag", date: "11. Juni 2026", time: "12:00", price: "20 kr." },
    { title: "VM i fodbold", date: "19. Juli 2026", time: "18:00", price: "Gratis" },
    { title: "Kæmpe åbningsfest", date: "02. Oktober 2026", time: "16:00", price: "50 kr." },
    { title: "Halloween fest", date: "31. Oktober 2026", time: "19:00", price: "Gratis" },
    { title: "bare Kristoffer koncert", date: "06. November 2026", time: "12:00", price: "20 kr." },
    { title: "Songwriters Circle", date: "10. November 2026", time: "18:00", price: "Gratis" },
    { title: "Branding Workshop", date: "29. November 2026", time: "16:00", price: "50 kr." },
  ];

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Kommende Events</h1>


      <div className={styles.bgFlowerLeft}></div>
      <div className={styles.bgFlowerRight}></div>


      <div className={styles.grid}>
        {events.map((event, index) => (
          <div key={index} className={styles.card}>
            <h2>{event.title}</h2>
            <p className={styles.date}>{event.date}</p>

            <div className={styles.moreInfo}>
              <p><strong>Tid:</strong> {event.time}</p>
              <p><strong>Pris:</strong> {event.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
