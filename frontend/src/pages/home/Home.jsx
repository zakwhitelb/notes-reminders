// System
import { motion } from "motion/react"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'; // Import hook to access Redux state

// Components
import { Picture } from "../../shared/components/ui/Picture";

function Home() {
  const isLoggedIn = useSelector((state) => state.authentification_status.value);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-end md:justify-center md:items-center h-full gap-y-[16px] sm:gap-x-[40px] md:gap-x-[60px] lg:gap-x-[80px] px-[30px] min-[560px]:px-[40px] md:px-[60px] lg:px-[80px] py-[20px]">
      <motion.div 
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        className="grid justify-center items-center w-fit sm:min-w-[360px] md:min-w-[460px] h-fit text-center text-[16px] md:text-[18px] text-[var(--black2white)] gap-[20px] cursor-default"
      >
        <h1 className="text-[var(--black2White)] font-[merriweather-sans-bold] text-[34px] md:text-[42px]">
          Welcome to Note Reminder
        </h1>
        <p className="font-[khula-regular]">
          Your friendly reminder buddy! Jot down your ideas, tasks, and plans before they escape your brain. It&apos;s quick, it&apos;s simple, and it might just save you from forgetting your mom&apos;s birthday again!
        </p>
        <div 
          className="flex justify-center items-center w-full gap-[20px]"
        >
          <motion.div 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
            onHoverStart={() => console.log('hover started!')}
            className="flex justify-center items-center"
          >
            
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
            onHoverStart={() => console.log('hover started!')}
            className="flex justify-center items-center w-fit"
          >
            {isLoggedIn ?
                <Link 
                  to="/note-area"
                  className="w-fit bg-[var(--black2white)] rounded-[10px] py-[10px] px-[60px]"
                >
                  <p className="w-fit text-[var(--white2black)] font-[heebo-medium]">Work space</p>
                </Link>
              :
                <Link 
                  to="/authentication"
                  className="w-fit bg-[var(--black2white)] rounded-[10px] py-[10px] px-[60px]"
                >
                  <p className="w-fit text-[var(--white2black)] font-[heebo-medium]">Create Account</p>
                </Link>
            }
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        className="max-[767px]:max-h-[230px] md:h-full w-full md:min-w-[200px] xl:min-w-[500px] rounded[30px] overflow-hidden"
      >
        <Picture />
      </motion.div>
    </div>
  )
}

export { Home };
