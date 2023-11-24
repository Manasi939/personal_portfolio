
import './App.css';
import { useEffect } from 'react';
import myimg from './images/istockphoto-1168361545-612x612.jpg';
import laptopwo from './images/istockphoto-1188816693-612x612-removebg-preview.png'
import calls from './images/call-center-customer-service-tips-scaled-removebg-preview.png'
import {motion} from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'font-awesome/css/font-awesome.min.css';
function App() {
 
  useEffect(()=>{
     Aos.init({duration:2000});
     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])
  return (
    <div className="App">
   
    <nav  id="nav"  className="navbar font-sans text-[#1a6a7e] lg:text-[20px] right-0 top-0  md:text-[17px] font-bold fixed z-10 ">
       
       <ul data-aos="fade-left" className="flex md:justify-end gap-7 mx-16 justify-center   ">
           
           <li><a className="btn " href="#main" >Home</a></li>
           <li><a className="btn" href="#about">About</a></li>
           <li><a className="btn" href="#skills">Skills</a></li>
           <li><a className="btn" href="#contact">Contact</a></li>
       </ul>
      </nav>
  
      
   <main >
        <motion.section  data-aos="fade-right">
            <div id="main"
                className=" rounded-full -z-20 absolute blur-2xl w-[469px] h-[426px]  left-[-192px] top-[-200px] bg-gradient-to-br from-[#7D82AE] to-[#4DF2DE]">
            </div>

            <div className="contain main-page  relative top-[77px] ">

                <div
                    className=" hover:shadow-[#55817f]hover:shadow-lg p-20  lg:p-28 rounded-3xl sm:w-[90vw] md:w-[80vw]  mx-auto my-10  main-box flex flex-wrap  items-center  gap-8 lg:gap-3 place-content-center justify-center  ">
                    <div
                        className="main-left relative lg:w-[40%] flex justify-center m-auto mb-20 flex-col lg:flex-row min-w-[340px]">
                        <div
                            className="absolute inline-block m-auto opacity-50 rounded-full h-[390px] w-[390px] bg-gradient-to-b from-[#154b3a] to-nav-text">
                        </div>
                        <img src={myimg}
                            className=" my-photo h-[370px] w-[370px] rounded-full relative min-w-[37 0px]" alt=""/>
                    </div>
                    <div className="main-right lg:w-[40%]  text-center lg:text-left  ">
                        <h1 className="font-sans text-3xl" aos-data="flip-up" >
                            <p className="text-[#3ec5a8] text-3xl inline-block">H</p>ello there <p
                                className="text-[#3ec5a8]  inline-block p-0 text-3xl ">!</p>
                            <p className=" text-3xl inline-block">!</p>
                        </h1>
                        <h1>This is <br/>
                            <p className="text-[#3ec5a8]  inline-block"> Mansi</p> <br/> Gaikwad.
                        </h1>
                        <h1 className="para">I am a web designer.</h1>

                        <a href="#about"   className="button_blue">Know more!!</a>
                    </div>
                </div>

            </div>
        </motion.section>
        {/* <div className=" bottom-7 right-4  fixed ">
            <i className="fa-solid fa-arrow-up-long fa-2xl mr-2 opacity-50" style={{color: "#11233f"}}></i>
            <a className="rounded-full h-[70px] w-[70px] bg-[#0b3049] hover:bg-bluee sticky top-0 right-0 " href="#nav">
                <i className="fa-solid fa-2xl fa-chevron-up" style={{color: "#c9cbcf"}}></i>
            </a>
        </div> */}
        
        {/* <!-- sabout me --> */}
        <div id="about" className=" about-me  text-center contain  relative top-[77px] ">
            <h1 data-aos="fade-down" data-aos-duration="300" className="heading font-Besley">About me!</h1>
            <div className="absolute w-[1px] h-[700px] bg-black left-[50%] top-[50%] line"></div>


            <section className=" flex lg:h-[120vh] place-content-center flex-wrap py-12 flex-col lg:flex-row m-auto gap-2 lg:gap-0 ">

                <div data-aos="fade-right" className="left-about lg:w-[50%]">
                    <div className="left-about-img w-[100%] inline-block ">
                        <img src={laptopwo} className="w-[100%]"
                            alt=""/>
                    </div>
                </div>
                <div className="right-about lg:w-[50%]"  data-aos="fade-left">
                    <div className="top-section ">

                        <p className="text-xl font-bold my-3 text-nav-text">Zealous Frontend Developer.</p>
                        <p className="para font-semibold">Currently pursuing Bachelors in Information Technology.Keen
                            towards
                            making chique web designs and delivering quality work. </p>
                    </div>
                    <div className="bottom-section ">
                        <div className="cards flex place-content-center gap-8  my-7">
                            <div className="card">
                                <p className="font-extrabold text-2xl ">9+</p>
                                <h2 className="font-bold">CGPA</h2>
                            </div>
                            <div className="card">
                                <p className=" font-extrabold text-2xl">4+</p>
                                <h2 className=" font-bold">Projects</h2>
                            </div>
                            <div className="card">
                                <p className=" font-extrabold text-2xl">5+</p>
                                <h2 className=" font-bold ">Papers</h2>
                            </div>

                        </div>
                        <a href="../images/Resume (1).pdf" className="button_blue inline-block " download>Download CV</a>
                    </div>

                </div>

            </section>
        </div>
        {/* <!-- skills section --> */}

        <section id="skills" className="Skills contain text-center  ">
            <h1 data-aos="fade-down" data-aos-duration="300" className="mb-20 font-Besley heading">Skills</h1>
            <div className="flex gap-7 flex-wrap lg:flex-nowrap">
                <div data-aos="fade-up-right" className="w-[100%] lg:w-[50%]  hover:shadow-[#55817f] hover:shadow-lg bg-gradient-to-t to-[#18c7a150] from-[#096879] rounded-2xl lg:mt-7">
                    <h2 className="text-2xl font-bold my-3 text-[#096879] font-Besley pt-2">Frontend Skills</h2>

                    <div className="card-contain bg-white box-border p-3 m-7 front-skills rounded-2xl">

                        <div className="card_skills ">
                            <span className="inline-block"><i className="fa-solid fa-code" style={{color: "#296e7f"}}></i></span>
                            <h2 className=" ml-2 inline-block "> HTML</h2>
                            <div className="back">

                                <div className="front html_ani"></div>
                            </div>
                        </div>
                        <div className="card_skills">
                            <span> <i className="fa-regular fa-file-code" style={{color: "#326d9a"}}></i></span>
                            <h2 className="inline-block ml-2">CSS</h2>
                            <div className="back">
                                <div className="front css_ani"></div>
                            </div>
                        </div>

                        <div className="card_skills">
                            <span> <i className="fa-brands fa-js" style={{color: "#3076ab"}}></i></span>
                            <h2 className="inline-block ml-2"> JS</h2>
                            <div className="back">
                                <div className="front js_ani"></div>

                            </div>
                        </div>

                        <div className="card_skills">
                            <span><i className="fa-brands fa-react" style={{color: "#2d518f"}}></i></span>
                            <h2 className="inline-block ml-2">React</h2>
                            <div className="back">
                                <div className="front react_ani"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div data-aos="fade-down-left" 
                    className="  hover:shadow-[#55817f] hover:shadow-lg w-[100%] lg:w-[50%] contain flex flex-col-reverse bg-gradient-to-t  from-[#18c7a150] to-[#096879] rounded-2xl lg:flex-col lg:mb-7">
                    <div className=" card-contain bg-white box-border p-3 m-7 front-skills rounded-2xl ">

                        <div className="card_skills" >
                            <span><i className="fa-solid fa-book-open" style={{color:"#3076ab"}}></i></span>
                            <h2 className="inline-block ml-2">Diligent</h2>
                            <div className="back">
                                <div className="front dili_ani"></div>
                            </div>

                        </div>
                        <div className="card_skills">
                            <span><i className="fa-solid fa-pen-clip " style={{color:"#3076ab"}}></i></span>
                            <h2 className="inline-block ml-2">Earnest</h2>
                            <div className="back">
                                <div className="front earn_ani"></div>
                            </div>

                        </div>
                        <div className="card_skills">
                            <span><i className="fa-solid fa-eye" style={{color:"#3076ab"}}></i></span>
                            <h2 className="inline-block ml-2">Curious</h2>
                            <div className="back">
                                <div className="front curi_ani"></div>
                            </div>

                        </div>
                        <div className="card_skills">
                            <span><i className="fa-solid fa-crop-simple" style={{color:"#3076ab"}}></i></span>
                            <h2 className="inline-block ml-2">Problem Solving</h2>
                            <div className="back">
                                <div className="front list_ani"></div>
                            </div>

                        </div>

                    </div>
                    <h2 className="text-2xl font-bold my-3 lg:text-[#096879] text-white font-Besley pt-2">Soft skills</h2>
                </div>
            </div>
        </section>
        
        <section  id="contact" className="contain ">
            <h1 className="heading my-9 font-Besley ">Contact me!!</h1>
            <div className="contain flex flex-wrap justify-center gap-0 lg:gap-9">
                <div className="">
              <img src={calls} alt=""/>
                </div>
                <div className="contact-form w-[500px] m-auto ">

                    <div href className="text-left my-6 rounded-2xl p-3 hover:shadow-[#55817f] hover:shadow-lg border-bluee border-2 bg-gradient-to-t from-[#18c7a150] to-[#096879] ">
                       <div>
                      <h2 className="text-white font-Besley font-bold text-center p-4">Let's Connect!</h2>
                       </div>
                        <div className="p-3">
                            <input type="text" className="input_c" id="fullname" placeholder="Enter your Name"/>
                        </div>
                        <div className="p-3">
                            <input type="email" className="input_c" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="p-3">
                            <input type="text" className="input_c" id="phone" placeholder="Enter your Phone No"/>
                        </div>

                     <div className="p-3">
                        
                        <textarea className="input_c" name="" id="message" cols="30" rows="10" placeholder="How may I help??"></textarea>
                     </div>
                        <button className="button_blue m-auto block p-9" onclick="SendMail()">Submit</button>

                    </div>

                </div>

            </div>

        </section>
        {/* <!-- <section className="Work">

        </section> --> */}

        <div id="#foo" className="foo bg-gradient-to-t from-[#195f803f] to-[#55817f56] text-center">
            <a className="mx-6  inline-block" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
            <a className="mx-6 inline-block " target='_blank' href="https://github.com/Manasi939" ><svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
            <a className="mx-6 inline-block" target="_blank"  href="https://www.linkedin.com/in/mansi-gaikwad-44b172223/" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
           
          
        </div>
    </main>
    </div>
  );
}

export default App;
