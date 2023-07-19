import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async (event) => {
        console.log('called', event);
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('handleSubmit');

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch(error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                default:
                    console.log(error);
                    break;
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    id="sign-in-email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput 
                    label="Password"
                    id="sign-in-password"
                    type="password"
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;