import { useMemo, useState } from 'react';
import { Building2, Chrome, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import PasswordStrength from '../components/PasswordStrength';
import Checkbox from '../components/Checkbox';
import PrimaryButton from '../components/PrimaryButton';
import Divider from '../components/Divider';
import SocialLoginButton from '../components/SocialLoginButton';
import FormError from '../components/FormError';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ fullName: '', companyName: '', email: '', password: '', confirmPassword: '', terms: false });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = useMemo(() => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!formData.companyName.trim()) nextErrors.companyName = 'Company name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.password.trim()) {
      nextErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }
    if (!formData.confirmPassword.trim()) {
      nextErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!formData.terms) nextErrors.terms = 'You must accept the terms.';
    return nextErrors;
  }, [formData]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
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
    <AuthLayout title='Create your account' subtitle='Set up your HR workspace in minutes.'>
      <form onSubmit={handleSubmit} className='space-y-5' noValidate>
        <FormError message={errors.form} />

        <TextInput id='fullName' label='Full name' value={formData.fullName} onChange={handleChange} placeholder='Alex Morgan' error={errors.fullName} icon={User} autoComplete='name' required />
        <TextInput id='companyName' label='Company name' value={formData.companyName} onChange={handleChange} placeholder='Northwind Labs' error={errors.companyName} icon={Building2} autoComplete='organization' required />
        <TextInput id='email' label='Work email' type='email' value={formData.email} onChange={handleChange} placeholder='you@company.com' error={errors.email} icon={Mail} autoComplete='email' required />

        <PasswordInput id='password' label='Password' value={formData.password} onChange={handleChange} placeholder='Create a secure password' error={errors.password} showPassword={showPassword} onToggleVisibility={() => setShowPassword((prev) => !prev)} autoComplete='new-password' required />
        {formData.password ? <PasswordStrength password={formData.password} /> : null}

        <PasswordInput id='confirmPassword' label='Confirm password' value={formData.confirmPassword} onChange={handleChange} placeholder='Re-enter password' error={errors.confirmPassword} showPassword={showConfirmPassword} onToggleVisibility={() => setShowConfirmPassword((prev) => !prev)} autoComplete='new-password' required />

        <Checkbox id='terms' label='I agree to the terms and privacy policy.' checked={formData.terms} onChange={handleChange} required />
        {errors.terms ? <p className='text-sm text-rose-600'>{errors.terms}</p> : null}

        <PrimaryButton type='submit' loading={loading}>Create account</PrimaryButton>

        <Divider label='or continue with' />
        <SocialLoginButton icon={Chrome}>Sign up with Google</SocialLoginButton>

        <p className='text-center text-sm text-slate-600'>
          Already have an account?{' '}
          <Link to='/login' className='font-semibold text-slate-900 transition hover:text-slate-700'>Sign in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
