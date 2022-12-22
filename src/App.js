import { Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import 'normalize.css'
import './styles/globals.scss'

function App() {
  return (
    <Layout>
      <Route path="/" element={<Home />} />
    </Layout>
  );
}

export default App;
