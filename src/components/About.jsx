import styles, { layout } from "../style";
import Button from "./Button";
import { cloud } from "../assets";

const About = () =>  (
  <section id="about" className={layout.section}>
    <div className={layout.sectionImg}>
      <img src={cloud} alt="about" className="w-[100%] h-[100%] relative z-[5] md:mr-[120px]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You Do The Business, <br className="sm:block hidden" /> We’ll Provide
        The Technology.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        “Our goal is to provide values for all our clients and partners. We focus on delivering values using technological advancement for better world.”
      </p>

      <Button styles={`mt-10`} />
    </div>
  </section>
);
export default About