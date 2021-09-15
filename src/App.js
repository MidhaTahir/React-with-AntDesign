import './App.css';
import Header from './Components/Header';
import AppSider from './Components/AppSider';
import AppCards from './Components/AppCards';
import AppTable from './Components/AppTables';
import { Layout } from "antd"

function App() {
  const { Content } = Layout;
  return (
    <>
      <Layout>
      <Header />
      <Layout>
        <AppSider />
        <Content><AppCards /><AppTable /></Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
    </>
  );
}

export default App;
