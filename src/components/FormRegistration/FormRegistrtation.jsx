import { Btn, FormContainer, InputLabel, InputStyled } from "components/FormLogin/FormLogin.styled";
import { useDispatch } from "react-redux"
import { register } from "store/auth/operation";


export const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        console.log(e);
        e.preventDefault();
        // const form = e.currentTarget;
        const data = new FormData(e.currentTarget);
        dispatch(
       
         register({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            // сonfirm_password: data.get('сonfirm_password'),
          })
        );
        // form.reset();
    };
    console.log(handleSubmit);
    return (
        <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <InputLabel>
          User name
          <InputStyled type="text" name="name" required />
        </InputLabel>
        <InputLabel>
          Email
          <InputStyled type="email" name="email" required />
        </InputLabel>
        <InputLabel>
          Password
          <InputStyled type="password" name="password" required />
        </InputLabel>
        <Btn>Registration</Btn>
      </FormContainer>
    )
}