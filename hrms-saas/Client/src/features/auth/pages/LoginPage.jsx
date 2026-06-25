import { useMemo, useState } from 'react';
import { Chrome, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import Checkbox from '../components/Checkbox';
import PrimaryButton from '../components/PrimaryButton';
import Divider from '../components/Divider';
import SocialLoginButton from '../components/SocialLoginButton';
import FormError from '../components/FormError';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '', remember: true });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = useMemo(() => {
    const nextErrors = {};
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.password.trim()) {
      nextErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }
    return nextErrors;
  }, [formData.email, formData.password]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate);
    if (Object.keys(validate).length > 0) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 900);
  };

  return (
    <AuthLayout title='Welcome back' subtitle='Sign in to continue managing your HR operations.'>
      <form onSubmit={handleSubmit} className='space-y-5' noValidate>
        <FormError message={errors.form} />

        <TextInput
          id='email'
          label='Work email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='you@company.com'
          error={errors.email}
          icon={Mail}
          autoComplete='email'
          required
        />

        <PasswordInput
          id='password'
          label='Password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter your password'
          error={errors.password}
          showPassword={showPassword}
          onToggleVisibility={() => setShowPassword((prev) => !prev)}
          autoComplete='current-password'
          required
        />

        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <Checkbox id='remember' label='Remember me' checked={formData.remember} onChange={handleChange} />
          <Link to='/forgot-password' className='text-sm font-medium text-slate-700 transition hover:text-slate-950'>
            Forgot password?
          </Link>
        </div>

        <PrimaryButton type='submit' loading={loading}>Sign in</PrimaryButton>

        <Divider label='or continue with' />

        <SocialLoginButton icon={Chrome}>Continue with Google</SocialLoginButton>

        <p className='text-center text-sm text-slate-600'>
          New to the platform?{' '}
          <Link to='/register' className='font-semibold text-slate-900 transition hover:text-slate-700'>Create account</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
