import classes from "./Header.module.css";
import {Fragment} from 'react';
import mealsImage from '../../asserts/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>TOMATO</h1><h3 style={{marginRight: "40%", marginBottom: "-0.01%", fontFamily: "cursive"}}>—The Taste of Spice</h3>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of food items"/>
        </div>
    </Fragment>
    );
}

export default Header;