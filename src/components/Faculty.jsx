import React, { useEffect, useState } from 'react'

const Faculty = () => {
  const [faculty, setFaculty] = useState([])
  const [department, setDepartment] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL(`${baseUrl}/api/faculty`)
        if (department) url.searchParams.set('department', department)
        const res = await fetch(url.toString())
        const data = await res.json()
        setFaculty(data)
      } catch (e) {
        setFaculty([])
      }
    }
    load()
  }, [department])

  const deptOptions = ['CSE', 'ECE', 'ME', 'CE', 'EE']

  return (
    <section id="faculty" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Faculty</h2>
            <p className="mt-2 text-gray-600">Meet our experienced and dedicated faculty members.</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <label className="text-gray-600">Department</label>
            <select value={department} onChange={(e)=>setDepartment(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2">
              <option value="">All</option>
              {deptOptions.map((d)=> (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-blue-50 grid place-content-center text-2xl">👩‍🏫</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{f.name}</h3>
                  <p className="text-sm text-gray-600">{f.designation} • {f.department}</p>
                </div>
              </div>
              {f.research_areas?.length > 0 && (
                <div className="mt-4 text-sm text-gray-600">
                  <div className="font-medium text-gray-800">Research areas</div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {f.research_areas.map((r, i)=> (
                      <span key={i} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">{r}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faculty
