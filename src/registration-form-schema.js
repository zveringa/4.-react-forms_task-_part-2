import * as yup from 'yup';

export const registrationFormSchema = yup.object().shape({
	email: yup.string().required('Введите e-mail!').email('Неверный формат e-mail!'),
	password: yup
		.string()
		.required('Введите пароль')
		.min(3, 'Неверный логин. Должно быть не меньше 3 символов')
		.matches(
			/^[\w_]*$/,
			'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание',
		),
	password2: yup
		.string()
		.required('Повторите Пароль')
		.oneOf(
			[yup.ref('password'), null],
			'Повторный пароль не совпадает с первоначальным, повторите пароль',
		),
});
