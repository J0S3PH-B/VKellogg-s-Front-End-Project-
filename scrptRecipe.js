document.addEventListener('DOMContentLoaded', function() {
    const timeFilters = document.querySelectorAll('input[name="time"]');
    const servingsFilters = document.querySelectorAll('input[name="servings"]');
    const searchInput = document.getElementById('search');
    const clearButton = document.getElementById('clear-filters');
    const recipes = document.querySelectorAll('.recipe-card');

    function filterRecipes() {
        const selectedTime = document.querySelector('input[name="time"]:checked');
        const selectedServings = document.querySelector('input[name="servings"]:checked');
        const searchText = searchInput.value.toLowerCase();

        recipes.forEach(recipe => {
            const recipeTime = recipe.getAttribute('data-time');
            const recipeServings = recipe.getAttribute('data-servings');
            const recipeTitle = recipe.querySelector('h3').textContent.toLowerCase();

            let timeMatch = !selectedTime || selectedTime.value === recipeTime;
            let servingsMatch = !selectedServings || selectedServings.value === recipeServings;
            let searchMatch = !searchText || recipeTitle.includes(searchText);

            if (timeMatch && servingsMatch && searchMatch) {
                recipe.style.display = '';
            } else {
                recipe.style.display = 'none';
            }
        });
    }

    function clearFilters() {
        timeFilters.forEach(filter => filter.checked = false);
        servingsFilters.forEach(filter => filter.checked = false);
        searchInput.value = '';
        filterRecipes();
    }

    timeFilters.forEach(filter => filter.addEventListener('change', filterRecipes));
    servingsFilters.forEach(filter => filter.addEventListener('change', filterRecipes));
    searchInput.addEventListener('input', filterRecipes);
    clearButton.addEventListener('click', clearFilters);

    filterRecipes();
});