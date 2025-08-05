import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import './styles/main.scss';
import ScrollToTop from './components/ScrollToTop';

// ✅ React.lazyでページコンポーネントを遅延読み込み
const App = React.lazy(() => import('./App.jsx'));
const Quiz = React.lazy(() => import('./pages/Quiz.jsx'));
const SubjectMenu = React.lazy(() => import('./pages/SubjectMenu'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const BrainCheck = React.lazy(() => import('./pages/BrainCheck.jsx'));



// ✅ QuizをURLのquizIdによって強制リセットさせるラッパー
function QuizWrapper() {
  const { quizId } = useParams();
  return <Quiz key={quizId} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div>読み込み中...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/quiz/:subject/:category/:quizId" element={<Quiz />} />
            <Route path="/subjectMenu/:subject" element={<SubjectMenu />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} /> 
            <Route path="/brainCheck" element={<BrainCheck />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
