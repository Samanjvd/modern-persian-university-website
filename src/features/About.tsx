import {motion} from 'motion/react';
import {GraduationCap, Briefcase, Download, Award} from 'lucide-react';

export function About() {
  const fadeInUp = {
    initial: {opacity: 0, y: 30},
    animate: {opacity: 1, y: 0},
  };

  const education = [
    {
      degree: 'دکترای مهندسی کامپیوتر',
      field: 'هوش مصنوعی و یادگیری ماشین',
      university: 'دانشگاه استنفورد، ایالات متحده',
      year: '2008',
    },
    {
      degree: 'کارشناسی ارشد مهندسی کامپیوتر',
      field: 'نرم‌افزار',
      university: 'دانشگاه صنعتی شریف، ایران',
      year: '2004',
    },
    {
      degree: 'کارشناسی مهندسی کامپیوتر',
      field: 'نرم‌افزار',
      university: 'دانشگاه تهران، ایران',
      year: '2002',
    },
  ];

  const experience = [
    {
      position: 'استاد تمام',
      department: 'دانشکده مهندسی کامپیوتر',
      university: 'دانشگاه صنعتی شریف',
      period: '2015 - اکنون',
    },
    {
      position: 'استاد دانشیار',
      department: 'دانشکده مهندسی کامپیوتر',
      university: 'دانشگاه صنعتی شریف',
      period: '2010 - 2015',
    },
    {
      position: 'استادیار',
      department: 'دانشکده مهندسی کامپیوتر',
      university: 'دانشگاه تهران',
      period: '2008 - 2010',
    },
  ];

  const specializations = [
    'هوش مصنوعی و یادگیری عمیق',
    'پردازش تصویر و بینایی ماشین',
    'پردازش زبان طبیعی',
    'یادگیری تقویتی',
    'سیستم‌های توصیه‌گر',
    'داده‌کاوی و تحلیل داده',
  ];

  return (
    <div className='min-h-screen py-12'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial='initial'
          animate='animate'
          className='mb-16 text-center'
        >
          <h1 className='mb-4 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
            درباره من
          </h1>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            سفر علمی من از پژوهش در دانشگاه‌های برتر جهان تا تدریس و راهنمایی
            دانشجویان
          </p>
        </motion.div>

        {/* Biography */}
        <motion.section
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className='mb-12 rounded-3xl bg-white p-8 shadow-lg md:p-12'
        >
          <h2 className='mb-6 flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600'>
              <Award className='h-5 w-5 text-white' />
            </div>
            بیوگرافی
          </h2>
          <div className='prose prose-lg max-w-none'>
            <p className='mb-4 leading-relaxed text-gray-700'>
              دکتر رضا احمدی، استاد تمام دانشکده مهندسی کامپیوتر دانشگاه صنعتی
              شریف، با بیش از ۱۵ سال تجربه تدریس و پژوهش در حوزه هوش مصنوعی و
              یادگیری ماشین، یکی از چهره‌های برجسته علمی کشور در این حوزه است.
            </p>
            <p className='mb-4 leading-relaxed text-gray-700'>
              ایشان پس از اخذ مدرک دکترای خود از دانشگاه استنفورد در سال ۲۰۰۸،
              به کشور بازگشته و فعالیت‌های تحقیقاتی و آموزشی خود را در
              دانشگاه‌های معتبر ایران آغاز کردند. تاکنون بیش از ۱۰۰ مقاله علمی
              در مجلات و کنفرانس‌های معتبر بین‌المللی منتشر کرده و در راهنمایی
              بیش از ۵۰ پایان‌نامه کارشناسی ارشد و دکترا مشارکت داشته است.
            </p>
            <p className='leading-relaxed text-gray-700'>
              علاوه بر فعالیت‌های آکادمیک، دکتر احمدی به عنوان مشاور فناوری در
              چندین شرکت دانش‌بنیان فعال بوده و در انتقال دانش از دانشگاه به
              صنعت نقش مؤثری ایفا کرده است.
            </p>
          </div>

          <motion.button
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className='mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-8 py-3 text-white shadow-lg transition-all hover:shadow-xl'
          >
            <Download className='h-5 w-5' />
            دانلود رزومه (CV)
          </motion.button>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className='mb-12'
        >
          <h2 className='mb-8 flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600'>
              <GraduationCap className='h-5 w-5 text-white' />
            </div>
            تحصیلات
          </h2>
          <div className='grid gap-6'>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className='rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl'
              >
                <div className='flex items-start gap-4'>
                  <div className='rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 p-3'>
                    <GraduationCap className='h-6 w-6 text-indigo-600' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='mb-1 text-indigo-600'>{edu.degree}</h3>
                    <p className='mb-2 text-gray-700'>{edu.field}</p>
                    <p className='text-gray-600'>{edu.university}</p>
                    <p className='mt-2 text-sm text-gray-500'>{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Teaching Experience */}
        <motion.section
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className='mb-12'
        >
          <h2 className='mb-8 flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600'>
              <Briefcase className='h-5 w-5 text-white' />
            </div>
            سوابق تدریس
          </h2>
          <div className='grid gap-6'>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className='rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl'
              >
                <div className='flex items-start gap-4'>
                  <div className='rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 p-3'>
                    <Briefcase className='h-6 w-6 text-purple-600' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='mb-1 text-purple-600'>{exp.position}</h3>
                    <p className='mb-2 text-gray-700'>{exp.department}</p>
                    <p className='text-gray-600'>{exp.university}</p>
                    <p className='mt-2 text-sm text-gray-500'>{exp.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Specializations */}
        <motion.section
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className='rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-12'
        >
          <h2 className='mb-8 text-center'>حوزه‌های تخصصی</h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: index * 0.05}}
                className='rounded-xl bg-white p-4 text-center shadow transition-shadow hover:shadow-lg'
              >
                <p className='text-gray-700'>{spec}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
