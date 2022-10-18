import styles, { layout } from "../style";
import Button from "./Button";
import { robot } from "../assets";

const About = () =>  (
  <section id="about" className={layout.section}>
    <div className={layout.sectionImg}>
      <img src={robot} alt="about" className="w-[100%] h-[100%] relative z-[5] md:mr-[120px]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll provide
        the solution.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        "“Our goal is to create 360° Value for all our stakeholders—our clients, people, shareholders, partners and communities. This goal reflects our growth strategy, our purpose, our core values and our culture of shared success.”"
      </p>

      <Button styles={`mt-10`} />
    </div>
  </section>
);
export default About