import './styles/App.scss'
import PageContainer from './components/Containers/PageContainer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Outlet } from 'react-router-dom'
import MobileNavbar from './components/Navbar/MobileNavbar';
import MainContainer from './components/Containers/MainContainer';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
      <PageContainer optionClass={"PageContainer"}>
        <Navbar />
        <div className="mobileMenu">
          <MobileNavbar />
        </div>
        <Routes>
          {/* Auth Page */}
          <Route path="/auth" element={<Auth />} />

          {/* Protected Routes */}
          <Route element={<Outlet />} />
          {/* 404 Pages */}
          <Route
            path="/*"
            element={
              <MainContainer>
                <span style={{ fontSize: "1.2rem" }}>404 Not Found</span>
              </MainContainer>
            } 
          />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
