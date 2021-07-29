import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header"
import Footer from "./components/footer/footer";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";

function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
