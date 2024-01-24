import { Notify } from "notiflix";
import { useDispatch } from "react-redux"

import { logIn } from "store/auth/operation";
import { Btn, FormContainer, FormTitle, InputLabel, InputStyled, LinkRegister} from "./FormLogin.styled";



export const LoginForm = () => {
    const dispatch = useDispatch();

const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(
	logIn({
        email: data.get('email'),
        password: data.get('password'),
    })
    )
    .unwrap()
    .then(originalPromiseResult => {
      Notify.success(`${originalPromiseResult.user.name} welcome back!`);
    })
    .catch(() => {
      Notify.failure('Incorrect login or password');
    });
};
return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
         <FormTitle>Log in to your account</FormTitle>
        <InputLabel>
            Email
            <InputStyled type="email" name="email" required
          placeholder="Enter email ..."/>
        </InputLabel>
        <InputLabel>
            Password
            <InputStyled  type="password" name="password" required
          placeholder="Enter password ..."/>
        </InputLabel>
        <Btn type ="submit">Log In</Btn>
        <LinkRegister to="/register">Don't have acount? Register</LinkRegister>
    </FormContainer>
);
};