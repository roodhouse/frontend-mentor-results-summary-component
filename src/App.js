import './App.css';
import Score from './components/Score';
import Summary from './components/Summary';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center w-full md:flex-row md:h-screen">
      <div id='appWrapper' className='bg-white flex flex-col justify-center items-center w-full md:flex-row md:h-auto md:max-w-[768px] md:justify-between md:rounded-[32px] md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
      <Score />
      <Summary />
      </div>
    </div>
  );
}

export default App;
