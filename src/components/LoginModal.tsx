import {useState, useRef, useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {
  X,
  Smartphone,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Send,
} from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (phone: string, name: string) => void;
}

export function LoginModal({isOpen, onClose, onLogin}: LoginModalProps) {
  const [step, setStep] = useState<'phone' | 'verification' | 'register'>(
    'phone',
  );
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer for resend code
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep('phone');
      setPhoneNumber('');
      setName('');
      setPassword('');
      setVerificationCode(['', '', '', '', '', '']);
      setCountdown(0);
    }
  }, [isOpen]);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending SMS
    setStep('verification');
    setCountdown(120); // 2 minutes
  };

  const handleVerificationCodeChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerificationCodeKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerificationCodePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const digits = pastedData.split('').filter(char => /^\d$/.test(char));

    const newCode = [...verificationCode];
    digits.forEach((digit, index) => {
      if (index < 6) {
        newCode[index] = digit;
      }
    });
    setVerificationCode(newCode);

    // Focus the next empty input or last input
    const nextEmptyIndex = newCode.findIndex(code => !code);
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join('');
    if (code.length === 6) {
      // Check if user exists (simulate)
      const userExists = phoneNumber.startsWith('0912'); // Just for demo
      if (userExists) {
        // User exists, login directly
        onLogin(phoneNumber, 'کاربر شماره ' + phoneNumber.slice(-4));
        onClose();
      } else {
        // New user, go to registration
        setStep('register');
      }
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(phoneNumber, name);
    onClose();
  };

  const handleResendCode = () => {
    if (countdown === 0) {
      setCountdown(120);
      setVerificationCode(['', '', '', '', '', '']);
      // Simulate resending SMS
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Format as 09XX XXX XXXX
    if (digits.length <= 4) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 11);
    setPhoneNumber(value);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
            className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm'
          />

          {/* Modal */}
          <motion.div
            initial={{opacity: 0, scale: 0.9, y: 20}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.9, y: 20}}
            className='fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2'
          >
            <div className='overflow-hidden rounded-3xl bg-white shadow-2xl'>
              {/* Header */}
              <div className='relative bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-6'>
                <button
                  onClick={onClose}
                  className='absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30'
                >
                  <X className='h-5 w-5' />
                </button>
                {step === 'verification' && (
                  <button
                    onClick={() => setStep('phone')}
                    className='absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30'
                  >
                    <ArrowRight className='h-5 w-5' />
                  </button>
                )}
                <h3 className='mb-2 text-center text-white'>
                  {step === 'phone' && 'ورود / ثبت‌نام'}
                  {step === 'verification' && 'کد تایید'}
                  {step === 'register' && 'تکمیل ثبت‌نام'}
                </h3>
                <p className='text-center text-sm text-white/80'>
                  {step === 'phone' && 'شماره موبایل خود را وارد کنید'}
                  {step === 'verification' &&
                    `کد ارسال شده به ${formatPhoneNumber(phoneNumber)}`}
                  {step === 'register' && 'اطلاعات خود را تکمیل کنید'}
                </p>
              </div>

              {/* Phone Number Form */}
              {step === 'phone' && (
                <form onSubmit={handlePhoneSubmit} className='space-y-4 p-6'>
                  <div>
                    <label htmlFor='phone' className='mb-2 block text-gray-700'>
                      شماره موبایل
                    </label>
                    <div className='relative'>
                      <input
                        type='tel'
                        id='phone'
                        value={formatPhoneNumber(phoneNumber)}
                        onChange={handlePhoneChange}
                        required
                        className='w-full rounded-xl border border-gray-300 py-3 pr-12 pl-4 text-left transition-all outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                        placeholder='09XX XXX XXXX'
                        dir='ltr'
                      />
                      <Smartphone className='absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400' />
                    </div>
                    <p className='mt-2 text-xs text-gray-500'>
                      کد تایید به این شماره ارسال می‌شود
                    </p>
                  </div>

                  <motion.button
                    type='submit'
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className='flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-4 text-white shadow-lg transition-all hover:shadow-xl'
                  >
                    <span>ارسال کد تایید</span>
                    <Send className='h-5 w-5' />
                  </motion.button>

                  <div className='text-center text-sm text-gray-500'>
                    با ورود و ثبت‌نام، شما{' '}
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-purple-600'
                    >
                      قوانین و مقررات
                    </a>{' '}
                    را می‌پذیرید
                  </div>
                </form>
              )}

              {/* Verification Code Form */}
              {step === 'verification' && (
                <form
                  onSubmit={handleVerificationSubmit}
                  className='space-y-6 p-6'
                >
                  <div>
                    <label className='mb-4 block text-center text-gray-700'>
                      کد ۶ رقمی را وارد کنید
                    </label>
                    <div className='flex justify-center gap-2' dir='ltr'>
                      {/* {verificationCode.map((digit, index) => (
                        <input
                          key={index}
                          ref={el => (inputRefs.current[index] = el)}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleVerificationCodeChange(index, e.target.value)}
                          onKeyDown={(e) => handleVerificationCodeKeyDown(index, e)}
                          onPaste={handleVerificationCodePaste}
                          className="w-12 h-14 text-center text-xl border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                        />
                      ))} */}
                      {verificationCode.map((digit, index) => (
                        <input
                          key={index}
                          ref={(el: HTMLInputElement | null) => {
                            inputRefs.current[index] = el;
                          }}
                          type='text'
                          inputMode='numeric'
                          maxLength={1}
                          value={digit}
                          onChange={e =>
                            handleVerificationCodeChange(index, e.target.value)
                          }
                          onKeyDown={e =>
                            handleVerificationCodeKeyDown(index, e)
                          }
                          onPaste={handleVerificationCodePaste}
                          className='h-14 w-12 rounded-xl border-2 border-gray-300 text-center text-xl transition-all outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                        />
                      ))}
                    </div>
                  </div>

                  <div className='text-center'>
                    {countdown > 0 ? (
                      <p className='text-gray-600'>
                        ارسال مجدد کد تا{' '}
                        <span className='font-mono text-indigo-600'>
                          {formatTime(countdown)}
                        </span>
                      </p>
                    ) : (
                      <button
                        type='button'
                        onClick={handleResendCode}
                        className='text-indigo-600 transition-colors hover:text-purple-600'
                      >
                        ارسال مجدد کد تایید
                      </button>
                    )}
                  </div>

                  <motion.button
                    type='submit'
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    disabled={verificationCode.join('').length !== 6}
                    className='w-full rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-4 text-white shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    تایید کد
                  </motion.button>

                  <div className='text-center text-sm text-gray-500'>
                    <button
                      type='button'
                      onClick={() => setStep('phone')}
                      className='text-indigo-600 transition-colors hover:text-purple-600'
                    >
                      ویرایش شماره موبایل
                    </button>
                  </div>
                </form>
              )}

              {/* Registration Form */}
              {step === 'register' && (
                <form onSubmit={handleRegisterSubmit} className='space-y-4 p-6'>
                  <div>
                    <label htmlFor='name' className='mb-2 block text-gray-700'>
                      نام و نام خانوادگی
                    </label>
                    <div className='relative'>
                      <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className='w-full rounded-xl border border-gray-300 py-3 pr-12 pl-4 transition-all outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                        placeholder='نام خود را وارد کنید'
                      />
                      <User className='absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400' />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='mb-2 block text-gray-700'
                    >
                      رمز عبور
                    </label>
                    <div className='relative'>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        className='w-full rounded-xl border border-gray-300 py-3 pr-12 pl-12 transition-all outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                        placeholder='رمز عبور خود را وارد کنید'
                      />
                      <Lock className='absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400' />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600'
                      >
                        {showPassword ? (
                          <EyeOff className='h-5 w-5' />
                        ) : (
                          <Eye className='h-5 w-5' />
                        )}
                      </button>
                    </div>
                    <p className='mt-2 text-xs text-gray-500'>
                      حداقل ۸ کاراکتر
                    </p>
                  </div>

                  <motion.button
                    type='submit'
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className='w-full rounded-xl bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-4 text-white shadow-lg transition-all hover:shadow-xl'
                  >
                    تکمیل ثبت‌نام
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
