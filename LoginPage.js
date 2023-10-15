import './LoginPage.css';
import RegisterPage from './RegisterPage';
import {useState} from 'react';
export default function LoginPage(){
    const [showLoginPage,setShowLoginPage]=useState(false);
    function handleLoginPage(){
        setShowLoginPage(true);
    }
    return(
        <div>
        {!showLoginPage?(
        <div>
            <div className='formStyles'>
                <div className='child'>
                <form>
                    <label>EMAIL ID: </label><input type="email"required/><br/><br/>
                    <label>PASSWORD: </label><input type="password"required/><br/><br/>
                    <input type="submit" value="SUBMIT"/>
                </form>
                </div>
            </div>
          <br/><br/><button id="myButton2" onClick={handleLoginPage}>DON'T HAVE AN ACCOUNT? CREATE ACCOUNT</button><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        ):(
            <RegisterPage/>
        )}
        </div>
    );
}