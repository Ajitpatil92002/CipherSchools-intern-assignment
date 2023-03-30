import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../components/layout";
import UserContextProvider from "../context/userContext";

export default function Home() {
  
  return (
    <UserContextProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </UserContextProvider>
  );
}
