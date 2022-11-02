import { useLogout } from "./hooks/useLogout";
import { useUserContext } from "./hooks/useUserContext";
import { useState} from "react";
import { Changepass } from "./hooks/useChangePass";
import Footer from "./navbarcomps/footer"

function Navbarc({children}) {

    //const {user} = useUserContext()
    const {user, role, id, accessToken, previousLogin} = JSON.parse(localStorage.getItem('user'));

    const {logout} = useLogout();

    const handleClick = () => {
        logout()
    };

    const [confirmPassword, setConfirmpassword] = useState("");
    const [oldPassword, setOldpassword] = useState("");
    const [newPassword, setNewpassword] = useState("");
    const {change,error,isLoading} = Changepass();
    const [errorpass,setError] = useState("");
    const userId = user.id;
  
    const changeHandler = async (e) => {
      e.preventDefault();
  
      if(newPassword !== confirmPassword){
        setOldpassword("");
        setConfirmpassword("");
        setNewpassword("");
        setTimeout(() => {
            setError("")
        },5000);
        return setError("Yeni şifreyi yanlış girdiniz.");
    }

      await change(userId, oldPassword, newPassword);
    }

    return (
      <>
       <div class="container-xxl position-relative bg-white d-flex p-0">
      {/* <!-- Sidebar Start --> */}
       
       <div class="sidebar pe-4 pb-3">
           <nav class="navbar bg-light navbar-light">
               <img src="https://www.kouvakif.org.tr/img/logo/footer.png " weight="120" height="120" style={{width: 40, height: 40}}/>
               <a href="index.html" class="navbar-brand mx-4 mb-3">
                   <h3 class>Staj Takip Sistemi</h3>
               </a>
               <div class="d-flex align-items-center ms-4 mb-4">
                   <div class="position-relative">
                       <img class="rounded-circle" src="img/user.jpg" alt="" style={{width: 40, height: 40}}/>
                       <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                   </div>
                   <div class="ms-3">
                       <h6 class="mb-0">{user.firstName +" "+ user.lastName}</h6>
                       <span>{role}</span>
                   </div>
               </div>
               <div class="navbar-nav w-100">
                   <a href="index.html" class="nav-item nav-link active"><i class="fa fa-home me-2"></i>Ana Sayfa</a>
                   <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-clipboard-check me-2"></i>Başvuru Kabul</a>
                       <div class="dropdown-menu bg-transparent border-0">
                           <a href="/komstajkabul" class="dropdown-item">Staj Kabul</a>
                           <a href="/komimekabul" class="dropdown-item">İME Kabul</a>
                       </div>
                   </div>
                   <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-question me-2"></i>Sınav Bilgileri</a>
                       <div class="dropdown-menu bg-transparent border-0">
                           <a href="/komstajsinav" class="dropdown-item">Staj Sınavı</a>
                           <a href="/komimesinav" class="dropdown-item">İME Sınavı</a>
                       </div>
                   </div>
                   <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-chart-bar me-2"></i>Değerlendirmeler</a>
                       <div class="dropdown-menu bg-transparent border-0">
                           <a href="/komstajdegerlendirme" class="dropdown-item">Staj Değerlendirme</a>
                           <a href="/komimedegerlendirme" class="dropdown-item">İME Değerlendirme</a>
                       </div>
                   </div>
                   <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-user me-2"></i>Öğrenci Takip</a>
                       <div class="dropdown-menu bg-transparent border-0">
                           <a href="/komstajtakip" class="dropdown-item">Staj Takip</a>
                           <a href="/komimetakip" class="dropdown-item">İME Takip</a>
                       </div>
                   </div>
               </div>
        
   </nav>
</div>
{/* // <!-- Sidebar End --> */}


{/* // <!-- Content Start --> */}
<div class="content">
   {/* <!-- Navbar Start --> */}
   <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
       <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
           
       </a>
       <a href="#" class="sidebar-toggler flex-shrink-0">
           <i class="fa fa-bars"></i>
       </a>
       <form class="d-none d-md-flex ms-4">
           <input class="form-control border-0" type="search" placeholder="Search"/>
       </form>
       <div class="navbar-nav align-items-center ms-auto">
           <div class="nav-item dropdown">
               
               <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                   <a href="#" class="dropdown-item">
                       <div class="d-flex align-items-center">
                           <img class="rounded-circle" src="img/user.jpg" alt="" style={{width: 40, height: 40}}/>
                           <div class="ms-2">
                               <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                               <small>15 minutes ago</small>
                           </div>
                       </div>
                   </a>
                   <hr class="dropdown-divider"/>
                   <a href="#" class="dropdown-item">
                       <div class="d-flex align-items-center">
                           <img class="rounded-circle" src="img/user.jpg" alt="" style={{width: 40, height: 40}}/>
                           <div class="ms-2">
                               <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                               <small>15 minutes ago</small>
                           </div>
                       </div>
                   </a>
                   <hr class="dropdown-divider"/>
                   <a href="#" class="dropdown-item">
                       <div class="d-flex align-items-center">
                           <img class="rounded-circle" src="img/user.jpg" alt="" style={{width: 40, height: 40}}/>
                           <div class="ms-2">
                               <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                               <small>15 minutes ago</small>
                           </div>
                       </div>
                   </a>
                   <hr class="dropdown-divider"/>
                   <a href="#" class="dropdown-item text-center">See all message</a>
               </div>
           </div>
           <div class="nav-item dropdown">
               <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                   <i class="fa fa-bell me-lg-2"></i>
                   <span class="d-none d-lg-inline-flex">Notificatin</span>
               </a>
               <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                   <a href="#" class="dropdown-item">
                       <h6 class="fw-normal mb-0">Profile updated</h6>
                       <small>15 minutes ago</small>
                   </a>
                   <hr class="dropdown-divider"/>
                   <a href="#" class="dropdown-item">
                       <h6 class="fw-normal mb-0">New user added</h6>
                       <small>15 minutes ago</small>
                   </a>
                   <hr class="dropdown-divider"/>
                   <a href="#" class="dropdown-item">
                       <h6 class="fw-normal mb-0">Password changed</h6>
                       <small>15 minutes ago</small>
                   </a>
                   <hr class="dropdown-divider"/>
                   <a href="#" class="dropdown-item text-center">See all notifications</a>
               </div>
           </div>
           <div class="nav-item dropdown">
               <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                   <img class="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{width: 40, height: 40}}/>
                   <span class="d-none d-lg-inline-flex">{user.firstName +" "+ user.lastName}</span>
               </a>
               <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                   <a href="#" class="dropdown-item"><button type="button" class="btn btn-primary" style={{backgroundColor:'#009933'}} data-toggle="modal" data-target="#exampleModal">
                       Şifre Değiştirme
                     </button></a>
                   <a href="/login" class="dropdown-item"><button type="button" class="btn btn-outline-secondary m-2" onClick={handleClick}>Çıkış</button></a>
               </div>
           </div>
       </div>
   </nav>
   {/* <!-- Navbar End --> */}

   {/* çocuk */}
   <div class="container-fluid pt-4 px-4">
        {children}
    <div>

   {/* <!-- Footer Start --> */}
              {/* <!-- Site footer --> */}
              <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6>Tanıtım</h6>
              <ul className="footer-links">
                <li><a href="https://www.kocaeli.edu.tr/tanitim-filmi.php">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-camera-reels-fill" viewBox="0 0 16 16">
                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
                      </svg>   
                      Tanıtım Filmi
                </a></li>
                <li><a href="https://www.kocaeli.edu.tr/tanitim/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                      </svg>
                    Aday Öğrenci
                </a></li>
                <li><a href="https://www.kocaeli.edu.tr/gorseller.php">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-camera-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                    </svg>
                    Görsellerle Üniversitemiz
                </a></li>
                <li><a href="https://www.kocaeli.edu.tr/tanitim/yerleskeler.php">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    Yerleşkeler
                </a></li>
              </ul>            
            </div>
   
            <div className="col">
              <h6>İletişim/ADRES</h6>
              <ul className="footer-links">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                  </svg>
                    Kocaeli Üniversitesi
                    Umuttepe Yerleşkesi
                    41001, İzmit/KOCAELİ</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                    +90 (262) 303 10 00
                </li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-motherboard-fill" viewBox="0 0 16 16">
                    <path d="M5 7h3V4H5v3Z"/>
                    <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1Zm7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z"/>
                  </svg>
                    +90 (262) 303 10 33 </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                    kocaeliuniversitesi@hs01.kep.tr
                </li>
              </ul>
            </div>
          </div>
          <hr/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2022 Kocaeli Üniversitesi
           <a href="https://www.kocaeli.edu.tr/">KOÜ</a>
              </p>
        </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <h6>BİZİ TAKİP EDİN</h6>
                <li><a className="facebook" href="https://www.facebook.com/kou92official/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg></a></li>
                <li><a className="twitter" href="https://twitter.com/kou92official"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/school/kocaeli-university/people/?originalSubdomain=tr"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
            {/* <!-- Footer End --> */}

    {/* Modal Start */}
    <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Şifre Değiştirme</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <form onSubmit={changeHandler}><div class="modal-body">
                          <div class="form-floating mb-3">
                              <input type="password" 
                              class="form-control" 
                              id="floatingPassword"
                                  placeholder="Password"
                                  onChange={(e) => setOldpassword(e.target.value)}
							value={oldPassword}
							required/>
                              <label htmlFor="floatingPassword">Mevcut şifreniz</label>
                          </div>
                          <div class="form-floating mb-3">
                              <input type="password" 
                              class="form-control" 
                              id="floatingPassword"
                              placeholder="Password"      
                              onChange={(e) => setNewpassword(e.target.value)}
							value={newPassword}
							required/>
                              <label htmlFor="floatingPassword">Yeni şifreniz</label>
                          </div>
                          <div class="form-floating mb-3">
                              <input type="password" 
                              class="form-control"
                               id="floatingPassword"
                               onChange={(e) => setConfirmpassword(e.target.value)}
							value={confirmPassword}
							required
                                  placeholder="Password"/>
                              <label htmlFor="floatingPassword">Yeni şifreniz</label>
                          </div>
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary" style={{backgroundColor:'#009933'}} disabled={isLoading}>Kaydet</button>
                        {errorpass && <span className="error-message">{errorpass}</span>}
                        {error&& <div className="error-message">{error}</div>}
                      </div>
                      </form>
                    </div>
                  </div>
                  
              </div>
          {/* Modal End */}
  
            
                </div>
            
            
            </div>
            </div>
            
</div>

    </>
    );
  }
  
  export default Navbarc;
  