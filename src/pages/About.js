function About() {
    const teamMembers = [
      {
        name: "Phạm Nguyễn Quyết Long",
        role: "Team Leader",
        image: "/logo.png",
      },
      {
        name: "Nguyễn Đức Thắng",
        role: "Developer",
        image: "/logo.png",
      },
      {
        name: "Hoàng Kim Chi",
        role: "Developer", 
        image: "/logo.png",
      },
      {
        name: "Nguyễn Xuân Quý",
        role: "Developer",
        image: "/logo.png",
      }
    ];
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 mt-24">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Project</h2>
          <p className="text-gray-600">
            Hệ thống phân tích giao thông thời gian thực sử dụng AI để theo dõi và phân tích luồng giao thông,
            giúp cải thiện an toàn và hiệu quả giao thông đường bộ.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-8 text-center transform hover:scale-105 transition-transform">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-lg text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default About;