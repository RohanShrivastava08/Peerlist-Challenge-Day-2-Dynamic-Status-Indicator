import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';

export default function TransactionStatusIndicator() {
  const [status, setStatus] = useState('analyzing');
  const [scope] = useAnimate();
  
  // Set up the cycle timer and animations
  useEffect(() => {
    // Set up the cycle timer
    const timer = setTimeout(() => {
      if (status === 'analyzing') {
        setStatus('safe');
      } else if (status === 'safe') {
        setStatus('analyzing2');
      } else if (status === 'analyzing2') {
        setStatus('warning');
      } else {
        setStatus('analyzing'); // Reset to start the cycle again
      }
    }, 3000); // Changed to 3 seconds
    
    return () => clearTimeout(timer);
  }, [status]);
  
  // Define the indicators for different statuses
  const indicators = {
    analyzing: {
      bg: 'bg-blue-50',
      text: 'text-blue-500',
      icon: (
        <motion.div 
          className="w-6 h-6 mr-2"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: {
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear"
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeDasharray="40" 
              strokeDashoffset="20" 
            />
          </svg>
        </motion.div>
      ),
      message: 'Analyzing Transaction'
    },
    analyzing2: {
      bg: 'bg-blue-50',
      text: 'text-blue-500',
      icon: (
        <motion.div 
          className="w-6 h-6 mr-2"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: {
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear"
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeDasharray="40" 
              strokeDashoffset="20" 
            />
          </svg>
        </motion.div>
      ),
      message: 'Analyzing Transaction'
    },
    safe: {
      bg: 'bg-green-50',
      text: 'text-green-500',
      icon: (
        <motion.div 
          className="w-6 h-6 mr-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: 1,
          }}
          transition={{ 
            scale: {
              duration: 0.5,
              times: [0, 0.5, 1],
              ease: "easeOut"
            },
            opacity: { duration: 0.3 }
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-full h-full" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle 
              cx="12" 
              cy="12" 
              r="10" 
              fill="currentColor" 
              fillOpacity="0.9"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.path 
              d="M8 12L11 15L16 9" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </svg>
        </motion.div>
      ),
      message: 'Transaction Safe'
    },
    warning: {
      bg: 'bg-red-50',
      text: 'text-red-500',
      icon: (
        <motion.div 
          className="w-6 h-6 mr-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -2, 0, -2, 0]  // Subtle warning shake
          }}
          transition={{ 
            scale: { duration: 0.3 },
            opacity: { duration: 0.3 },
            y: { delay: 0.3, duration: 0.5, ease: "easeInOut" }
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-full h-full" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle 
              cx="12" 
              cy="12" 
              r="10" 
              fill="currentColor" 
              fillOpacity="0.9"
              animate={{ 
                scale: [1, 1.03, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path 
              d="M12 8V12" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            <motion.circle 
              cx="12" 
              cy="16" 
              r="1" 
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            />
          </svg>
        </motion.div>
      ),
      message: 'Transaction Warning'
    }
  };
  
  const currentIndicator = indicators[status];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50" ref={scope}>
      <h1 className="text-2xl font-bold mb-8">
        Peerlist Challenge Day 2 - <span className="font-bold">Dynamic Status Indicator</span>
      </h1>
      
      <div className="flex flex-col items-center">
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={status}
              initial={{ opacity: 0, x: 60 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                boxShadow: status === 'warning' 
                  ? ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 15px rgba(239,68,68,0.5)', '0px 0px 0px rgba(0,0,0,0)']
                  : status === 'safe'
                    ? ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 15px rgba(34,197,94,0.5)', '0px 0px 0px rgba(0,0,0,0)']
                    : ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 15px rgba(59,130,246,0.5)', '0px 0px 0px rgba(0,0,0,0)']
              }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ 
                duration: 0.3,
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }
              }}
              className={`flex items-center justify-center px-8 py-4 rounded-full ${currentIndicator.bg} ${currentIndicator.text}`}
            >
              {currentIndicator.icon}
              <motion.span 
                className="text-lg font-medium"
                animate={{ 
                  scale: status === 'warning' ? [1, 1.02, 1] : 1
                }}
                transition={{ 
                  scale: { 
                    repeat: Infinity, 
                    duration: 1.2,
                    ease: "easeInOut"
                  }
                }}
              >
                {currentIndicator.message}
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}