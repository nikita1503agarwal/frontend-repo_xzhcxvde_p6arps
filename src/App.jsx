import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Academics from './components/Academics'
import Events from './components/Events'
import Faculty from './components/Faculty'
import Admissions from './components/Admissions'
import PYQs from './components/PYQs'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Academics />
        <Events />
        <Faculty />
        <Admissions />
        <PYQs />
      </main>
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p>© {new Date().getFullYear()} National Institute of Jalandhar. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#academics" className="hover:text-blue-600">Academics</a>
              <a href="#events" className="hover:text-blue-600">Events</a>
              <a href="#faculty" className="hover:text-blue-600">Faculty</a>
              <a href="#admissions" className="hover:text-blue-600">Admissions</a>
              <a href="#pyqs" className="hover:text-blue-600">PYQs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
