import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.6),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.6),transparent_40%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Empowering Excellence in Education
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Welcome to the National Institute of Jalandhar — a modern campus fostering innovation, research, and holistic development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#academics" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium transition-colors">Explore Academics</a>
              <a href="#pyqs" className="px-5 py-3 rounded-md font-medium border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors">Browse PYQs</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-gray-200 shadow-inner overflow-hidden">
              <div className="h-full w-full grid place-content-center">
                <div className="text-center">
                  <div className="text-6xl">🎓</div>
                  <p className="mt-3 text-gray-700 font-medium">National Institute of Jalandhar</p>
                  <p className="text-sm text-gray-500">Excellence • Innovation • Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
