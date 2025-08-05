// src/pages/SubjectMenu.jsx

import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/module/Menu.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { LINK_CONFIG } from "../data/menuData/_linkConfig";
import { allQuizData } from "../data/quizIndex";

import { SOCIAL_MENU, BASIC_SOCIAL } from "../data/menuData/socialMenu";
import { MATH_MENU, BASIC_MATH } from "../data/menuData/mathMenu";
import { JAPANESE_MENU, BASIC_JAPANESE } from "../data/menuData/japaneseMenu";
import { SCIENCE_MENU, BASIC_SCIENCE } from "../data/menuData/scienceMenu";
import { ENGLISH_MENU, BASIC_ENGLISH } from "../data/menuData/englishMenu";

const subjectDataMap = {
  social: {
    title: "社会",
    className: styles.menuSocial,
    menu: SOCIAL_MENU,
    basic: BASIC_SOCIAL,
  },
  japanese: {
    title: "国語",
    className: styles.menuJapanese,
    menu: JAPANESE_MENU,
    basic: BASIC_JAPANESE,
  },
  math: {
    title: "数学",
    className: styles.menuMath,
    menu: MATH_MENU,
    basic: BASIC_MATH,
  },
  science: {
    title: "理科",
    className: styles.menuScience,
    menu: SCIENCE_MENU,
    basic: BASIC_SCIENCE,
  },
  english: {
    title: "英語",
    className: styles.menuEnglish,
    menu: ENGLISH_MENU,
    basic: BASIC_ENGLISH,
  },
};

export default function SubjectMenu() {
  const { subject } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedGrade, setSelectedGrade] = useState(location.state?.selectedGrade ?? null);

  const handleLinkClick = (to, state) => (e) => {
  e.preventDefault();
  navigate(to, { state: { ...state, scrollY: window.scrollY } });
  };

  useEffect(() => {
    if (location.state?.scrollY !== undefined) {
      // 描画完了後に scroll を確実に適用する
      requestAnimationFrame(() => {
        window.scrollTo(0, location.state.scrollY);
      });
    }

    if (location.state?.selectedGrade !== undefined) {
      setSelectedGrade(location.state.selectedGrade);
    }
  }, [location.state]);


  const config = subjectDataMap[subject];
  const [basicOpen, setBasicOpen] = useState(location.state?.basicOpen || false);
  const [openChapters, setOpenChapters] = useState(location.state?.openChapters || {});

  const toggleChapter = (index) => {
    setOpenChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!config) return <p>この教科は存在しません。</p>;

  return (
    <main>
      <Header />
      <div className={`${styles.menu} ${config.className}`}>
        <div className={styles.menuSubject}>
          <h1>{config.title}</h1>
        </div>
        {!["japanese", "social"].includes(subject) && (
          <div className={styles.gradeSelector}>
            <button onClick={() => setSelectedGrade(null)} className={selectedGrade === null ? styles.active : ""}>すべて</button>
            <button onClick={() => setSelectedGrade(1)} className={selectedGrade === 1 ? styles.active : ""}>中1</button>
            <button onClick={() => setSelectedGrade(2)} className={selectedGrade === 2 ? styles.active : ""}>中2</button>
            <button onClick={() => setSelectedGrade(3)} className={selectedGrade === 3 ? styles.active : ""}>中3</button>
          </div>
        )}
        <div className={styles.row}>
          <ul className={styles.chapterList}>
            {config.menu.map((chapter, i) => (
              <li className={styles.chapterItem} key={i}>
                <h2
                  className={`${styles.chapterItemTitle} ${openChapters[i] ? styles.isOpen : ""}`}
                  onClick={() => toggleChapter(i)}
                >
                  {chapter.title}
                  <span className={`${styles.arrow} ${openChapters[i] ? styles.isOpen : ""}`}></span>
                </h2>
                <ul className={`${styles.chapterItemLink} ${openChapters[i] ? styles.isOpen : ""}`}>
                  {chapter.items
                    .filter((item) =>
                      selectedGrade === null
                        ? true
                        : item.grade === selectedGrade
                    )
                    .map((item, j) => {
                      const links = LINK_CONFIG[subject]?.filter((link) => {
                        const quizKey = `${link.prefix || ""}${item.id}`;
                        const fullKey = `${subject}/${link.category}/${quizKey}`;
                        return item.id && fullKey in allQuizData;
                      }) || [];

                      return (
                        <li key={j}>
                          <p>{item.name}</p>
                          {links.length > 0 ? (
                            <div className={`${styles.linkGroup}`}>
                              {links.map((link, linkIndex) => {
                                const quizKey = `${link.prefix || ""}${item.id}`;
                                return (
                                <Link
                                  to={`/quiz/${subject}/${link.category}/${quizKey}`}
                                  onClick={handleLinkClick(`/quiz/${subject}/${link.category}/${quizKey}`, { basicOpen, openChapters, selectedGrade })}
                                >
                                  {link.type}
                                </Link>
                                );
                              })}
                            </div>
                          ) : (
                            <span className={styles.basicDisabled}>準備中</span>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </li>
            ))}
          </ul>

          <section className={styles.basicSection}>
            <h2
              className={`${styles.basicTitle} ${basicOpen ? styles.isOpen : ""}`}
              onClick={() => setBasicOpen(!basicOpen)}
            >
              <img src="/images/beginner.png" alt="初心者マーク" width="25" height="25" />
              まずはここから
            </h2>
            <ul className={`${styles.basicList} ${basicOpen ? styles.isOpen : ""}`}>
              {config.basic.map((item, i) => {
                const quizKey = `${subject}${item.id}`;
                const fullKey = `${subject}/Basic/${quizKey}`;
                const exists = item.id && fullKey in allQuizData;

                return (
                  <li key={i}>
                    {exists ? (
                      <Link
                        className={styles.basicLink}
                        to={`/quiz/${subject}/Basic/${quizKey}`}
                        state={{ basicOpen, openChapters, scrollY: window.scrollY, selectedGrade }}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className={styles.basicDisabled}>{item.name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
