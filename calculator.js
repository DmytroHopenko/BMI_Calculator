document.addEventListener('DOMContentLoaded', function () {
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

const heightFtInput = document.getElementById('height_ft');
const heightInInput = document.getElementById('height_in');
const weightStInput = document.getElementById('weight_st');
const weightLbsInput = document.getElementById('weight_lbs');

const metricRadio = document.getElementById('metric');
const imperialRadio = document.getElementById('imperial');

const metricSystem = document.querySelector('.stats');
const imperialSystem = document.querySelector('.stats_imperial');

const topBMI = document.getElementById('top_bmi');
const resultElement = document.getElementById('result');
const idealBMI = document.getElementById('ideal_bmi_info');

const welcome = document.getElementById('welcome');
const welcomeMore = document.getElementById('welcome_more');

heightInput.addEventListener('input', calculateBMI_Metric);
weightInput.addEventListener('input', calculateBMI_Metric);

heightFtInput.addEventListener('input', calculateBMI_Imperial);
heightInInput.addEventListener('input', calculateBMI_Imperial);

weightStInput.addEventListener('input', calculateBMI_Imperial);
weightLbsInput.addEventListener('input', calculateBMI_Imperial);

metricRadio.addEventListener('change', function () {
    if (metricRadio.checked) {
        metricSystem.style.display = 'flex';
        imperialSystem.style.display = 'none';
        welcome.style.display = "block";
        welcomeMore.style.display = "block";
        resultElement.innerText = "";
        topBMI.style.display = "none";
        idealBMI.style.display = "none";
    }
});

imperialRadio.addEventListener('change', function () {
    if (imperialRadio.checked) {
        imperialSystem.style.display = 'grid';
        metricSystem.style.display = 'none';
        welcome.style.display = "block";
        welcomeMore.style.display = "block";
        resultElement.innerText = "";
        topBMI.style.display = "none";
        idealBMI.style.display = "none";
    }
});

function calculateBMI_Metric() {
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    welcome.style.display = "none";
    welcomeMore.style.display = "none";
    topBMI.style.display = "none";

    if (!isNaN(height) && !isNaN(weight)) {
        var meters = height / 100;
        const bmi = weight / (meters * meters);
        const minBMI = 18.5 * (meters*meters);
        const maxBMI = 24.9 * (meters*meters);
        resultElement.innerText = bmi.toFixed(1);
        if(bmi >= 18.5 && bmi <= 24.9){
            const idealM = 'Your BMI suggests you’re a healthy weight.'
            idealBMI.innerText = `${idealM} Your ideal weight is between ${minBMI.toFixed(1)}kgs. - ${maxBMI.toFixed(1)}kgs.`
        }
        else {
            const idealMNot = 'Your BMI suggests you’re not a healthy weight.'
            idealBMI.innerText = `${idealMNot} Your ideal weight is between ${minBMI.toFixed(1)}kgs. - ${maxBMI.toFixed(1)}kgs.`
        }
        topBMI.style.display = "block";
        idealBMI.style.display = "block";
    } else {
        resultElement.innerText = "";
        idealBMI.innerText = "";
        welcome.style.display = "block";
        welcomeMore.style.display = "block";
    }
}
function calculateBMI_Imperial() {
    var heightFt = parseFloat(heightFtInput.value);
    var heightIn = parseFloat(heightInInput.value);
    var weightSt = parseFloat(weightStInput.value);
    var weightLbs = parseFloat(weightLbsInput.value);

    welcome.style.display = "none";
    welcomeMore.style.display = "none";
    topBMI.style.display = "none";
    idealBMI.style.display = "none";

    if (!isNaN(heightFt) && !isNaN(weightSt) && !isNaN(heightIn) && !isNaN(weightLbs)) {
        var imperFt = (heightFt * 30.48)/100;
        var imperIn = (heightIn * 2.54)/100;
        var imperSt = weightSt * 6.35;
        var imperLbs = weightLbs * 0.43;
        var imperW = imperSt + imperLbs;
        var imeprH = imperFt + imperIn;
        const bmi = imperW / (imeprH * imeprH);
        const minBMI = 18.5 * (imeprH * imeprH) / 6.35;
        const maxBMI = 24.9 * (imeprH * imeprH) / 6.35;
        resultElement.innerText = bmi.toFixed(1);
        if(bmi >= 18.5 && bmi <= 24.9){
            const idealM = 'Your BMI suggests you’re a healthy weight.'
            idealBMI.innerText = `${idealM} Your ideal weight is between ${minBMI.toFixed(1)}st. - ${maxBMI.toFixed(1)}st.`
        }
        else {
            const idealMNot = 'Your BMI suggests you’re not a healthy weight.'
            idealBMI.innerText = `${idealMNot} Your ideal weight is between ${minBMI.toFixed(1)}st. - ${maxBMI.toFixed(1)}st.`
        }
        topBMI.style.display = "block";
        idealBMI.style.display = "block";
    } else {
        resultElement.innerText = "";
        welcome.style.display = "block";
        welcomeMore.style.display = "block";
    }
}
});