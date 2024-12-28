
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import HomePage from './pages/home-page/HomePage';

const App: React.FC = () => {
  return (
    
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;