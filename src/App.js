import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Adress from './components/profile/Adress';

function App() {
  return (
    <div className="App">
     <ProfilePhoto/>
     <FullName/>
     <Adress/>
    </div>
  );
}

export default App;
