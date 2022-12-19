
import { signInWithGooglePopup, signInWithTwitterPopup } from "../../utils/firebase/firebase.utils";

const SignIn = ()=>{
    const logGoogleUser = async()=>{
        const response = await signInWithGooglePopup();
        console.log(response)
    }

    const logTwitterUser = async()=>{
        const response = await signInWithTwitterPopup();
        console.log(response)
    }
    return (
        <>
            <div>
                <h1>Sign In</h1>
                <button onClick={logGoogleUser}>Sign in with Google Popup</button> <br />
                <button onClick={logTwitterUser}>Sign in with Twitter Popup</button>
            </div>
        </>
    )

}



export default SignIn;