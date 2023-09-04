import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MealDetails from './components/MealDetails';
import './App.css';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:category" element={<MealDetails />} />
      </Routes>
    </main>
  );
}

export default App;
