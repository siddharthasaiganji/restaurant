import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

// Here we are working with dummy meals, i.e not taking any user input
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Full Meals Veg',
      description: 'Rice(Unlimited) with Dhal, Alu, Bendhi,  Curd, Saambar, Some snaks and Mirchi Bajji',
      price: 150.00,
    },
    {
      id: 'm2',
      name: 'Meals Non-veg(Chiken)',
      description: 'Rice(unlimited) with Chiken(5 pices, Dont argue with size of pices, soop unlimited) and Curd  ',
      price: 180.00,
    },
    {
      id: 'm3',
      name: 'Chiken Biryani',
      description: 'A full plate Biryani with soop and Curd',
      price: 200.00,
    },
    {
      id: 'm4',
      name: 'Family Pack Biryani(Chiken)',
      description: 'A full pack of Biryani with soop and Curd',
      price: 700.00,
    },
];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem 
            id={meal.id}
            key = {meal.id} 
            name = {meal.name} 
            description = {meal.description}
            price = {meal.price}
        />
    ));

    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList} </ul>
        </Card>
    </section>
};

export default AvailableMeals;