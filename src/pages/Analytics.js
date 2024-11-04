import { useState } from 'react';
import VideoAnalytics from '../components/VideoAnalytics';

function Analytics() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisType, setAnalysisType] = useState(null);
  const [trafficData, setTrafficData] = useState({
    cars: 0,
    trucks: 0,
    density: 'low'
  });

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

  const handleFileUpload = async (type) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = type === 'image' ? 'image/*' : 'video/*';
    
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(URL.createObjectURL(file));
        setAnalysisType(type);
        
        // Giả lập phân tích AI
        const mockAnalysis = {
          cars: Math.floor(Math.random() * 20),
          trucks: Math.floor(Math.random() * 10),
          density: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        };
        
        setTrafficData(mockAnalysis);
      }
    };
    
    input.click();
  };

  const totalVehicles = trafficData.cars + trafficData.trucks;
  const densityColorClass = getDensityColor(trafficData.density);

  return (
    <div className="container mx-auto px-4 py-6 mt-24">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Upload Analysis</h2>
        <div className="flex flex-wrap gap-6">
          <button
            onClick={() => handleFileUpload('image')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Upload Image
          </button>
          <button
            onClick={() => handleFileUpload('video')}
            className="px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Upload Video
          </button>
        </div>
      </div>

      {analysisType && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {analysisType === 'video' ? (
              <VideoAnalytics videoSrc={selectedFile} />
            ) : (
              <div className="bg-white p-4 rounded-lg shadow">
                <img src={selectedFile} alt="Uploaded" className="w-full h-auto rounded" />
              </div>
            )}
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Analysis Results</h2>
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
      )}
    </div>
  );
}

export default Analytics;