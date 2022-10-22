// import classes from "./MealItem.module.css";
import { useState, useEffect, useCallback } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [mealList, setMealList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const fetchMeals = useCallback(async () => {
    const fetchedMeals = await fetch(
      "https://react-http-97bae-default-rtdb.firebaseio.com/Meals.json"
    );
    console.log("fetchedMeals: ", fetchedMeals);
    if (!fetchedMeals.ok) {
      throw new Error("Something went wrong");
    }
    const meals = await fetchedMeals.json();
    const mealsArray = [];
    for (const key in meals) {
      mealsArray.push({
        id: key,
        name: meals[key].name,
        description: meals[key].description,
        price: meals[key].price,
      });
    }
    setMealList(mealsArray);
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error);
    });
  }, [fetchMeals]);

  const mealsList = mealList.map((meal) => (
    <MealItem meal={meal} key={meal.id} />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>The meals are loading...</p>}
        {httpError && <p>Something went wrong...</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
