import Footer from "./components/Footer";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Create Account</h1>
        </div>
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default App;
