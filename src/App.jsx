import './App.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
/*import { motion } from 'framer-motion';
import LoginForm from './components/login&register/LoginForm';
import RegisterForm from './components/login&register/RegisterForm';*/
import ShowLogin from './components/login&register/ShowLogin';

//const transition = { type: 'tween', ease: 'easeInOut', duration: 0.3 };

function App() {
  const [show, setShow] = useState(false);
  return (
    <motion.div className="font-poppins ">
      <div>
        <button className="ml-5 text-black text-lg bg-blue-600 p-4" onClick={() => setShow(!show)}>Login In</button>
      </div>
      <AnimatePresence>
        {show && <ShowLogin show={show} setShow={setShow} />}
      </AnimatePresence>
    </motion.div>
  )
}
export default App;
