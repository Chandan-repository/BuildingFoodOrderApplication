import React,  { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src='https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?size=626&ext=jpg' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;

