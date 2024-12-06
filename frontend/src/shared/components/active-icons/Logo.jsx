// System
import { Link } from "react-router-dom";

// Icons
import { Logo as LogoIcon } from "../../assets/icons/Logo.icon";

function Logo() {
    return (
        <Link 
            to="/"
            className='w-fit'
        >
            <LogoIcon />
        </Link>
    )
}

export { Logo };
