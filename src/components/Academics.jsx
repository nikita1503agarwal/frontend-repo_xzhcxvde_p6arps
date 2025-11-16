import React, { useEffect, useState } from 'react'

const Academics = () => {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/programs`)
        const data = await res.json()
        setPrograms(data)
      } catch (e) {
        setPrograms([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="academics" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Academics</h2>
        <p className="mt-2 text-gray-600">Explore our undergraduate, postgraduate, and doctoral programs.</p>

        {loading ? (
          <p className="mt-6 text-gray-500">Loading programs...</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-sm text-blue-600 font-semibold">{p.level}</div>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-gray-600 line-clamp-3">{p.description || '—'}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{p.department}</span>
                  <span>{p.duration_years} years • {p.semesters} semesters</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Academics
