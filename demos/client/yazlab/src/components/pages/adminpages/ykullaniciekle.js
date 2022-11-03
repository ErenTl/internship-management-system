import {useState} from "react";
import { useAddUser } from "../../hooks/useAddUser";

function Ykullaniciekle () {

    const [name,setName] = useState("");
    const [lastName,setLastname] = useState("");
    const [userId, setUserid] = useState();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [phone, setPhone] = useState();
    const [tc, setTc] = useState();
    const [role, setRole] = useState();

    const {adduser, error, isLoading} = useAddUser();
    

    //back-endde olacak
    const addPassword = () => {
        const min = 1000;
        const max = 9999;
        const rand = min + Math.random() * (max - min);
        setPassword(rand);
    } 

    const adduserHandler = async (e) => {
        e.preventDefault();

        await adduser(email, password, name, lastName, userId, phone, tc, role) 
};
    return (
        <>
         <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-12">
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Kullanıcı Ekle</h6>
                            <div class="row">
                                <div class="col-xl-6">
                                <div class="form-floating mb-3">
                                    <input type = "text" class="form-control" id="adSoyad"
                                                placeholder="adSoyad" value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            aria-label="default input example"/>
                                            <label htmlFor="adSoyad">İsim</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type = "text" class="form-control" id="adSoyad"
                                                placeholder="adSoyad" value={lastName}
                                                onChange={(e) => setLastname(e.target.value)}
                                            aria-label="default input example"/>
                                            <label htmlFor="adSoyad">Soyisim</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type = "text" class="form-control" id="tc"
                                                placeholder="tc" value={tc}
                                                onChange={(e) => setTc(e.target.value)}
                                            aria-label="default input example"/>
                                            <label htmlFor="tc">TC</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type = "text" class="form-control" id="telNo"
                                                placeholder="telNo" value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            aria-label="default input example"/>
                                            <label htmlFor="telNo">Telefon Numarası</label>
                                </div>                              
                            </div>
                            <div class="col-xl-6">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="ogrNo"
                                        placeholder="ogrNo" value={userId}
                                        onChange={(e) => setUserid(e.target.value)}/>
                                    <label htmlFor="floatingInput">Öğrenci Numarası</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput"
                                        placeholder="name@example.com" value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                    <label htmlFor="floatingInput">E-Mail</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelectRol4"
                                        aria-label="Floating label select example"
                                        onChange={() => setRole(event.target.value)}>
                                        <option selected>Seçiniz</option>
                                        <option value="1">Öğrenci</option>
                                        <option value="2">Öğretmen</option>
                                        <option value="3">Komisyon</option>
                                        <option value="3">Yönetici</option>
                              
                                    </select>
                                    <label htmlFor="floatingSelectRol4">Rol</label>
                                </div>
                                                                 
                                </div>
                            </div>
                            <button type="button" class="btn btn-success rounded-pill m-2 float-right" style={{backgroundColor:"#009933"}} data-toggle="modal" data-target="#sifreataModal">Ekle</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="modal fade" id="sifreataModal" tabIndex="-1" role="dialog" aria-labelledby="sifreataModalLabel" aria-hidden="true">
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
                      <button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}} onClick= {addPassword} >Şifre Ata</button>
                    </div>
                  </div>
                </div>
            </div>

        </>
    )
}

export default Ykullaniciekle;