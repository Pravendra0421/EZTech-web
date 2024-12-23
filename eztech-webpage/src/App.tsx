// import  { Suspense } from 'react';
// import { LanguageProvider } from './contexts/LanguageContext';
// import { LoadingScreen } from './components/LoadingScreen';
// import { Header } from './components/Header';
// import { Hero } from './components/Hero';
// import { About } from './components/About';
// import { Services } from './components/Services';
// import { Products } from './components/Products';
// import { Contact } from './components/Contact';
// import './styles/loading.css';
// import { Footer } from './components/Footer';

// function App() {
//   return (
//     <LanguageProvider>
//       <Suspense fallback={<LoadingScreen />}>
//         <LoadingScreen />
//         <div className="min-h-screen bg-gray-50">
//           <Header />
//           <Hero />
//           <About />
//           <Services />
//           <Products />
//           <Contact />
//           <Footer/>
//         </div>
//       </Suspense>
//     </LanguageProvider>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import EzChatPage from "./products/EZChat"; // Import the EzChat page component
import "./styles/loading.css";
import EzDashPage from "./products/EzDashPage";
import { Suspense } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<LoadingScreen />}>
        <LoadingScreen />
        <ThemeProvider>
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Routes>
              <Route path="/" element={<>
                <Hero />
                <About />
                <Services />
                <Products />
                <Contact />
              </>} />
              <Route path="/EZChat" element={<EzChatPage />} />
              <Route path="/EZDash" element={<EzDashPage />} />
            </Routes>
            <Footer />
          </div>
          </ThemeProvider>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;

