document.getElementById("queryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const query = document.getElementById("query").value.trim(); // Get the query value
    
    // Make the API request
    fetch('https://api.api-ninjas.com/v1/nutrition?query=' + query, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'pQ69iVgtzwM2ZpM++uuc5w==WYFFEzdhl5tECHv4'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Display the results
        console.log(data);
        displayResults(data);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
});
/*
function displayResults(data) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (data.error) {
        resultsDiv.innerHTML = `<p>Error: ${data.error}</p>`;
    } else if (data.calories) {
        const nutritionInfo = data.nutrition;
        const html = `
            <h3>Nutrition Information:</h3>
            <p>Food: ${nutritionInfo.food}</p>
            <p>Calories: ${nutritionInfo.calories}</p>
            <p>Protein: ${nutritionInfo.protein}</p>
            <p>Fat: ${nutritionInfo.fat}</p>
            <p>Carbohydrates: ${nutritionInfo.carbohydrates}</p>
        `;
        resultsDiv.innerHTML = html;
    } else {
        resultsDiv.innerHTML = `<p>No nutrition information found for this query.</p>`;
    }
}
*/

function displayResults(data) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (data.length === 0) {
        resultsDiv.innerHTML = `<p>No nutrition information found for this query.</p>`;
    } else {
        const nutritionInfo = data[0];
        const html = `
            <h3>Nutrition Information:</h3>
            <p>Food: ${nutritionInfo.name}</p>
            <p>Calories: ${nutritionInfo.calories}</p>
            <p>Protein: ${nutritionInfo.protein_g}</p>
            <p>Fat: ${nutritionInfo.fat_total_g}</p>
            <p>Carbohydrates: ${nutritionInfo.carbohydrates_total_g}</p>
        `;
        resultsDiv.innerHTML = html;
    }
}

