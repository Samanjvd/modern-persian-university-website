import {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {X, Play, Image as ImageIcon} from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import {ImageWithFallback} from '../components/ui/ImageWithFallback';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  title: string;
  category: string;
}

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('همه');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'ارائه در کنفرانس بین‌المللی',
      category: 'کنفرانس',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NjA1MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'جلسه با تیم تحقیقاتی',
      category: 'کارگاه',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1637008316269-8652ddb5746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjE3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'محیط دانشگاه',
      category: 'دانشگاه',
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ2NjY4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'محیط آزمایشگاه',
      category: 'دانشگاه',
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzdHVkeXxlbnwxfHx8fDE3NjQ2NTk4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'کتابخانه تحقیقاتی',
      category: 'دانشگاه',
    },
    {
      id: 6,
      type: 'video',
      src: 'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Njk3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'کلاس آنلاین یادگیری عمیق',
      category: 'دوره',
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc2NDY0Mjg2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'آزمایشگاه تحقیقاتی',
      category: 'کارگاه',
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1664355680555-12687f77e0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjQ1ODYwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'فضای کاری',
      category: 'دانشگاه',
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NDY5NzA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'کلاس درس',
      category: 'دوره',
    },
    {
      id: 10,
      type: 'video',
      src: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjQ2MDQ4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'آموزش برنامه‌نویسی',
      category: 'دوره',
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDYxMjI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'پروژه هوش مصنوعی',
      category: 'کارگاه',
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1762345127396-ac4a970436c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMHRyb3BoeSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc2NDYyNTM3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'مراسم اهدای جایزه',
      category: 'کنفرانس',
    },
  ];

  const categories = [
    'همه',
    ...Array.from(new Set(galleryItems.map(item => item.category))),
  ];
  const filteredItems =
    filter === 'همه'
      ? galleryItems
      : galleryItems.filter(item => item.category === filter);

  return (
    <div className='min-h-screen py-12'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          className='mb-12 text-center'
        >
          <h1 className='mb-4 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
            گالری تصاویر و ویدیوها
          </h1>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            لحظات به‌یادماندنی از کنفرانس‌ها، کارگاه‌ها و کلاس‌های درس
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2}}
          className='mb-12 flex flex-wrap justify-center gap-3'
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-6 py-2 transition-all ${
                filter === category
                  ? 'bg-gradient-to-l from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter='1.5rem'>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: index * 0.05}}
              onClick={() => setSelectedItem(item)}
              className='group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl'
            >
              <ImageWithFallback
                src={item.src}
                alt={item.title}
                className='h-auto w-full transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100'>
                <div className='absolute right-0 bottom-0 left-0 p-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='mb-1 text-white'>{item.title}</h4>
                      <p className='text-sm text-white/80'>{item.category}</p>
                    </div>
                    {item.type === 'video' && (
                      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm'>
                        <Play className='h-6 w-6 text-white' />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {item.type === 'video' && (
                <div className='absolute top-3 left-3 rounded-full bg-white/90 p-2 backdrop-blur-sm'>
                  <Play className='h-5 w-5 text-indigo-600' />
                </div>
              )}
            </motion.div>
          ))}
        </Masonry>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setSelectedItem(null)}
              className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm'
            >
              <button
                onClick={() => setSelectedItem(null)}
                className='absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'
              >
                <X className='h-6 w-6' />
              </button>

              <motion.div
                initial={{scale: 0.8, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.8, opacity: 0}}
                onClick={e => e.stopPropagation()}
                className='w-full max-w-5xl'
              >
                {selectedItem.type === 'image' ? (
                  <ImageWithFallback
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className='h-auto w-full rounded-2xl shadow-2xl'
                  />
                ) : (
                  <div className='relative aspect-video overflow-hidden rounded-2xl bg-gray-900'>
                    <ImageWithFallback
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      className='h-full w-full object-cover'
                    />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm'>
                        <Play className='h-10 w-10 text-white' />
                      </div>
                    </div>
                  </div>
                )}
                <div className='mt-6 text-center'>
                  <h3 className='mb-2 text-white'>{selectedItem.title}</h3>
                  <p className='text-white/70'>{selectedItem.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
