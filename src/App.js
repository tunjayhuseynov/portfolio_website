import './App.css';
import { motion, AnimateSharedLayout } from "framer-motion"
import Name from './components/name';
import Image from './components/image';
import Overview from './components/overview';
import Chart from './components/chart';
import Appchart from './components/appchart';
import Social from './components/social';
import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"

let percent = { percent: 0, customIndex: 0 };
let isRun = false

function App() {


  const [welcome, setWelcome] = useState(false)
  const [sections, setSections] = useState(0)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setSections(document.querySelectorAll("section").length)
  }, [])


  const onEnd = (e) => {
    isRun = false
  }

  const onWheel = (e) => {
    const main = document.querySelector("#main");
    //e.preventDefault();
    var isTouchPad = e.nativeEvent.wheelDeltaY ? e.nativeEvent.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
  
    if (!isRun && welcome && isTouchPad && Math.abs(e.deltaY) === 0) {
      if (e.deltaX > 0 && percent.percent > -(100 / sections) * (sections - 1)) {
        percent = { percent: percent.percent - (100 / sections), customIndex: percent.customIndex + 1 };
        isRun = true;
        setIndex(percent.customIndex)
      } else if (e.deltaX < 0 && percent.percent < 0) {
        percent = { percent: percent.percent + (100 / sections), customIndex: percent.customIndex - 1 };
        isRun = true;
        setIndex(percent.customIndex)
      }
      main.style.transform = `translate(${percent.percent}%)`;
    }
    if (!isRun && welcome && !isTouchPad && Math.abs(e.deltaX) === 0)  {

      if (e.deltaY > 0 && percent.percent > -(100 / sections) * (sections - 1)) {
        percent = { percent: percent.percent - (100 / sections), customIndex: percent.customIndex + 1 };
        isRun = true;
        setIndex(percent.customIndex)
      }
      else if (e.deltaY < 0 && percent.percent < 0) {
        percent = { percent: percent.percent + (100 / sections), customIndex: percent.customIndex - 1 };
        isRun = true;
        setIndex(percent.customIndex)
      }

      main.style.transform = `translate(${percent.percent}%)`;

    }

  }

  const onClick = (event) => {
    isRun = true;
    const index = [...event.target.parentElement.children].indexOf(event.target)
    const sections = document.querySelectorAll("section");
    const main = document.querySelector("#main");

    percent = { percent: (-100 / sections.length) * index, customIndex: index };

    main.style.transform = `translate(${percent.percent}%)`;

    setIndex(index)
  }


  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };

  return (
    <>
      <motion.div animate={{ opacity: [0, 1, 0], transitionEnd: { visibility: "hidden" } }} transition={{ duration: 4, times: [.2, .5, 1] }} onAnimationComplete={() => setWelcome(true)} className="absolute flex justify-center items-center w-screen h-webkit md:h-screen z-20">
        <h2 className={'text-white sourceFont'} style={{ fontSize: 'clamp(2rem, 12vw, 15rem)' }}>WELCOME</h2>
      </motion.div>
      <motion.div animate={{ opacity: [0, 0, 1] }} transition={{ duration: 8, times: [.2, .5, .9, 1] }}>
        <main onWheel={onWheel}  onTransitionEnd={onEnd} id="main" className={'md:h-screen h-webkit h-weband inline-flex flex-row'}>
          <section className={'flex flex-col md:flex-row  md:p-0 h-hscreen min-h-webkit min-h-weband  md:h-screen w-wscreen '}>
            <div className='flex-1 flex items-center justify-center'><Image /></div>
            <div className='flex-1 flex items-center justify-center'><Name /></div>
          </section>
          <section className={'flex  h-hscreen min-h-webkit min-h-weband  md:h-screen w-wscreen'}>
            <Overview />
          </section>
          <section className={'flex  h-hscreen min-h-webkit min-h-weband  md:h-screen w-wscreen'}>
            <Chart />
          </section>
          <section className={'flex  h-hscreen min-h-webkit min-h-weband  md:h-screen w-wscreen'}>
            <Appchart />
          </section>
          <section className={'flex  h-hscreen min-h-webkit min-h-weband  md:h-screen w-wscreen'}>
            <Social />
          </section>
        </main>
        <AnimateSharedLayout>
          <div className="w-screen gap-5 justify-center absolute bottom-4 indicators flex">
            {[...Array(5).keys()].map(w => <motion.div key={uuid()} className='flex justify-center items-center w-5 h-5 border cursor-pointer border-white rounded-full' onClick={onClick}>
              {index === w && <motion.div
                key={uuid()}
                layoutId="outline"
                className="outline w-3 h-3 rounded-full "
                initial={false}
                animate={{ backgroundColor: "#ffffff" }}
                transition={spring}
              />}
            </motion.div>)}
          </div>
        </AnimateSharedLayout>
      </motion.div>

    </>
  );
}

export default App;
