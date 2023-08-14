import React, {useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive.js";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../Request.js";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.1)
    ),
    url("https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731__480.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
padding: 20px;
width: 30%;
background-color: rgba(255, 255, 255,0.7);
${mobile({ width: "70%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
&:hover{
    background-color: rgb(2, 84, 84);;
}
`;

const Register = () => {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await publicRequest.post("/auth/register", { username, email, password, });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create Your Account</Title>
        <Form>
          <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

