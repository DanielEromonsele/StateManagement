import React from 'react'
import styled from 'styled-components';
import {useState} from "react"
import {BsCamera} from "react-icons/bs"
import pix from "../assets/download.jpeg"


const PageI = ()=> {
  const [show, setShow] = useState<number>(0)


  return <Main>
    <CircleContainer>
      <Circle bg='yellowgreen' c='white'>1</Circle>
      <Line />
      <Circle bg='' c='yellowgreen'>2</Circle>
      <Line />
      <Circle bg='' c="yellowgreen">3</Circle>
    </CircleContainer>

    <Input placeholder='Enter Your Name' />
    <Input placeholder='Enter Your Email' />

    <ButtonHolder>
      <Button bg = "black">Next</Button>
    </ButtonHolder>
  </Main>;
}

const PageII = ()=> {
  return <Main>
    <CircleContainer>
      <Circle bg='yellowgreen' c='white'>1</Circle>
      <Line />
      <Circle bg='yellowgreen' c='white'>2</Circle>
      <Line />
      <Circle bg='' c="yellowgreen">3</Circle>
    </CircleContainer>

    <Input placeholder='Enter Your Password' type = "password" />
    {/* <Input placeholder='Enter Your Email' /> */}

    <ButtonHolder>
      <Button bg = "black">Prev</Button>
      <Button bg = "yellowgreen">Next</Button>
    </ButtonHolder>
  </Main>;
}

const PageIII = ()=> {

  const [image, setImage] = useState<string>("")
  const [avatar, setAvatar] = useState<string>(pix)

const onHandleImage = (e:any)=>{
  const file = e.target.files![0]
  const readImage = URL.createObjectURL(file)

  setImage(file)
  setAvatar(readImage)
}

  return <Main>
    <CircleContainer>
      <Circle bg='yellowgreen' c='white'>1</Circle>
      <Line />
      <Circle bg='yellowgreen' c='white'>2</Circle>
      <Line />
      <Circle bg='yellowgreen' c="white">3</Circle>
    </CircleContainer>

    {/* <Input placeholder='Enter Your Password' type = "password" /> */}
    {/* <Input placeholder='Enter Your Email' /> */}

       <Hold>
       <Img src= {avatar}/>
        <Input2 type = "file" id = "id"
           onChange={onHandleImage}
        />
        <Label  htmlFor = "id"><BsCamera/></Label>
       </Hold>
    <ButtonHolder>
      <Button bg = "black">Prev</Button>
      <Button bg = "yellowgreen">Next</Button>
    </ButtonHolder>
  </Main>;
}


const Register = () => {

  const x = JSON.parse(localStorage.getItem("pages")!)
  return (
    <Container>
      <PageI/>
    </Container>
  )

 
}

export default Register;

const Label = styled.label`
  width:50px;
  height: 50px;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:10px;
  position: absolute;
  bottom: 10px;
  right: 150px;
  cursor: pointer;
  transition: all ease-in-out 350ms;
`


const Hold = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: relative;
`

const Input2 = styled.input`
display: none
`
const Img = styled.img`
height: 350px;
width: 400px;
border-radius: 10px;
/* background-color: red; */
border: 2px solid silver;
margin-top: 10px

`

const Button = styled.div<{bg: string}>`
width: 70px;
height: 50px;
background-color: ${({bg})=> bg};
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
cursor: pointer;
margin: 0 5px;

`

const ButtonHolder = styled.div`
width: 100%;
display: flex;
justify-content: end;
`

const Input = styled.input`
  width: 100%;
  height: 45px;
  /* background-color: red; */
  border: 1px solid green;
  outline: none;
  margin: 10px 0;

  &::placeholder{
    padding-left: 10px;
    color: grey;
  }
`

const Line = styled.div`
  width: 85px;
height: 3px;
background-color: green;
margin: 0 5px;
`

const Circle = styled.div<{bg: string, c : string}>`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
color: ${({c})=> c};
background-color: ${({bg})=> bg};
border-radius: 50%;
border: 2px solid yellowgreen;
font-size: 20px;
cursor: pointer;
`

const CircleContainer = styled.div`
width: 100%;
/* height: 100px; */
display: flex;
/* background-color: pink; */
align-items: center;
justify-content: center;
margin-bottom: 20px;
/* border: 2px solid silver; */
`

const Main = styled.div`
width: 600px;
min-height: 300px;
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center;
border: 2px solid green;
padding: 10px 20px;
flex-direction: column;
`

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
/* background-color: white; */
`