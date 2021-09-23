import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContainer from './containers/HomeContainer'
// import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <h1>
        App component
      </h1>
      <User data={{ name: 'hannu',age:"22" }} />
      <Home/> */}
      <HomeContainer/>
    </div>

  );
}

export default App;
