import { Link } from "react-router-dom";
export default function Header() {
  
  function logout(){
    window.localStorage.removeItem('email')
    window.location.pathname ='/';
  }
  return (
    <div className="container">
      <nav className="d-flex">
        <div className="d-flex">
          <div className="title">
            <Link to="/" className="find">
              FIND
            </Link>
            <Link to="/" className="me">
              ME
            </Link>
          </div>
          <div style={{ fontSize: "30px", marginLeft: "850px" }}>
            <Link to="/home" style={{ margin: "10px 10px" }}>
              Home
            </Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="d-flex">

            { !window.localStorage.getItem('email') ? (
            <>
              <Link
                to="/register"
                style={{ marginRight:"10px"}}
                className="reg-nav"
              >
                Register
              </Link>
              <Link to="/login" className="reg-nav">
                login
              </Link>
              </> 
            ) :( <Link to="/"  className="reg-nav" onClick={logout}> logout  </Link> )}
              
        </div>
      </nav>
    </div>
  );
}

