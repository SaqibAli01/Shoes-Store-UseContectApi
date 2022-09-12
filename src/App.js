
import './App.css';
import Pages from './Components/Pages';
import {GlobalProvider} from './Components/Context/GlobalContext'

function App() {
  return (
    <div className="App">

<GlobalProvider>

      <Pages/>
</GlobalProvider>
    
    
    
    </div>
  );
}

export default App;
