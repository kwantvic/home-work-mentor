import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <Profile name="Вася Пупкин" registredAt={new Date()} />
    </div>
  );
}

export default App;
