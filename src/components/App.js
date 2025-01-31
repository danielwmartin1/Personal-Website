import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Form from './Form';
import '../App.css';

/**
 * The main application component that sets up the routing and layout of the app.
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @semantic
 * - Uses `ErrorBoundary` to catch and handle errors in the component tree.
 * - Wraps routes in `Suspense` to handle lazy loading of components.
 * - Contains the main structure of the app including `Header`, `Footer`, and routes for different pages.
 */
function App() {
  return (
    <ErrorBoundary>  
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default function Main() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </Router>
  );
}
