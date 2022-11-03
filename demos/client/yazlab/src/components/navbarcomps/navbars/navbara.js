import { useLogout } from "../../hooks/useLogout";
// import { useUserContext } from "./hooks/useUserContext";
import { useState} from "react";
import { Changepass } from "../../hooks/useChangePass";
// import Footer from "./navbarcomps/footer";

function Navbara({children}) {

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
     const userId = user.Id;
   
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

    return(
        <div class="container-xxl position-relative bg-white d-flex p-0">
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}
        {/* <!-- Spinner End --> */}


        {/* <!-- Sidebar Start --> */}
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-light navbar-light">
                <img src="https://www.kouvakif.org.tr/img/logo/footer.png " weight="120" height="120" style={{display: "block", margin: "auto"}}/>
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <h3 class>Staj Takip Sistemi</h3>
                </a>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}}/>
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">Jhon Doe</h6>
                        <span>Yönetici</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <a href="index.html" class="nav-item nav-link active"><i class="fa fa-home me-2"></i>Ana Sayfa</a>
                    <a href="/ykullaniciekle" class="nav-item nav-link"><i class="fa fa-user-plus me-2"></i>Kullanıcı Ekle</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-clipboard-check me-2"></i>Başvuru Kabul</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="ystajkabul.html" class="dropdown-item">Staj Kabul</a>
                            <a href="yimekabul.html" class="dropdown-item">İME Kabul</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-question me-2"></i>Sınav Bilgileri</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="ystajsinav.html" class="dropdown-item">Staj Sınavı</a>
                            <a href="yimesinav.html" class="dropdown-item">İME Sınavı</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-chart-bar me-2"></i>Değerlendirmeler</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="ystajdegerlendirme.html" class="dropdown-item">Staj Değerlendirme</a>
                            <a href="yimedegerlendirme.html" class="dropdown-item">İME Değerlendirme</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-user me-2"></i>Öğrenci Takip</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="ystajtakip.html" class="dropdown-item">Staj Takip</a>
                            <a href="yimetakip.html" class="dropdown-item">İME Takip</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        {/* <!-- Sidebar End --> */}


        {/* <!-- Content Start --> */}
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
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}}/>
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider"/>
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}}/>
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider"/>
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}}/>
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
                            <img class="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}}/>
                            <span class="d-none d-lg-inline-flex">John Doe</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item"><button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}} data-toggle="modal" data-target="#exampleModal">
                                Şifre Değiştirme
                              </button></a>
                            <a href="#" class="dropdown-item"><button type="button" class="btn btn-outline-secondary m-2">Çıkış</button></a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}

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
            
            <div class="modal fade" id="sifreataModal" tabindex="-1" role="dialog" aria-labelledby="sifreataModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="sifreataModalLabel">Rastgele Şifre Atama</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <p>Yeni bir kullanıcı eklediniz.</p>
                        <p>Kullanıcıya rastgele bir şifre atayınız.</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}}>Şifre Ata</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* çocuk */}
            <div class="container-fluid pt-4 px-4">{children}</div>


            </div></div>
    )
}

export default Navbara;