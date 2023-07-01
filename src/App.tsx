import './App.css';
import { HairColor, Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name="Imam Sutono" age={25} email="haloimams@gmail.com" hairColor={HairColor.Blonde} />
    </div>
  );
}

export default App;
