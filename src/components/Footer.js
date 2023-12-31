import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';
const Footer = () => {
     return (
          <>
               <footer className='footer-top py-3 border-bottom border border-1 '>
                    <div className='container'>
                         <div className='row'>
                              <div className='col-5'>
                                   <div className='footer-topdata d-flex gap-15 align-items-center'>
                                        <img src='images/newsletter.png' alt='newsletter' />
                                        <h3 className='mb-0 text-white'> Sign up for Newsletter</h3>
                                   </div>
                              </div>
                              <div className='col-7'>
                                   <div className='input-group mb-3'>
                                        <input
                                             type='text'
                                             className='form-control py-2'
                                             placeholder='Your email'
                                             aria-label='Your email'
                                             aria-describedby='basic-addon2'
                                        />
                                        <span className='input-group-text px-3' id='basic-addon2'>
                                             Subscribe
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
               <footer className='footer-mid py-3 border-bottom border border-1'>
                    <div className='container'>
                         <div className='row'>
                              <div className='col-4'>
                                   <h4 className='text-white my-3'>Contact Us</h4>
                                   <div>
                                        <p className='d-block'>No 001, HCMC, VietNam, 111111</p>
                                        <a href='tel:+84 392911926' className='d-block'>
                                             Tel: +84 392911926
                                        </a>
                                        <a href='mailto:kietpro210603@gmail.com' className='d-block'>
                                             Email: Kietpro210603@gmail.com
                                        </a>
                                        <div className='social-icons d-flex align-align-items-baseline gap-15'>
                                             <a href='#'>
                                                  <BsLinkedin />
                                             </a>
                                             <a href='#'>
                                                  <BsInstagram />
                                             </a>
                                             <a href='#'>
                                                  <BsYoutube />
                                             </a>
                                             <a href='#'>
                                                  <BsGithub />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-3'>
                                   <h4 className='text-white my-3'>Information</h4>
                                   <div>
                                        <Link to='/'>Privacy Policy</Link>
                                        <Link to='/'>Refund Policy</Link>
                                        <Link to='/'>Ship Policy</Link>
                                        <Link to='/'>Terms of Policy</Link>
                                        <Link to='/'>Blogs</Link>
                                   </div>
                              </div>
                              <div className='col-3'>
                                   <h4 className='text-white my-3'>Account</h4>
                                   <div>
                                        <Link to='/'>Search</Link>
                                        <Link to='/'>About Us</Link>
                                        <Link to='/'>Fag</Link>
                                        <Link to='/'>Contact</Link>
                                        <Link to='/'>Size Char</Link>
                                   </div>
                              </div>
                              <div className='col-2'>
                                   <h4 className='text-white my-3'>Quick Links</h4>
                                   <div className='footer-links'>
                                        <Link to='/'>Accessories</Link>
                                        <Link to='/'>Laptops</Link>
                                        <Link to='/'>Headphones</Link>
                                        <Link to='/'>Smart Watches</Link>
                                        <Link to='/'>Tablets</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
               <footer className='py-3'>
                    <div className='container'>
                         <div className='row'>
                              <div className='col-6'>
                                   <div className='text-startF mb-0 text-white'>
                                        &copy; {new Date().getFullYear()}. Power by Tunakite
                                   </div>
                              </div>
                              <div className='col-6'>
                                   <div className='text-center mb-0 text-white'></div>
                              </div>
                         </div>
                    </div>
               </footer>
          </>
     );
};

export default Footer;
