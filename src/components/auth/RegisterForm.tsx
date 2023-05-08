import { PROTECTED_ROUTES } from '@/constants/routes';
import { useRegister } from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Alert,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';

// ? Login Schema with Zod
const loginSchema = object({
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

// ? Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>;

const RegisterForm = () => {
  const router = useRouter();

  const {
    data: user,
    mutateAsync: registerAccount,
    isLoading: isRegistering,
    isSuccess: isRegistered,
    error: registerError,
  } = useRegister();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // ? Default Values
  const defaultValues: ILogin = {
    email: '',
    password: '',
  };

  // ? The object returned from useForm Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  // ? Submit Handler
  const onSubmit: SubmitHandler<ILogin> = async (values: ILogin) => {
    try {
      await registerAccount({ email: values.email, password: values.password });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isRegistered && user) {
      router.push(PROTECTED_ROUTES.dashboard);
    }
  }, [isRegistered]);

  const isLoading = isRegistering;
  const error = registerError;

  return (
    <>
      <Typography
        variant="h6"
        component="h1"
        sx={{
          textAlign: 'center',
          mb: '1.5rem',
        }}
      >
        Create an account
      </Typography>

      {error && (
        <Alert color="error" sx={{ mb: '1.5rem' }}>
          Registration failed
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          variant="outlined"
          sx={{
            width: '100%',
            mb: '1.5rem',
          }}
        >
          <InputLabel htmlFor="register-email">Email</InputLabel>
          <OutlinedInput
            id="register-email"
            type="text"
            label="Email"
            error={!!errors.password?.message ?? false}
            {...register('email')}
          />
          {(!!errors.email?.message ?? false) && (
            <FormHelperText id="component-error-text" error>
              {errors.email?.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl
          variant="outlined"
          sx={{
            width: '100%',
            mb: '1.5rem',
          }}
        >
          <InputLabel htmlFor="register-password">Password</InputLabel>
          <OutlinedInput
            id="register-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            error={!!errors.password?.message ?? false}
            {...register('password')}
          />
          {(!!errors.password?.message ?? false) && (
            <FormHelperText id="component-error-text" error>
              {errors.password?.message}
            </FormHelperText>
          )}
        </FormControl>
        <LoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          sx={{
            py: '0.8rem',
            width: '100%',
          }}
        >
          Register
        </LoadingButton>
      </form>
    </>
  );
};

export default RegisterForm;
