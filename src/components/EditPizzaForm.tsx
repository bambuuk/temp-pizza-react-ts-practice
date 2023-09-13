import React, { FormEvent, ChangeEvent, FC, useState } from 'react';
import Pizza from '../models/Pizza';
import './styles.css';

interface EditPizzaFormProps {
  data: Pizza;
  updPizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updPizza, handleToggleEdit }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({
      ...editPizza,
      [name]: value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;
    if (title && price && img) {
      updPizza(editPizza);
      handleToggleEdit();
    }
  }

  return (
    <div>
      <form className='edit-form' onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder='Name'
          onChange={handleChange}
          value={editPizza.title}
        />
        <input
          name="price"
          type="text"
          placeholder='Price'
          onChange={handleChange}
          value={editPizza.price}
        />
        <input
          name="img"
          type="text"
          placeholder='Image'
          onChange={handleChange}
          value={editPizza.img}
        />
        <button type='submit'>Confirm</button>
      </form>
    </div>
  )
}

export default EditPizzaForm;
