import React from 'react'
import { Routes, Route , useLocation} from 'react-router-dom'
import Home from './pages/home/Home'
import Page1 from './pages/page1/Page1'
import Navbar from './components/navbar/Navbar'
import LearnMore from './pages/learnMore/LearnMore'

export default function App() {
  const routesWithNavbar = [
    { path: "/", page: <Home /> },
    { path: "/page1", page: <Page1 /> }
  ];

  const routesWithoutNavbar = [
    { path: "/learnMore", page: <LearnMore /> }
  ];

  const location = useLocation();
  const showNavbar = routesWithNavbar.some(r => r.path === location.pathname);

  const routeElements = [];

  for (const r of routesWithNavbar) {
    routeElements.push(<Route key={r.path} path={r.path} element={r.page} />);
  }

  for (const r of routesWithoutNavbar) {
    routeElements.push(<Route key={r.path} path={r.path} element={r.page} />);
  }

  return (
    <>
      {showNavbar && <Navbar />}

      <main>
        <Routes>{routeElements}</Routes>
      </main>
    </>
  );
}