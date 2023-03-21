
import { login } from "../../data/api";
import { useState } from "react";
const Login = () => {
    const [data, setData] = useState({});
    const handleChange = async (evt) => {
        console.log(evt.target.value);
        setData({...data,[evt.target.name]:evt.target.value});
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        login(data);
    }   
    return(
        <>
            <main>
                <div className="container pt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body p-4">
                                    <ul className="nav nav-pills nav-fill mb-3">
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-login">
                                            <form action=""> 
                                                <h1>KronumApp</h1>
                                                <br/>
                                                <div className="form-outline">
                                                    <input name="email" className="form-control mb-4" id="loginName" type="email"  onChange={(evt)=>handleChange(evt)}/>
                                                    <label className="form-label" for="loginName">Email</label>
                                                    <div className="form-notch">
                                                        <div className="form-notch-leading"></div>
                                                        <div className="form-notch-middle" ></div>
                                                        <div className="form-notch-trailing"></div>
                                                    </div>
                                                </div>
                                                <div className="form-outline">
                                                    <input name="password" className="form-control mb-4" id="loginPassword" type="password" onChange={(evt)=>handleChange(evt)}/>
                                                    <label className="form-label" for="loginPassword">Contraseña</label>
                                                    <div className="form-notch">
                                                        <div className="form-notch-leading"></div>
                                                        <div className="form-notch-middle" ></div>
                                                        <div className="form-notch-trailing"></div>
                                                    </div>
                                                </div>
                                                <button className="ripple ripple-surface btn btn-primary btn-block mb-4" onClick={(evt)=>{handleSubmit(evt)}}>Iniciar sesión</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Login;