import {useState} from 'react';
import {motion} from 'motion/react';
import {Tag, ExternalLink} from 'lucide-react';
import {ImageWithFallback} from '../components/ui/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
}

export function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>('همه');

  const projects: Project[] = [
    {
      id: 1,
      title: 'سیستم تشخیص چهره با یادگیری عمیق',
      description:
        'توسعه سیستم تشخیص چهره با دقت بالا با استفاده از شبکه‌های عصبی عمیق و پردازش تصاویر در زمان واقعی',
      image:
        'https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NjQ2OTc1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['پژوهشی', 'نرم‌افزار'],
      year: '2024',
    },
    {
      id: 2,
      title: 'پلتفرم یادگیری آنلاین هوشمند',
      description:
        'طراحی و پیاده‌سازی سیستم آموزش آنلاین با قابلیت توصیه محتوا و تحلیل پیشرفت دانشجو با الگوریتم‌های یادگیری ماشین',
      image:
        'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Njk3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['نرم‌افزار', 'ویدیو'],
      year: '2023',
    },
    {
      id: 3,
      title: 'تحلیل احساسات در شبکه‌های اجتماعی',
      description:
        'پروژه پژوهشی برای تحلیل نظرات کاربران در شبکه‌های اجتماعی با استفاده از پردازش زبان طبیعی و یادگیری عمیق',
      image:
        'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDYxMjI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['پژوهشی'],
      year: '2023',
    },
    {
      id: 4,
      title: 'روبات خودران برای محیط‌های داخلی',
      description:
        'طراحی و ساخت روبات خودران برای حرکت در محیط‌های داخلی با استفاده از سنسورهای LIDAR و دوربین',
      image:
        'https://images.unsplash.com/photo-1637008316269-8652ddb5746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjE3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['پژوهشی', 'نرم‌افزار'],
      year: '2022',
    },
    {
      id: 5,
      title: 'سیستم توصیه محتوا برای سرویس‌های استریمینگ',
      description:
        'الگوریتم توصیه محتوا مبتنی بر فیلترینگ مشارکتی و یادگیری عمیق برای پلتفرم‌های ویدیویی',
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['نرم‌افزار', 'ویدیو'],
      year: '2022',
    },
    {
      id: 6,
      title: 'تشخیص بیماری‌ها از تصاویر پزشکی',
      description:
        'سیستم تشخیص بیماری‌های مختلف از تصاویر رادیولوژی با استفاده از شبکه‌های کانولوشنال عمیق',
      image:
        'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NjA1MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['پژوهشی'],
      year: '2021',
    },
  ];

  const allTags = [
    'همه',
    ...Array.from(new Set(projects.flatMap(p => p.tags))),
  ];

  const filteredProjects =
    selectedTag === 'همه'
      ? projects
      : projects.filter(p => p.tags.includes(selectedTag));

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
            پروژه‌ها
          </h1>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            مجموعه پروژه‌های تحقیقاتی و کاربردی در حوزه هوش مصنوعی و یادگیری
            ماشین
          </p>
        </motion.div>

        {/* Tags Filter */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2}}
          className='mb-12 flex flex-wrap justify-center gap-3'
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-6 py-2 transition-all ${
                selectedTag === tag
                  ? 'bg-gradient-to-l from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow hover:bg-gray-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: index * 0.1}}
              whileHover={{y: -8}}
              className='group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl'
            >
              <div className='relative h-48 overflow-hidden'>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-sm text-gray-700 backdrop-blur-sm'>
                  {project.year}
                </div>
              </div>

              <div className='p-6'>
                <h3 className='mb-3 text-gray-900'>{project.title}</h3>
                <p className='mb-4 leading-relaxed text-gray-600'>
                  {project.description}
                </p>

                <div className='mb-4 flex flex-wrap gap-2'>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className='flex items-center gap-1 rounded-full bg-gradient-to-l from-indigo-100 to-purple-100 px-3 py-1 text-sm text-indigo-600'
                    >
                      <Tag className='h-3 w-3' />
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className='flex items-center gap-2 text-indigo-600 transition-colors hover:text-purple-600'
                >
                  مشاهده جزئیات
                  <ExternalLink className='h-4 w-4' />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
