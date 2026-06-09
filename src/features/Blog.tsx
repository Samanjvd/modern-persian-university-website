import {motion} from 'motion/react';
import {Calendar, Clock, Tag, ArrowLeft} from 'lucide-react';
import {ImageWithFallback} from '../components/ui/ImageWithFallback';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'آینده هوش مصنوعی در ایران: فرصت‌ها و چالش‌ها',
      excerpt:
        'بررسی وضعیت فعلی هوش مصنوعی در ایران و چشم‌انداز توسعه آن در سال‌های آینده. نگاهی به پتانسیل‌های موجود و موانع پیش رو.',
      image:
        'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDYxMjI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۱۵ آذر ۱۴۰۳',
      readTime: '۸ دقیقه',
      category: 'هوش مصنوعی',
    },
    {
      id: 2,
      title: 'یادگیری عمیق: از تئوری تا عمل',
      excerpt:
        'راهنمای جامع برای شروع یادگیری عمیق، از مفاهیم پایه تا پیاده‌سازی پروژه‌های واقعی با PyTorch و TensorFlow.',
      image:
        'https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NjQ2OTc1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۸ آذر ۱۴۰۳',
      readTime: '۱۲ دقیقه',
      category: 'یادگیری ماشین',
    },
    {
      id: 3,
      title: 'توصیه‌هایی برای دانشجویان کارشناسی ارشد',
      excerpt:
        'نکات مهم برای دانشجویان تازه‌وارد دوره کارشناسی ارشد در زمینه هوش مصنوعی و یادگیری ماشین.',
      image:
        'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Njk3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۲ آذر ۱۴۰۳',
      readTime: '۶ دقیقه',
      category: 'آموزش',
    },
    {
      id: 4,
      title: 'چگونه یک محقق موفق باشیم؟',
      excerpt:
        'تجربیات و نکات کلیدی برای موفقیت در پژوهش علمی و انتشار مقالات در مجلات معتبر بین‌المللی.',
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۲۵ آبان ۱۴۰۳',
      readTime: '۱۰ دقیقه',
      category: 'پژوهش',
    },
    {
      id: 5,
      title: 'مروری بر مدل‌های زبانی بزرگ (LLMs)',
      excerpt:
        'نگاهی عمیق به معماری و کاربردهای مدل‌های زبانی بزرگ مانند GPT، BERT و Claude.',
      image:
        'https://images.unsplash.com/photo-1637008316269-8652ddb5746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjE3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۱۸ آبان ۱۴۰۳',
      readTime: '۱۵ دقیقه',
      category: 'هوش مصنوعی',
    },
    {
      id: 6,
      title: 'اخلاق در هوش مصنوعی: چالش‌های پیش رو',
      excerpt:
        'بحث درباره مسائل اخلاقی در توسعه و استفاده از سیستم‌های هوش مصنوعی و راه‌حل‌های پیشنهادی.',
      image:
        'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NjA1MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '۱۲ آبان ۱۴۰۳',
      readTime: '۹ دقیقه',
      category: 'پژوهش',
    },
  ];

  const categories = [
    'همه',
    ...Array.from(new Set(blogPosts.map(post => post.category))),
  ];

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
            وبلاگ
          </h1>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            مقالات، یادداشت‌ها و تجربیات من در حوزه هوش مصنوعی و آموزش
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2}}
          className='mb-16'
        >
          <Link href={`/blog/${blogPosts[0].id}`} className='group'>
            <div className='overflow-hidden rounded-3xl bg-white shadow-xl transition-shadow hover:shadow-2xl'>
              <div className='grid gap-6 lg:grid-cols-2'>
                <div className='relative h-80 overflow-hidden lg:h-auto'>
                  <ImageWithFallback
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute top-4 right-4 rounded-full bg-gradient-to-l from-indigo-600 to-purple-600 px-4 py-2 text-sm text-white'>
                    مقاله ویژه
                  </div>
                </div>
                <div className='flex flex-col justify-center p-8'>
                  <div className='mb-4 flex items-center gap-4'>
                    <span className='flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-600'>
                      <Tag className='h-3 w-3' />
                      {blogPosts[0].category}
                    </span>
                    <span className='flex items-center gap-1 text-sm text-gray-500'>
                      <Calendar className='h-4 w-4' />
                      {blogPosts[0].date}
                    </span>
                    <span className='flex items-center gap-1 text-sm text-gray-500'>
                      <Clock className='h-4 w-4' />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className='mb-4 transition-colors group-hover:text-indigo-600'>
                    {blogPosts[0].title}
                  </h2>
                  <p className='mb-6 leading-relaxed text-gray-600'>
                    {blogPosts[0].excerpt}
                  </p>
                  <div className='flex items-center gap-2 text-indigo-600 transition-all group-hover:gap-3'>
                    <span>ادامه مطلب</span>
                    <ArrowLeft className='h-5 w-5' />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3 + index * 0.1}}
            >
              <Link href={`/blog/${post.id}`} className='group block'>
                <div className='overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl'>
                  <div className='relative h-56 overflow-hidden'>
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                  </div>
                  <div className='p-6'>
                    <div className='mb-3 flex items-center gap-3'>
                      <span className='flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-600'>
                        <Tag className='h-3 w-3' />
                        {post.category}
                      </span>
                    </div>
                    <h3 className='mb-3 text-gray-900 transition-colors group-hover:text-indigo-600'>
                      {post.title}
                    </h3>
                    <p className='mb-4 line-clamp-2 leading-relaxed text-gray-600'>
                      {post.excerpt}
                    </p>
                    <div className='flex items-center gap-4 border-t border-gray-200 pt-4 text-sm text-gray-500'>
                      <span className='flex items-center gap-1'>
                        <Calendar className='h-4 w-4' />
                        {post.date}
                      </span>
                      <span className='flex items-center gap-1'>
                        <Clock className='h-4 w-4' />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
