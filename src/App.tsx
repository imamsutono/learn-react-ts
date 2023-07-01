import { createContext, FC } from 'react';
import './App.css';
import { HairColor, Person } from './components/Person';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: "Imam",
    age: 25,
    country: "Indonesia"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person name="Imam Sutono" age={25} email="haloimams@gmail.com" hairColor={HairColor.Blonde} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
