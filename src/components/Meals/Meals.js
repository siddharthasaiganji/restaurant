// This will grops the MealsSummary.js and Avilable Meals

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvilableMeals";
import { Fragment } from "react";

const Meals = () => {
    return <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
};

export default Meals;