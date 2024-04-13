import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import PropertyDetails from "./pages/PropertyDetails";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/property-details":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/property-details" element={<PropertyDetails />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/sign-in-page" element={<SignInPage />} />
    </Routes>
  );
}
export default App;
