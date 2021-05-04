import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import GetFields from "./components/GetFields";

function App() {
  return (
    <Container>
      <GetFields></GetFields>
    </Container>
    // <div className="App">
    //   <header className="App-header">
    //     <GetFields></GetFields>
    //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
    //     {/*<p>*/}
    //     {/*  Edit <code>src/App.js</code> and save to reload.*/}
    //     {/*</p>*/}
    //     {/*<a*/}
    //     {/*  className="App-link"*/}
    //     {/*  href="https://reactjs.org"*/}
    //     {/*  target="_blank"*/}
    //     {/*  rel="noopener noreferrer"*/}
    //     {/*>*/}
    //     {/*  Learn React*/}
    //     {/*</a>*/}
    //   </header>
    // </div>
  );
}

export default App;
