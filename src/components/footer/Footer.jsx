// "use client"
import Image from "next/image";
import styles from "./page.module.css";

const Footer = () => {
  // console.log("Hello")
  return (
    <div className={styles.container}>
      <div>©2023 Vee-mia. All rights reserved.</div>
      <div>
        <div className={styles.socials}>
          <Image src="/1.png" width={15} height={15} className={styles.icon}alt="ThunderMedia" />
          <Image src="/2.png" width={15} height={15} className={styles.icon}alt="ThunderMedia" />
          <Image src="/3.png" width={15} height={15} className={styles.icon}alt="ThunderMedia" />
          <Image src="/3.png" width={15} height={15} className={styles.icon}alt="ThunderMedia" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
