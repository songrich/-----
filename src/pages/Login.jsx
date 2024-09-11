import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/login",
      {
        id,
        password,
      }
    );
    console.log(response.data);
    setUser(response.data);
  };
  return (
    <>
      <h1>로그인페이지</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="ID:"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password:"
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};
export default Login;
