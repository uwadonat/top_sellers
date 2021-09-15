import { NavLink } from 'react-router-dom';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Header.css';
function Header() {
    return (
       
        <header>
            <div><ArrowBackIosIcon /></div>
            <div>TOP SELLERS</div>
            <div>
                <MicIcon className="Heade-icons"/>
                <SettingsIcon className="Heade-icons"/>
            </div>
        </header>
        

    )
}

export default Header;