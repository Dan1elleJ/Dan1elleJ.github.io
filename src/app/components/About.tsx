'use client'

import styles from '../../styles/About.module.css';
import { Image } from "@heroui/react";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.content}>
        <p className='text-xl'>
        Hello! I am a multidisciplinary Graphic Design student with a minor in Print & Publishing. I started my pursuit of digital design at OCAD, but quickly fell in love with analog design methods. From screen printing, relief, collage, writing and photography- All of these creative outlets have helped to form my design process. I hope to further my love of art post OCAD and continue creating.
        </p>
        <Image
          alt="Danielle"
          src="/images/danielle.jpg"
          width={300}
          className='border-2 border-[#FA812F]'
        />
      </div>
    </section>
  );
}

export default About;