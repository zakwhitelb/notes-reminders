// System
import { useSelector } from 'react-redux'; // Import hook to access Redux state

// Active icons
import { Logo } from '../active-icons/Logo';
import { Theme } from '../active-icons/Theme';
import { Profile } from '../active-icons/Profile';

function Header() {
    const isLoggedIn = useSelector((state) => state.authentification_status.value);
    
    return (
        <div className='flex items-center justify-between px-[80px] py-[20px]'>
            <Logo />
            <div className='flex justify-between gap-[16px]'>
                <Theme />
                {isLoggedIn && ( // Render Profile only if user is logged in
                    <Profile />
                )}
            </div>
        </div>
    );
}

export { Header };
