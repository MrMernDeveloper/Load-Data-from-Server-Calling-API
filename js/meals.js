const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // console.log(meals);
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``
    for (const meal of meals) {
        //  console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card" onclick="displayMealDetails(${meal.idMeal})">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                        </div>
                    </div>
        `
        mealsContainer.appendChild(mealDiv)
    }
}

const searchMeals = () => {
    const inputField = document.getElementById('input-field')
    const searchText = inputField.value;
    loadMeals(searchText);
    inputField.value = '';

}

const displayMealDetails = (idMeals) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayAnotherMeals(data.meals[0]))
}

const displayAnotherMeals = (details) => {
    console.log(details)
    const displaycontainer = document.getElementById('mealdetails')
    displaycontainer.innerHTML = ``
    const mealDiv = document.createElement('div')
    mealDiv.classList.add('card')
    mealDiv.innerHTML = `
     <div>
     <img src="${details.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${details.strMeal}
                        <h6>Menu ID:${details.idMeal}</h6>                        <p class="card-text">${details.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
    `
    displaycontainer.appendChild(mealDiv);


}
