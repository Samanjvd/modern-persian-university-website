export function Footer() {
  return (
    <footer className='mt-20 bg-gray-900 py-12 text-white'>
      <div className='container mx-auto px-4'>
        <div className='mb-8 grid gap-8 md:grid-cols-3'>
          <div>
            <h3 className='mb-4'>دکتر رضا احمدی</h3>
            <p className='leading-relaxed text-gray-400'>
              استاد دانشکده مهندسی کامپیوتر، دانشگاه صنعتی شریف
            </p>
          </div>
          <div>
            <h4 className='mb-4'>دسترسی سریع</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/about'
                  className='text-gray-400 transition-colors hover:text-white'
                >
                  درباره من
                </a>
              </li>
              <li>
                <a
                  href='/projects'
                  className='text-gray-400 transition-colors hover:text-white'
                >
                  پروژه‌ها
                </a>
              </li>
              <li>
                <a
                  href='/courses'
                  className='text-gray-400 transition-colors hover:text-white'
                >
                  دوره‌ها
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-gray-400 transition-colors hover:text-white'
                >
                  تماس
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-4'>تماس</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>ایمیل: r.ahmadi@sharif.edu</li>
              <li>تلفن: ۰۲۱-۶۶۱۶۵۷۰۱</li>
              <li>دانشگاه صنعتی شریف، تهران</li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-800 pt-8 text-center text-gray-400'>
          <p>&copy; ۱۴۰۳ دکتر رضا احمدی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
