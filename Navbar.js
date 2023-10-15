import {BiHomeHeart,BiSolidUserCircle,BiSolidPhoneCall} from 'react-icons/bi'; 
import {MdMiscellaneousServices} from 'react-icons/md'; 
import './Navbar.css';
export function Navbar(){
    const styleIcons={fontSize:25,paddingTop:10};
    return(
        <nav>
            <ul>
                <li><BiHomeHeart style={styleIcons}/><a href="#"> HOME</a></li>
                <li><BiSolidPhoneCall style={styleIcons}/><a href="#"> CONTACT</a></li>
                <li><MdMiscellaneousServices style={styleIcons}/><a href="#"> SERVICE</a></li>
                <li><BiSolidUserCircle style={styleIcons}/><a href="#"> ABOUT</a></li>
            </ul>
        </nav>
    );
}