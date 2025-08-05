// src/pages/App.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/module/App.module.scss";
import Header from "./components/Header";
import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Helmet>
      <title>PocoStudy｜中学生のための無料オンライン学習アプリ</title>
      <meta
        name="description"
        content="中学生向けの無料オンライン学習アプリ「PocoStudy」。基礎から楽しく学ぼう！"
      />
      <meta property="og:title" content="PocoStudy｜中学生のための無料オンライン学習アプリ" />
      <meta
        property="og:description"
        content="中学生向けの無料オンライン学習アプリ「PocoStudy」。基礎から楽しく学べます。"
      />
      <meta property="og:image" content="https://pocostudy.netlify.app/images/OPG.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pocostudy.net" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="PocoStudy｜中学生のための無料オンライン学習アプリ" />
      <meta
        name="twitter:description"
        content="中学生向けの無料オンライン学習アプリ「PocoStudy」。基礎から楽しく学べます。"
      />
      <meta name="twitter:image" content="https://pocostudy.netlify.app/images/OPG.png" />
    </Helmet>
    <main>
      <Header />
      <div className={styles.hero}>
        <h1 className={styles.heroHeadline}>
          <div className={styles.heroHeadlineMain}>基礎学習の PocoStudy</div>
          <div className={styles.heroHeadlineSub}>「できるかも」を感じよう</div>
        </h1>
        <div className={styles.heroSubject}>
          <ul className={styles.heroSubjectList}>
            <li className={styles.heroSubjectItem}>
              <Link to="/subjectMenu/japanese"> {/*//subjectMenu/japaneseに遷移*/}
                <span>国語</span>
                <img src="/images/japanese.png" alt="国語" width="180" height="180" />
              </Link>
            </li>
            <li className={styles.heroSubjectItem}>
              <Link to="/subjectMenu/math">
                <span>数学</span>
                <img src="/images/math.png" alt="数学" width="130" height="140" />
              </Link>
            </li>
            <li className={styles.heroSubjectItem}>
              <Link to="/subjectMenu/science">
                <span>理科</span>
                <img src="/images/science.png" alt="理科" width="140" height="142" />
              </Link>
            </li>
            <li className={styles.heroSubjectItem}>
              <Link to="/subjectMenu/social">
                <span>社会</span>
                <img src="/images/social.png" alt="社会" width="142" height="142" />
              </Link>
            </li>
            <li className={styles.heroSubjectItem}>
              <Link to="/subjectMenu/english">
                <span>英語</span>
                <img src="/images/english.png" alt="英語" width="170" height="170" />
              </Link>
            </li>
          </ul>
        </div>

        <section className={styles.features}>
          <h1 className={styles.heroHeadlineMain}>POINT</h1>
          <p className={styles.featuresText}>
            PocoStudy(ポコスタディ)は、中学生向けのオンライン学習プラットフォームです。
            <br />
            基礎学習を、楽しく・効率的に進められる工夫がつまっています。
          </p>
          <div className={styles.featuresList}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureHeading}>ゲーム感覚で学べる</h3>
              <p className={styles.featureText}>
                選択肢を選ぶ方式なので、クイズゲームのように楽しく取り組むことができます。
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureHeading}>多様な問題形式</h3>
              <p className={styles.featureText}>
                学習する単元ごとに基礎問題と応用問題があるだけでなく、その単元に出てくる漢字・英単語から学ぶことができるので、誰でも自分に合った学習に取り組めます。
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureHeading}>誰でも学習できる</h3>
              <p className={styles.featureText}>
                問題に取り組むのに会員登録やサブスクリプションの支払いは必要ありません。
                学びたい時に、学びたいところだけ学習することができます。
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
    </>
  );
}