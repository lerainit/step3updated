import Card from "./classes/card.js";

import createCard from "./classes/createcard.js";
import Login from "./classes/login.js";
import getUrgency from "./fuctions/getUrgency.js";

import createLogin from "./fuctions/createLogin.js";

//import VisitDentist from "./visitDentist.js";
//import VisitTherapist from "./visitTherapist.js";
//import VisitCardiologist from "./visitCardiologist";


const container = document.querySelector('.container')

const loginBtn = document.querySelector('.login_btn')
/*function createCards(){
new createCard().render('.container')
    
}

function createLogin(){


   const login = new Login()

 // loginBtn.removeEventListener('click',createLogin)
login.render('.container')

login.submitLogin() 

//loginBtn.addEventListener('click',createCards)
}
*/
loginBtn.addEventListener('click', createLogin)


new Card('Иван Иванов','терапевт','обследование','боль в желудке','срочно').render('.container')

const urgencySelect = document.querySelector('.visit_select')



 
