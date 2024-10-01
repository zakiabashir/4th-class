"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';


const AboutSection = () => {
  
  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      
      <img width={500} text-center src = "data:image/jpeg;base64,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" alt= "about" />
       <div className='mt-4 md:mt-0 text-left flex flex-col h-full' > 
          <h2 className='sm:text-5xl text-5xl font-serif font-bold title-font text-center text-white"'>About Me</h2>
          <br></br> 
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-black'>
          I am a dedicated web developer with a deep passion for crafting visually captivating and highly functional websites. Proficient in HTML, CSS, JavaScript, TypeScript, and frameworks such as Next.js and Tailwind CSS, I excel at creating seamless user interfaces that enhance the browsing experience. My mission is to design innovative digital landscapes that engage users and deliver outstanding results. Driven by the challenge of pushing boundaries, I continually hone my skills to produce work that resonates long after it has been experienced.
          <br></br>
          Currently, my focus is on expanding my skill set. I am actively mastering new programming languages, exploring diverse courses, and delving into emerging technologies within the industry. Specifically, I am deeply engaged in Artificial Intelligence, Web 3.0, and the Metaverse.
          </p>
        </div> 
      </div> 
    </section>
  );
};

export default AboutSection;