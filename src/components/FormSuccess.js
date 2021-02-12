import React from 'react'
import styled from 'styled-components'


const FormSuccess = () => {
    return (
        <StyledRight>
            <div className='form-success' >We have recived your request!</div>
            <img src='img/img-3.svg' alt="success" className='form-img-2'/>
        </StyledRight>
    )
}

const StyledRight = styled.div`
width:50%;
padding:20px;
background:#2a2a2a;
color:white;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
.form-success{
padding:2em;
font-size:26px;
}
.form-img-2{
    width:60%;
}
@media screen and (max-width:1100px){
 
     width:100%;
}

@media screen and (max-width:425px){
    .form-success{
padding:1em;
font-size:16px;
}
}



`
export default FormSuccess
