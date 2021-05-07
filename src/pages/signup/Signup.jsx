import React, { useState, useEffect } from "react";
import { adminSignupItem } from "../../data/reducers/admin/admin.reducer";
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
    name: "",
    email: "",
    password: "",
    address: "",
    password: "",
    age: "",
  });
  const [inputErr, setInputErr] = useState([]);
  const [invalid, setInvalid] = useState(false);
  //handle login change
  const handlesignupChange = (e) => {
    const { name, value } = e.target;
    setadminData({ ...adminData, [name]: value });
  };

  //login
  const handlesignup = async () => {
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
      const response = await dispatch(adminSignupItem(payload));
      console.log("response1: ", response);
      const { isSuccessfull } = response.payload;
      if (isSuccessfull) {
        setInputErr([]);
        setloader(false);
        history.push("/home");
        return alert("Signuped successfully!");
      }
      setInputErr([]);
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
              <h3 className="text-center font-weight-bold mb-3 text-dark">
                SIGNUP
              </h3>
              <div className="">
                <label className="     text-dark">Name</label>
                <input
                  type="text"
                  className={`form-control form-control-lg mb-1 ${
                    inputErr.includes("name") ? "is-invalid" : ""
                  }`}
                  name="name"
                  id="name"
                  onChange={handlesignupChange}
                  placeholder="Enter name.."
                />
                <label className="     text-dark">
                  Email{" "}
                  {invalid && (
                    <span className="text-danger">(Invalid Email)</span>
                  )}
                </label>
                <input
                  type="email"
                  className={`form-control form-control-lg mb-1 ${
                    inputErr.includes("email")
                      ? "is-invalid"
                      : invalid
                      ? "is-invalid"
                      : ""
                  }`}
                  name="email"
                  id="email"
                  onChange={handlesignupChange}
                  placeholder="Enter email.."
                />
                <label className="     text-dark">Age</label>
                <input
                  className={`form-control form-control-lg mb-1 ${
                    inputErr.includes("age") ? "is-invalid" : ""
                  }`}
                  type="number"
                  name="age"
                  id="age"
                  onChange={handlesignupChange}
                  placeholder="Enter age.."
                />
                <label className="     text-dark">Address</label>
                <input
                  className={`form-control form-control-lg mb-1 ${
                    inputErr.includes("address") ? "is-invalid" : ""
                  }`}
                  type="text"
                  name="address"
                  id="address"
                  onChange={handlesignupChange}
                  placeholder="Enter address.."
                />
                <label className="     text-dark">Password</label>
                <input
                  className={`form-control form-control-lg mb-1 ${
                    inputErr.includes("password") ? "is-invalid" : ""
                  }`}
                  type="text"
                  name="password"
                  id="password"
                  onChange={handlesignupChange}
                  placeholder="Enter password.."
                />
                <button
                  disabled={loader}
                  className="btn text-white btn-secondary btn-block form-control-lg"
                  onClick={() => {
                    handlesignup();
                  }}
                >
                  Signup
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
                  className="btn text-white btn-secondary btn-block form-control-lg"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Click here to login
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
