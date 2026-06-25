import { useMemo, useState } from 'react';
import { CheckCircle2, Lock } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';
import PasswordInput from '../components/PasswordInput';
import PasswordStrength from '../components/PasswordStrength';
import PrimaryButton from '../components/PrimaryButton';
import FormError from '../components/FormError';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = useMemo(() => {
    const nextErrors = {};
    if (!password.trim()) {
      nextErrors.password = 'New password is required.';
    } else if (password.length < 8) {
      nextErrors.password = 'Use at least 8 characters.';
    }
    if (!confirmPassword.trim()) {
      nextErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match.';
    }
    return nextErrors;
  }, [confirmPassword, password]);

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
    <AuthLayout title='Create a new password' subtitle='Choose a strong password for your account.'>
      <form onSubmit={handleSubmit} className='space-y-5' noValidate>
        <FormError message={errors.form} />
        {submitted ? (
          <div className='rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700'>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='h-4 w-4' />
              Password updated successfully.
            </div>
          </div>
        ) : null}

        <PasswordInput
          id='password'
          label='New password'
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setErrors((prev) => ({ ...prev, password: '' }));
          }}
          placeholder='At least 8 characters'
          error={errors.password}
          showPassword={showPassword}
          onToggleVisibility={() => setShowPassword((prev) => !prev)}
          autoComplete='new-password'
          required
        />

        {password ? <PasswordStrength password={password} /> : null}

        <PasswordInput
          id='confirmPassword'
          label='Confirm password'
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            setErrors((prev) => ({ ...prev, confirmPassword: '' }));
          }}
          placeholder='Confirm your password'
          error={errors.confirmPassword}
          showPassword={showConfirmPassword}
          onToggleVisibility={() => setShowConfirmPassword((prev) => !prev)}
          autoComplete='new-password'
          required
        />

        <PrimaryButton type='submit' loading={loading}>Update password</PrimaryButton>
      </form>
    </AuthLayout>
  );
}
