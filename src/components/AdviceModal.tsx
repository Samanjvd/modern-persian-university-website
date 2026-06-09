import {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {X, Send, Paperclip, Smile} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

interface AdviceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdviceModal({isOpen, onClose}: AdviceModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'سلام! چطور می‌تونم کمکتون کنم؟',
      sender: 'bot',
      time: new Date().toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Auto response
    setTimeout(() => {
      const response: Message = {
        id: messages.length + 2,
        text: 'ممنون از پیام شما. من به زودی به درخواست شما پاسخ خواهم داد. لطفاً ایمیل خود را هم در فرم تماس ثبت کنید تا بتوانم با شما ارتباط بگیرم.',
        sender: 'bot',
        time: new Date().toLocaleTimeString('fa-IR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
            className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm'
          />

          {/* Modal */}
          <motion.div
            initial={{opacity: 0, scale: 0.9, y: 20}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.9, y: 20}}
            className='fixed bottom-24 left-6 z-50 w-full max-w-md'
          >
            <div className='overflow-hidden rounded-3xl bg-white shadow-2xl'>
              {/* Header - Telegram style */}
              <div className='flex items-center justify-between bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white'>
                    د.ر
                  </div>
                  <div>
                    <h4 className='text-white'>دکتر رضا احمدی</h4>
                    <p className='text-sm text-white/80'>آنلاین</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30'
                >
                  <X className='h-5 w-5' />
                </button>
              </div>

              {/* Messages */}
              <div className='h-96 overflow-y-auto bg-gradient-to-b from-gray-50 to-white p-4'>
                <div className='space-y-3'>
                  {messages.map(message => (
                    <motion.div
                      key={message.id}
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'rounded-tr-sm bg-white shadow-md'
                            : 'rounded-tl-sm bg-gradient-to-l from-indigo-600 to-purple-600 text-white'
                        }`}
                      >
                        <p className='leading-relaxed'>{message.text}</p>
                        <p
                          className={`mt-1 text-xs ${
                            message.sender === 'user'
                              ? 'text-gray-500'
                              : 'text-white/70'
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className='border-t border-gray-200 bg-white p-4'>
                <div className='flex items-center gap-2'>
                  <button className='flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100'>
                    <Smile className='h-5 w-5' />
                  </button>
                  <button className='flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100'>
                    <Paperclip className='h-5 w-5' />
                  </button>
                  <input
                    type='text'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleSend()}
                    placeholder='پیام خود را بنویسید...'
                    className='flex-1 rounded-full border border-gray-300 px-4 py-3 transition-all outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                  />
                  <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    onClick={handleSend}
                    className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-l from-indigo-600 to-purple-600 text-white shadow-lg transition-all hover:shadow-xl'
                  >
                    <Send className='h-5 w-5' />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
