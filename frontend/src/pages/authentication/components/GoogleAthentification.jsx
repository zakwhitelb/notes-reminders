// System
import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Redux 
import { Login } from '../../../shared/redux/slices/AuthentificationSlice';

// Controllers
import { UserController } from '../../../shared/controllers/user/UserController';

// Icons
import { Google as GoogleIcon } from '../../../shared/assets/icons/Google.icon';

function GoogleAthentification({ clearData, setSuccessfulAuthentication }) {
    const { response, GoogleLoginAccount } = UserController();
    const [ data, setData ] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const login = useGoogleLogin({
        onSuccess: async (request) => {
            try {
                const response = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${request.access_token}`,
                        },
                    }
                )
                setData({
                    email: response.data.email,
                    name: response.data.given_name + " " + response.data.family_name,
                })
            }
            catch (error) {
                console.error('Error logging in with Google:', error);
            }
        }
    });

    useEffect( () => {
        const handleGoogleLogin = async () => {
            if(data && !response) {
                try{
                    await GoogleLoginAccount(data);
                }
                catch (error) {
                    console.error('Error saving user data:', error);
                }
            }
        };
        handleGoogleLogin();
    }, [data, response, GoogleLoginAccount])

    // Navigate to the note area upon successful account creation
    useEffect(() => {
        const handleResponse = async () => {
            if (response) {
                console.log(response);
                dispatch(Login());
                setSuccessfulAuthentication(true);
                await new Promise((resolve) => setTimeout(resolve, 1500));
                clearData();
                navigate("/note-area");
            }
        };
    
        handleResponse();
    }, [response, dispatch, navigate, setSuccessfulAuthentication, clearData]);

    return (
        <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.90 }}
            onClick={() => login()}
            className="flex justify-center items-center w-full bg-[var(--black2white)] rounded-[10px] py-[8px] sm:py-[10px] text-center cursor-pointer gap-[20px]"
        >
            <GoogleIcon width={window.innerWidth < 640 ? 24 : 30} height={window.innerWidth < 640 ? 24 : 30} />
            <p className="w-fit text-[16px] sm:text-[18px] text-[var(--white2black)] font-[heebo-regular] text-center">
                Log in with Google
            </p>
        </motion.div>
    )
}

GoogleAthentification.propTypes = {
    clearData: PropTypes.func.isRequired,
    setSuccessfulAuthentication: PropTypes.func.isRequired,
};

export { GoogleAthentification };