import { Link } from "react-router-dom";
import styles from "../styles/module/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLogo}>
          <p className={styles.logo}>PocoStudy</p>
        </div>

        <div className={styles.footerTopOthers}>
          <div className={styles.footerTopSns}>
            <p className={styles.snsComment}>
              お問い合わせは{" "}
              <a
                href="https://twitter.com/pocostudy"
                target="_blank"
                rel="noopener noreferrer"
              >
                X（旧Twitter）
              </a>{" "}
              から。
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerBorder}></div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomNav}>
          <Link to="/terms">利用規約</Link>
          <Link to="/privacy">プライバシーポリシー</Link>
        </div>
        <div className={styles.footerBottomCredit}>
          <small>&copy; 2025 PocoStudy. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
