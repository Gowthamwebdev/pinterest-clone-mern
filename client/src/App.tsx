import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import LandingPage from "./pages/LandingPage";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/layout/Layout";

function App() {
  const token = useAuth();
  const [notification, setNotification] = useState(false);
  const [setting, setSetting] = useState(false);

  return (
    <>
      {!token ? (
        <LandingPage />
      ) : (
        <Layout
          setNotification={setNotification}
          setSetting={setSetting}
          notification={notification}
          setting={setting}
        >
          <AppRoutes />
        </Layout>
      )}
    </>
  );
}
export default App;