import React from 'react'
import styled from 'styled-components'
import useForm from './useForm'
import validate from './validateInfo'

const FormSignup = ({submitForm}) => {
    const {values , handleChange, handleSubmit, errors } = useForm(submitForm,validate);
 
    return (
      <StyledRight>
          <form className="form" onSubmit={handleSubmit}>
              <h1>Get started with us today! Create your account by filling out the information below.</h1>
                <div className="form-inputs">
                    <label className="form-label" htmlFor='username'>Username:</label>
                    <input 
                    type="text"
                     name='username'
                     className='form-input' 
                     id='username'
                     placeholder='Enter your username'
                     value={values.username}
                     onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label" htmlFor='email'>Email:</label>
                    <input 
                    type="email"
                     name='email'
                     className='form-input' 
                     id='email'
                     placeholder='Enter your email'
                     value={values.email}
                     onChange={handleChange}
                    />
                      {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label" htmlFor='password'>Password:</label>
                    <input 
                    type="password"
                     name='password'
                     className='form-input' 
                     id='password'
                     placeholder='Enter your password'
                     value={values.password}
                     onChange={handleChange}
                    />
                      {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label" htmlFor='password2'>Confirm Password:</label>
                    <input 
                    type="password"
                     name='password2'
                     className='form-input' 
                     id='password2'
                     placeholder='Confirm your password'
                     value={values.password2}
                     onChange={handleChange}
                    />
                      {errors.password2 && <p>{errors.password2}</p>}
                </div>
        <button className="form-input-btn" type='submit'>Sign up</button>
        <span className="form-input-span">
            Alredy have an account? Login <a href='#'>here</a>
        </span>
          </form>
      </StyledRight>
    )
}

const StyledRight = styled.div`
width:50%;
padding:20px;
background:#2a2a2a;
color:white;
display: flex;
align-items:center;
justify-content:center;
flex-direction:row;
.form{
  width:80%;
  display: flex;
  flex-direction:column;
  h1{
    font-size:22px;
    font-weight:normal;
    margin-bottom:20px;
  }
  .form-inputs{
    display: flex;
    flex-direction:column;
    margin:10px;
    font-size:18px;
    .form-input{
      margin:0;
      padding:1em 1em;
      border-radius:10px;
    }
    p{
      padding:0 0.5rem;
      color:red;
      font-size:14px;
    }
  }
  .form-input-btn{
    margin:10px;
    padding:1em;
    border-radius:10px;
    border:none;
    color:white;
    font-size:18px;
    font-weight:bold;
    background:linear-gradient(to right top, rgb(140, 218, 238), rgb(23, 147, 231) );
    cursor: pointer;
    }
    .form-input-span{
      text-align:center;
      a{
        color:rgb(140, 218, 238);
        text-decoration:none;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width:1100px){
   
     width:100%;
}

@media screen and (max-width:425px){
  padding:20px 10px;
  .form{
    width:90%;
  h1{
    padding-left:10px;
    font-size:18px;
  }
  .form-inputs{
    margin:5px;
    font-size:16px;
    .form-input{
      margin:0;
      padding:0.7em;
      border-radius:10px;
    }
    p{
      font-size:12px;
    }
  }
  .form-input-btn{
    margin:5px;
    padding:0.7em;
    font-size:16px;
    }
  }
}



`

export default FormSignup
