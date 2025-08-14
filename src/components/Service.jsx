import React from 'react'
import Trainings from '../assets/thirdpic.jpg'
import Studio from '../assets/fourthpic.jpg'
import Cowork from '../assets/fifthpic.jpg'
import Conference from '../assets/sixthpic.jpg'
import Business from '../assets/seventh.jpg'
import Card from './Card'

const cardArr =
[
  { src : Trainings,
    name : 'Trainings',
    to: 'trainings'}, 

  { src : Studio,
    name : 'Studio',
    to: 'studio'},
    
  {
    src : Cowork,
    name : 'Co-working Space',
    to: 'cowork'},

  {
    src : Conference,
    name : 'Conference Hall',
    to: 'conference'},

  {
    src : Business,
    name : 'Business Solutions',
    to: 'business'},

]

function Service() {
  return (
   <section className="bg-white py-20 px-10 items-center">
      <div className="flex flex-col items-center justify-center w-300 h-150 ">
        <div className="flex flex-col w-120  items-center text-center">
          <h3 className="text-2xl font-bold mt-20">Services Feedback</h3>
          <p className="text-black">Let us know what your experience with any one of <br/> our services has been.</p>
        </div>

        <div className="flex flex-wrap gap-14 mt-12 w-full h-500 justify-center">
          {cardArr.map(
          (card,index) => (
          <Card
          key={index}
          name={card.name} 
          src={card.src} 
          to={card.to} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service


