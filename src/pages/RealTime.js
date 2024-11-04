import VideoAnalytics from '../components/VideoAnalytics';

function RealTime() {
  const trafficData = {
    cars: 15,
    trucks: 5,
    density: 'high'
  };

  // Tính tổng số xe
  const totalVehicles = trafficData.cars + trafficData.trucks;

  // Xác định màu dựa trên mức độ density
  const getDensityColor = (density) => {
    switch (density.toLowerCase()) {
      case 'low':
        return 'text-green-600 bg-green-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'high':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-purple-600 bg-purple-50';
    }
  };

  const densityColorClass = getDensityColor(trafficData.density);

  return (
    <div className="container mx-auto px-4 py-6 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoAnalytics />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Traffic Analysis</h2>
          <div className="space-y-6">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-gray-600 mb-1">Total Vehicles</p>
              <p className="text-3xl font-bold text-yellow-600">{totalVehicles}</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-600 mb-1">Cars</p>
              <p className="text-3xl font-bold text-blue-600">{trafficData.cars}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-gray-600 mb-1">Trucks</p>
              <p className="text-3xl font-bold text-green-600">{trafficData.trucks}</p>
            </div>
            <div className={`p-4 rounded-lg ${densityColorClass}`}>
              <p className="text-gray-600 mb-1">Traffic Density</p>
              <p className={`text-3xl font-bold capitalize`}>{trafficData.density}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTime;