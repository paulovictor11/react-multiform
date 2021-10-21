import { ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Container } from "./styles";

export const FormStep1 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('/step2');
            return;
        }

        alert('Preencha o campo!');
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: event.target.value
        })
    }

    return (
        <Theme>
            <Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome.</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>Seu nome completo</label>
                <input type="text" autoFocus value={ state.name } onChange={ handleNameChange } />

                <button onClick={ handleNextStep }>Próximo</button>
            </Container>
        </Theme>
    );
}
