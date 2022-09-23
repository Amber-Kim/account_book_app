import './styles/App.scss'
import { Routes, Route, Outlet } from 'react-router-dom'

//Components
import PageContainer from './components/Containers/PageContainer';
import Navbar from './components/Navbar/Navbar';
import MobileNavbar from './components/Navbar/MobileNavbar';
import MainContainer from './components/Containers/MainContainer';

// Pages
import Auth from './pages/Auth';
import Home from './pages/Home';

// React Query
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from "react-query"
import { queryClient } from './constants/config'

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
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

            {/* Home */}
            <Route path="/" element={<Home />}/>

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
      </QueryClientProvider>
    </div>
  );
}

export default App;
