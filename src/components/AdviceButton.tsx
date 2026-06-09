import {motion} from 'motion/react';
import {MessageCircle} from 'lucide-react';

interface AdviceButtonProps {
  onClick: () => void;
}

export function AdviceButton({onClick}: AdviceButtonProps) {
  return (
    <motion.button
      initial={{scale: 0}}
      animate={{scale: 1}}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      onClick={onClick}
      className='fixed bottom-6 left-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl transition-shadow hover:shadow-indigo-500/50'
    >
      <MessageCircle className='h-7 w-7' />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600'
      />
    </motion.button>
  );
}
