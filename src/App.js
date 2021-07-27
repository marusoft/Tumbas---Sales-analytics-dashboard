import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="other-pages">otherpages</div>
    </div>
  );
};

export default App;
