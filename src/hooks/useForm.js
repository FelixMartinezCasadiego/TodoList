import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setformState] = useState(initialForm);

    // Constante para cambiar los imput en el form
    const onInputChange = ({target}) => {
        const {name, value} = target; 
        setformState({
            ...formState,
            [name] : value
        });
    }

    const onResetForm = () => {
        setformState(initialForm)
    }

    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm
    }
}
