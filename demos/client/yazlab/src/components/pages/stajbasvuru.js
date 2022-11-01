import { useState } from "react";
import { useCreateStaj } from "../hooks/useCreateStaj";
import {variables} from '../../Variables.js';
import { useEffect } from 'react';


function Stajbasvuru() {

    const {user, role, id, accessToken, previousLogin} = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    const {intern, error, emptyFields} = useCreateStaj();

    const [workDay, setWorkDay] = useState();
    const [internshipType, setInternshipType] = useState();
    const [sgk, setSgk] = useState(true);
    const [age, setAge] = useState(true);
    const [gss, setGss] = useState(true);
    // const [manager, setManager] = useState();
    // const [districtId, setDistrictId] = useState(true);
    const [addressInfo, setAddressInfo] = useState("");
    const [formalName, setFormalName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [fax, setFax] = useState("");
    const [email, setEmail] = useState("");
    // const [fieldId, setFieldId] = useState();
    //j

  
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [postalCode, setPostalCode] = useState(0);
    
    
        // useEffect(()=>{
        //     // fetch(variables.API_URL + "Cities", {
        //     //     headers: {
        //     //         'Accept': 'application/json'
        //     //     }
        //     // })
        //     // .then(response => response.json())
        //     // .then(data => {
        //     //     setCities(data);
        //     // });
        //     // console.log(cities);
        //     console.log()
        // }, []) // <-- empty dependency array
      
        useEffect(
            // Effect from first render
            () => {
                fetch(variables.API_URL + "Cities", {
                 headers: {
                     'Accept': 'application/json'
                     }
                 })
                .then(response => response.json())
                .then(data => {
                    setCities(data);
                });
                console.log(cities);
                console.log("çalış");
            },
            [] // Never re-runs
        );

        function handleCityChange(id) {
            fetch(variables.API_URL + "districts/fromcityid/" + id, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                setDistricts(data);
            });
        }
    
    
    const creatingHandler = async (e) => {
        e.preventDefault();
    
        await intern(workDay, sgk, age, gss, internshipType, addressInfo, fax, email, telephone, formalName );
      }

    
    return (
        <>
         <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-12">
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Kişisel Bilgiler</h6>
                            <div class="row">
                                <div class="col-xl-6">
                                <div class="form-floating mb-3">
                                    <input type = "text" class="form-control" id="adSoyad"
                                                placeholder="adSoyad"  value={user.firstName + " " + user.lastName}
                                            aria-label="default input example" disabled/>
                                            <label for="adSoyad">Ad Soyad</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type = "text" class="form-control" id="tc"
                                                placeholder="tc" value={user.tc}
                                            aria-label="default input example" disabled/>
                                            <label for="tc">TC</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type = "text" class="form-control" id="telNo"
                                                placeholder="telNo" value={user.telephone}
                                            aria-label="default input example" disabled/>
                                            <label for="telNo">Telefon Numarası</label>
                                </div>                              
                            </div>
                            <div class="col-xl-6">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput"
                                        placeholder="name@example.com" value={user.email} disabled/>
                                    <label for="floatingInput">E-Mail</label>
                                </div>
                                        <div class = "row">
                                            <div class="col-lg-4">
                                                <div class="form-floating mb-3">
                                                    <select class="form-select" id="floatingSelectIl"
                                                        onChange={() => handleCityChange(event.target.value)}
                                                        aria-label="Floating label select example">
                                                        <option selected>Seçiniz</option>
                                                        {cities.map(city => 
                                                            <option value={city.id}>{city.name}</option>
                                                        )}
                                                    </select>
                                                    <label for="floatingSelectIl">İl</label>
                                                </div>
                                            </div>
                                        <div class="col-lg-4">
                                            <div class="form-floating mb-3">
                                                <select class="form-select" id="floatingSelectIlce"
                                                    onChange={() => setPostalCode(event.target.value)}
                                                    aria-label="Floating label select example">
                                                    <option selected>Seçiniz</option> 
                                                    {districts.map(district => 
                                                        <option value={district.id}>{district.name}</option>
                                                    )}
                                                </select>
                                                <label for="floatingSelectIlce">İlçe</label>
                                            </div>
                                        </div> 
                                        <div class="col-lg-4">
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput"
                                                    placeholder="name@example.com" disabled/>
                                                <label for="floatingInput">{postalCode==0 ? "Posta Kodu" : postalCode}</label>
                                            </div>
                                        </div>                           
                                    </div>  
                                    <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea" style={{width: "100%"}} ></textarea>
                                <label for="floatingTextarea">Adres Açıklaması</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-xl-12">
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Staj Bilgileri</h6>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class ="mb-3">
                                        <label for="form-horizontal">Başlangıç Tarihi</label>
                                        <form class="form-horizontal" role="form">
                                            <input type="date" class="form-control" id="date"/>
                                        </form>
                                    </div>                                                                     
                                </div>
                                <div class="col-lg-4">
                                    <div class="mb-3">
                                        <label for="form-horizontal">Bitiş Tarihi</label>
                                        <form class="form-horizontal" role="form">
                                            <input type="date" class="form-control" id="date"/>
                                        </form>
                                    </div> 
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type = "text" class="form-control" id="isGunu"
                                                    placeholder="isGunu" value={workDay}
                                                    onChange={(e) => setWorkDay(e.target.value)}
                                                aria-label="default input example"/>
                                                <label for="ısGunu">İş Günü Sayısı</label>
                                    </div>
                                </div>              
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <h6>Lütfen staj yapmak döneminizi seçiniz:</h6>
                                        <fieldset class="row mb-3">
                                            <div class="col-sm-10">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios1" value={internshipType}
                                                        onClick={() => setInternshipType('Staj 1')} checked/>
                                                    <label class="form-check-label" for="gridRadios1">
                                                        Staj 1
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios2" value={internshipType}
                                                        onClick={() => setInternshipType('Staj 2')}/>
                                                    <label class="form-check-label" for="gridRadios2">
                                                        Staj 2
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <h6>Ailemden, kendimden veya anne-baba üzerinden genel sağlık sigortası kapsamında sağlık hizmeti alıyorum:</h6>
                                        <fieldset class="row mb-3">         
                                            <div class="col-sm-10 " >
                                                <div class="form-check" >
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios1" checked value={sgk}
                                                        onClick={() => setSgk(true)}/>
                                                    <label class="form-check-label" for="gridRadios1">
                                                        Evet
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios2" value={sgk}
                                                    
                                                        onClick={() => setSgk(false)}
                                                        />
                                                    <label class="form-check-label" for="gridRadios2">
                                                       
                                                        Hayır
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>        
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <h6>Genel sağlık sigortası (GSS) (Gelir Testi Yaptırdım pirim ödüyorum):</h6>
                                        <fieldset class="row mb-3">
                                            <div class="col-sm-10">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios1" checked
                                                        value={gss}
                                                        onClick={() => setGss(true)}/>
                                                    <label class="form-check-label" for="gridRadios1">
                                                        Evet
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios2" value={gss}
                                                        onClick={() => setGss(false)}/>
                                                    <label class="form-check-label" for="gridRadios2">
                                                       Hayır
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <h6>25 yaşımı doldurdum:</h6>
                                        <fieldset class="row mb-3">
                                            <div class="col-sm-10">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios1" checked
                                                        value={age}
                                                        onClick={() => setAge(true)}/>
                                                    <label class="form-check-label" for="gridRadios1">
                                                       Evet
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios2" 
                                                        value={age}
                                                        onClick={() => setAge(false)}/>
                                                    <label class="form-check-label" for="gridRadios2">
                                                        Hayır
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>                                                                                                                                                                                
                        </div>
                    </div>

                    <div class="container-fluid pt-4 px-4">
                        <div class="row g-4">
                            <div class="col-sm-12 col-xl-12">
                                <div class="bg-light rounded h-100 p-4">
                                    <h6 class="mb-4">Staj Yapılacak Kurum Bilgileri</h6>
                                    <div class="row">
                                        <div class="col-xl-6">                                     
                                        <div class="form-floating mb-3">
                                            <input type = "text" class="form-control" id="faaliyetAlani"
                                                        placeholder="faaliyetAlani"
                                                    aria-label="default input example"
                                                    value={formalName}
                                                    onChange={(e) => setFormalName(e.target.value)}/>
                                                    <label for="faaliyetAlani">Faaliyet Alanı</label>                                            
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput"
                                                placeholder="name@example.com"
                                                value={email}
                                                    onChange={(e) => setEmail(e.target.value)}/>
                                            <label for="floatingInput">E-Mail</label>
                                            
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type = "text" class="form-control" id="telNo"
                                                        placeholder="telNo"
                                                    aria-label="default input example"
                                                    value={telephone}
                                                    onChange={(e) => setTelephone(e.target.value)}/>
                                                    <label for="telNo">Telefon Numarası</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type = "text" class="form-control" id="faxNo"
                                                        placeholder="faxNo"
                                                    aria-label="default input example"
                                                    value={fax}
                                                    onChange={(e) => setFax(e.target.value)}/>
                                                    <label for="faxNo">Fax Numarası</label>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form-floating mb-3">
                                            <input type = "text" class="form-control" id="kurumAdi"
                                                        placeholder="kurumAdi"
                                                    aria-label="default input example"/>
                                                    <label for="kurumAdi">Kurum Adı</label>
                                        </div>
                                                <div class = "row">
                                                    <div class="col-lg-4">
                                                        <div class="form-floating mb-3">
                                                            <select class="form-select" id="floatingSelectIl"
                                                                aria-label="Floating label select example">
                                                                <option selected>Seçiniz</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                            <label for="floatingSelectIl">İl</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                    <div class="form-floating mb-3">
                                                        <select class="form-select" id="floatingSelectIlce"
                                                            aria-label="Floating label select example">
                                                            <option selected>Seçiniz</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <label for="floatingSelectIlce">İlçe</label>
                                                    </div>
                                                </div> 
                                                    <div class="col-lg-4">
                                                        <div class="form-floating mb-3">
                                                            <input type="email" class="form-control" id="floatingInput"
                                                                placeholder="name@example.com"/>
                                                            <label for="floatingInput">Posta Kodu</label>
                                                        </div>
                                                </div>                                                                                   
                                            </div> 
                                            <div class="form-floating mb-3">
                                                <textarea class="form-control" placeholder="Leave a comment here"
                                                    id="floatingTextarea" style={{width: "100%"}} 
                                                    value={addressInfo}
                                                    onChange={(e) => setAddressInfo(e.target.value)}></textarea>
                                                <label for="floatingTextarea">Adres Açıklaması</label>
                                            </div>  
                                            <div class="form-floating mb-3">
                                                <select class="form-select" id="floatingSelectSorumlu"
                                                aria-label="Floating label select example">
                                                <option selected>Seçiniz</option>
                                                <option value="1">Mühendis</option>
                                                <option value="2">Teknik Öğretmen</option>
                                                <option value="3">Doktor</option>
                                                </select>
                                                <label for="floatingSelectSorumlu">Staj Sorumlusu</label>
                                            </div>                         
                                        </div>  
                                            
                                    </div>
                                    <div class="form-floating mb-3">
                                        <h6>Kurum olarak 3308 sayılı kanundaki devlet katkısından yararlanmak istiyor musunuz?</h6>
                                        <fieldset class="row mb-3">
                                            <div class="col-sm-10">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios1" value="option1" checked/>
                                                    <label class="form-check-label" for="gridRadios1">
                                                        Evet
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios"
                                                        id="gridRadios2" value="option2"/>
                                                    <label class="form-check-label" for="gridRadios2">
                                                        Hayır
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                                                           
                                </div> 
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <br/>
                    <div class="m-n2" style={{position: "absolute", right: 5}}>
                        <button type="button" class="btn btn-success rounded-pill m-2 float-right" style={{backgroundColor:"#009933"}} onClick={creatingHandler}>Kaydet</button>
                        <button type="button" class="btn btn-success rounded-pill m-2" style={{backgroundColor:"#009933"}}>PDF Oluştur</button>
                        <button type="button" class="btn btn-success rounded-pill m-2" style={{backgroundColor:"#009933"}}>Dosyayı kaydet</button>
                    </div>
                    {error && <div className="error">{error}</div>}
                    
         </>
    )
}

export default Stajbasvuru;