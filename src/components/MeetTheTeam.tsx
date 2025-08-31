import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg cursor-pointer border border-gray-200 relative overflow-hidden"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-32 h-32 rounded-full mb-4 overflow-hidden border-4 border-blue-200">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" className="rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shimmer rounded-full"></div>
      </div>
      <h3 className="text-xl font-semibold text-blue-800">{name}</h3>
      <p className="text-blue-600 text-center">{role}</p>
    </motion.div>
  );
};

const MeetTheTeam: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      imageUrl: '/image/schoolboy.png',
      description: 'Visionary leader with 15+ years of experience in education technology, driving our mission to revolutionize learning.'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      imageUrl: '/image/schoolgirl.png',
      description: 'Full-stack developer passionate about creating seamless educational experiences through innovative technology.'
    },
    {
      name: 'Peter Jones',
      role: 'Marketing Director',
      imageUrl: '/image/schoolgirls.png',
      description: 'Marketing strategist dedicated to spreading the word about our transformative educational solutions.'
    },
    {
      name: 'Alice Brown',
      role: 'Product Manager',
      imageUrl: '/image/student.png',
      description: 'Product expert ensuring our solutions meet the evolving needs of students and educators alike.'
    },
    {
      name: 'Bob White',
      role: 'UI/UX Designer',
      imageUrl: '/image/teacher.png',
      description: 'Creative designer focused on creating intuitive and engaging user experiences for all age groups.'
    },
    {
      name: 'Charlie Green',
      role: 'QA Engineer',
      imageUrl: '/image/parent.jpeg',
      description: 'Detail-oriented professional ensuring the highest quality standards for our educational platform.'
    },
    {
      name: 'Diana Prince',
      role: 'HR Manager',
      imageUrl: '/image/Principal.png',
      description: 'People person dedicated to building and nurturing our talented team of education enthusiasts.'
    },
    {
      name: 'Eve Adams',
      role: 'Financial Analyst',
      imageUrl: '/image/1.jpeg',
      description: 'Financial expert ensuring sustainable growth and responsible resource allocation for our mission.'
    },
  ];

  const duplicatedTeam = [...teamMembers, ...teamMembers];

  const [selectedMember, setSelectedMember] = useState<number>(0); // Default to first member

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Meet Our Team</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Get to know the passionate individuals behind our mission to transform education
        </p>
        
        <div className="relative">
          {/* Blue Border Box */}
          <div className="absolute inset-0 border-4 border-blue-500 rounded-2xl pointer-events-none"></div>
          
          {/* Team Members Carousel */}
          <motion.div
            className="flex py-8 px-2 space-x-8"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            whileHover={{ x: "0%", transition: { duration: 0 } }}
          >
            {duplicatedTeam.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedMember(index % teamMembers.length)}
                whileHover={{ y: -10 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Description Box - Always shows a team member */}
          <div className="mt-8 bg-white p-4 rounded-lg shadow-md border border-blue-100 max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {teamMembers[selectedMember].name}
                  <span className="block text-lg text-blue-600 font-medium mt-1">
                    {teamMembers[selectedMember].role}
                  </span>
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {teamMembers[selectedMember].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;