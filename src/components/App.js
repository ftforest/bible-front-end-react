import { useNavigate, useSearchParams, Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import '../styles/App.css';

function App() {

  const [searchBarParams, setSearchBarParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    navigate("test")
    searchBarParams.set("get_param",'10')
    setSearchBarParams(searchBarParams);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span data-testid="empty"></span>
        <Link to='test/12'>zzzzzzzzzzzzzzzzzzzzz</Link>
        <button onClick={handleChange}>кнопка</button>
      </header>
    </div>
  );
}

export default App;
