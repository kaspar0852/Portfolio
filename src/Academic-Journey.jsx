/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const timelineData = [
  {
    type: "degree",
    title: "Bachelor of Engineering in Computer Engineering",
    institution: "Himalaya College of Engineering",
    year: "2018-2023",
  },
  {
    type: "certification",
    title: "Hackathon",
    institution: "Amnil Technologies",
    year: "2023",
  },
  {
    type: "degree",
    title: "High School Degree",
    institution: "Capital College and Research Center",
    year: "2016-2018",
  },
  {
    type: "degree",
    title: "School Leaving Certificate",
    institution: "Nepal Don Bosco School",
    year: "2016",
  },
];

const TimelineItem = ({ item, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const isEven = index % 2 === 0
  const bgColor = item.type === 'degree' ? 'bg-gradient-to-r from-purple-500 to-indigo-600' : 'bg-gradient-to-r from-teal-400 to-emerald-500'
  const iconColor = item.type === 'degree' ? 'text-purple-200' : 'text-teal-200'
  const borderColor = item.type === 'degree' ? 'border-purple-300' : 'border-teal-300'

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
      }}
      className={`mb-8 flex justify-between items-center w-full ${
        isEven ? 'flex-row-reverse left-timeline' : 'right-timeline'
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <motion.div 
        className={`z-20 flex items-center order-1 ${bgColor} shadow-xl w-12 h-12 rounded-full`}
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className={`mx-auto font-semibold text-lg ${iconColor}`}>
          {item.type === 'degree' ? <FaGraduationCap size={24} /> : <FaCertificate size={24} />}
        </h1>
      </motion.div>
      <motion.div
        className={`order-1 ${bgColor} rounded-lg shadow-xl w-5/12 px-6 py-4 ${borderColor} border-2`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-opacity-100 text-white">{item.institution}</p>
        <p className="text-sm text-white font-semibold mt-2">{item.year}</p>
      </motion.div>
    </motion.div>
  )
}

export default function EnhancedAcademicJourney() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">Academic Journey</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <motion.div 
            className="border-2-2 absolute border-opacity-20 h-full border left-1/2 bg-gradient-to-b from-blue-400 to-purple-500"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ width: '4px', marginLeft: '-2px' }}
          />
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}