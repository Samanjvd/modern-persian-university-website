import {motion} from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from 'lucide-react';
import {useState} from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('پیام شما با موفقیت ارسال شد!');
    setFormData({name: '', email: '', subject: '', message: ''});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'ایمیل',
      value: 'r.ahmadi@sharif.edu',
      link: 'mailto:r.ahmadi@sharif.edu',
    },
    {
      icon: Phone,
      title: 'تلفن',
      value: '۰۲۱-۶۶۱۶۵۷۰۱',
      link: 'tel:+982166165701',
    },
    {
      icon: MapPin,
      title: 'آدرس',
      value: 'تهران، دانشگاه صنعتی شریف، دانشکده مهندسی کامپیوتر',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com',
      color: 'from-sky-500 to-blue-600',
    },
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
            تماس با من
          </h1>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            برای همکاری‌های علمی، پرسش‌های پژوهشی یا مشاوره با من در ارتباط
            باشید
          </p>
        </motion.div>

        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Contact Form */}
          <motion.div
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.2}}
            className='rounded-3xl bg-white p-8 shadow-xl'
          >
            <h2 className='mb-6'>فرم تماس</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='mb-2 block text-gray-700'>
                  نام و نام خانوادگی
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full rounded-xl border border-gray-300 px-4 py-3 transition-all outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                  placeholder='نام خود را وارد کنید'
                />
              </div>

              <div>
                <label htmlFor='email' className='mb-2 block text-gray-700'>
                  ایمیل
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full rounded-xl border border-gray-300 px-4 py-3 transition-all outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                  placeholder='example@email.com'
                />
              </div>

              <div>
                <label htmlFor='subject' className='mb-2 block text-gray-700'>
                  موضوع
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full rounded-xl border border-gray-300 px-4 py-3 transition-all outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                  placeholder='موضوع پیام خود را وارد کنید'
                />
              </div>

              <div>
                <label htmlFor='message' className='mb-2 block text-gray-700'>
                  پیام
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full resize-none rounded-xl border border-gray-300 px-4 py-3 transition-all outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                  placeholder='پیام خود را بنویسید...'
                />
              </div>

              <motion.button
                type='submit'
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                className='flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-8 py-4 text-white shadow-lg transition-all hover:shadow-xl'
              >
                <Send className='h-5 w-5' />
                ارسال پیام
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{opacity: 0, x: 30}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.3}}
            className='space-y-6'
          >
            {/* Contact Details */}
            <div className='rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8'>
              <h3 className='mb-6'>اطلاعات تماس</h3>
              <div className='space-y-4'>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{delay: 0.4 + index * 0.1}}
                      className='group flex items-start gap-4 rounded-2xl bg-white p-4 transition-shadow hover:shadow-lg'
                    >
                      <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 transition-transform group-hover:scale-110'>
                        <Icon className='h-6 w-6 text-white' />
                      </div>
                      <div className='flex-1'>
                        <p className='mb-1 text-sm text-gray-600'>
                          {info.title}
                        </p>
                        <p className='text-gray-900'>{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className='rounded-3xl bg-white p-8 shadow-xl'>
              <h3 className='mb-6'>شبکه‌های اجتماعی و علمی</h3>
              <div className='flex flex-wrap gap-4'>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      initial={{opacity: 0, scale: 0.8}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{delay: 0.6 + index * 0.1}}
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.95}}
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg transition-all hover:shadow-xl`}
                    >
                      <Icon className='h-8 w-8' />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className='rounded-3xl bg-white p-8 shadow-xl'>
              <h3 className='mb-6'>ساعات حضور</h3>
              <div className='space-y-3'>
                <div className='flex items-center justify-between border-b border-gray-200 pb-3'>
                  <span className='text-gray-700'>شنبه - چهارشنبه</span>
                  <span className='text-indigo-600'>۱۰:۰۰ - ۱۶:۰۰</span>
                </div>
                <div className='flex items-center justify-between border-b border-gray-200 pb-3'>
                  <span className='text-gray-700'>پنج‌شنبه</span>
                  <span className='text-indigo-600'>۱۰:۰۰ - ۱۲:۰۰</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-700'>جمعه</span>
                  <span className='text-gray-500'>تعطیل</span>
                </div>
              </div>
              <p className='mt-6 rounded-xl bg-amber-50 p-4 text-sm text-gray-600'>
                <strong>توجه:</strong> برای ملاقات حضوری لطفاً از قبل وقت
                بگیرید.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
