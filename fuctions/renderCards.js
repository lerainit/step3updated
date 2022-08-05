import getCards from "./getCards.js";
import Card from "../classes/card.js";

const renderCards = ( )=>{
 const result = async () =>{

 const data = await getCards()



   return data
 }
  let cardsArr = result()


console.log(cardsArr)

 cardsArr.then(result =>{ console.log(result)
result.forEach(el =>{

    if(el.doctor === 'cardiologist'){
       new Card(el.name,el.doctor,el.purpose,el.description,el.urgency).render('.container')
    }})
  })

  return cardsArr
}
export default renderCards