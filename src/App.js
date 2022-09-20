import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import TciketPage from './pages/TciketPage';
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/Tciket' element={<TciketPage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
