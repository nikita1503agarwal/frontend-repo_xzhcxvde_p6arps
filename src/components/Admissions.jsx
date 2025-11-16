import React, { useEffect, useState } from 'react'

const Admissions = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/admissions`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section id="admissions" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Admissions</h2>
        <p className="mt-2 text-gray-600">Important updates and application information.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((a, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-blue-600 font-semibold">{a.program} • {a.year}</div>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">Status: {a.status}</h3>
              {a.notes && <p className="mt-2 text-gray-600">{a.notes}</p>}
              <div className="mt-4 flex gap-3">
                {a.brochure_url && <a href={a.brochure_url} target="_blank" className="text-blue-600 hover:text-blue-700 font-medium">Brochure</a>}
                {a.apply_url && <a href={a.apply_url} target="_blank" className="text-blue-600 hover:text-blue-700 font-medium">Apply</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Admissions
