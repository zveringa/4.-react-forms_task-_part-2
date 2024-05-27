import styles from './app.module.css';
import { useEffect, useRef } from 'react';
import { registrationFormSchema } from './registration-form-schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			password2: '',
		},
		resolver: yupResolver(registrationFormSchema),
		mode: 'onBlur',
	});

	const onSubmit = ({ email, password }) => {
		console.log(email, password);
	};

	const submitButtonRef = useRef(null);

	useEffect(() => {
		if (isValid) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	return (
		<div className={styles.app}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						type="email"
						placeholder="e-mail"
						error={errors.email?.message}
						{...register('email')}
					/>
					{errors.email && (
						<span className={styles.error}>{errors.email.message}</span>
					)}
				</div>
				<div>
					<input
						type="password"
						placeholder="Пароль"
						error={errors.password?.message}
						{...register('password')}
					/>
					{errors.password && (
						<span className={styles.error}>{errors.password.message}</span>
					)}
				</div>
				<div>
					<input
						type="password"
						placeholder="Повторите Пароль"
						error={errors.password2?.message}
						{...register('password2')}
					/>
					{errors.password2 && (
						<span className={styles.error}>{errors.password2.message}</span>
					)}
				</div>
				<button type="submit" disabled={!isValid} ref={submitButtonRef}>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
