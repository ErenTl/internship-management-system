function Ogrimetakip () {
    return (
        <>
         <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                            <div class="col-12">
                                <div class="bg-light rounded h-100 p-4">
                                    <h6 class="mb-4">Öğrenci Listele</h6>
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>      
                                                    <th>
                                                        <div class= "d-flex flex-row">
                                                            <input class="form-control m-2" 
                                                                placeholder="Filter"></input>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                                                  </svg>
                                                            </button>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                                                                </svg>
                                                            </button>
                                                        </div>  
                                                        ID
                                                    </th>
                                                    <th>
                                                        <div class= "d-flex flex-row">
                                                            <input class="form-control m-2" 
                                                                placeholder="Filter"></input>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                                                  </svg>
                                                            </button>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                                                                </svg>
                                                            </button>
                                                        </div>  
                                                        Adı Soyadı
                                                        
                                                    </th>
                                                    <th>
                                                        <div class= "d-flex flex-row">
                                                            <input class="form-control m-2" 
                                                                placeholder="Filter"></input>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                                                  </svg>
                                                            </button>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                                                                </svg>
                                                            </button>
                                                        </div>  
                                                        Değerlendirme Tarihi
                                                    </th>
                                                    <th>
                                                        <div class= "d-flex flex-row">
                                                            <input class="form-control m-2" 
                                                                placeholder="Filter"></input>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                                                  </svg>
                                                            </button>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                                                                </svg>
                                                            </button>
                                                        </div>  
                                                        Başarı Durumu
                                                    </th>
                                                    <th>
                                                        <div class= "d-flex flex-row">
                                                            <input class="form-control m-2" 
                                                                placeholder="Filter"></input>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                                                  </svg>
                                                            </button>
                                                            <button type="button" class="btn mr-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                                                                </svg>
                                                            </button>
                                                        </div>  
                                                        Firma
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>John</td>
                                                    <td>..</td>
                                                    <td>..</td>
                                                    <td>..</td>
                                                    <td>
                                                        <button type="button" class="btn mr-1" data-toggle="modal" data-target="#degerlendirmeModal">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-backspace-reverse" viewBox="0 0 16 16">
                                                                <path d="M9.854 5.146a.5.5 0 0 1 0 .708L7.707 8l2.147 2.146a.5.5 0 0 1-.708.708L7 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L6.293 8 4.146 5.854a.5.5 0 1 1 .708-.708L7 7.293l2.146-2.147a.5.5 0 0 1 .708 0z"/>
                                                                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.08a2 2 0 0 0 1.519-.698l4.843-5.651a1 1 0 0 0 0-1.302L10.6 1.7A2 2 0 0 0 9.08 1H2zm7.08 1a1 1 0 0 1 .76.35L14.682 8l-4.844 5.65a1 1 0 0 1-.759.35H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.08z"/>
                                                              </svg>
                                                        </button>
                                                    </td>                                              
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Mark</td>
                                                    <td>..</td>
                                                    <td>..</td>
                                                    <td>..</td> 
                                                    <td>
                                                        <button type="button" class="btn mr-1" data-toggle="modal" data-target="#degerlendirmeModal">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-backspace-reverse" viewBox="0 0 16 16">
                                                                <path d="M9.854 5.146a.5.5 0 0 1 0 .708L7.707 8l2.147 2.146a.5.5 0 0 1-.708.708L7 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L6.293 8 4.146 5.854a.5.5 0 1 1 .708-.708L7 7.293l2.146-2.147a.5.5 0 0 1 .708 0z"/>
                                                                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.08a2 2 0 0 0 1.519-.698l4.843-5.651a1 1 0 0 0 0-1.302L10.6 1.7A2 2 0 0 0 9.08 1H2zm7.08 1a1 1 0 0 1 .76.35L14.682 8l-4.844 5.65a1 1 0 0 1-.759.35H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.08z"/>
                                                              </svg>
                                                        </button>
                                                    </td>                                                                                     
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Jacob</td>
                                                    <td>..</td>
                                                    <td>..</td>
                                                    <td>..</td> 
                                                    <td>
                                                        <button type="button" class="btn mr-1" data-toggle="modal" data-target="#degerlendirmeModal">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-backspace-reverse" viewBox="0 0 16 16">
                                                                <path d="M9.854 5.146a.5.5 0 0 1 0 .708L7.707 8l2.147 2.146a.5.5 0 0 1-.708.708L7 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L6.293 8 4.146 5.854a.5.5 0 1 1 .708-.708L7 7.293l2.146-2.147a.5.5 0 0 1 .708 0z"/>
                                                                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.08a2 2 0 0 0 1.519-.698l4.843-5.651a1 1 0 0 0 0-1.302L10.6 1.7A2 2 0 0 0 9.08 1H2zm7.08 1a1 1 0 0 1 .76.35L14.682 8l-4.844 5.65a1 1 0 0 1-.759.35H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.08z"/>
                                                              </svg>
                                                        </button>
                                                    </td>       
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
           
            {/* <!-- ogrstajtakip End --> */}

            <div class="modal fade" id="notModal" tabindex="-1" role="dialog" aria-labelledby="notModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="notModalLabel">Öğrenci Notlandırma</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating mb-3">
                            <input type = "text" class="form-control" id="adSoyad"
                                        placeholder="adSoyad"
                                    aria-label="default input example" disabled/>
                                    <label for="adSoyad">Ad Soyad</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type = "text" class="form-control" id="tc"
                                        placeholder="tc"
                                    aria-label="default input example" disabled/>
                                    <label for="tc">TC</label>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class ="mb-3">
                                    <label for="form-horizontal">Başlangıç Tarihi</label>
                                    <form class="form-horizontal" role="form">
                                        <input type="date" class="form-control" id="date" disabled/>
                                    </form>
                                </div>                                                                     
                            </div>
                            <div class="col-lg-4">
                                <div class="mb-3">
                                    <label for="form-horizontal">Bitiş Tarihi</label>
                                    <form class="form-horizontal" role="form">
                                        <input type="date" class="form-control" id="date" disabled/>
                                    </form>
                                </div> 
                            </div>
                            <div class="col-lg-4">
                                <div class="form-floating mb-3">
                                    <input type = "text" class="form-control" id="isGunu"
                                            placeholder="isGunu"
                                            aria-label="default input example" disabled/>
                                            <label for="ısGunu">İş Günü Sayısı</label>
                                </div>
                            </div>              
                        </div>
                        <div class="form-floating mb-3">
                            <input type = "text" class="form-control" id="kurumAdi"
                                    placeholder="kurumAdi"
                                    aria-label="default input example" disabled/>
                                    <label for="kurumAdi">Kurum Adı</label>
                        </div>
                        <h6>İME Notlandırma</h6>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7"
                                value="option7"/>
                            <label class="form-check-label" for="inlineRadio7">Başarılı</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8"
                                value="option8"/>
                            <label class="form-check-label" for="inlineRadio8">Başarısız</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9"
                                value="option9"/>
                            <label class="form-check-label" for="inlineRadio9">Eksik</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type = "text" class="form-control" id="aciklama"
                                        placeholder="aciklama"
                                    aria-label="default input example"/>
                                    <label for="eksikBelge">Kabul edilen gün sayısı</label>
                        </div>                        
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}}>Kaydet</button>
                    </div>
                  </div>
                </div>
            </div>

            <div class="modal fade" id="belgeModal" tabindex="-1" role="dialog" aria-labelledby="belgeModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="belgeModalLabel">Belge Değerlendirme</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                value="option1"/>
                            <label class="form-check-label" for="inlineRadio1">Eksik belge bulunmaktadır.</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type = "text" class="form-control" id="aciklama"
                                        placeholder="aciklama"
                                    aria-label="default input example"/>
                                    <label for="eksikBelge">Açıklama</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">Eksik belge bulunmamaktadır.</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}}>Kaydet</button>
                    </div>
                  </div>
                </div>
            </div>

            <div class="modal fade" id="degerlendirmeModal" tabindex="-1" role="dialog" aria-labelledby="degerlendirmeModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="degerlendirmeModalLabel">Değerlendirme Güncelleme</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                       <p>Öğrenciyi daha önce değerlendirdiniz.</p>
                       <p>Öğrenci not durumunda güncelleme yapmak istediğinizden emin misiniz?</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}}>Evet</button>
                    </div>
                  </div>
                </div>
            </div>
        
           
        </>
    );
};

export default Ogrimetakip;