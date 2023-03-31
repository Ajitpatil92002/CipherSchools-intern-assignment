import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../components/layout";
import UserContextProvider from "../context/userContext";
import { ToastContainer  } from "react-toastify";

export default function Home() {
  return (
    <UserContextProvider>
      <Layout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Dashboard />
      </Layout>
    </UserContextProvider>
  );
}
