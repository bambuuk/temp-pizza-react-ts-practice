import React, { FC } from 'react';
import SinglePizza from './SinglePizza';
import Pizza from '../models/Pizza';

interface PizzaDisplayProps {
  pizzaList: Pizza[];
  updPizza: (newPizza: Pizza) => void;
  delPizza: (id: number) => void;
}

const PizzaDisplay: FC<PizzaDisplayProps> = ({ pizzaList, updPizza, delPizza }) => {
  return (
    <div className='container'>
      {
        pizzaList.map((pizza) => {
          return <SinglePizza pizza={pizza} key={pizza.id} updPizza={updPizza} delPizza={delPizza} />
        })
      }
    </div>
  )
}

export default PizzaDisplay;
