import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/module/Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);
  const subjectRef = useRef(null); // 🔍 外クリック検出用

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSubject = (e) => {
    e.preventDefault();
    setSubjectOpen((prev) => !prev);
  };

  // ✅ 外をクリックしたら閉じる
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (subjectRef.current && !subjectRef.current.contains(e.target)) {
        setSubjectOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navLeft}>
        <ul className={styles.navLeftList}>
          <li className={styles.navLeftItem}>
            <Link to="/" className={styles.navLeftLogo}>
              <img src="/images/P.png" alt="logo" width="55" height="55" />
            </Link>
          </li>
          <li className={styles.navLeftItem} ref={subjectRef}>
            <a href="#" onClick={toggleSubject}>教科選択</a>

            {subjectOpen && (
              <ul className={styles.subjectList}>
                <li><Link to="/subjectMenu/japanese">国語</Link></li>
                <li><Link to="/subjectMenu/math">数学</Link></li>
                <li><Link to="/subjectMenu/science">理科</Link></li>
                <li><Link to="/subjectMenu/social">社会</Link></li>
                <li><Link to="/subjectMenu/english">英語</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <nav className={styles.navRight}>
        <ul className={styles.navRightList}>
          <li className={styles.navRightItem}>
            <Link to="/">XXXX</Link>
          </li>
          <li className={styles.navRightItem}>
            <Link to="/">XXXX</Link>
          </li>
          <li className={styles.navRightItem}>
            <button
              type="button"
              className={`${styles.trigger} ${menuOpen ? styles.triggerActive : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
            </button>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className={styles.menuPanel}>
          {/* <button className={styles.closeButton} onClick={toggleMenu}>×</button> */}

          {/* <p className={styles.login}>ログイン / 新規登録</p> */}

          <Link to="/" className={`${styles.menuButton} ${styles.home}`}>🏠　ホーム</Link>
          <Link to="/brainCheck" className={`${styles.menuButton} ${styles.brainCheck}`}>🧠　脳トレゲーム</Link>
          <Link to="/collection" className={`${styles.menuButton} ${styles.collection}`}>💎　スタンプ帳</Link>
          <Link to="/diary" className={`${styles.menuButton} ${styles.diary}`}>💬　応援日記</Link>
          <Link to="/setting" className={`${styles.menuButton} ${styles.setting}`}>⚙️　設定</Link>
        </div>
      )}
      
    </header>
  );
}
