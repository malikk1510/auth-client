import React, { useState, useEffect } from "react";
import { adminLoginItem } from "../../data/reducers/admin/admin.reducer";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { checkEmpty, checkEmail } from "../../shared/method";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loader, setloader] = useState(false);
  const adminSelector = useSelector((state) => state.adminReducer);
  useEffect(() => {
    return adminSelector.isLoggedIn ? history.push("/home") : null;
  }, []);
  //initial state of admin data
  const [adminData, setadminData] = useState({
    email: "",
    password: "",
  });
  const [inputErr, setInputErr] = useState([]);
  const [invalid, setInvalid] = useState(false);
  //handle login change
  const handleloginChange = (e) => {
    const { name, value } = e.target;
    setadminData({ ...adminData, [name]: value });
  };

  //login
  const handleLogin = async () => {
    const payload = adminData;
    const res = checkEmpty(adminData);
    
    //
    setInputErr(res);
    if (res.length != 0) {
      return alert("All fields are mandatory!");
    }
    const checkemail = checkEmail(adminData.email);
   
    if (!checkemail) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    try {
      setloader(true);
      const response = await dispatch(adminLoginItem(payload));
      console.log("response1: ", response);
      const { isSuccessfull } = response.payload;
      if (isSuccessfull) {
        setloader(false);
        history.push("/home");
        return alert("Loggedin successfully!");
      }
      setloader(false);
     alert(response.payload.data.data.message);
    } catch (err) {
      console.log("err: ");
    }
  };

  return (
    <section className="bg-light h-100 py-5 ">
      <div className="container h-100">
        <div className="row justify-content-center h-100">
          <div className="col-md-6 col-lg-5 h-100 d-flex justify-content-center align-items-center">
            <div className="border p-3 bg-white rounded-lg p-md-5 ">
              <h3 className="text-center font-weight-bold mb-4 text-dark">
                LOGIN
              </h3>
              <div className="">
                <label className="     text-dark">
                  Email{" "}
                  {invalid && (
                    <span className="text-danger">(Invalid Email)</span>
                  )}
                </label>
                <input
                  type="email"
                  className={`form-control form-control-lg mb-3 ${
                    inputErr.includes("email") ? "is-invalid" :  invalid ? "is-invalid" : ""
                   
                  }`}
                  name="email"
                  id="email"
                  onChange={handleloginChange}
                  placeholder="Enter email.."
                />
                <label className="     text-dark">Password</label>
                <input
                  type="text"
                  className={`form-control form-control-lg mb-3 ${
                    inputErr.includes("password") ? "is-invalid" : ""
                  }`}
                  name="password"
                  id="password"
                  onChange={handleloginChange}
                  placeholder="Enter password.."
                />
                <button
                  disabled={loader}
                  className="btn text-white btn-secondary btn-block form-control-lg"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Login
                  {loader && (
                    <span
                      class="spinner-border ml-1 spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                </button>
                {/* <small className="d-block text-center mt-3">Not registered? <span className="text-success">Create an account</span></small> */}
                <button
                  disabled={loader}
                  className="btn text-white btn-secondary btn-block form-control-lg"
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  Click here to signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
