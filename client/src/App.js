import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Details from './Pages/Details';
import HomePage from './Pages/HomePage';
import NewBlog from './Pages/NewBlog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/newblog" element={<NewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
