import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
const Home = lazy(() => import('./Home'))
const New = lazy(() => import('./New'))
const Details = lazy(() => import('./Details'))
const Search = lazy(() => import('./Search'))

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="main">
      <Suspense fallback={<div><img className="poke-loader" src="/assets/loading.webp" alt="Loading..." /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/pokemon/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default Main