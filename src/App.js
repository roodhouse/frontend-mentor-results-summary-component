import './App.css';
import Score from './components/Score';
import Summary from './components/Summary';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center w-full md:flex-row md:h-screen">
     <Score />
     <Summary />
    </div>
  );
}

export default App;
