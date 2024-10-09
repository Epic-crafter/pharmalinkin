// components/Filters.js
export default function Filters() {
    return (
      <aside className="w-64 p-4 bg-white border-l">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Applicant's location</label>
          <input
            type="text"
            placeholder="e.g. Mumbai"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Minimum work experience (in years)</label>
          <input type="range" min="0" max="5" className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Skills</label>
          <input type="text" placeholder="e.g. Java" className="w-full p-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Academic background</label>
          <input type="text" placeholder="e.g. MBA & similar" className="w-full p-2 border rounded-lg" />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Show Results</button>
      </aside>
    );
  }
  