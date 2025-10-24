import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Camera from './components/Camera';
import Loading from './components/Loading';
import MainApp from './components/MainApp';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
