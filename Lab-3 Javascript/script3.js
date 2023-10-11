$(document).ready(function () {
    let recipeIndex = 2; // Index of the next recipe to load

    $('#load-more').click(function () {
        $.getJSON('dinner_recipes.json', function (data) {
            const recipe = data[recipeIndex];
            if (recipe) {
                const recipeHTML = `
                    <section class="recipe">
                        <h2>${recipe.name}</h2>
                        <img src="${recipe.image}" alt="${recipe.name}">
                        <p>${recipe.description}</p>
                        <ul>
                            <li>Ingredients:
                                <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                            </li>
                            <li>Instructions:
                                <ol>${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}</ol>
                            </li>
                        </ul>
                    </section>
                `;

                $('button#load-more').before(recipeHTML);
                recipeIndex++;
            } else {
                $('button#load-more').prop('disabled', true).text('No more recipes');
            }
        });
        // Toggle recipe details
        $('section.recipe').on('click', function () {
            $(this).find('ul').toggle();
        });

        // Smooth scroll to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }
        });

        $('#scroll-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

        // Random recipe button
        $('#random-recipe').click(function () {
            const recipeCount = $('section.recipe').length;
            const randomIndex = Math.floor(Math.random() * recipeCount);
            const randomRecipe = $('section.recipe').eq(randomIndex);
            $('html, body').animate({ scrollTop: randomRecipe.offset().top - 50 }, 800);
        });

        $('#sal').slideToggle(1000)
    });
});
