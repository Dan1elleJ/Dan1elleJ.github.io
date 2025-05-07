import styles from '../../styles/Footer.module.css';
import { Spacer } from "@heroui/react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto py-2">
        <p className="text-xl">
          <b>Email</b>: 1jacksondan2@gmail.com
        </p>
        <Spacer y={2} />
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Danielle Jackson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;