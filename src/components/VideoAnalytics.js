function VideoAnalytics({ videoSrc = "/demo-traffic.mp4" }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
  
  export default VideoAnalytics;