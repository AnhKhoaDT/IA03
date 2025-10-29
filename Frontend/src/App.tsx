import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function Navbar() {
  const { pathname } = useLocation();
  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium';
  const active = 'bg-blue-600 text-white';
  const idle = 'text-blue-700 hover:bg-blue-100';
  return (
    <nav className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="font-semibold text-xl text-blue-700">IA03</Link>
          <div className="flex items-center gap-2">
            <Link to="/" className={`${linkBase} ${pathname==='/'?active:idle}`}>Home</Link>
            <Link to="/login" className={`${linkBase} ${pathname==='/login'?active:idle}`}>Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <footer className="border-t bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} IA03 User Auth
        </div>
      </footer>
    </div>
  );
}
