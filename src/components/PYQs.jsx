import React, { useEffect, useMemo, useState } from 'react'

const PYQs = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ department: '', semester: '', year: '', search: '' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async () => {
    setLoading(true)
    try {
      const url = new URL(`${baseUrl}/api/pyqs`)
      if (filters.department) url.searchParams.set('department', filters.department)
      if (filters.semester) url.searchParams.set('semester', filters.semester)
      if (filters.year) url.searchParams.set('year', filters.year)
      if (filters.search) url.searchParams.set('search', filters.search)
      const res = await fetch(url.toString())
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const years = useMemo(() => {
    const y = new Date().getFullYear()
    return Array.from({ length: 8 }, (_, i) => y - i)
  }, [])

  return (
    <section id="pyqs" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Previous Year Questions</h2>
            <p className="mt-2 text-gray-600">Find and download past exam papers.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input placeholder="Search course code/title" value={filters.search} onChange={(e)=>setFilters(prev=>({...prev, search:e.target.value}))} className="border border-gray-300 rounded-md px-3 py-2 text-sm w-60" />
            <select value={filters.department} onChange={(e)=>setFilters(prev=>({...prev, department:e.target.value}))} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option value="">All Depts</option>
              {['CSE','ECE','ME','CE','EE'].map(d=> <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={filters.semester} onChange={(e)=>setFilters(prev=>({...prev, semester:e.target.value}))} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option value="">Any Sem</option>
              {Array.from({length:8},(_,i)=>i+1).map(s=> <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={filters.year} onChange={(e)=>setFilters(prev=>({...prev, year:e.target.value}))} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option value="">Any Year</option>
              {years.map(y=> <option key={y} value={y}>{y}</option>)}
            </select>
            <button onClick={load} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">Filter</button>
          </div>
        </div>

        {loading ? (
          <p className="mt-6 text-gray-500">Loading papers...</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500">{p.department} • Sem {p.semester} • {p.year}</div>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{p.course_code}: {p.course_title}</h3>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-600">{p.exam_type}</span>
                  <a href={p.file_url} target="_blank" className="text-blue-600 hover:text-blue-700 font-medium">Download</a>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="col-span-full text-gray-500">No papers found for selected filters.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default PYQs
