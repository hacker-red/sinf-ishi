
import './App.css';

import logo from "./assets/images/Logo.svg"
import img1 from "./assets/images/Rectangle 13.png"
import img2 from "./assets/images/Rectangle 13.jpg"
import img3 from "./assets/images/Rectangle 13 (1).jpg"
import img4 from "./assets/images/Rectangle 13 (1).png"
import img5 from "./assets/images/Rectangle 13 (2).png"
import img6 from "./assets/images/Rectangle 13 (3).png"
import img7 from "./assets/images/Rectangle 13 (4).png"


import { FaLongArrowAltRight, FaLongArrowAltDown } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="header_bg">
        <div className="container">
          <header className="header">
            <a href="/"><img className='logo' src={logo} alt="" /></a>
          </header>
          <min className="main">
            <p className="main_num">40.990463, 29.136827</p>
            <h2 className="main_title">Who is Metehan</h2>
            <p className="main_text">Metehan is a passionate interface and experience designer from Istanbul, Turkey. I’m working on mobile application and web design project. If you need more detail you can see my <span className='main_span'>CV <FaLongArrowAltRight /></span></p>
            <div className="main_bottom">
              <FaLongArrowAltDown />
              <p>Scroll down</p>
            </div>
          </min>

        </div>
      </div>
      <div className="container">
        <section className="section1">
          <div className='section1_left'>
            <p className="concept">Concept</p>
            <h2 className="section1_title">News App</h2>
            <p className="section1_text">This concept is a news app. I have specified a limited color palette to give users maximum focus on the content. I used a serif font as I thought it would be suitable for a news app</p>
            <div className="section1_see">
              <p>See Details</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          <div>
            <img className='img2' src={img1} alt="" />
          </div>
        </section>
      </div>
      <div className="section2_bg">
      <div className="container">
        <section className="section1">
          <div className='section1_left'>
            <p className="concept">Concept</p>
            <h2 className="section1_title">News App</h2>
            <p className="section1_text">This concept is a news app. I have specified a limited color palette to give users maximum focus on the content. I used a serif font as I thought it would be suitable for a news app</p>
            <div className="section1_see">
              <p>See Details</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          <div>
            <img className='img2' src={img2} alt="" />
          </div>
        </section>
      </div>
      </div>
      <div className="section3_bg">
      <div className="container">
        <section className="section1">
          <div className='section1_left'>
            <p className="concept">Concept</p>
            <h2 className="section1_title">News App</h2>
            <p className="section1_text">This concept is a news app. I have specified a limited color palette to give users maximum focus on the content. I used a serif font as I thought it would be suitable for a news app</p>
            <div className="section1_see">
              <p>See Details</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          <div>
            <img className='img2' src={img3} alt="" />
          </div>
        </section>
      </div>
      </div>
      <div className="section4_bg">
      <div className="container">
        <section className="section1">
          <div className='section1_left'>
            <p className="concept">Concept</p>
            <h2 className="section1_title">News App</h2>
            <p className="section1_text">This concept is a news app. I have specified a limited color palette to give users maximum focus on the content. I used a serif font as I thought it would be suitable for a news app</p>
            <div className="section1_see">
              <p>See Details</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          <div>
            <img className='img2' src={img4} alt="" />
          </div>
        </section>
      </div>
      </div>
      <div className="section5_bg">
      <div className="container">
        <section className="section1">
          <div className='section1_left'>
            <p className="concept">Concept</p>
            <h2 className="section1_title">News App</h2>
            <p className="section1_text">This concept is a news app. I have specified a limited color palette to give users maximum focus on the content. I used a serif font as I thought it would be suitable for a news app</p>
            <div className="section1_see">
              <p>See Details</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          <div>
            <img className='img2' src={img5} alt="" />
          </div>
        </section>
      </div>
      </div>
      <div className="section6_bg">
      <div className="container">
        <section className="section1">
          <div className='section1_left'>
            <p className="concept">Concept</p>
            <h2 className="section1_title">News App</h2>
            <p className="section1_text">This concept is a news app. I have specified a limited color palette to give users maximum focus on the content. I used a serif font as I thought it would be suitable for a news app</p>
            <div className="section1_see">
              <p>See Details</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          <div>
            <img className='img2' src={img6} alt="" />
          </div>
        </section>
      </div>
      </div>
      <div className="section7_bg">
      <div className="container">
        <section className="section1">
          <div className='section1_left'>
            <p className="concept">Concept</p>
            <h2 className="section1_title">News App</h2>
            <p className="section1_text">This concept is a news app. I have specified a limited color palette to give users maximum focus on the content. I used a serif font as I thought it would be suitable for a news app</p>
            <div className="section1_see">
              <p>See Details</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          <div>
            <img className='img2' src={img7} alt="" />
          </div>
        </section>
      </div>
      </div>
      <div className="footer_bg">
        <div className="container">
          <footer className="footer">
            <h2 className="design">Looking for help with design?</h2>
            <h2 className="send">Send Me Details</h2>
            <h2 className="contact">Contact</h2>
            <h2 className="mail">hi@metehan.com</h2>
            <h2 className="social">Social</h2>
            <div className="links">
              <a className='link' href="">Dribbble</a>
              <a className='link' href="">Behance</a>
              <a className='link' href="">Medium</a>
              <a className='link' href="">LinkedIn</a>
              <a className='link' href="">Instagram</a>
            </div>
            <p className="footer_text">The design files of this website are shared as open source. If you want to examine the design, you can download it <span className="footer_span">here.</span></p>
            <p className="footer_text">Developed by <span className="footer_span">Emre Sandikci</span></p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
