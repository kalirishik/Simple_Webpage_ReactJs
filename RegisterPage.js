import './LoginPage.css';
import {useState} from 'react';
import LoginPage from './LoginPage';
export default function RegisterPage(){
    const [showRegisterPage,setShowRegisterPage]=useState(false);
    function handleRegisterPage(){
        setShowRegisterPage(true);
    }
    return(
        <div>
            {!showRegisterPage ?(
                <div>
                <div className='formStyles'>
                    <div className='child'>
                    <form>
                        <label>USRNAME:</label><input type="text" required/><br/><br/>
                        <label>EMAIL ID: </label><input type="email"required/><br/><br/>
                        <label>PASSWORD: </label><input type="password"required/><br/><br/>
                        <input type="submit" value="SUBMIT"/>
                    </form>
                    </div>
                </div>
               <br/><br/> <button  id="myButton2" onClick={handleRegisterPage}>CREATE ACCOUNT? CLICK TO LOGIN</button><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            ):(
                <LoginPage/>
            )}
        </div>
    );
}