import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';


const Header = props =>{
  retrun (
  <Fragment>
   <header>
    <h1> React Meals</h1>
    <button>Cart</button>
   </header>
   <div>
     <img src={mealsImage} alt='A table full of delicious food!' />
    </div>
  </Fragment>
  )
};