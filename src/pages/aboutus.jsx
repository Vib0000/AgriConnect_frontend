import React from 'react';

// Sample data for team members
const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png',
    description: 'John is the visionary behind our company.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png',
    description: 'Jane ensures our technology stays ahead of the curve.',
  },
  {
    name: 'Emily Johnson',
    role: 'CMO',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png',
    description: 'Emily leads our marketing efforts with creativity and passion.',
  },
  {
    name: 'Michael Brown',
    role: 'COO',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png',
    description: 'Michael keeps our operations running smoothly.',
  },
];

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are a dedicated team working together to bring you the best solutions.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full  object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
            <h3 className="text-md text-gray-500 mb-2">{member.role}</h3>
            <p className="text-gray-700">{member.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutUs;
