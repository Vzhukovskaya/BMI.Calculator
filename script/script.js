// ИМТ = вес (кг) / (рост (м) * рост (м))
let button = document.getElementById("calculateButton");

// Функция расчета ИМТ по формуле:
function calculateBmi(weightInKg, heightInMeters) {
    // Возвожу высоту в квадрат: 
    let heightSquared = Math.pow(heightInMeters, 2);

    // Делю вес на рост в квадрате:
    let bmi = weightInKg / heightSquared;

    // Округляю результат ИМТ:
    bmi = Math.round(bmi * 100) / 100;
    return bmi;
}

// Функция для обработки события:
function handleButtonClick() {
    let weightInput = Number(document.getElementById("weightInput").value);
    let heightInput = Number(document.getElementById("heightInput").value);

    if (
        isNaN(weightInput) ||
        isNaN(heightInput) ||
        weightInput <= 0 ||
        heightInput <= 0
    ) {
        alert('Пожалуйста, введите корректные числовые значения веса и роста');
    }

    let result = calculateBmi(weightInput, heightInput);
    let totalResult = document.getElementById("result");
    totalResult.textContent = "Your body mass index: " + result;
}

// Вещаю слушатель событий на кнопку:
button.addEventListener("click", handleButtonClick);