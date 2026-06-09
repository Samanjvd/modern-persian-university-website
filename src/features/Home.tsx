import {useState} from 'react';
import Link from 'next/link';
import {motion} from 'motion/react';
import {
  BookOpen,
  Briefcase,
  Award,
  ArrowLeft,
  Tag,
  Calendar,
  Clock,
  Play,
  Image as ImageIcon,
} from 'lucide-react';
import {ImageWithFallback} from '../components/ui/ImageWithFallback';
import {AdviceButton} from '../components/AdviceButton';
import {AdviceModal} from '../components/AdviceModal';

export function Home() {
  const [isAdviceModalOpen, setIsAdviceModalOpen] = useState(false);

  const fadeInUp = {
    initial: {opacity: 0, y: 30},
    animate: {opacity: 1, y: 0},
  };

  // Preview data
  const previewProjects = [
    {
      id: 1,
      title: 'سیستم تشخیص چهره با یادگیری عمیق',
      description: 'توسعه سیستم تشخیص چهره با دقت بالا',
      image:
        'https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NjQ2OTc1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['پژوهشی', 'نرم‌افزار'],
    },
    {
      id: 2,
      title: 'پلتفرم یادگیری آنلاین هوشمند',
      description: 'طراحی سیستم آموزش با الگوریتم‌های یادگیری ماشین',
      image:
        'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Njk3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['نرم‌افزار'],
    },
    {
      id: 3,
      title: 'تحلیل احساسات در شبکه‌های اجتماعی',
      description: 'پروژه پژوهشی با پردازش زبان طبیعی',
      image:
        'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDYxMjI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['پژوهشی'],
    },
    {
      id: 4,
      title: 'روبات خودران برای محیط‌های داخلی',
      description: 'طراحی روبات با سنسورهای LIDAR و دوربین',
      image:
        'https://images.unsplash.com/photo-1637008316269-8652ddb5746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjE3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['پژوهشی'],
    },
  ];

  const previewCourses = [
    {
      id: 1,
      title: 'مبانی هوش مصنوعی',
      image:
        'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDYxMjI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      students: 85,
      status: 'فعال',
    },
    {
      id: 2,
      title: 'یادگیری ماشین پیشرفته',
      image:
        'https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NjQ2OTc1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      students: 62,
      status: 'فعال',
    },
    {
      id: 3,
      title: 'یادگیری عمیق',
      image:
        'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Njk3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      students: 74,
      status: 'فعال',
    },
    {
      id: 4,
      title: 'پردازش زبان طبیعی',
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      students: 45,
      status: 'تکمیل شده',
    },
  ];

  const previewHonors = [
    {
      id: 1,
      title: 'جایزه بهترین پژوهشگر سال',
      event: 'دانشگاه صنعتی شریف',
      year: '1402',
      image:
        'https://images.unsplash.com/photo-1762345127396-ac4a970436c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMHRyb3BoeSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc2NDYyNTM3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'جایزه برترین مقاله CVPR',
      event: 'کنفرانس بین‌المللی',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'رتبه اول مسابقات ملی AI',
      event: 'انجمن علمی هوش مصنوعی',
      year: '1402',
      image:
        'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NjA1MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'جایزه استاد نمونه',
      event: 'وزارت علوم',
      year: '1401',
      image:
        'https://images.unsplash.com/photo-1637008316269-8652ddb5746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjE3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const previewGallery = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'image',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NjA1MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'image',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1637008316269-8652ddb5746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjE3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'image',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Njk3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'video',
    },
  ];

  const previewBlog = [
    {
      id: 1,
      title: 'آینده هوش مصنوعی در ایران',
      excerpt: 'بررسی وضعیت فعلی و چشم‌انداز توسعه',
      image:
        'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDYxMjI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۱۵ آذر ۱۴۰۳',
      readTime: '۸ دقیقه',
    },
    {
      id: 2,
      title: 'یادگیری عمیق: از تئوری تا عمل',
      excerpt: 'راهنمای جامع برای شروع یادگیری عمیق',
      image:
        'https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NjQ2OTc1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۸ آذر ۱۴۰۳',
      readTime: '۱۲ دقیقه',
    },
    {
      id: 3,
      title: 'توصیه‌هایی برای دانشجویان',
      excerpt: 'نکات مهم برای دانشجویان تازه‌وارد',
      image:
        'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Njk3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۲ آذر ۱۴۰۳',
      readTime: '۶ دقیقه',
    },
    {
      id: 4,
      title: 'چگونه یک محقق موفق باشیم؟',
      excerpt: 'تجربیات و نکات کلیدی برای موفقیت',
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۲۵ آبان ۱۴۰۳',
      readTime: '۱۰ دقیقه',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20'>
        <div className='flex flex-col items-center gap-12 lg:flex-row'>
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='flex-shrink-0'
          >
            <div className='relative'>
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 opacity-20 blur-2xl'></div>
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0NjQyMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080'
                alt='دکتر رضا احمدی'
                className='relative h-80 w-80 rounded-3xl object-cover shadow-2xl'
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial='initial'
            animate='animate'
            transition={{delay: 0.2}}
            className='flex-1 text-center lg:text-right'
          >
            <motion.h1
              variants={fadeInUp}
              transition={{delay: 0.3}}
              className='mb-4 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent'
            >
              دکتر رضا احمدی
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{delay: 0.4}}
              className='mb-6 text-xl text-gray-600'
            >
              استاد دانشکده مهندسی کامپیوتر | دانشگاه صنعتی شریف
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{delay: 0.5}}
              className='prose prose-lg mx-auto max-w-2xl lg:mx-0'
            >
              <p className='leading-relaxed text-gray-700'>
                با بیش از ۱۵ سال تجربه تدریس و پژوهش در حوزه هوش مصنوعی، یادگیری
                ماشین و پردازش تصویر، به دنبال ارتقای سطح علمی دانشجویان و توسعه
                پروژه‌های نوآورانه در صنعت و دانشگاه هستم.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{delay: 0.6}}
              className='mt-8 flex flex-wrap justify-center gap-4 lg:justify-start'
            >
              {[
                {
                  to: '/courses',
                  label: 'دوره‌های آموزشی',
                  icon: BookOpen,
                  color: 'from-blue-600 to-indigo-600',
                },
                {
                  to: '/projects',
                  label: 'پروژه‌ها',
                  icon: Briefcase,
                  color: 'from-purple-600 to-pink-600',
                },
                {
                  to: '/honors',
                  label: 'افتخارات',
                  icon: Award,
                  color: 'from-indigo-600 to-purple-600',
                },
              ].map(button => {
                const Icon = button.icon;
                return (
                  <Link
                    key={button.to}
                    href={button.to}
                    className='group relative'
                  >
                    <motion.div
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                      className={`bg-gradient-to-l ${button.color} flex items-center gap-2 rounded-xl px-6 py-3 text-white shadow-lg transition-all hover:shadow-xl`}
                    >
                      <Icon className='h-5 w-5' />
                      <span>{button.label}</span>
                      <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='bg-gradient-to-b from-gray-50 to-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            {[
              {number: '15+', label: 'سال تجربه تدریس'},
              {number: '50+', label: 'پروژه تحقیقاتی'},
              {number: '30+', label: 'دوره آموزشی'},
              {number: '20+', label: 'جایزه علمی'},
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className='rounded-2xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl'
              >
                <div className='mb-2 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-4xl text-transparent'>
                  {stat.number}
                </div>
                <div className='text-gray-600'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className='bg-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='mb-12 flex items-center justify-between'>
            <motion.h2
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              className='flex items-center gap-3'
            >
              <Briefcase className='h-8 w-8 text-indigo-600' />
              پروژه‌های تحقیقاتی
            </motion.h2>
            <Link href='/projects'>
              <motion.button
                whileHover={{scale: 1.05}}
                className='flex items-center gap-2 rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg'
              >
                مشاهده همه
                <ArrowLeft className='h-4 w-4' />
              </motion.button>
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {previewProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className='group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl'
              >
                <div className='relative h-48 overflow-hidden'>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                </div>
                <div className='p-4'>
                  <h4 className='mb-2 text-gray-900'>{project.title}</h4>
                  <p className='mb-3 text-sm text-gray-600'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className='rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-600'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className='bg-gray-50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='mb-12 flex items-center justify-between'>
            <motion.h2
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              className='flex items-center gap-3'
            >
              <BookOpen className='h-8 w-8 text-indigo-600' />
              دوره‌های آموزشی
            </motion.h2>
            <Link href='/courses'>
              <motion.button
                whileHover={{scale: 1.05}}
                className='flex items-center gap-2 rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg'
              >
                مشاهده همه
                <ArrowLeft className='h-4 w-4' />
              </motion.button>
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {previewCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className='group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl'
              >
                <div className='relative h-48 overflow-hidden'>
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div
                    className={`absolute top-3 left-3 rounded-full px-3 py-1 text-sm ${course.status === 'فعال' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
                  >
                    {course.status}
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='mb-2 text-gray-900'>{course.title}</h4>
                  <p className='text-sm text-gray-600'>
                    {course.students} دانشجو
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors Preview */}
      <section className='bg-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='mb-12 flex items-center justify-between'>
            <motion.h2
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              className='flex items-center gap-3'
            >
              <Award className='h-8 w-8 text-indigo-600' />
              افتخارات و جوایز
            </motion.h2>
            <Link href='/honors'>
              <motion.button
                whileHover={{scale: 1.05}}
                className='flex items-center gap-2 rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg'
              >
                مشاهده همه
                <ArrowLeft className='h-4 w-4' />
              </motion.button>
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {previewHonors.map((honor, index) => (
              <motion.div
                key={honor.id}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className='group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl'
              >
                <div className='relative h-48 overflow-hidden'>
                  <ImageWithFallback
                    src={honor.image}
                    alt={honor.title}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute right-3 bottom-3 rounded-full bg-white/90 px-3 py-1 text-sm backdrop-blur-sm'>
                    {honor.year}
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='mb-1 text-gray-900'>{honor.title}</h4>
                  <p className='text-sm text-gray-600'>{honor.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className='bg-gray-50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='mb-12 flex items-center justify-between'>
            <motion.h2
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              className='flex items-center gap-3'
            >
              <svg
                className='h-8 w-8 text-indigo-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                />
              </svg>
              وبلاگ
            </motion.h2>
            <Link href='/blog'>
              <motion.button
                whileHover={{scale: 1.05}}
                className='flex items-center gap-2 rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg'
              >
                مشاهده همه
                <ArrowLeft className='h-4 w-4' />
              </motion.button>
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {previewBlog.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className='group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl'
              >
                <div className='relative h-48 overflow-hidden'>
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                </div>
                <div className='p-4'>
                  <h4 className='mb-2 text-gray-900'>{post.title}</h4>
                  <p className='mb-3 text-sm text-gray-600'>{post.excerpt}</p>
                  <div className='flex items-center gap-3 text-xs text-gray-500'>
                    <span className='flex items-center gap-1'>
                      <Calendar className='h-3 w-3' />
                      {post.date}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock className='h-3 w-3' />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className='bg-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='mb-12 flex items-center justify-between'>
            <motion.h2
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              className='flex items-center gap-3'
            >
              <ImageIcon className='h-8 w-8 text-indigo-600' />
              گالری
            </motion.h2>
            <Link href='/gallery'>
              <motion.button
                whileHover={{scale: 1.05}}
                className='flex items-center gap-2 rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg'
              >
                مشاهده همه
                <ArrowLeft className='h-4 w-4' />
              </motion.button>
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {previewGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className='group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl'
              >
                <ImageWithFallback
                  src={item.src}
                  alt={`Gallery ${item.id}`}
                  className='h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                {item.type === 'video' && (
                  <div className='absolute inset-0 flex items-center justify-center bg-black/20'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/90'>
                      <Play className='h-6 w-6 text-indigo-600' />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advice Button & Modal */}
      <AdviceButton onClick={() => setIsAdviceModalOpen(true)} />
      <AdviceModal
        isOpen={isAdviceModalOpen}
        onClose={() => setIsAdviceModalOpen(false)}
      />
    </div>
  );
}
