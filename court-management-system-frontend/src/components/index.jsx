import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import NavBar from "./navbar";






export default function Home(){

   const navigate = useNavigate();



   const aboutUs = () =>{
      debugger;
      navigate('/about');
   }

    return(<>
    <div className="header_section">
        <NavBar></NavBar>
        {/* <!--banner section start --> */}
         <div className="banner_section layout_padding">
            <div className="container-fluid">
               <section className="slide-wrapper">
                  <div className="container-fluid">
                     <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators">
                           <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                           <li data-target="#myCarousel" data-slide-to="1"></li>
                           <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <div className="container">
                                 <div className="banner_main">
                                    <h1 className="banner_title">Compromise is not a sign of defeat</h1>
                                    <p className="banner_text">It is a judicious decision that strikes a balance between the stress of prolonged litigation and the invaluable peace of mind.
                                    </p>
                                    <div className="btn_main">
                                       {/* <div className="contact_bt active "><a href="">Contact Us</a></div>
                                       <div className="readmore_bt"><a href="#">Read More</a></div> */}
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <div className="carousel-item">
                              <div className="container">
                                 <div className="banner_main">
                                    <h1 className="banner_title">Business Agency Profit Your Marketing</h1>
                                    <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                                    <div className="btn_main">
                                       <div className="contact_bt active "><a href="#">Contact Us</a></div>
                                       <div className="readmore_bt"><a href="#">Read More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="carousel-item">
                              <div className="container">
                                 <div className="banner_main">
                                    <h1 className="banner_title">Business Agency Profit Your Marketing</h1>
                                    <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                                    <div className="btn_main">
                                       <div className="contact_bt active "><a href="#">Contact Us</a></div>
                                       <div className="readmore_bt"><a href="#">Read More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
         {/* <!--banner section end --> */}
      </div>
      {/* <!--header section end --> */}
      {/* <!--about section start --> */}
      <div className="about_section layout_padding">
         <div className="container">
            <h1 className="about_title">About Us</h1>
            <p className="about_text">At our esteemed company, we pride ourselves on our expertise in online dispute resolution through arbitration and mediation. </p>
            <div className="about_section_2">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="about_image"><img src="src/assets/images/about-img.png"/></div>
                  </div>
                  <div className="col-lg-6">
                     <div className="about_title_main">
                        <p className="lorem_text">Our dedicated team of legal experts possesses extensive experience in navigating the intricacies of resolving disputes through digital platforms, ensuring swift and efficient resolution for our clients.</p>
                        <div className="read_bt"><a onClick={aboutUs}>Read More</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!--about section end --> */}
      {/* <!-- services section start --> */}
      <div className="services_section layout_padding" id="services_section">
         <div className="container">
            <h1 className="services_title">What We Do</h1>
            {/* <p className="about_text">It is a long established fact that a reader will be distracted by the readable content of a page when</p> */}
            <div className="services_section_2">
               <div className="row">
                  <div className="col">
                     <div className="icon_box">
                        <div className="icon_1"><img src="src/assets/images/icon-1.png"/></div>
                     </div>
                     <h4 className="selection_text">Arbitration</h4>
                     {/* <p className="row" style={{textAlign:"center", marginRight:'100px'}}> */}
                     <p className="ipsum_text">
                        Arbitration is a method of resolving disputes outside of the court system. In arbitration, parties present their case to a neutral third party, who then renders a decision that is binding on both parties.
                     </p>
                  </div>
                  <div className="col">
                     <div className="icon_box">
                        <div className="icon_1"><img src="src/assets/images/icon-4.png"/></div>
                     </div>
                     <h4 className="selection_text">Mediation</h4>
                     {/* <p className="row" style={{textAlign:"center", marginRight:'80px'}}> */}
                     <p className="ipsum_text">
                        Mediation involves a neutral third party, the mediator, who facilitates communication and negotiation between disputing parties to help them reach a voluntary agreement.</p>
                  </div>
                  <div className="col">
                     <div className="icon_box">
                        <div className="icon_1"><img src="src/assets/images/icon-2.png"/></div>
                     </div>
                     <h4 className="selection_text">Conciliation</h4>
                     {/* <p className="row" style={{textAlign:"justify", marginRight:'40px'}}> */}
                     <p className="ipsum_text">
                        Conciliation shares similarities with mediation but typically involves a more active role for the conciliator in proposing solutions and encouraging compromise.
                     </p>
                  </div>
                  <div className="col">
                     <div className="icon_box">
                        <div className="icon_1"><img src="src/assets/images/icon-5.png"/></div>
                     </div>
                     <h4 className="selection_text">Free Legal Aid</h4>
                     <p className="ipsum_text">
                       JM Swift is committed to delivering free legal aid to those in need. By offering pro bono legal services, the organization ensures that financial barriers do not prevent individuals from accessing justice.
                     </p>
                  </div>
                  {/* <div className="col-lg-4">
                     <div className="icon_box">
                        <div className="icon_1"><img src="src/assets/images/icon-3.png"/></div>
                     </div>
                     <h4 className="selection_text">Business Plans</h4>
                     <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or randomised</p>
                     <div className="icon_box">
                        <div className="icon_1"><img src="src/assets/images/icon-6.png"/></div>
                     </div>
                     <h4 className="selection_text">Management and Asset</h4>
                     <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or randomised</p>
                  </div> */}
               </div>
            </div>
         </div>
      </div>
      {/* <!-- services section end --> */}
      {/* <!-- blog section start -->
      <div className="blog_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="blog_img"><img src="src/assets/images/blog-img.png"/></div>
               </div>
               <div className="col-md-6">
                  <h1 className="blog_title">Easily Grow Your Business Earn More Money</h1>
                  <p className="blog_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There uffered alteration in some form, by injected humour, or randomised words </p>
                  <div className="read_bt"><a href="#">Read More</a></div>
               </div>
            </div>
         </div>
      </div>
      <!-- blog section end -->
      <!-- events section start -->
      <div className="events_section layout_padding">
         <div className="container">
            <h1 className="events_title">Follow Our Video For Solved Your Problem</h1>
            <div className="events_section_2">
               <div className="events_bg">
                  <div className="play_icon"><a href="#"><img src="src/assets/images/play-icon.png"/></a></div>
               </div>
            </div>
            <div className="seemore_bt"><a href="#">See More</a></div>
         </div>
      </div>
      <!-- events section end --> */}
      {/* <!-- contact section start --> */}
      <div className="contact_section layout_padding">
         <div className="container" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1 className="contact_title" style={{justifyContent:'center', textAlign:"center", }}>Get In Touch</h1>
            {/* <p className="contact_text">majority have suffered alteration in some form, by injected humour, or </p> */}
            <div className="contact_section_2 layout_padding">
               <div className="row">
                  <div className="col-md-6">
                     <div className="contact_main">
                        <input type="text" className="mail_text" placeholder="Full Name" name="Full Name"/>
                        <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/>
                        <input type="text" className="mail_text" placeholder="Email" name="Email"/>
                        <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        <div className="send_bt"><a href="#">SEND</a></div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="map_main">
                        <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.897073768439!2d72.832334178834!3d18.935949436447043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1da35870c23%3A0x69b487517fcd373!2sMK%20Bhavan%2C%20Old%20Custom%20House%20Rd%2C%20Ballard%20Estate%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1715265856330!5m2!1sen!2sin" width="600" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- contact section end --> */}
      {/* <!-- testimonial section start --> */}
      {/* <div className="testimonial_section layout_padding">
         <div id="my_carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#my_carousel" data-slide-to="0" className="active"></li>
               <li data-target="#my_carousel" data-slide-to="1"></li>
               <li data-target="#my_carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="testimonial_title">Testimonial</h1>
                     <div className="testimonial_section_2">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="testimonial_box">
                                 <div className="jonimo_title_main">
                                    <h4 className="jonimo_text">Jonimo</h4>
                                    <div className="quick_icon"><img src="src/assets/images/quick-icon.png"/></div>
                                    <div className="quick_icon_1"><img src="src/assets/images/quick-icon1.png"/></div>
                                 </div>
                                 <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="testimonial_box">
                                 <div className="jonimo_title_main">
                                    <h4 className="jonimo_text">Mark Duo</h4>
                                    <div className="quick_icon"><img src="src/assets/images/quick-icon.png"/></div>
                                    <div className="quick_icon_1"><img src="src/assets/images/quick-icon1.png"/></div>
                                 </div>
                                 <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="testimonial_title">Testimonial</h1>
                     <div className="testimonial_section_2">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="testimonial_box">
                                 <div className="jonimo_title_main">
                                    <h4 className="jonimo_text">Jonimo</h4>
                                    <div className="quick_icon"><img src="src/assets/images/quick-icon.png"/></div>
                                    <div className="quick_icon_1"><img src="src/assets/images/quick-icon1.png"/></div>
                                 </div>
                                 <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="testimonial_box">
                                 <div className="jonimo_title_main">
                                    <h4 className="jonimo_text">Mark Duo</h4>
                                    <div className="quick_icon"><img src="src/assets/images/quick-icon.png"/></div>
                                    <div className="quick_icon_1"><img src="src/assets/images/quick-icon1.png"/></div>
                                 </div>
                                 <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="testimonial_title">Testimonial</h1>
                     <div className="testimonial_section_2">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="testimonial_box">
                                 <div className="jonimo_title_main">
                                    <h4 className="jonimo_text">Jonimo</h4>
                                    <div className="quick_icon"><img src="src/assets/images/quick-icon.png"/></div>
                                    <div className="quick_icon_1"><img src="src/assets/images/quick-icon1.png"/></div>
                                 </div>
                                 <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="testimonial_box">
                                 <div className="jonimo_title_main">
                                    <h4 className="jonimo_text">Mark Duo</h4>
                                    <div className="quick_icon"><img src="src/assets/images/quick-icon.png"/></div>
                                    <div className="quick_icon_1"><img src="src/assets/images/quick-icon1.png"/></div>
                                 </div>
                                 <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div> */}
      {/* <!-- testimonial section end --> */}
      <Footer/>
    </>)
}