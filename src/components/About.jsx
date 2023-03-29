import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>

);
  



const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.dev>
    
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a CSE graduate from Sylhet Engineering College. 
        I have experience in Web Development as well as Machine Learning Field. 
        There are lots of fields in Computer Science and Engineering, Among them, 
        I love to explore the AI domain where I can work with data and get insights 
        from the data for better output in ML models. I have done projects both in the AI 
        domain as well as the development sector and I am continuing the journey. 
        I have a very decent attitude toward problem-solving and accepting challenges.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index= {index} {...service}/>
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")