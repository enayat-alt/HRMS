import { useMemo, useState } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import TextInput from '../components/TextInput';
import PrimaryButton from '../components/PrimaryButton';
import FormError from '../components/FormError';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = useMemo(() => {
    const nextErrors = {};
    if (!email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    return nextErrors;
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate);
    if (Object.keys(validate).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <AuthLayout title='Reset your password' subtitle='We will send a secure recovery link to your work email.'>
      <form onSubmit={handleSubmit} className='space-y-5' noValidate>
        <FormError message={errors.form} />
        {submitted ? (
          <div className='rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700'>
            Recovery instructions have been prepared for {email}. Please check your inbox.
          </div>
        ) : null}

        <TextInput
          id='email'
          label='Work email'
          type='email'
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setErrors((prev) => ({ ...prev, email: '' }));
          }}
          placeholder='you@company.com'
          error={errors.email}
          icon={Mail}
          autoComplete='email'
          required
        />

        <PrimaryButton type='submit' loading={loading}>Send reset link</PrimaryButton>

        <Link to='/login' className='inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900'>
          <ArrowLeft className='h-4 w-4' />
          Back to sign in
        </Link>
      </form>
    </AuthLayout>
  );
}
