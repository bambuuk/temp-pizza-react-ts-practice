import React, { FC, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditPizzaForm from './EditPizzaForm';
import Pizza from '../models/Pizza';

interface SinglePizzaProps {
  pizza: Pizza;
  updPizza: (newPizza: Pizza) => void;
  delPizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updPizza, delPizza }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  }

  const handleDelete = () => {
    delPizza(pizza.id);
  }

  return (
    <div className='pizza'>
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} грн</span>

      <div className='pizza-controls'>
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete onClick={handleDelete} />
      </div>

      {
        edit ? <EditPizzaForm data={pizza} updPizza={updPizza} handleToggleEdit={handleToggleEdit} /> : null
      }
    </div>
  )
}

export default SinglePizza;
