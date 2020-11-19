let searchButton = document.getElementById('searchButton')
let nutrition = [];
searchButton.addEventListener('click', function () {
    let studio = document.getElementById('Search').value
    if (studio === '') {
        alert("Please enter a search query...");
    }
    axios.get(`recording_studios.dbs`)
        .then((data) => {
            let results = document.getElementById('results')
            results.innerHTML = ''
            nutrition = data
            for (i = 0; i < 5; i++) {
                let resultsList = document.createElement('div')
                resultsList.innerHTML = data.data.hints[i].food.label
                results.appendChild(resultsList)
                let nutritionInfo = document.createElement('div')
                nutritionInfo.innerHTML = `
            calories: ${data.data.hints[i].food.nutrients.ENERC_KCAL},
            carbs: ${data.data.hints[i].food.nutrients.CHOCDF}g,
            fat: ${data.data.hints[i].food.nutrients.FAT}g,
            protein: ${data.data.hints[i].food.nutrients.PROCNT}g,
            fiber: ${data.data.hints[i].food.nutrients.FIBTG}g
            `
                results.appendChild(nutritionInfo)
                let logFood = document.createElement('button')
                logFood.innerHTML = 'Log Food'
                logFood.className = 'logFood'
                logFood.id = i
                results.appendChild(logFood)
                // console.log(data.data.hints[i].food.nutrients)
                logFood.addEventListener('click', function (event) {
                    console.log(nutrition.data.hints[event.target.id])
                    let selectedFood = nutrition.data.hints[event.target.id]
                    console.log(typeof selectedFood.food.nutrients.FAT)
                    $.post('/intake', {
                        "food": `${selectedFood.food.label}`,
                        "calories": `${selectedFood.food.nutrients.ENERC_KCAL}`,
                        "carb_g": `${selectedFood.food.nutrients.CHOCDF}`,
                        "fat_g": `${selectedFood.food.nutrients.FAT}`,
                        "pro_g": `${selectedFood.food.nutrients.PROCNT}`,
                        "fiber": `${selectedFood.food.nutrients.FIBTG}`,
                    }, function (response) {
                        console.log(response)
                    })
                    let newLog = document.createElement('div')
                    newLog.innerHTML = `food: ${selectedFood.food.label} ,
                    calories: ${selectedFood.food.nutrients.ENERC_KCAL},
                    carb: ${selectedFood.food.nutrients.CHOCDF},
                    fat: ${selectedFood.food.nutrients.FAT},
                    protein: ${selectedFood.food.nutrients.PROCNT},
                    fiber: ${selectedFood.food.nutrients.FIBTG}
                    `
                    let deleteButton = document.createElement('button')
                    deleteButton.innerHTML = 'Delete Item'
                    intakeLog.appendChild(newLog)
                    intakeLog.appendChild(deleteButton)
                    deleteButton.addEventListener('click', function(){
                        console.log('Delete Button Works')
                        intakeLog.removeChild(newLog)
                        intakeLog.removeChild(deleteButton)
                    })
                })
            }
            document.getElementById('search').value = ''
        })
        .catch((error) => {
            console.log('error')
        })
})
let updateButton = document.getElementById('updateButton')
updateButton.addEventListener('click', function () {
    let age = document.getElementById('age').value
    let height_in = document.getElementById('height_in').value
    let weight_lbs = document.getElementById('weight_lbs').value
    let gender = document.getElementById('gender').value
    age = parseInt(age)
    height_in = parseInt(height_in)
    weight_lbs = parseInt(weight_lbs)
    axios.put(`/userdata`, { "age": `${age}`, "height_in": `${height_in}`, "weight_lbs": `${weight_lbs}`, "gender": `${gender}` })
        .then((data) => {
            console.log(data)
            console.log(age, height_in, weight_lbs, gender)
            document.getElementById('age').value = ''
            document.getElementById('height_in').value = ''
            document.getElementById('weight_lbs').value = ''
            document.getElementById('gender').value = ''
            document.getElementById('userAge').innerHTML = `age: ${age}`
            document.getElementById('userGender').innerHTML = `gender: ${gender}`
            document.getElementById('userHeight').innerHTML = `height: ${height_in} in`
            document.getElementById('userWeight').innerHTML = `weight: ${weight_lbs} lbs`
        })
        .catch((error) => {
            console.log("somethin here ain't right")
        })
})