import styles from '../style'
import { ai } from '../assets'

const Hero = () => (
  <section id="Home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-info-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">TOP 3</span> Consulting Firm by {" "}
            <span className="text-white">Forbes</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Future <br className="sm:block hidden" />{" "}
            <span className="text-gradient">IT Consulting</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For Companies.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team consists of experts from different technological background which familiar with the latest modern technologies. 
          We provide the best solution that suites our client needs.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={ai} alt="technology" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full pink__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient" />
        {/* gradient end */}
      </div>
  </section>
)

export default Hero