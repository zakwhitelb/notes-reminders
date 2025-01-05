// System
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useSelector } from "react-redux";

// Styles
import "./shared/styles/GlobaleStyle.css";

// Pages
import { Home } from "./pages/home/Home";
import { Authentication } from "./pages/authentication/Authentication";
import { NoteArea } from "./pages/note-area/NoteArea";
import { Profile } from "./pages/profile/Profile";
import { Error404 } from "./pages/error/Error404";

// Components
import { Header } from "./shared/components/header/Header";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const isLoggedIn = useSelector((state) => state.authentification_status.value);
  const location = useLocation(); 
  const hideHeaderRoutes = isLoggedIn ? ["/authentication", "/profile"] : ["/authentication"]; 

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname); 

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-transparent">
      {!shouldHideHeader && <Header />} 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/authentication" element={<GoogleOAuthProvider clientId="784968071047-8uvivas0comahu7omgfqp84ei46f18a7.apps.googleusercontent.com"><Authentication /></GoogleOAuthProvider>}/>
        <Route path="/note-area" element={<NoteArea />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/*" element={<Error404 />}/>
      </Routes>
    </div>
  );
}

export { App };

