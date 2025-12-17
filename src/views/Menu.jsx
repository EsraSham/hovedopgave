import styles from "./Menu.module.css";

export default function Menu() {
  const menu = {
    Burgere: [
      { item: "Okay Classic Burger", desc: "Hjemmelavet bøf, cheddar, syltede rødløg, sprød salat & Okay-dressing", price: "119 kr." },
      { item: "Veggie Crunch Burger", desc: "Crispy grøntsagsbøf, frisk salat & chili-mayo", price: "109 kr." },
      { item: "BBQ Smash Burger", desc: "To smash-bøffer, karamelliserede løg & røget BBQ", price: "129 kr." }
    ],

    Salater: [
      { item: "Stenbroens Salat", desc: "Grønkål, quinoa, bagt græskar, feta & citronvinaigrette", price: "95 kr." },
      { item: "Okay Caesar", desc: "Sprød romaine, parmesan, croutons & cremet dressing", price: "89 kr." }
    ],

    Frokost: [
      { item: "Surdejs-toast", desc: "Mozzarella, pesto & tomat", price: "65 kr." },
      { item: "Avocado Rugbrød", desc: "Avocado, chili flakes & pocheret æg", price: "75 kr." },
      { item: "Dagens Suppe", desc: "Serveres med brød & smør", price: "79 kr." }
    ],

    Snacks: [
      { item: "Trøffel-fritter", desc: "Med parmesan & urtemayo", price: "49 kr." },
      { item: "Chili Cheese Tops", desc: "Spicy & sprøde", price: "45 kr." },
      { item: "Brød & Dip", desc: "Surdej med hummus & urteolie", price: "35 kr." }
    ],

    Drikkevarer: [
      { item: "Filterkaffe", desc: "Økologiske bønner fra La Cabra", price: "30 kr." },
      { item: "Cappuccino", desc: "Kraftig og cremet", price: "42 kr." },
      { item: "Hjemmelavet Lemonade", desc: "Frisk & kold", price: "38 kr." },
      { item: "Øl fra Ebeltoft", desc: "Flere varianter", price: "55 kr." },
      { item: "Husets vin", desc: "Rød eller hvid", price: "65 kr." }
    ]
  };

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Menu</h1>


      <div className={styles.bgFlowerLeft}></div>
      <div className={styles.bgFlowerRight}></div>

      {Object.entries(menu).map(([category, items], i) => (
        <div key={i} className={styles.menuSection}>
          <h2 className={styles.sectionTitle}>{category}</h2>

          <div className={styles.menuGrid}>
            {items.map((food, idx) => (
              <div className={styles.menuItem} key={idx}>
                <h3>{food.item}</h3>
                <p>{food.desc}</p>
                <span className={styles.price}>{food.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
