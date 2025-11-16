import React, { useEffect, useState } from 'react'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/events`)
        const data = await res.json()
        setEvents(data)
      } catch (e) {
        setEvents([])
      }
    }
    load()
  }, [])

  return (
    <section id="events" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Events</h2>
            <p className="mt-2 text-gray-600">Stay updated with seminars, workshops, and campus activities.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-blue-600 hover:text-blue-700 font-medium">View all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-500">{e.category}</div>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">{e.title}</h3>
              <p className="mt-2 text-gray-600 line-clamp-3">{e.description || '—'}</p>
              <div className="mt-4 text-sm text-gray-500">
                <div>{e.location}</div>
                <div>{e.start_date}{e.end_date ? ` → ${e.end_date}` : ''}</div>
              </div>
              {e.link && (
                <a href={e.link} target="_blank" className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium">Learn more</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
