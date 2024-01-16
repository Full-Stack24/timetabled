import './App.css';
import Calendar from './components/Calendar';
const App = () => {
  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Chicago</h1>
      <h2>Welcome to Chicago, Apple! Check out this calendar to 
        get a feel for what you'll be doing each day.</h2>
      <Calendar/>
    </div>
  );
}

export default App;