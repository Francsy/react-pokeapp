import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./Home'))
const New = lazy(() => import('./New'))
const Details = lazy(() => import('./Details'))
const Search = lazy(() => import('./Search'))


const Main = () => {
  return (
    <main className="main">
      <Suspense fallback={<div><img src="/assets/loading.gif" alt="Loading..." /></div>}>
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

export default Main;

