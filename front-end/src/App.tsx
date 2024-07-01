import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Me from './components/Me';
import { AuthProvider } from './config/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/me" element={<ProtectedRoute element={<Me />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
