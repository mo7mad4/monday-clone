import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard';
import TciketPage from './pages/TciketPage';
const App = () => {
  return (
    <div className="app">
      
      <BrowserRouter>
      <Nav/>

        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/Tciket' element={<TciketPage/>} />
          <Route path='/Tciket:id' element={<TciketPage editMode={true}/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
