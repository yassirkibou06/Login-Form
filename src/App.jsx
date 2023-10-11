import './App.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
/*import { motion } from 'framer-motion';
import LoginForm from './components/login&register/LoginForm';
import RegisterForm from './components/login&register/RegisterForm';*/
import ShowLogin from './components/login&register/ShowLogin';
import SlideEvent from './components/slideEvent/SlideEvent';
import SlideCourses from './components/slideCourses/SlideCourses';
import SlideFeedback from './components/slideFeedback/SlideFeedback';
import CategoriesGrid from './components/categories/CategoriesGrid';
import ExpectGrid from './components/expect/ExpectGrid';


function App() {
  const [show, setShow] = useState(false);
  return (
    <motion.div className="font-poppins ">
      <div>
        <button className="ml-5 text-black text-lg bg-blue-600 p-4" onClick={() => setShow(!show)}>Login In</button>
      </div>
      <div className="mt-32">
        <SlideEvent />
      </div>
      <div className="mt-32 mb-24">
        <SlideCourses />
      </div>
      <div className="mt-32 mb-24">
        <SlideFeedback />
      </div>
      <div className="mt-32 mb-24">
        <CategoriesGrid />
      </div>
      <div className="mt-32 mb-24">
        <ExpectGrid />
      </div>
      <AnimatePresence>
        {show && <ShowLogin show={show} setShow={setShow} />}
      </AnimatePresence>
    </motion.div>
  )
}
export default App;
