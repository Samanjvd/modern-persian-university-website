import {motion, AnimatePresence} from 'motion/react';
import {X, ShoppingCart, Trash2, Plus, Minus} from 'lucide-react';
import {ImageWithFallback} from './ui/ImageWithFallback';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  type: string;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export function CartModal({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartModalProps) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
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
            initial={{opacity: 0, x: -300}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -300}}
            transition={{type: 'spring', damping: 25}}
            className='fixed top-0 left-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl'
          >
            {/* Header */}
            <div className='flex items-center justify-between bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-4'>
              <div className='flex items-center gap-3 text-white'>
                <ShoppingCart className='h-6 w-6' />
                <h3>سبد خرید</h3>
                <span className='rounded-full bg-white/20 px-2 py-1 text-sm'>
                  {items.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            {/* Cart Items */}
            <div className='flex-1 overflow-y-auto p-6'>
              {items.length === 0 ? (
                <div className='flex h-full flex-col items-center justify-center text-center'>
                  <ShoppingCart className='mb-4 h-16 w-16 text-gray-300' />
                  <p className='text-gray-500'>سبد خرید شما خالی است</p>
                </div>
              ) : (
                <div className='space-y-4'>
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, x: -100}}
                      className='flex gap-4 rounded-2xl bg-gray-50 p-4'
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className='h-20 w-20 rounded-xl object-cover'
                      />
                      <div className='flex-1'>
                        <h4 className='mb-1 text-gray-900'>{item.title}</h4>
                        <p className='mb-2 text-sm text-gray-600'>
                          {item.type}
                        </p>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-2'>
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1),
                                )
                              }
                              className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-700 transition-colors hover:bg-gray-100'
                            >
                              <Minus className='h-4 w-4' />
                            </button>
                            <span className='w-8 text-center'>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity + 1)
                              }
                              className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-700 transition-colors hover:bg-gray-100'
                            >
                              <Plus className='h-4 w-4' />
                            </button>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className='text-red-600 transition-colors hover:text-red-700'
                          >
                            <Trash2 className='h-5 w-5' />
                          </button>
                        </div>
                      </div>
                      <div className='text-left'>
                        <p className='text-indigo-600'>
                          {formatPrice(item.price * item.quantity)} تومان
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className='border-t border-gray-200 bg-gray-50 p-6'>
                <div className='mb-4 flex items-center justify-between'>
                  <span className='text-gray-700'>جمع کل:</span>
                  <span className='bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-2xl text-transparent'>
                    {formatPrice(total)} تومان
                  </span>
                </div>
                <motion.button
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className='w-full rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-4 text-white shadow-lg transition-all hover:shadow-xl'
                >
                  تکمیل خرید
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
