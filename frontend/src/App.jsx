import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import { Logout } from "./shared/redux/slices/AuthentificationSlice";

// Styles
import "./shared/styles/GlobaleStyle.css";

// Controllers
import { UserController } from "./shared/controllers/user/UserController";

// Components
import { Header } from "./shared/components/ui/Header";

// Pages
import { Home } from "./pages/home/Home";
import { Authentication } from "./pages/authentication/Authentication";
import { NoteArea } from "./pages/note-area/NoteArea";
import { Profile } from "./pages/profile/Profile";
import { Error404 } from "./pages/error/Error404";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const isLoggedIn = useSelector((state) => state.authentification_status.value); // Check user authentication state
  const { response, ValidateUserToken } = UserController();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const hideHeaderRoutes = isLoggedIn
    ? ["/authentication", "/profile"]
    : ["/authentication"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  useEffect(() => {
    // Define the function
    const handleValidateToken = async () => {
      try {
        await ValidateUserToken();
      } 
      catch (error) {
        console.error("Error while validating token:", error);
        dispatch(Logout()); // Logout user if token is invalid
        navigate("/");
      }
    };

    // Set an interval to execute the function every 10 minutes
    const intervalId = setInterval(() => {
      handleValidateToken();
      if (response.message !== "Token is valid") {
        dispatch(Logout()); // Logout user if token is invalid
        navigate("/");
      }
    }, 10 * 60 * 1000); // 10 minutes in milliseconds

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [ValidateUserToken, response, dispatch, navigate]);

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-transparent">
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/authentication"
          element={
            <GoogleOAuthProvider clientId="784968071047-8uvivas0comahu7omgfqp84ei46f18a7.apps.googleusercontent.com">
              <Authentication />
            </GoogleOAuthProvider>
          }
        />
        <Route path="/note-area" element={<NoteArea />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export { App };
