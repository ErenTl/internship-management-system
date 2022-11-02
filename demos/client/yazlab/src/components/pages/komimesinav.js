function Komimesinav () {
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
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Adı Soyadı</th>
                                                    <th scope="col">İME Başvuru Formu</th>
                                                    <th scope="col">İME Defteri</th>
                                                    <th scope="col">İME Değerlendirme Formu</th>
                                                    <th scope="col">Belge Değerlendirme</th>
                                                    <th scope="col">Sınav Bilgileri</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>John</td>
                                                    <td><a href="#">Görüntüle</a></td>
                                                    <td><a href="#">Görüntüle</a></td>
                                                    <td><a href="#">Görüntüle</a></td>
                                                    <td><button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}} data-toggle="modal" data-target="#belgeModal">Değerlendir</button></td>
                                                    <td><button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}} data-toggle="modal" data-target="#sinavModal">Düzenle</button></td>                    
                    
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Mark</td>
                                                    <td><a href="#">Görüntüle</a></td>
                                                    <td><a href="#">Görüntüle</a></td>
                                                    <td><a href="#">Görüntüle</a></td>
                                                    <td><button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}} data-toggle="modal" data-target="#belgeModal">Değerlendir</button></td>
                                                    <td><button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}} data-toggle="modal" data-target="#sinavModal">Düzenle</button></td>                    
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Jacob</td>
                                                    <td><a href="#">Görüntüle</a></td>
                                                    <td><a href="#">Görüntüle</a></td>
                                                    <td><a href="#">Görüntüle</a></td>
                                                    <td><button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}} data-toggle="modal" data-target="#belgeModal">Değerlendir</button></td>
                                                    <td><button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}} data-toggle="modal" data-target="#sinavModal">Düzenle</button></td>                    
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}}>Güncelle</button>
                                        <button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}}>Kaydet</button>
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
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">Başarılı</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">Başarısız</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                value="option1"/>
                            <label class="form-check-label" for="inlineRadio1">Eksik</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type = "text" class="form-control" id="aciklama"
                                        placeholder="aciklama"
                                    aria-label="default input example"/>
                                    <label for="eksikBelge">Kabul Edilen Gün Sayısı</label>
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

            <div class="modal fade" id="sinavModal" tabindex="-1" role="dialog" aria-labelledby="sinavModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="sinavModalLabel">Sınav Bilgileri</h5>
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
                        <div class ="mb-3">
                            <label for="form-horizontal">Değerlendirme Tarihi</label>
                            <form class="form-horizontal" role="form">
                                <input type="date" class="form-control" id="date"/>
                            </form>
                        </div>    
                        <div class="form-floating mb-3">
                            <select class="form-select" id="floatingSelectOgretmen"
                            aria-label="Floating label select example">
                            <option selected>Seçiniz</option>
                            <option value="1">..</option>
                            <option value="2">..</option>
                            <option value="3">..</option>
                            </select>
                            <label for="floatingSelectOgretmen">Değerlendirecek Öğretmen</label>
                        </div> 
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" style={{backgroundColor:"#009933"}}>Kaydet</button>
                    </div>
                  </div>
                </div>
            </div>
        </>

    )
}

export default Komimesinav;