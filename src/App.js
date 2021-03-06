import Navbar from './components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Cards from './pages/Cards';
import Manga from './pages/Manga';
import Anime from './pages/Anime';
import Profile from './pages/Profile';
import useAuthCheck from './hooks/useAuthCheck';
import useGetDoc from './hooks/useGetDoc';
import ReviewForm from './components/ReviewForm';

const App = () => {
  useAuthCheck();
  useGetDoc('users');

  return (
    <div className="app bg-black/90 min-h-screen my-auto flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/manga/id/:id" element={<Manga />} />
        <Route path="/anime/id/:id" element={<Anime />} />
        <Route exact path="/manga/:id" element={<Cards typename="manga" />} />
        <Route exact path="/anime/:id" element={<Cards typename="anime" />} />
        <Route path="/edit/:type/:id" element={<ReviewForm />} />
        <Route path="*" element={<Navigate replace to="/manga/1" exact />} />
      </Routes>
    </div>
  );
};

export default App;
