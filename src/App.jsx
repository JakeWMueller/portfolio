import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import React, { lazy, Suspense } from 'react';
const Hi = lazy(() => import('./components/hi/Hi'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Pokedex = lazy(() => import('./components/projects/Pokedex'));
const MappinApp = lazy(() => import('./components/projects/MappinApp'));
const Music = lazy(() => import('./components/music/Music'));
const Writing = lazy(() => import('./components/writing/Writing'));
const Contact = lazy(() => import('./components/contact/Contact'));

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
      <Suspense fallback={<div>Working on it...</div>}><Hi/></Suspense>
      <Suspense fallback={<div>Just give me a second...</div>}><Skills/></Suspense>
      <Suspense fallback={<div>Hold on a minute...</div>}><Pokedex/></Suspense>
      <Suspense fallback={<div>Don't go anywhere...</div>}><MappinApp/></Suspense>
      <Suspense fallback={<div>Stop, collaborate, and listen...</div>}><Music/></Suspense>
      <Suspense fallback={<div>React, React, where are thou?</div>}><Writing/></Suspense>
      <Suspense fallback={<div>Wait for it...</div>}><Contact/></Suspense>
      </div>
    </div>
  );
}

export default App;
