import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizza';
import PizzaDisplay from './components/PizzaDisplay';
import demoPizzas from './demoPizzas';
import './App.css';

const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>(demoPizzas);

  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza])
  }

  const updPizza = (newPizza: Pizza) => {
    setPizzaList(pizzaList.map(pizza => pizza.id === newPizza.id ? newPizza : pizza));
  }

  const delPizza = (id: number) => {
    const newPizzaList = pizzaList.filter(pizza => pizza.id !== id);
    setPizzaList(newPizzaList);
  }

  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>Our pizza</span>
        <AddPizzaForm addPizza={addPizza} />
        <PizzaDisplay pizzaList={pizzaList} updPizza={updPizza} delPizza={delPizza} />
      </div>
    </div>
  );
}

export default App;
