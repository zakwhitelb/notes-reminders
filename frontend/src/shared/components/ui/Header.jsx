// System
import { useSelector } from 'react-redux';

// Active icons
import { Logo } from '../active-icons/Logo';
import { Theme } from '../active-icons/Theme';
import { Profile } from '../active-icons/Profile';

function Header() {
    const isLoggedIn = useSelector((state) => state.authentification_status.value);
    
    return (
        <div className='flex items-center justify-between px-[30px] min-[560px]:px-[40px] md:px-[60px] lg:px-[80px] py-[14px] min[560px]-py-[20px]'>
            <Logo width={window.innerWidth < 560 ? 34 : 40} height={window.innerWidth < 560 ? 34 : 40} />
            <div className='flex justify-between gap-[16px]'>
                <Theme width={window.innerWidth < 560 ? 24 : 30} height={window.innerWidth < 560 ? 24 : 30} />
                {isLoggedIn && ( // Render Profile only if user is logged in
                    <Profile width={window.innerWidth < 560 ? 24 : 30} height={window.innerWidth < 560 ? 24 : 30} />
                )}
                
            </div>
        </div>
    );
}

export { Header };
