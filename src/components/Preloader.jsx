import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-32 ml-13 h-32 border-2 border-cyan-500/30 rounded-full flex items-center justify-center">
            <motion.div
              className="w-24 h-24 border-2 border-transparent border-t-cyan-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-2xl font-bold text-cyan-500">{progress}%</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-white">Loading Experience</h2>
          <p className="text-gray-400">Initializing futuristic interface...</p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
          style={{ maxWidth: '200px', margin: '0 auto' }}
        />
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-cyan-500"
            style={{ left: `${(i + 1) * 5}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;