import React, { useRef, useState } from 'react'
import styled from "styled-components";
import loginbg from '../../src/assets/loginbg.svg';
import imgShowEye from '../../src/assets/showeye.svg'
import imgHideEye from '../../src/assets/hideeye.svg'

const Login = () => {
    const loginInputRef = useRef({ username: '', password: '' });

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowButton = (field) => {
        if (field == "pw") {
            setShowPassword(!showPassword)
        }
    }

    const submitBtnHandler = () => {
        console.log(loginInputRef);
        // exception handling
        if (loginInputRef.current.username == '' || loginInputRef.current.password == '') {
            // don't bother server
            alert("Please enter all fields.")
        }
        else {
            alert("submitted")
        }
    }

    return (
        <>
            <BlackDiv>
                <UpperDiv>
                    <ContentDiv>
                        <div className='title'>Login</div>
                        <InputWrapper>
                            <StyledInput type='text' placeholder='Username' onChange={(e) => loginInputRef.current.username = e.target.value} />
                        </InputWrapper>
                        <InputWrapper>
                            <StyledInput type={showPassword ? "text" : "password"} placeholder='Password' onChange={(e) => loginInputRef.current.password = e.target.value} />
                            <button type='button' onClick={() => handleClickShowButton("pw")}>
                                {showPassword ? (
                                    <StyledIcon src={imgShowEye} alt='show eye'></StyledIcon>
                                ) : (
                                    <StyledIcon src={imgHideEye} alt='hide eye'></StyledIcon>)
                                }
                            </button>
                        </InputWrapper>
                        <StyledBtn className='submit-btn' onClick={submitBtnHandler}>Submit</StyledBtn>
                    </ContentDiv>
                </UpperDiv>
                <LowerDiv>
                    <div className='background1'></div>
                    <img src={loginbg}></img>
                </LowerDiv>
            </BlackDiv>
        </>
    )
}

export default Login

const BlackDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 

    height: 100vh;
    background-color: black;
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;

    width: 70%;
    height: 100%;

    .title {
        font-size: 26px;
        text-align: center;
        margin-bottom: 1em;
    }
`

const StyledInput = styled.input`
    font-size: 22px;
    border: none;
    border-bottom: 2px solid black;

    background-color: transparent;

    &:invalid {
        /* background-color: ivory; */
        border: none;
        outline: 2px solid red;
        border-radius: 5px;
    }
`

const StyledBtn = styled.button`
    padding: 0.3em 0.25em;

    cursor: pointer;

    text-align: center;
    font-size: 25px;
    outline: none;

    border: none;
    border-radius: 15px;
    box-shadow: 0 8px #999;

    background-color: rgb(219, 216, 216);

    &:hover {
        background-color: rgb(223, 223, 223);
        color: rgb(22, 25, 22);
    }
    &:active {
        transform: translateY(3px);
        box-shadow: 0 5px #999;
    }
`

const UpperDiv = styled.div`
    position: absolute;
    z-index: 2;
    background-color: transparent;
    
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30em;
    width: 25em;
`

const LowerDiv = styled.div`
    position: absolute;
    z-index: 1;
    background-color: rgba(244, 244, 244, 1);

    display: flex;
    flex-direction: row;

    height: 30em;
    width: 25em;

    .background1{
        width: 35%;
        height: 100%;
        background-color: #db8e8e;
    }
    &>img{
        position: absolute;
        min-height: 270px;
        max-height: 500px;
        height: 40%;
        bottom: 0px;
        right: 0px;
    }
`


const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
`


const StyledIcon = styled.img`
    width: 10px;
    height: 10px;
`