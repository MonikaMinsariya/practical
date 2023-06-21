import React from 'react';
import logo from '../assets/Logo.png';
import rec1 from '../assets/Rectangle.png';
import rec2 from '../assets/Rectangle (1).png';
import background from '../assets/Background.png'

export default function Section1() {
  const css = `
    .logo {
      width: 222.29px;
      height: 68.58px;
    }
    .text1{
      // font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 129.02%;
    text-align: center;
    color: #FFFFFF;
    }
    .text2{
      // font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      // font-size: 20px;
      line-height: 145.38%;
      text-align: center;
      color: #FFFFFF;
    }
    .rec1 {
      width: 100%;
      max-width: 630.15px;
      margin-top: 87px;
      z-index: 3;
    }
    .rec2 {
      width: 100%;
      max-width: 630.15px;
      background: #B9B9B9;
      margin-left: -115px;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      .rec1,
      .rec2 {
        margin-left: 0;
      }
      .rec1{
        margin-top: auto;
      }
    }
  
  `;

  return (
    <>
      <style>{css}</style>
      <div className="container-fluid text-white text-center bg-dark" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <img src={logo} alt="portlight" className="logo mt-5" />
          <div>
            <p className='text1'>Portlight - Agency Website Template</p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-8">
              <p className='text2'>
                Portlight is a creative, minimal, and trendy designed portfolio agency Webflow template. It is designed
                for: agency, business, blog, corporate, company, minimal, creative, modern, photography, portfolio,
                responsive, video, and personal websites.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bg-secondary rec1">
              <img src={rec1} alt="img" style={{ width: '100%' }} />
            </div>
            <div className="rec2">
              <img src={rec2} alt="img" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
