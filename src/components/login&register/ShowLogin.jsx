import { useState } from 'react';
import { motion } from 'framer-motion';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const transition = { type: 'tween', ease: 'easeInOut', duration: 0.3 };

const ShowLogin = ({ show, setShow }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleForm = () => {
        setIsOpen(prev => !prev);
    };


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.4, ease: "easeInOut" }}
            onClick={() => setShow(!show)}
            className="bg-black/80 w-full h-screen fixed left-0 top-0 z-90 flex justify-center items-center">
            <div className={`mt-5 bg-white rounded-lg w-[480px] ${isOpen ? "h-[580px]" : "h-[550px]"} relative overflow-hidden`}>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isOpen ? -100 : 0,
                        opacity: isOpen ? 0 : 1,
                    }}
                    exit={{ x: isOpen ? 100 : 0, opacity: 0 }}
                    transition={transition}
                    className={`w-full absolute top-0 left-0`}
                >
                    <LoginForm handleToggleForm={handleToggleForm} />
                </motion.div>

                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: isOpen ? 0 : 500,
                        opacity: isOpen ? 1 : 0,
                    }}
                    exit={{ x: 200, opacity: 0 }}
                    transition={transition}
                    className={`w-full absolute top-0 left-[200%]"}`}
                >
                    <RegisterForm handleToggleForm={handleToggleForm} />
                </motion.div>
            </div>
        </motion.div>
    );
}


export default ShowLogin