import React from 'react'
import pexels from '../assets/Pexels.png'
import rarr from '../assets/rarr.png'
import unsplash from '../assets/Unsplash.png'
import fonts from '../assets/Fonts.png'
export default function Section3() {
    const css = `
    .main{
        // font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
    }
        a{
            color:black;
        }
        .rarr{
            height: 12px;
            width: 12px;
            margin-top: 18px;
        }
        .vector{
            height: 45px;
            width: 45px;
        }
        .vector2{
            height: 35px;
            width: 45px;
        }
        .heading{
            font-size: 20px;
            color: black;
        }
        span{
            color: #646E79;
        }
    `
    return (
        <div className='container'>
            <style>{css}</style>
            <div className='row'>
                <div className='col-6 p-2'>
                    <div className='col-8'>
                        <p className='main'>Images</p>
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src={pexels} alt='pexels_logo' className='vector' />
                                <span className='heading ms-2  mt-2'><a href='https://www.pexels.com/'>Pexels</a></span> <img src={rarr} alt='rarr' className='rarr ms-2' />
                            </div>
                            <div className='mt-2'>
                                <span>You can check the licenses and download
                                    the images for free on <a href='https://www.pexels.com/'>Pexels</a></span>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='d-flex'>
                                <img src={unsplash} alt='unsplash_logo' className='vector' />
                                <span className='heading ms-2 mt-2'><a href='https://unsplash.com/'>Unsplash</a></span>  <img src={rarr} alt='rarr' className='rarr ms-2' />
                            </div>
                            <div className='mt-2'>
                                <span>You can check the licenses and download
                                    the images for free on <a href='https://unsplash.com/'>Unsplash</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6 p-2'>
                    <p className='main'>Fonts</p>
                    <div className='mt-2'>
                        <div className='d-flex'>
                            <img src={fonts} alt='Fonts_vector' className='vector2' />
                            <span className='heading ms-2 mt-1'>Nunito</span> <img src={rarr} alt='rarr' className='rarr ms-2' />
                        </div>
                        <div className='mt-2'>
                            <span>Portlight - Agency Website Template uses free licensed <a href='https://fonts.google.com/'>Google Fonts.</a></span>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='d-flex'>
                            <img src={fonts} alt='Fonts_vector' className='vector2' />
                            <span className='heading ms-2 mt-1'>Syne</span>
                            <img src={rarr} alt='rarr' className='rarr ms-2' />
                        </div>
                        <div className='mt-2'>
                            <span>Portlight - Agency Website Template uses free licensed <a href='https://fonts.google.com/'>Google Fonts.</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
