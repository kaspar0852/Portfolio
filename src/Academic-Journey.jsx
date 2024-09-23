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

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.2 },
        },
      }}
      className={`mb-8 flex justify-between items-center w-full ${
        isEven ? "flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">
          {item.type === "degree" ? <FaGraduationCap /> : <FaCertificate />}
        </h1>
      </div>
      <motion.div
        className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
      >
        <h3
          className={`mb-3 font-bold text-white text-xl ${
            item.type === "degree" ? "text-blue-200" : "text-green-200"
          }`}
        >
          {item.title}
        </h3>
        <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
          {item.institution}
        </p>
        <p className="text-sm text-blue-300">{item.year}</p>
      </motion.div>
    </motion.div>
  );
};

export default function AcademicJourney() {
  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
          Academic Journey
        </h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
