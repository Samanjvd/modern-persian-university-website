'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Award,
  Image,
  Mail,
  FileText,
  ShoppingCart,
  LogIn,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import {motion, AnimatePresence} from 'motion/react';
import {CartModal} from './CartModal';
import {LoginModal} from './LoginModal';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  type: string;
}

export function Navigation() {
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<{email: string; name: string} | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: 'دوره یادگیری عمیق',
      price: 1500000,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'دوره آنلاین',
    },
    {
      id: 2,
      title: 'دوره یادگیری ماشین',
      price: 1200000,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'دوره آنلاین',
    },
  ]);

  const navItems = [
    {path: '/', label: 'خانه', icon: Home},
    {path: '/about', label: 'درباره من', icon: User},
    {path: '/projects', label: 'پروژه‌ها', icon: Briefcase},
    {path: '/courses', label: 'دوره‌ها', icon: BookOpen},
    {path: '/honors', label: 'افتخارات', icon: Award},
    {path: '/blog', label: 'وبلاگ', icon: FileText},
    {path: '/gallery', label: 'گالری', icon: Image},
    {path: '/contact', label: 'تماس', icon: Mail},
  ];

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(items =>
      items.map(item => (item.id === id ? {...item, quantity} : item)),
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleLogin = (phone: string, name: string) => {
    setUser({email: phone, name});
  };

  const handleLogout = () => {
    setUser(null);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{y: -100}}
        animate={{y: 0}}
        className='sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md'
      >
        <div className='container mx-auto px-4 py-3 md:py-4'>
          <div className='flex items-center justify-between gap-4'>
            {/* Logo */}
            <Link
              href='/'
              className='flex flex-shrink-0 items-center gap-2 md:gap-3'
            >
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white'>
                د.ر
              </div>
              <div className='hidden sm:block'>
                <h3 className='leading-tight text-indigo-600'>
                  دکتر رضا احمدی
                </h3>
                <p className='text-xs text-gray-600 md:text-sm'>
                  استاد دانشگاه
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className='hidden items-center gap-1 xl:flex'>
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className='h-4 w-4' />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Actions */}
            <div className='flex items-center gap-2 md:gap-3'>
              {/* Cart */}
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={() => setIsCartOpen(true)}
                className='relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 md:h-12 md:w-12'
              >
                <ShoppingCart className='h-4 w-4 md:h-5 md:w-5' />
                {cartItemCount > 0 && (
                  <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    className='absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-xs text-white md:h-6 md:w-6'
                  >
                    {cartItemCount}
                  </motion.div>
                )}
              </motion.button>

              {/* Login / User */}
              {user ? (
                <div className='hidden items-center gap-2 md:flex'>
                  <div className='hidden items-center gap-2 rounded-xl bg-gradient-to-l from-indigo-100 to-purple-100 px-3 py-2 lg:flex'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-sm text-white'>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className='max-w-[120px] truncate text-gray-700'>
                      {user.name}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    onClick={handleLogout}
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 transition-colors hover:bg-red-200 md:h-12 md:w-12'
                    title='خروج'
                  >
                    <LogOut className='h-4 w-4 md:h-5 md:w-5' />
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  onClick={() => setIsLoginOpen(true)}
                  className='hidden items-center gap-2 rounded-full bg-gradient-to-l from-indigo-600 to-purple-600 px-4 py-2 text-white shadow-lg transition-all hover:shadow-xl md:flex'
                >
                  <LogIn className='h-4 w-4 md:h-5 md:w-5' />
                  <span className='hidden lg:inline'>ورود / ثبت‌نام</span>
                </motion.button>
              )}

              {/* Hamburger */}
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={() => setIsSidebarOpen(true)}
                className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-l from-indigo-600 to-purple-600 text-white shadow-lg md:h-12 md:w-12 xl:hidden'
              >
                <Menu className='h-5 w-5 md:h-6 md:w-6' />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={closeSidebar}
              className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm xl:hidden'
            />

            <motion.div
              initial={{x: 300}}
              animate={{x: 0}}
              exit={{x: 300}}
              transition={{type: 'spring', damping: 25}}
              className='fixed top-0 right-0 z-50 flex h-screen w-80 flex-col overflow-y-auto bg-white shadow-2xl xl:hidden'
            >
              <div className='bg-gradient-to-l from-indigo-600 to-purple-600 p-6'>
                <div className='mb-6 flex items-center justify-between'>
                  <h3 className='text-white'>منو</h3>
                  <button
                    onClick={closeSidebar}
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30'
                  >
                    <X className='h-5 w-5' />
                  </button>
                </div>

                {user ? (
                  <div className='mb-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm'>
                    <div className='mb-3 flex items-center gap-3'>
                      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-lg text-white'>
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className='flex-1'>
                        <p className='text-white'>{user.name}</p>
                        <p className='text-sm text-white/70'>{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        closeSidebar();
                      }}
                      className='flex w-full items-center justify-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-white transition-colors hover:bg-white/30'
                    >
                      <LogOut className='h-4 w-4' />
                      <span>خروج</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      closeSidebar();
                    }}
                    className='flex w-full items-center justify-center gap-2 rounded-xl bg-white/20 px-4 py-3 text-white transition-colors hover:bg-white/30'
                  >
                    <LogIn className='h-5 w-5' />
                    <span>ورود / ثبت‌نام</span>
                  </button>
                )}

                <nav className='p-4'>
                  <ul className='space-y-2'>
                    {navItems.map(item => {
                      const Icon = item.icon;
                      const isActive = pathname === item.path;
                      return (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            onClick={closeSidebar}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                              isActive
                                ? 'bg-gradient-to-l from-indigo-600 to-purple-600 text-white shadow-lg'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <Icon className='h-5 w-5' />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className='mt-auto border-t border-gray-200 p-6'>
                  <div className='text-center text-sm text-gray-600'>
                    <p className='mb-2'>دکتر رضا احمدی</p>
                    <p className='text-xs text-gray-500'>
                      استاد دانشگاه صنعتی شریف
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modals */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}
