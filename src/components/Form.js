import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import styled from 'styled-components'

const Form = () => {
    const[isSubmitted,setIsSubmitted]=useState(false)

    function sumbitForm(){
        setIsSubmitted(true)
    }
    return (
        <>
        <StyledForm>
            <span className='close-btn' >x</span>
                 <div className="form-content-left">
            <img src="img/img-2.svg" alt="rocket" className='form-img'/>
        </div>            
        {!isSubmitted ? (<FormSignup submitForm={sumbitForm}/>):(<FormSuccess/>)}
      
        </StyledForm>
        </>
    )
}
const StyledForm = styled.div`
width:80%;
min-height:60vh;
margin: 10vh auto;
display: flex;
position: relative;
border-radius:30px;
overflow:hidden;
.close-btn{
position: absolute;
top:10px;
right:20px;
font-size:24px;
color:white;
font-weight:bold;
cursor: pointer;
}
.form-content-left{
    width:50%;

    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(to right top, rgb(140, 218, 238), rgb(23, 147, 231) );
    padding:20px;
        img{
        width:80%;
        height:80%;
    }
}
@media screen and (max-width:1100px){
    flex-direction:column;

    .form-content-left{
        width:100%;
    }
}
`

export default Form
