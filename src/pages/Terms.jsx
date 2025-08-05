// src/pages/PrivacyPolicy.jsx
// import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function Terms() {
  return (
    <main>
      <Header />
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>利用規約</h1>
      <p>最終更新日：2025年6月4日</p>

      <section>
        <h2>第1条（適用範囲）</h2>
        <p>
          本規約は、PocoStudy（以下「当サービス」といいます）が提供するウェブサイトおよびコンテンツの利用に関する条件を定めたものです。当サービスをご利用いただくすべての方（以下「ユーザー」といいます）は、本規約に同意したものとみなされます。
        </p>
      </section>

      <section>
        <h2>第2条（禁止事項）</h2>
        <ul>
          <li>本サービスの内容を無断で転載・複製・再配布する行為</li>
          <li>当サービスに掲載された情報の改変や誤解を招く形での利用</li>
          <li>法令または公序良俗に反する行為</li>
          <li>その他、運営者が不適切と判断する行為</li>
        </ul>
      </section>

      <section>
        <h2>第3条（著作権・知的財産権）</h2>
        <p>
          当サービスに掲載されているすべてのコンテンツの著作権および知的財産権は、PocoStudyまたは正当な権利を有する第三者に帰属します。無断転載・無断使用を禁じます。
        </p>
      </section>

      <section>
        <h2>第4条（免責事項）</h2>
        <ul>
          <li>当サービスは、提供する情報の正確性や安全性を保証するものではありません。</li>
          <li>ユーザーが当サービスを利用することで生じたいかなる損害についても、運営者は責任を負いません。</li>
        </ul>
      </section>

      <section>
        <h2>第5条（リンクについて）</h2>
        <p>
          当サービスは外部サイトへのリンクを含む場合がありますが、それらの内容について一切の責任を負いません。
        </p>
      </section>

      <section>
        <h2>第6条（規約の変更）</h2>
        <p>
          運営者は、必要に応じて本規約を変更することがあります。変更後の規約は、当ページに掲載された時点で効力を持ちます。
        </p>
      </section>

      <section>
        <h2>第7条（準拠法）</h2>
        <p>本規約の解釈および適用には、日本の法令が準拠します。</p>
      </section>

      <p style={{ marginTop: "40px", fontSize: "14px", color: "#666" }}>
        以上
      </p>
    </div>
      <Footer />
    </main>
  );
}
