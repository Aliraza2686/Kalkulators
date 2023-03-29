import Sidebar from "../components/Sidebar"
const FirstScreen = () => {
    return (
        <div className="home-page">
             <div className="side">
                <Sidebar />
             </div>
             <div class="grid-container">
                    <div class="grid-item item-first">20% width</div>
                    <div class="grid-item item-second">
                         <div className="second-layer">
                         <div className="fu p-5">
                  <h1 className="welcome">Welcome to Kalkulators</h1>
                  <p className="mt-2 we-p">Please complete these steps.These steps will help you secure your account and payment options</p>
             </div>

             <div className="quick py-2 relative px-5 grid gap-5 grid-cols-10">
                    <div className="qsvg">
                    <svg width="24" height="30" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21.643 30V31.2C21.9374 31.2 22.2197 31.0736 22.4279 30.8485C22.636 30.6235 22.753 30.3183 22.753 30H21.643ZM12.7635 30H11.6535C11.6535 30.3183 11.7705 30.6235 11.9786 30.8485C12.1868 31.0736 12.4691 31.2 12.7635 31.2V30ZM13.8734 36H20.5331V33.6H13.8734V36ZM8.50128 15.36L8.47908 15.528L10.6768 15.864L10.7012 15.696L8.50128 15.36ZM17.2033 7.2C15.0871 7.19962 13.0419 8.02473 11.4433 9.52376C9.84472 11.0228 8.80008 13.0951 8.50128 15.36L10.7012 15.696C10.9251 14.0037 11.704 12.4554 12.8988 11.3356C14.0936 10.2158 15.622 9.59953 17.2033 9.6V7.2ZM25.9052 15.36C25.6064 13.0951 24.5618 11.0228 22.9632 9.52376C21.3646 8.02473 19.3194 7.19962 17.2033 7.2V9.6C18.7844 9.60003 20.3125 10.2165 21.5073 11.3362C22.702 12.4559 23.4832 14.0039 23.7075 15.696L25.9052 15.36ZM25.9274 15.528L25.9052 15.36L23.7075 15.696L23.7275 15.864L25.9274 15.528ZM24.1737 22.7016C25.5722 20.748 26.2782 18.204 25.9274 15.528L23.7297 15.8664C23.8569 16.8101 23.8064 17.7719 23.5813 18.6941C23.3563 19.6162 22.9613 20.4797 22.42 21.2328L24.1737 22.7016ZM20.5331 26.16V30H22.753V26.1624H20.5331V26.16ZM21.643 28.8H12.7635V31.2H21.643V28.8ZM13.8734 30V26.1624H11.6535V30H13.8734ZM8.47908 15.528C8.31034 16.7898 8.37867 18.0754 8.67999 19.308C8.98132 20.5405 9.50944 21.6947 10.2328 22.7016L11.9887 21.2328C11.4475 20.4797 11.0502 19.6162 10.8252 18.6941C10.6001 17.7719 10.5496 16.8077 10.6768 15.864L8.47908 15.528ZM13.8734 26.16C13.8734 24.1848 12.9011 22.5048 11.9865 21.2304L10.2328 22.7016C11.083 23.8896 11.6535 25.0224 11.6535 26.16H13.8734ZM22.42 21.2304C21.5032 22.5072 20.5331 24.1848 20.5331 26.16H22.753C22.753 25.0224 23.3235 23.8896 24.1737 22.7016L22.42 21.2304ZM16.0933 0V4.8H18.3132V0H16.0933ZM0.554077 19.2H4.99386V16.8H0.554077V19.2ZM29.4126 19.2H33.8524V16.8H29.4126V19.2ZM7.99959 8.7504L4.66975 5.1504L3.09807 6.8496L6.42791 10.4496L7.99959 8.7504ZM27.9786 10.4496L31.3084 6.8496L29.7368 5.1504L26.4069 8.7504L27.9786 10.4496Z" fill="white"/>
                     </svg>

                    </div>
                    <div className="col-span-8 text-white mt-2  ">
                        Quick start guide for Kalkulators
                    </div>
                    <div>
            
            <div className="ic-wrapper absolute right-5 top-4">
            <svg width="6" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.433859 2.66497C-0.486076 1.68906 0.154012 0 1.44378 0C1.82265 0 2.18628 0.161092 2.45593 0.448399L7.57503 5.90261C8.14166 6.50634 8.14166 7.49366 7.57503 8.09739L2.45593 13.5516C2.18628 13.8389 1.82265 14 1.44378 14C0.154012 14 -0.486078 12.3109 0.433856 11.335L4.52022 7L0.433859 2.66497Z" fill="white"/>
            </svg>

            </div>
                    </div>
             </div>


             <div className="subs px-5 mt-5">
                  <div className="start-subs relative p-3 shadow-md font-extralight ">
                     Start subscriptions <span className="subi absolute right-2"><svg width="22" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7347 12C22.7347 18.6274 17.7653 24 11.6352 24C5.50516 24 0.535767 18.6274 0.535767 12C0.535767 5.37258 5.50516 0 11.6352 0C17.7653 0 22.7347 5.37258 22.7347 12ZM3.2039 12C3.2039 17.0343 6.97873 21.1154 11.6352 21.1154C16.2917 21.1154 20.0665 17.0343 20.0665 12C20.0665 6.96571 16.2917 2.88461 11.6352 2.88461C6.97873 2.88461 3.2039 6.96571 3.2039 12Z" fill="#B695F8"/>
                <path d="M7.93542 13L9.78533 15L15.3351 9" stroke="#B695F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
                  </div>

                  <div className="two-factor flex relative mt-3 p-2  shadow-md">
                     Two factor authentication <span className="subi absolute right-2 top-2">
                     <svg width="16" height="16" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4.53458 19.4654C3.97133 20.0287 3.05015 20.0334 2.55849 19.4066C1.33942 17.8526 0.517972 16.0153 0.177231 14.0548C-0.246171 11.6186 0.0933357 9.11114 1.14932 6.87529C2.2053 4.63943 3.92619 2.78437 6.07664 1.56382C8.22708 0.343275 10.7021 -0.183166 13.1631 0.0565008C15.6241 0.296168 17.9511 1.29024 19.8256 2.90276C21.7002 4.51528 23.0308 6.66751 23.6356 9.0651C24.2403 11.4627 24.0897 13.9886 23.2042 16.2973C22.4916 18.1552 21.3311 19.7995 19.8351 21.0891C19.2317 21.6092 18.3288 21.4269 17.8848 20.7655C17.4408 20.1042 17.6268 19.2156 18.2099 18.6729C19.2219 17.7311 20.0113 16.5668 20.5109 15.2643C21.1835 13.5105 21.2979 11.5918 20.8386 9.7706C20.3792 7.94936 19.3684 6.31449 17.9445 5.08959C16.5205 3.86469 14.753 3.10958 12.8835 2.92753C11.0141 2.74547 9.13403 3.14536 7.50052 4.07251C5.86701 4.99966 4.55979 6.40879 3.75765 8.10719C2.95551 9.80558 2.69761 11.7103 3.01923 13.5608C3.25811 14.9353 3.80801 16.23 4.61932 17.3494C5.08679 17.9944 5.09784 18.9022 4.53458 19.4654Z" fill="#B695F8"/>
               </svg>

                </span>
                  </div>
             </div>

                         </div>
                    </div>
                    <div class="grid-item item-third">
                      <div className="third-layer">
                      <div className="email-varification p-5">
                 <div className="e-top flex gap-3">
          <div className="e-wrapper mt-1">
          <svg width="18" height="18" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1199 0.447335C12.6462 1.02223 12.6231 1.93037 12.0683 2.47572L4.85611 9.56522L22.6154 9.56521C23.3801 9.56521 24 10.2076 24 11C24 11.7924 23.3801 12.4348 22.6154 12.4348L4.85611 12.4348L12.0683 19.5243C12.6231 20.0696 12.6462 20.9778 12.1199 21.5527C11.5936 22.1276 10.7173 22.1515 10.1625 21.6061L0.431695 12.0409C0.156086 11.77 1.99213e-06 11.3937 1.9233e-06 11C1.85447e-06 10.6063 0.156085 10.23 0.431695 9.95906L10.1625 0.393848C10.7173 -0.151504 11.5936 -0.127558 12.1199 0.447335Z" fill="url(#paint0_linear_0_49)"/>
            <defs>
            <linearGradient id="paint0_linear_0_49" x1="13.1776" y1="0.273216" x2="13.1625" y2="22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#101828"/>
            <stop offset="0.998509" stop-color="#0D1B37"/>
            <stop offset="1" stop-color="#0A1E46"/>
            </linearGradient>
            </defs>
            </svg>
          </div>

                 <h1>Email Varification</h1>
                 </div>

                 <div className="e-message pt-2 flex gap-3">
                    <div className="em-wrapper ">
                    <svg width="6" height="10" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.433859 2.66497C-0.486076 1.68906 0.154012 0 1.44378 0C1.82265 0 2.18628 0.161092 2.45593 0.448399L7.57503 5.90261C8.14166 6.50634 8.14166 7.49366 7.57503 8.09739L2.45593 13.5516C2.18628 13.8389 1.82265 14 1.44378 14C0.154012 14 -0.486078 12.3109 0.433856 11.335L4.52022 7L0.433859 2.66497Z" fill="url(#paint0_linear_0_73)"/>
                  <defs>
                  <linearGradient id="paint0_linear_0_73" x1="4.39252" y1="0.173866" x2="4.37418" y2="14" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#101828"/>
                  <stop offset="0.998509" stop-color="#0D1B37"/>
                  <stop offset="1" stop-color="#0A1E46"/>
                  </linearGradient>
                  </defs>
                  </svg>

                    </div>
                    <div className="e-text ">
                        A message with code will be sent to an authorized email to verify your email
                    </div>
                 </div>

                 <div className="email-section mt-10">
                    <h1>Email</h1>
                    <input type="email" className="px-3" placeholder="Kalkulators@gmail.com"  />
                    
                 </div>
                 <div className="sendbtn text-center mt-12">
                    <button className="px-14 py-2">Send</button>
                 </div>

                 <div className="otp-varification mt-16">
                    <h1>OTP Varification</h1>

                    <div className="e-message pt-3 flex gap-3">
                    <div className="em-wrapper mt-1">
                    <svg width="6" height="10" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.433859 2.66497C-0.486076 1.68906 0.154012 0 1.44378 0C1.82265 0 2.18628 0.161092 2.45593 0.448399L7.57503 5.90261C8.14166 6.50634 8.14166 7.49366 7.57503 8.09739L2.45593 13.5516C2.18628 13.8389 1.82265 14 1.44378 14C0.154012 14 -0.486078 12.3109 0.433856 11.335L4.52022 7L0.433859 2.66497Z" fill="url(#paint0_linear_0_73)"/>
                     <defs>
                     <linearGradient id="paint0_linear_0_73" x1="4.39252" y1="0.173866" x2="4.37418" y2="14" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#101828"/>
                     <stop offset="0.998509" stop-color="#0D1B37"/>
                     <stop offset="1" stop-color="#0A1E46"/>
                     </linearGradient>
                     </defs>
                     </svg>

                    </div>
                    <div className="e-text">
                        A 6-digit code is send to your email. Kindly enter that code here to verify your email
                    </div>
                 </div>


      <div className="otp-inputs grid grid-cols-7 gap-2 mt-6">
            <div>
               <input type="text"  />
            </div>
            <div>
            <input type="text"  />
            </div>
            <div>
            <input type="text"  />
            </div>
            <div>
            <input type="text"  />
            </div>
            <div>
            <input type="text"  />
            </div>
            <div>
            <input type="text"  />
            </div>
            <div></div>
      </div>

<div className="resend-confirmation mt-5">
    <p> <span className="text-purple-600">Resend</span> confirmaton code (1:07) </p>
</div>

<div className="resend-btn">
<div className="sendbtn text-center mt-10">
                    <button className="px-14 py-2">Verify</button>
                 </div>
</div>
</div>
</div>
</div>
</div>
      <div class="grid-item item-fourth"></div>
</div>
</div>
    )
}

export default FirstScreen