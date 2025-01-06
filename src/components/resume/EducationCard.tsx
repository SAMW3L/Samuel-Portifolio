import React from 'react';
import { motion } from 'framer-motion';
import { Education } from '../../types';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

interface Props {
  education: Education;
  index: number;
}

const EducationCard: React.FC<Props> = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <GraduationCap className="text-blue-600" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{education.degree}</h3>
          <div className="text-lg font-semibold text-blue-600 mb-2">{education.institution}</div>
          
          <div className="flex items-center gap-4 text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{education.startDate} - {education.endDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{education.location}</span>
            </div>
          </div>
          
          {education.description && (
            <p className="text-gray-700">{education.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
