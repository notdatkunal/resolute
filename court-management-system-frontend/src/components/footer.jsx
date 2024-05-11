export default function Footer(){

   const ARB = () =>{

   }

    return(<>
      {/* <!-- footer section start --> */}
      <div class="footer_section layout_padding">
         <div class="container">
            <div class="location_main">
               <div class="location_text"><img src="src/assets/images/map-icon.png"/><span class="padding_left_10"><a href="#">Location: Office No-307, 3rd  floor, M. K. Bhavan, S.B.S Road, Ballard Estate, Fort, Mumbai 400001</a></span></div>
               <div class="location_text center"><img src="src/assets/images/call-icon.png"/><span class="padding_left_10"><a href="#">Call ; 01 1234567890</a></span></div>
               <div class="location_text right"><img src="src/assets/images/mail-icon.png"/><span class="padding_left_10"><a href="#">demo@gmail.com</a></span></div>
            </div>
            <div class="footer_section_2">
               <div class="row">
                  {/* <div class="col-lg-4">
                     <h2 class="footer_title">About</h2>
                     <p class="footer_text">There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav</p>
                  </div> */}
                  <div class="col-lg-4" style={{textAlign:'center'}}>
                     <h2 class="footer_title">Services Link</h2>
                     <div>
                        <a className="" onClick={ARB}>ARB</a>
                     </div>
                     <div>
                        <a className="" onClick={ARB}>Medi</a>
                     </div>
                     <div>
                        <a className="" onClick={ARB}>Concili</a>
                     </div>
                     <div>
                        <a className="" onClick={ARB}>Free Legal Aid</a>
                     </div>
                  </div>
                  <div class="col-lg-4">
                     <h2 class="footer_title">Subscribe</h2>
                     <input type="text" class="Enter_text" placeholder="Enter Your Email" name="Enter Your Email"/>
                     <div class="subscribe_bt"><a href="#">Subscribe</a></div>
                     <div class="social_icon">
                        <ul>
                           <li><a href="#"><img src="src/assets/images/fb-icon.png"/></a></li>
                           <li><a href="#"><img src="src/assets/images/twitter-icon.png"/></a></li>
                           <li><a href="#"><img src="src/assets/images/linkedin-icon.png"/></a></li>
                           <li><a href="#"><img src="src/assets/images/instagram-icon.png"/></a></li>
                           <li><a href="#"><img src="src/assets/images/youtub-icon.png"/></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- footer section end --> */}
      {/* <!-- copyright section start --> */}
      <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">Copyright 2020 All Rights Reserved.<a href="https://html.design"> htmldex</a></p>
         </div>
      </div>
      {/* <!-- copyright section end --> */}

    </>);
}