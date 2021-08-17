import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

let options = {
    root: document.querySelector('#overview'),
    rootMargin: '0px',
    threshold: .5
}


function Overview() {

    const [visible, setVisible] = useState(false)
    const [observer] = useState(new IntersectionObserver((e) => {
        setVisible(e[0].isIntersecting)
    }, options))

    useEffect(() => {
        observer.observe(document.querySelector('#overview'));
    }, [observer])

    useEffect(() => {

        if (visible) {
            observer.disconnect()
        }
    })

    const variants = {
        fade: visible ? {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5
            }
        } : { y: '50%', opacity: 0 },
    }

    return (
        <>
            <div id="overview" className="py-12 px-12 flex flex-col gap-5 w-wscreen absolute">
                <div className="text-white md:py-14 md:px-20 flex-grow md:text-base txt">
                    <SplitText initial={{ y: '100%' }}
                        animate="visible"
                        variants={{
                            visible: visible ? i => ({
                                y: 0,
                                transition: {
                                    delay: i * 0.05
                                }
                            }) : { y: '100%' },
                        }}>
                        Hey, I am Tunjay Huseynov, a full-stack web and mobile developer. My experience in this field is more than 3 years and I have gained all those experiences by taking real projects in Upwork or around my social friendzone. Most people are stuck in any one phase of learning software development, but I love to extend my knowledge by adding more detailed information related to this field, and of course, it causes because of my day-and-night researching habit. Let's improve by standing upon "the shoulders of giants".
                    </SplitText>
                </div>
                <div className="text-white p-0 md:p-20 flex-grow flex relative flex-wrap md:flex-nowrap">
                    <motion.div initial={{ y: '50%', opacity: 0 }} animate="fade" variants={variants} className="image md:h-27.77vh">
                        <img src="/images/filmdizimob.png" alt="a movie web application by Tunjay Huseynov" />
                    </motion.div>
                    <motion.div initial={{ y: '50%', opacity: 0 }} animate="fade" variants={variants} className="image md:h-27.77vh">
                        <img className="-left-2 -top-2" src="/images/idealistcode.png" alt="a movie web application by Tunjay Huseynov" />
                    </motion.div>
                    <motion.div initial={{ y: '50%', opacity: 0 }} animate="fade" variants={variants} className="image md:h-27.77vh">
                        <img className="-left-4 -top-4" src="/images/sifa.png" alt="a blog web application by Tunjay Huseynov" />
                    </motion.div>
                    <motion.div initial={{ y: '50%', opacity: 0 }} animate="fade" variants={variants} className="image md:h-27.77vh">
                        <img className="-left-8 -top-8" src="/images/idealist.png" alt="a classified e-commorce web application by Tunjay Huseynov" />
                    </motion.div>
                </div>
            </div>
        </>
    )
}


export default Overview;


function SplitText({ children, ...rest }) {
    let words = children.split(' ')
    return words.map((word, i) => {
        return (
            <div
                key={children + i}
                style={{ display: 'inline-block', overflow: 'hidden' }}
            >
                <motion.div
                    {...rest}
                    className="noto"
                    style={{ display: 'inline-block', willChange: 'transform' }}
                    custom={i}
                >
                    {word + (i !== words.length - 1 ? '\u00A0' : '')}
                </motion.div>
            </div>
        )
    })
}
