import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [accept, setaccept] = useState(false);
  const [emailer, setemailer] = useState("");

  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setaccept(true);

    if (password.length < 8) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      setemailer(err.response.status);
    }
  }

  return (
    <div className="parent">
      <div className="register">
        <form onSubmit={submit}>
          <label htmlFor="email"> email: </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="pass"> Password: </label>
          <input
            id="pass"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p className="error">pass must be more than 8 char</p>
          )}
          {emailer === 401 && accept && (
            <p className="error"> email or password invaild</p>
          )}

          <div className="btn">
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
