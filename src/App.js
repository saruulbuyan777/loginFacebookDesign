import React from 'react';
import './App.css';
import  Form from "./form/index";

function App() {
  return (
    <div>

    <div className="App">   
     <div className = "App-1">
        <h1 className = "Heading">facebook</h1>
        <p className = "paragraph">Connect with friends and the world around you on facebook </p>         
     </div>


     <div className = "App-2">
          <Form />
       </div> 
       </div>
       <div className = "footer" >
            <ul className = "footer--first--list">
             <li>English(US)</li>
             <li>中文(简体)</li>
            
             <li>Қазақша</li>
             <li>Русский</li>
             <li>Türkçe</li>
             <li>日本語</li>
             <li>Français (France)</li>
             <li>Español</li>
             <li>Português (Brasil)</li>
             <li>Deutsch</li>
             
            </ul>
            <ul className = "footer--second--list">
             <li>Sign Up</li>
             <li>Log In</li>
             <li>Messenger</li>
             <li>Facebook Lite</li>
             <li>Watch</li>
             <li>People</li>
             <li>Pages</li>
             <li>Page Categories</li>
             <li>Places</li>
             <li>Games</li>
             <li>Locations</li>
             <li>Marketplace</li>
             <li>Facebook Pay</li>
             <li>Groups</li>
             <li>Oculus</li>
             <li>Portal</li>
             <li>Instagram</li>
             <li>Local</li>
             <li>Fundraisers</li>
             <li>Services</li>
             <li>Voting Information Center</li>
             <li>About</li>
             <li>Create Ad</li>
             <li>Create Page</li>
             <li>Developers</li>
             <li>Careers</li>
             <li>Privacy</li>
             <li>Cookies</li>
             <li>Ad Choices</li>
             <li>Terms</li>
             <li>Help</li>
             
            </ul>
            <p>Facebook &copy; 2020</p>
        </div>
        

    
    </div>
  );
}

export default App;
