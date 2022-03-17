import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';

//Components
import Navbar from './components/layout/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';

export default function App() {
  return (
    <GithubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='conatiner mx-3 px-3'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/404' element={<NotFound />} />
              {/* catch all non-existnt routes that wld send user to a 404 page */}
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}
