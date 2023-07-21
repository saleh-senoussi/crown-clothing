import './form-input.styles.js';
import { FormInputLabel, Group, Input } from './form-input.styles.js';

const FormInput = ({ label, ...otherProps}) => {
    return (
        <Group>
            <Input className="form-input" {...otherProps}/>
            <FormInputLabel 
                shrink={otherProps.value.length}
                htmlFor={otherProps.id}
            >
                {label}
            </FormInputLabel>
        </Group>
    );
}

export default FormInput;