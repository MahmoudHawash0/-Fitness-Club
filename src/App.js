import './App.css';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { ExerciseDetailsPage } from './pages/ExerciseDetailsPage';
import { Navbar } from './components/navbar/Navbar';
import { useEffect, useState } from 'react';
import { Loader } from './components/loader/Loader';
import { Footer } from '../src/components/footer/Footer'
import { BMIPage } from './pages/BMIPage';

const App = () => {

  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {
        loaded ? (
          <Loader />
        ) : (
          <section >
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/exercise/:id' element={<ExerciseDetailsPage />} />
              <Route path='/bmi' element={<BMIPage />} />
            </Routes>
            <Footer />
          </section>
        )
      }
    </div>
  );
}

export default App;
