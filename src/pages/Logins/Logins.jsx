import { useContext, useRef, useState } from 'react'
import './logins.css'
import Loader from '../../components/loader/Loader'
import { Link, useNavigate } from 'react-router-dom'
import { publicRequest } from '../../Request'
import { AuthContext } from '../../context/AuthContext'
import {AiFillHome} from 'react-icons/ai'

const Login = () => {
    const loginRef = useRef()

    const gotoSignup = () => {
        loginRef.current.classList.add("sign-up-mode")
    }
    const gotoSignin = () => {
        loginRef.current.classList.remove("sign-up-mode")
    }

    const [btnDisabled, setBtnDisabled] = useState(false)
    const [hideshowPassword, setHideShowPassword] = useState(false)

    const [validatePassword, setValidatePassword] = useState()
    const [signupRes, setSignupRes] = useState({})
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [signupResReceived, setSignupResReceived] = useState()

    const handleSignup = async (e) => {
        e.preventDefault()

        if (password.length >= 6) {
            setValidatePassword(true);
            setSignupResReceived(false);
            setBtnDisabled(true);
            try {
                const res = await publicRequest.post("auth/register", {
                    username,
                    email,
                    password
                })
                setSignupRes(res);

                setTimeout(() => {
                    gotoSignin()
                    setSignupRes({})
                }, 1500)

                setUsername('')
                setEmail('')
                setPassword('')
            } catch (err) {
                setSignupRes(err.response)
            } finally {
                setSignupResReceived(true)
                setBtnDisabled(false)
            }
        } else {
            setValidatePassword(false)
        }
    }

    /* API CALL */
    const [loginRes, setLoginRes] = useState({})
    const [loginresReceived, setLoginResReceived] = useState()
    const [loginPasswordRequired, setLoginPasswordRequired] = useState(false)
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        if (loginPassword !== "") {
            setLoginPasswordRequired(false)
            setLoginResReceived(false)
            setBtnDisabled(true)
            try {
                const res = await publicRequest.post("/auth/login", { username: loginUsername, password: loginPassword });
                dispatch({type: "LOGIN_SUCCESS", payload: res.data})
                navigate("/");
                console.log(res);
              } catch (error) {
                dispatch({ type: "LOGIN_FAILURE", payload: error });
              }
        } else {
            setLoginPasswordRequired(true)
        }
    }
    return (
        <div className="logincontainer" ref={loginRef}>

            <div className="forms-container">
                <div className="signin-signup">
                    <form className="form sign-in-form">
                        <h2 className="title">Sign in</h2>
                        {loginresReceived === false && <Loader />}
                        {loginRes.status === 401 && loginresReceived && (
                            <div className="error_message">{loginRes.data}</div>
                        )}
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="text" placeholder="Username" value={loginUsername} spellCheck="false" required onChange={(e) => setLoginUsername(e.target.value)}/>
                        </div>
                        <div className="input-field password">
                            <i className="fas fa-eye" onClick={() => setHideShowPassword(!hideshowPassword)}></i>
                            <input type={!hideshowPassword ? "password" : "text"} placeholder="Password" value={loginPassword} required onChange={(e) => setLoginPassword(e.target.value)}/>
                            <div className="errormsg">
                                {loginPasswordRequired ? "Fill out Password" : undefined}
                            </div>
                        </div>
                        <div className='forgetpass'>
                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>
                        </div>
                        <button className="loginpage-btn" type="submit" onClick={handleLogin} disabled={btnDisabled}> Login </button>
                    </form>

                    <form className="form sign-up-form">
                        <h2 className="title">Sign up</h2>
                        {signupResReceived === false && <Loader />}
                        {signupRes.status === 201 && (
                            <div className="usercreated">{signupRes.data.status}</div>
                        )}
                        <div className="input-field" style={{ border: signupRes.data?.name ? '1px solid #FF1818' : 'none' }}>
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {signupRes.status === 500 && (
                                <div className="errormsg">
                                    {signupRes.data.name || undefined}
                                </div>
                            )}
                        </div>
                        <div className="input-field" style={{ border: signupRes.data?.email ? '1px solid #FF1818' : 'none' }}>
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {signupRes.status === 500 && (
                                <div className="errormsg">
                                    {signupRes.data.email || undefined}
                                </div>
                            )}
                        </div>
                        <div className="input-field password" style={{ border: validatePassword === false ? '1px solid #FF1818' : 'none' }}>
                            <i className="fas fa-eye"
                                onClick={() => setHideShowPassword(!hideshowPassword)}
                            ></i>
                            <input
                                type={!hideshowPassword ? "password" : "text"}
                                placeholder="Password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="errormsg">
                                {validatePassword === false ? "Must be at least 6 characters long" : undefined}
                            </div>
                        </div>
                        <button
                            className="loginpage-btn"
                            type="submit"
                            onClick={handleSignup}
                            disabled={btnDisabled}
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>




            <div className="panels-container">
                <div className="panel left-panel">
                    <div className='back_to_home'>
                        <Link to='/'><AiFillHome style={{ height: 30, width: 30, touchAction: true , color: 'white'}} /></Link>
                    </div>
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>Join with us</p>
                        <button
                            className="loginpage-btn transparent"
                            onClick={gotoSignup}
                        >
                            Sign up
                        </button>

                    </div>
                    <div></div>
                    <div></div>
                </div>




                <div className="panel right-panel">

                    <div className='back_to_home_login'>
                        <Link to='/'><AiFillHome style={{ height: 30, width: 30, touchAction: true, color:'white' }} /></Link>
                    </div>
                    <div className="content">

                        <h3>One of us ?</h3>
                        <p>Already have an account</p>
                        <button
                            className="loginpage-btn transparent"
                            onClick={gotoSignin}
                        >
                            Sign in
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Login
