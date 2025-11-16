import React from 'react'

const Navbar = () => {
  const navItems = [
    { href: '#academics', label: 'Academics' },
    { href: '#events', label: 'Events' },
    { href: '#faculty', label: 'Faculty' },
    { href: '#admissions', label: 'Admissions' },
    { href: '#pyqs', label: 'PYQs' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600 text-white grid place-content-center font-bold">NI</div>
            <span className="font-semibold text-gray-900">National Institute of Jalandhar</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#admissions" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">Apply Now</a>
          </nav>
          <div className="md:hidden">
            <a href="#admissions" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm">Apply</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
