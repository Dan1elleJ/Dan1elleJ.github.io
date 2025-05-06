import styles from '../../styles/Footer.module.css';
import { Spacer } from "@heroui/react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto py-2">
        <p className="sm">
          &copy; {new Date().getFullYear()} Danielle Jackson. All rights reserved.
        </p>
        <Spacer y={2} />
        <p className="xs">
          Built with Next.js and Hero UI.
        </p>
      </div>
    </footer>
  );
}

export default Footer;