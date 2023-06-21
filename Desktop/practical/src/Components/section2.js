import React from 'react'
import vLogo from '../assets/vLogo.png'
import rarr from '../assets/rarr.png'
import figma from '../assets/figma.png'
import webflow from '../assets/webflow.png'
export default function Section2() {
    const css = `
    .vLogo{
        width: 101.38px;
        height: 101.38px;
    }
    .heading{
        // font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        color: #0D161A;
        
    }
    .text{
        // font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #171214;

    }
    .icons{
        height:50px;
        width:50px;
        font-size:50px;
    }
    .icons_heading{
        // font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #0D161A;
    }
    .v1_3635 {
        width: 345px;
        height: 676px;
        background: rgba(13,22,26,1);
        opacity: 1;
        // position: absolute;
        top: 0px;
        // left: 234px;
        border-bottom-left-radius: 30px;
        overflow: hidden;
        float:right;
    }
    .v1_3636 {
        width: 100%;
         max-width: 561px;
        height: auto;
        background: rgba(255,255,255,1);
        opacity: 1;
        position: relative;
        // top: 79px;
        // left: 0px;
        border: 2px solid rgba(224,224,224,1);
        border-radius: 20px;
        box-shadow: -10px 35px 35px rgba(0.6166666746139526, 0.6166666746139526, 0.6166666746139526, 0.25);
        // overflow: hidden;
      }
      .logo1{
        width: 100px;
        height: 100px;
      }
      .logo2{
        width: 80px;
        height: 80px;
        margin: auto 8px;
      }
      .b1{
        // width: 450px;
        height: 55px;
        background: #4353FF;
        border-radius: 10px;
        // margin-top: -370px;
      }
      .b1_text{
        // font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        color: #FFFFFF;
        text-align: center;
        text-decoration-line: underline;
      }
      .container_files{
        margin:60px 30px;
        overflow-wrap: break-word;
      }
      .sec2_container{
        margin-left:65px;
        margin-top: 90px;
      }
      @media (max-width: 1024px) {
        .v1_3635 {
          width: 100%;
          height: auto;
          float: none;
          border-radius: 0;
        }
       
        .b1 {
          width: auto;
          margin-top: 20px;
        }
        .b1_text{
            font-weight: auto;
            font-size: 15px;
        }
        .sec2_container{
            margin-left:auto;
        }
        
      }
    `;

    return (
        <>
            <style>{css}</style>
            <div className='container-fluid max-vw-100'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='container sec2_container'>
                            <div className='d-flex'>
                                <img src={vLogo} alt='Vector' className='vLogo' />
                                <div className='col-4 ms-3'>
                                    <span className='heading'>VictorFlow</span><br />
                                    <span className='text'>Webflow Design & Development Agency</span>
                                </div>
                            </div>
                            <h4 className='mt-3'>Follow us</h4>
                            <div class="d-flex mt-4">
                                <i className='bi bi-instagram icons'></i>
                                <div className='col-6 ms-3'>
                                    <span class="icons_heading"><a href='https://www.instagram.com/victorflow_agency/'>Instagram</a></span> <img src={rarr} alt='rarr' />
                                    <br />
                                    <span class="v1_3692">Join our Instagram page, We share UI/UX Design
                                        tips.</span>
                                </div>
                            </div>
                            <div class="d-flex mt-4">
                                <i className='bi bi-twitter icons'></i>
                                <div className='col-6 ms-3'>
                                    <span class="icons_heading"><a href="https://twitter.com/victorflow_Agcy">Twitter</a></span> <img src={rarr} alt='rarr' />
                                    <br />
                                    <span class="v1_3686">Join our Twitter page, We share UI/UX Design
                                        tips.</span>
                                </div>
                            </div>
                            <div class="d-flex mt-4">
                                <i className='bi bi-linkedin icons'></i>
                                <div className='col-6 ms-3'>
                                    <span class="icons_heading"><a href='https://www.linkedin.com/company/victorflow'>LinkedIn</a></span> <img src={rarr} alt='rarr' />
                                    <br />
                                    <span class="v1_3681">Join our Linkedin page, We share UI/UX Design
                                        tips.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div class="v1_3635"></div>
                        <p className="" style={{ fontSize: '40px', marginTop: "90px", fontWeight: "700" }}>File Info</p>
                        <div class="v1_3636 ">
                            <div className='container_files'>

                                <div className='d-flex mb-3'>
                                    <img src={figma} alt='Vector' className='logo1' />
                                    <div className=''>
                                        <span className='heading'>Figma File for <span style={{ color: '#4353FF' }}>FREE</span></span><br />
                                        <span className=''>It is free to use for personal and commercial purposes.</span>
                                    </div>
                                </div>

                                <div className='d-flex mb-3'>
                                    <img src={webflow} alt='Vector' className='logo2' />
                                    <div className='ms-1'>
                                        <span className='heading'>Webflow</span><br />
                                        <span className=''>The complete design is available as a Webflow template.</span>
                                    </div>
                                </div>
                                
                                    <a href='https://www.victorflow.com/template/portlight'><button className='btn btn-primary b1 ms-1'><span className='b1_text'>Get Template $49 USD</span></button></a>
                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
