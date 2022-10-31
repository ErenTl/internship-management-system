function Stajdefteri () {
    return (
        <>
         <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Staj Defteri PDF İndir <a href="rapor/stajraporu .pdf">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-file-earmark-font" viewBox="0 0 16 16">
                                    <path d="M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"/>
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                  </svg>
                            </a></h6>
                            
                            <h6 class="mb-4">Staj Defteri Yükleme Alanı</h6>
                                <div class="mb-3">
                                <label for="formFile" class="form-label">Default file input example</label>
                                <input class="form-control" type="file" id="formFile"/>
                                <button type="button" class="btn btn-success rounded-pill m-2 float-right" style={{backgroundColor:"#009933"}}>Yükle</button>                              
                                </div>
                        </div>   
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-light rounded h-100 p-4">
                            <p class="mb-4" style={{fontSize:20,color:"#000"}}>Staj defteri günlük olarak doldurulacaktır. Sistemde bulunan rapor bilgisayardan düzenlenip çıktısı alındıktan sonra
                                tüm sayfalar birim amirine imzalatılacaktır. İlk sayfasında şirkete ait mührün bulunması gerekmektedir. Fotoğraf kısmına 
                                öğrenci vesikalık resmini ekledikten sonra bölüm sekreterliğine kaşeletip imzalatması gerekmektedir.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Staj Değerlendirme Formu İndir <a href="rapor/stajdegerlendirmeformu.pdf">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-file-earmark-font" viewBox="0 0 16 16">
                                    <path d="M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"/>
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                  </svg>
                            </a></h6>
                            
                            <h6 class="mb-4">Staj Değerlendirme Formu Alanı</h6>
                                <div class="mb-3">
                                <label for="formFile" class="form-label">Default file input example</label>
                                <input class="form-control" type="file" id="formFile"/>
                                <button type="button" class="btn btn-success rounded-pill m-2 float-right" style={{backgroundColor:"#009933"}}>Yükle</button>                              
                                </div>
                        </div>   
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-light rounded h-100 p-4">
                            <p class="mb-4" style={{fontSize:20, color: "#000;"}}> Staj değerlendirme formu birim amiri tarafından doldurulması gerekmektedir. </p>
                            <p class="mb-4" style={{fontSize:20, color: "#000;"}}>Tüm sayfalarda birim amirinin imzası olması gerekmektedir.</p>
                            <p class="mb-4" style={{fontSize:20, color: "#000;"}}> İlk sayfalarda şirkete ait mührün bulunması gerekmektedir.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Stajdefteri;