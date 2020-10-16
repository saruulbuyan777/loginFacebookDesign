import React, { Component } from 'react'
import css from "./style.module.css";
import Button from "../button/index";

 



function Form() {
    return (
        <div>
            
        <div className = {css.container} >
              <form>
                    <input name = "firstName" placeholder = 'Email or Phone Number' /> <br/>
                    <input name = "lastName" placeholder = 'Password'  /> <br/>
                    <Button primary >Log in</Button>
                    <a href = "">Forget password?</a>
                    <Button smallSize smallPadding >Create New Account</Button>
                    <p><b className = {css.alink}>Create a Page </b>for a celebrity, band or business.</p>
                   
            </form>
        </div>
    
        </div>
        
    )
}

export default Form




