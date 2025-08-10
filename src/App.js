import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';


function App() {
  return (
    <>
      <Navbar title="tamim" />
      <div className="container">
        <TextBox heading="Type Here" />
        <button className="btnoo">Convert to Uppercase</button>
      </div>

    </>
  );
}

export default App;
