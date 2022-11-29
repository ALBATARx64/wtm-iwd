import React from 'react'
import MainButton from '../components/MainButton'
import Navbar from '../components/Navbar'
import SecondaryButton from '../components/SecondaryButton'

const HomeScreen = () => {
  return (
    <section className='main-page'>
        <Navbar />
        <div className="main-content">
            <div className="laptop"></div>
            <div className="card"></div>

            <div className="main-content-main-img">
                <div className="img-container">
                    <img src="/images/iwd.png" alt="iwd" />
                    <div className="plane"></div>
                    <div className="arrow"></div>
                </div>
            </div>

            <div className="text">
                <img src="https://a.top4top.io/p_2523qd2n41.png" alt="practice makes perfect" />
                <div className="left-layer"></div>
                <div className="right-layer"></div>
            </div>

            <div className="quote">
                &lt; striving for well being /&gt;
            </div>

            <div className="info">
                <img src="/images/info.png" alt="information" />
            </div>

            <MainButton />
        </div>
    </section>
  )
}

export default HomeScreen