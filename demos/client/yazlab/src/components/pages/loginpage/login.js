import "./login.css";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const {login,error,isLoading} = useLogin();

  // weight="150" height="150" style=" vertical-align: middle, margin: 10px 50px"
  // "https://www.kouvakif.org.tr/img/logo/footer.png "

  const loginHandler = async (e) => {
    e.preventDefault();

    await login(id, password);
  }

    return(
    <div className="lbody">
      <div className="container">
	<div className="form-container sign-in-container">
		<form className="lform"action="#" onSubmit={loginHandler}>
			<img className="limg" alt="imgKOU" src="https://www.kouvakif.org.tr/img/logo/footer.png" weight="150" height="150" style={{ marginTop: 35}} />
			<h2 className="lh2">Staj Takip Sistemi</h2>
			<input className="linput" type="id" placeholder="Id" value={id}
                onChange={(e) => setId(e.target.value)}/>
			<input className="linput" type="password" placeholder="Şifre" value={password}
                onChange={(e) => setPassword(e.target.value)} />
			<button className="lbutton" disabled={isLoading} >Giriş</button>
      {error&& <div className="error-message">{error}</div>}
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay" style={{backgroundImage: 'url(https://www.kocaeli.edu.tr/tanitim/images/GALERY/egitim/1.jpg)'}}>
			<div className="overlay-panel overlay-left"></div>
		</div>
	</div>
</div>
</div>
    );
  }
  export default Login;