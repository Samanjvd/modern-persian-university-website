import {motion} from 'motion/react';
import {Clock, Users, CheckCircle, Play} from 'lucide-react';
import {ImageWithFallback} from '../components/ui/ImageWithFallback';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  students: number;
  duration: string;
  status: 'فعال' | 'تکمیل شده';
  semester: string;
}

export function Courses() {
  const courses: Course[] = [
    {
      id: 1,
      title: 'مبانی هوش مصنوعی',
      description:
        'آشنایی با مفاهیم پایه هوش مصنوعی، الگوریتم‌های جستجو، استدلال منطقی و برنامه‌ریزی خودکار',
      image:
        'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDYxMjI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      students: 85,
      duration: '16 هفته',
      status: 'فعال',
      semester: 'نیمسال اول 1403-1404',
    },
    {
      id: 2,
      title: 'یادگیری ماشین پیشرفته',
      description:
        'مطالعه عمیق الگوریتم‌های یادگیری ماشین شامل SVM، Random Forest، Gradient Boosting و مدل‌های ensemble',
      image:
        'https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NjQ2OTc1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      students: 62,
      duration: '16 هفته',
      status: 'فعال',
      semester: 'نیمسال اول 1403-1404',
    },
    {
      id: 3,
      title: 'یادگیری عمیق و شبکه‌های عصبی',
      description:
        'آموزش کامل شبکه‌های عصبی عمیق، CNN، RNN، LSTM، GAN و Transformer با پیاده‌سازی عملی در PyTorch',
      image:
        'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Njk3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      students: 74,
      duration: '16 هفته',
      status: 'فعال',
      semester: 'نیمسال دوم 1402-1403',
    },
    {
      id: 4,
      title: 'پردازش تصویر دیجیتال',
      description:
        'مبانی پردازش تصویر، فیلترهای مختلف، تشخیص لبه، segmentation و feature extraction',
      image:
        'https://images.unsplash.com/photo-1637008316269-8652ddb5746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjE3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      students: 58,
      duration: '16 هفته',
      status: 'تکمیل شده',
      semester: 'نیمسال دوم 1402-1403',
    },
    {
      id: 5,
      title: 'پردازش زبان طبیعی',
      description:
        'تکنیک‌های پردازش متن، مدل‌های زبانی، word embeddings، BERT و GPT',
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      students: 45,
      duration: '16 هفته',
      status: 'تکمیل شده',
      semester: 'نیمسال اول 1402-1403',
    },
    {
      id: 6,
      title: 'بینایی ماشین',
      description:
        'تشخیص اشیا، تشخیص چهره، pose estimation، object tracking و کاربردهای واقعی',
      image:
        'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NjA1MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      students: 52,
      duration: '16 هفته',
      status: 'تکمیل شده',
      semester: 'نیمسال اول 1402-1403',
    },
  ];

  const activeCourses = courses.filter(c => c.status === 'فعال');
  const completedCourses = courses.filter(c => c.status === 'تکمیل شده');

  const CourseCard = ({course, index}: {course: Course; index: number}) => (
    <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{delay: index * 0.1}}
      className='group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl'
    >
      <div className='relative h-56 overflow-hidden'>
        <ImageWithFallback
          src={course.image}
          alt={course.title}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
        <div
          className={`absolute top-4 left-4 rounded-full px-4 py-2 backdrop-blur-sm ${
            course.status === 'فعال'
              ? 'bg-green-500/90 text-white'
              : 'bg-gray-500/90 text-white'
          }`}
        >
          {course.status === 'فعال' ? (
            <div className='flex items-center gap-2'>
              <Play className='h-4 w-4' />
              {course.status}
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-4 w-4' />
              {course.status}
            </div>
          )}
        </div>
      </div>

      <div className='p-6'>
        <h3 className='mb-3 text-gray-900'>{course.title}</h3>
        <p className='mb-4 leading-relaxed text-gray-600'>
          {course.description}
        </p>

        <div className='space-y-2 border-t border-gray-200 pt-4'>
          <div className='flex items-center gap-2 text-gray-600'>
            <Users className='h-4 w-4 text-indigo-600' />
            <span>{course.students} دانشجو</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600'>
            <Clock className='h-4 w-4 text-indigo-600' />
            <span>{course.duration}</span>
          </div>
          <p className='text-sm text-gray-500'>{course.semester}</p>
        </div>

        <motion.button
          whileHover={{scale: 1.02}}
          whileTap={{scale: 0.98}}
          className='mt-4 w-full rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg transition-all hover:shadow-xl'
        >
          مشاهده سرفصل‌ها
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className='min-h-screen py-12'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          className='mb-16 text-center'
        >
          <h1 className='mb-4 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
            دوره‌های آموزشی
          </h1>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            دوره‌های کارشناسی ارشد و دکترا در حوزه هوش مصنوعی و یادگیری ماشین
          </p>
        </motion.div>

        {/* Active Courses */}
        <section className='mb-16'>
          <motion.h2
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            className='mb-8 flex items-center gap-3'
          >
            <div className='h-8 w-3 rounded-full bg-gradient-to-b from-green-600 to-green-400'></div>
            دوره‌های فعال
          </motion.h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {activeCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </section>

        {/* Completed Courses */}
        <section>
          <motion.h2
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            className='mb-8 flex items-center gap-3'
          >
            <div className='h-8 w-3 rounded-full bg-gradient-to-b from-gray-600 to-gray-400'></div>
            دوره‌های تکمیل شده
          </motion.h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {completedCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
