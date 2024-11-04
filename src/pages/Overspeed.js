import { useState } from 'react';

function Overspeed() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    minSpeed: '',
    maxSpeed: '',
    location: '',
    sortBy: 'date' // 'date', 'speed'
  });

  // Mock data với nhiều cases hơn
  const speedingCases = [
    {
      id: 1,
      image: '/phat-toc-do-o-to-2.jpg',
      location: 'Đường Giải Phóng, Hà Nội',
      timestamp: '2024-03-15 08:30:45',
      actualSpeed: 75,
      speedLimit: 60,
      preview: '/phat-toc-do-o-to-2.jpg'
    },
    {
      id: 2,
      image: '/phat-toc-do-o-to-2.jpg', 
      location: 'Đường Trường Chinh, Hà Nội',
      timestamp: '2024-03-15 09:15:22',
      actualSpeed: 82,
      speedLimit: 60,
      preview: '/phat-toc-do-o-to-2.jpg'
    },
    {
      id: 3,
      image: '/phat-toc-do-o-to-2.jpg',
      location: 'Đường Láng, Hà Nội',
      timestamp: '2024-03-14 15:45:30',
      actualSpeed: 68,
      speedLimit: 50,
      preview: '/phat-toc-do-o-to-2.jpg'
    }
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredCases = speedingCases
    .filter(case_ => {
      const caseDate = new Date(case_.timestamp);
      const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
      const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
      
      return (
        (!filters.dateFrom || caseDate >= fromDate) &&
        (!filters.dateTo || caseDate <= toDate) &&
        (!filters.minSpeed || case_.actualSpeed >= Number(filters.minSpeed)) &&
        (!filters.maxSpeed || case_.actualSpeed <= Number(filters.maxSpeed)) &&
        (!filters.location || case_.location.toLowerCase().includes(filters.location.toLowerCase()))
      );
    })
    .sort((a, b) => {
      if (filters.sortBy === 'date') {
        return new Date(b.timestamp) - new Date(a.timestamp);
      }
      return b.actualSpeed - a.actualSpeed;
    });

  return (
    <div className="container mx-auto px-4 py-6 mt-24">
      <h1 className="text-3xl font-bold mb-8">Overspeed Cases</h1>
      
      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
            <input
              type="datetime-local"
              name="dateFrom"
              value={filters.dateFrom}
              onChange={handleFilterChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
            <input
              type="datetime-local"
              name="dateTo"
              value={filters.dateTo}
              onChange={handleFilterChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Speed (km/h)</label>
            <input
              type="number"
              name="minSpeed"
              value={filters.minSpeed}
              onChange={handleFilterChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Speed (km/h)</label>
            <input
              type="number"
              name="maxSpeed"
              value={filters.maxSpeed}
              onChange={handleFilterChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              placeholder="Search location..."
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleFilterChange}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              <option value="date">Date</option>
              <option value="speed">Speed</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => setFilters({
                dateFrom: '',
                dateTo: '',
                minSpeed: '',
                maxSpeed: '',
                location: '',
                sortBy: 'date'
              })}
              className="w-full bg-gray-500 text-white rounded-md p-2 hover:bg-gray-600"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 text-gray-600">
        Found {filteredCases.length} cases
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((case_) => (
          <div 
            key={case_.id}
            onClick={() => setSelectedCase(case_)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
          >
            <img 
              src={case_.preview} 
              alt={`Speeding case ${case_.id}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold text-lg mb-2">{case_.location}</p>
              <p className="text-gray-600 mb-2">{case_.timestamp}</p>
              <div className="flex justify-between items-center">
                <div className="text-red-600 font-bold">
                  {case_.actualSpeed} km/h
                </div>
                <div className="text-gray-600">
                  Limit: {case_.speedLimit} km/h
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Speeding Case Details</h2>
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <img 
                src={selectedCase.image} 
                alt={`Speeding case ${selectedCase.id}`}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="space-y-2">
                <p className="text-xl font-semibold">{selectedCase.location}</p>
                <p className="text-gray-600">{selectedCase.timestamp}</p>
                <div className="flex justify-between items-center text-lg">
                  <div className="text-red-600 font-bold">
                    Actual Speed: {selectedCase.actualSpeed} km/h
                  </div>
                  <div className="text-gray-600">
                    Speed Limit: {selectedCase.speedLimit} km/h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Overspeed;