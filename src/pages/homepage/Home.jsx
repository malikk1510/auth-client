import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";


//component
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const adminSelector = useSelector((state) => state.adminReducer);
  const adminData = useSelector((state) => state.adminReducer).adminData;
  
  // console.log("adminSelector: ", adminSelector);
  useEffect(() => {
    return !adminSelector.isLoggedIn ? history.push("/") : null;
  }, []);
  return (
    <>
      <div className="bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 px-sm-5">
              {/* <div className="d-flex justify-content-between align-items-center">
                <h4 className="p-0 text-left text-dark pb-3 pt-4 Fweight-600">Welcome Admin </h4>
                <button className="btn btn-danger btn-sm" onClick={() => {dispatch(logout()); history.push("/"); }} >logout</button>
              </div> */}
              <div className="bg-white admin-card rounded-lg p-4 d-flex justify-content-center flex-wrap align-items-stretch mb-5 py-5">
                <NavLink
                  className=" card p-3 mr-3 mb-3 font-weight-bold text-decoration-none text-dark"
                  to="/home"
                >
                  <div className=" d-flex align-items-center justify-content-center h-100">
                    <p className="d-flex flex-column mb-0 align-items-center">
                      <span className="h3 text-dark mb-0 font-weight-bold">
                      <span className="h3 text-dark mb-0 font-weight-bold">Email:</span>  { adminData?.email}<br/> 
                      <span className="h3 text-dark mb-0 font-weight-bold">Age:</span>  { adminData?.age} <br/>
                      <span className="h3 text-dark mb-0 font-weight-bold">Address:</span>   { adminData?.address} 
                      </span>
                    </p>
                    
                  </div>
                </NavLink>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
