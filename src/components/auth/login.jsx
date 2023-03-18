
const Login = () => {
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
                                            <form>
                                                <h1>KronumApp</h1>
                                                <div className="form-outline">
                                                    <input className="form-control mb-4" id="loginName" type="email" value=""/>
                                                    <label className="form-label" for="loginName">Email or username</label>
                                                    <div className="form-notch">
                                                        <div className="form-notch-leading"></div>
                                                        <div className="form-notch-middle" ></div>
                                                        <div className="form-notch-trailing"></div>
                                                    </div>
                                                </div>
                                                <div className="form-outline">
                                                    <input className="form-control mb-4" id="loginPassword" type="password" value=""/>
                                                    <label className="form-label" for="loginPassword">Password</label>
                                                    <div className="form-notch">
                                                        <div className="form-notch-leading"></div>
                                                        <div className="form-notch-middle" ></div>
                                                        <div className="form-notch-trailing"></div>
                                                    </div>
                                                </div>
                                                <button className="ripple ripple-surface btn btn-primary btn-block mb-4" type="submit" role="button">Iniciar sesión</button>
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