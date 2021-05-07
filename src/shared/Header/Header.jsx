import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../data/reducers/admin/admin.reducer";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const adminSelector = useSelector((state) => state.adminReducer);
  const adminData = useSelector((state) => state.adminReducer).adminData;
  
  // console.log("adminSelector: ", adminSelector);
  useEffect(() => {
    return !adminSelector.isLoggedIn ? history.push("/") : null;
  }, []);
  return (
    <div className="bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-sm-5">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="p-0 text-left text-dark pb-3 pt-4 Fweight-600">
                Welcome {adminData?.name}{" "}
              </h4>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  dispatch(logout());
                  history.push("/");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
