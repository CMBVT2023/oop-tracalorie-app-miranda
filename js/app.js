class CalorieTracker {
    constructor() {
        this._calorieLimit = 2000;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];
    };

    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
    };

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories;
    };
}

class Meal {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    };
}

class Workout {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    };
}

const tracker = new CalorieTracker();

const breakfast = new Meal('breakfast', 350);
tracker.addMeal(breakfast)
const pushUps = new Workout('push ups', 100);
tracker.addWorkout(pushUps);

console.log(tracker._meals)
console.log(tracker._workouts)

console.log(tracker._totalCalories)