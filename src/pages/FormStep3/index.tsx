import { ChangeEvent, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Container } from "./styles";

export const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history.push('/');
            return;
        }

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    }, []);

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            alert(JSON.stringify(state));
            return;
        }

        alert('Preencha os dados');
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: event.target.value
        });
    }

    const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: event.target.value
        });
    }

    return (
        <Theme>
            <Container>
                <p>Passo 3/3</p>
                <h1>Legal { state.name }, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato</p>

                <hr />

                <label>Qual o seu email?</label>
                <input type="email" autoFocus value={ state.email } onChange={ handleEmailChange } />

                <br />

                <label>Qual o seu github?</label>
                <input type="url" autoFocus value={ state.github } onChange={ handleGithubChange } />

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={ handleNextStep }>Finalizar Cadastro</button>
            </Container>
        </Theme>
    );
}
