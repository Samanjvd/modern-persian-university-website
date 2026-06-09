import {useState} from 'react';
import {motion} from 'motion/react';
import {Trophy, Users, Gavel, Calendar} from 'lucide-react';
import {ImageWithFallback} from '../components/ui/ImageWithFallback';

interface Honor {
  id: number;
  title: string;
  event: string;
  year: string;
  image: string;
  description: string;
}

export function Honors() {
  const [activeTab, setActiveTab] = useState<'personal' | 'team' | 'judging'>(
    'personal',
  );

  const personalAwards: Honor[] = [
    {
      id: 1,
      title: 'جایزه بهترین پژوهشگر سال',
      event: 'دانشگاه صنعتی شریف',
      year: '1402',
      image:
        'https://images.unsplash.com/photo-1762345127396-ac4a970436c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMHRyb3BoeSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc2NDYyNTM3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'دریافت جایزه بهترین پژوهشگر سال دانشکده مهندسی کامپیوتر',
    },
    {
      id: 2,
      title: 'جایزه برترین مقاله کنفرانس CVPR',
      event: 'کنفرانس بین‌المللی بینایی ماشین',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'مقاله در زمینه تشخیص اشیا با دقت بالا',
    },
    {
      id: 3,
      title: 'جایزه استاد نمونه',
      event: 'وزارت علوم، تحقیقات و فناوری',
      year: '1401',
      image:
        'https://images.unsplash.com/photo-1637008316269-8652ddb5746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjE3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'تقدیر به عنوان استاد نمونه کشوری',
    },
  ];

  const teamAchievements: Honor[] = [
    {
      id: 4,
      title: 'رتبه اول مسابقات ملی هوش مصنوعی',
      event: 'انجمن علمی هوش مصنوعی ایران',
      year: '1402',
      image:
        'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NjA1MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'راهنمایی تیم دانشجویی به کسب رتبه اول',
    },
    {
      id: 5,
      title: 'برنده چالش ImageNet',
      event: 'مسابقات بین‌المللی تشخیص تصویر',
      year: '2022',
      image:
        'https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NjQ2OTc1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'تیم تحت راهنمایی در جمع 3 تیم برتر جهان',
    },
    {
      id: 6,
      title: 'کسب مقام سوم رقابت Kaggle',
      event: 'پلتفرم Kaggle',
      year: '2021',
      image:
        'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDYxMjI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'تیم دانشجویی در رقابت بین‌المللی پیش‌بینی داده',
    },
  ];

  const judgingRoles: Honor[] = [
    {
      id: 7,
      title: 'داور کنفرانس NeurIPS',
      event: 'کنفرانس یادگیری ماشین',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2NDY1NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'عضو کمیته علمی و داوری مقالات',
    },
    {
      id: 8,
      title: 'داور جشنواره خوارزمی',
      event: 'جشنواره ملی خوارزمی',
      year: '1402',
      image:
        'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Njk3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'داوری پروژه‌های فناوری و نوآوری',
    },
    {
      id: 9,
      title: 'داور رویداد AI Startup',
      event: 'رویداد استارت‌آپ‌های هوش مصنوعی',
      year: '1401',
      image:
        'https://images.unsplash.com/photo-1637008316269-8652ddb5746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjE3MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'ارزیابی و منتورینگ استارت‌آپ‌های حوزه AI',
    },
  ];

  const tabs = [
    {
      id: 'personal' as const,
      label: 'جوایز شخصی',
      icon: Trophy,
      data: personalAwards,
    },
    {
      id: 'team' as const,
      label: 'افتخارات تیمی',
      icon: Users,
      data: teamAchievements,
    },
    {
      id: 'judging' as const,
      label: 'داوری مسابقات',
      icon: Gavel,
      data: judgingRoles,
    },
  ];

  const currentData = tabs.find(tab => tab.id === activeTab)?.data || [];

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
            افتخارات و جوایز
          </h1>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            مجموعه‌ای از دستاوردها، جوایز علمی و نقش‌های تخصصی در رویدادهای علمی
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2}}
          className='mb-12 flex flex-wrap justify-center gap-4'
        >
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 rounded-2xl px-8 py-4 transition-all ${
                  activeTab === tab.id
                    ? 'scale-105 bg-gradient-to-l from-indigo-600 to-purple-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 shadow-lg hover:bg-gray-50 hover:shadow-xl'
                }`}
              >
                <Icon className='h-5 w-5' />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {currentData.map((honor, index) => (
            <motion.div
              key={honor.id}
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: index * 0.1}}
              className='group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl'
            >
              <div className='relative h-56 overflow-hidden'>
                <ImageWithFallback
                  src={honor.image}
                  alt={honor.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
                <div className='absolute right-4 bottom-4 left-4'>
                  <div className='mb-2 flex items-center gap-2 text-sm text-white/90'>
                    <Calendar className='h-4 w-4' />
                    {honor.year}
                  </div>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='mb-2 text-gray-900'>{honor.title}</h3>
                <p className='mb-3 text-indigo-600'>{honor.event}</p>
                <p className='leading-relaxed text-gray-600'>
                  {honor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {currentData.length === 0 && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className='py-20 text-center'
          >
            <p className='text-xl text-gray-500'>
              در حال حاضر موردی برای نمایش وجود ندارد
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
