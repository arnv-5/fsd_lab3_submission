$(document).ready(function () {
    // When the page loads, load lunch recipes dynamically via Ajax
    $.ajax({
        url: 'lunch-recipes.json', // Replace with the actual URL of your JSON data
        dataType: 'json',
        success: function (data) {
            // Iterate through the JSON data and create recipe sections
            for (let i = 0; i < data.length; i++) {
                let recipe = data[i];
                let recipeHtml = `
                    <section class="recipe">
                        <h2>${recipe.name}</h2>
                        <img src="${recipe.image}" alt="${recipe.name}">
                        <p>${recipe.description}</p>
                        <ul>
                            <li>Ingredients:
                                <ul>
                                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                                </ul>
                            </li>
                            <li>Instructions:
                                <ol>
                                    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                                </ol>
                            </li>
                        </ul>
                    </section>
                `;
                $('#recipes-container').append(recipeHtml);
            }
        },
        error: function (error) {
            console.error('Error loading lunch recipes: ' + error.statusText);
        }
    });
});
