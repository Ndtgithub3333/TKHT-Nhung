import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Data from sky.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-center mb-8 animate-fade-in">
          Hệ Thống Phân Tích Giao Thông
        </h1>
        <p className="text-2xl md:text-3xl text-center mb-16 max-w-4xl animate-fade-in-delay">
          Sử dụng AI để phân tích và theo dõi luồng giao thông trong thời gian thực
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <button
            onClick={() => navigate('/realtime')}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-semibold transition-all transform hover:scale-105"
          >
            Real-time
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-semibold transition-all transform hover:scale-105"
          >
            Analytics
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;