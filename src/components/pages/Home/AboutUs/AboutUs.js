import React from 'react';
import img1 from './img/card1.jpg';
import img2 from './img/card2.jpg';
import img3 from './img/card3.jpg';
import styles from './AboutUs.module.css';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import FlyingFromThree from '../../SearchBoxes/Flight/SearchElements/FlyingFromThree';
import FlyingToThree from '../../SearchBoxes/Flight/SearchElements/FlyingToThree';

const AboutUs = () => {
    const [counter, setCounter] = React.useState(60);
    // First Attempts
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    return (
        <>
            <Navigation />
            <div className='container'>
                <div className="App">
                    <div>Countdown: { counter }</div>
                </div>

                <div className="div d-flex">
                    <div className="div w-50">
                        <FlyingFromThree />
                    </div>
                    <div className="div w-50">
                        <FlyingToThree />
                    </div>
                </div>
                <div className={ `${styles.aboutUs} ${'row d-flex  items-center'}` }>
                    < div className={ `${'col-md-7'}` } >
                        <div className={ `${'row'}` }>
                            <div className={ `${'col-md-5'}` }>
                                <img
                                    className={ `${'w-100'}` }
                                    src={ img1 }
                                    alt=""
                                />
                            </div>
                            <div className={ `${'col-md-7'}` }>
                                <div className={ `${'row'}` }>
                                    <div className={ `${'col-md-12'}` }>
                                        <img
                                            className={ `${'w-100 mt-2'}` }
                                            src={ img2 }
                                            alt=""
                                        />
                                    </div>
                                    <div className={ `${'mt-3 col-md-12'}` }>
                                        <img
                                            className={ `${'w-100'}` }
                                            src={ img3 }
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className={ `${'col-md-5 p-3 d-flex flex-column justify-center mt-5'}` }>
                        <h4>About us</h4>
                        <h2>Why do you choose us?</h2>
                        <p className={ `${styles.aboutUs} ${'px-3'}` }>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos asperiores. Est cum sint natus reprehenderit nobis maiores consequatur nulla dolor alias asperiores, numquam quod totam, dicta similique itaque ea, culpa nisi unde ipsam ab fugiat tenetur nihil dolorum possimus. Sint quisquam illo quas quidem facilis ipsa ipsam temporibus sapiente!
                        </p>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    );
};

export default AboutUs;