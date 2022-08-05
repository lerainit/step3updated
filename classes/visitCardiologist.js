import Visit from "./visit.js";
import instance from "../fuctions/instance.js";

class VisitCardiologist extends Visit{
constructor(){
    super()
this.submitBtn = document.createElement('button')
}
createElements(){
    super.createElements()
    this.submitBtn.innerHTML = 'Создать визит'
this.submitBtn.classList.add('btn_for_cardiologist')
   this.form.insertAdjacentHTML('beforeend',`
   <label for="pressure">Ваше обычное давление</label><br>
   <input id ="pressure" type ="text" value=""><br>
   <label for= "weight">Индекс массы тела</label><br>
   <input id ="weight" type ="text" value=""><br>
   <label for ="diseases">Перенесенные заболевания сердечно сосудистой системы</label><br>
   <input  id = "diseases" type ="text" value=""><br>
   <label for ="age">Возраст</label><br>
   <input id ="age"  type ="text" value=""><br>
   `)
this.form.append(this.submitBtn)
this.form.addEventListener('submit',(e)=>{
e.preventDefault()

const input = document.querySelectorAll('input')




const createCard = async () =>{
    console.log('ok')
   
    const {status,data} =  await instance.post('',{doctor:'cardiologist',name:input[2].value,age:input[6].value,pressure:input[3].value,weight:input[4].value,purpose:input[0].value,description:input[1].value,urgency: document.querySelector('.visit_select').selectedIndex })
       console.log(data)
    
   }
  createCard() 
  cardsArr.then(result =>{ console.log(result)
    result.forEach(el =>{
    
        if(el.doctor === 'cardiologist'){
           new Card(el.name,el.doctor,el.purpose,el.description,el.urgency).render('.container')
        }})
      })
  
})
}

render(selector){
    this.createElements()
    document.querySelector(selector).append(this.form);
}

}

export default VisitCardiologist;