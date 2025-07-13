import logo from './logo.svg';
import './App.css';
import Addtodo from './component/Addtodo';
import Search from './component/Search';
import { Delete } from './component/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './component/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Addtodo/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/Delete" element={<Delete/>}/>
        <Route path="/View" element={<View/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
