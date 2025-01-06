import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../types';
import { Calendar, MapPin } from 'lucide-react';

interface Props {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<Props> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
      <div className="text-lg font-semibold text-blue-600 mb-2">{experience.company}</div>
      
      <div className="flex items-center gap-4 text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{experience.startDate} - {experience.endDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{experience.location}</span>
        </div>
      </div>
      
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {experience.description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;