import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>

  );
}

export default App;
