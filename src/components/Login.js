import React from 'react';
import GoogleButton from 'react-google-button';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
export default function Login() {
    const onSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                localStorage.setItem('AccessToken', result.user.accessToken)
            })
    }
    return (
        <div>
            <GoogleButton
                onClick={onSignIn}
            />
        </div>
    )
}
