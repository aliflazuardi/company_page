import styles from "../style";
import Button from "./Button";
import React from 'react'

const Contact = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2White}>Let’s try our service now!</h2>
      <p className={`${styles.paragraphWhite} max-w-[470px] mt-5`}>
        Email us now to start using our service.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default Contact