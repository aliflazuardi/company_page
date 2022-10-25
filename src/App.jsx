import styles from "./style";

import { Navbar, Hero, Stats, About, Services, Contact, Footer} from "./components";


const App = () => (
  <div className="bg-slate-100 w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-slate-100 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-slate-100 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>

  </div>
);

export default App