document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const calculateDailyBtn = document.getElementById('calculateDailyBtn');
    const resetDailyBtn = document.getElementById('resetDailyBtn');
    const addIntakeBtn = document.getElementById('addIntakeBtn');
    const addExerciseBtn = document.getElementById('addExerciseBtn');

    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');
    const bmrValue = document.getElementById('bmrValue');
    const tdeeValue = document.getElementById('tdeeValue');
    const goalValue = document.getElementById('goalValue');
    const goalType = document.getElementById('goalType');
    const bmiMarker = document.getElementById('bmiMarker');
    const currentBmi = document.getElementById('currentBmi');

    const caloriesInInput = document.getElementById('caloriesIn');
    const caloriesOutInput = document.getElementById('caloriesOut');
    const trackerResults = document.getElementById('trackerResults');
    const totalIn = document.getElementById('totalIn');
    const totalOut = document.getElementById('totalOut');
    const netBalance = document.getElementById('netBalance');
    const balanceMessage = document.getElementById('balanceMessage');

    let bmr = 0;

    calculateAll();

    calculateBtn.addEventListener('click', calculateAll);
    calculateDailyBtn.addEventListener('click', calculateDailyBalance);
    resetDailyBtn.addEventListener('click', resetDailyTracker);
    addIntakeBtn.addEventListener('click', () => addCalories('in', 500));
    addExerciseBtn.addEventListener('click', () => addCalories('out', 300));

    function calculateAll() {
        const age = parseInt(document.getElementById('age').value, 10);
        const gender = document.getElementById('gender').value;
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const activity = parseFloat(document.getElementById('activity').value);
        const goal = document.querySelector('input[name="goal"]:checked').value;

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        const tdee = bmr * activity;
        let calorieGoal;
        let goalText;

        switch (goal) {
            case 'lose':
                calorieGoal = tdee - 500;
                goalText = 'Weight Loss (500 cal deficit)';
                break;
            case 'maintain':
                calorieGoal = tdee;
                goalText = 'Weight Maintenance';
                break;
            case 'gain':
                calorieGoal = tdee + 500;
                goalText = 'Weight Gain (500 cal surplus)';
                break;
        }

        let category;
        let categoryColor;

        if (bmi < 18.5) {
            category = 'Underweight';
            categoryColor = '#3498db';
        } else if (bmi < 25) {
            category = 'Normal weight';
            categoryColor = '#2ecc71';
        } else if (bmi < 30) {
            category = 'Overweight';
            categoryColor = '#f39c12';
        } else {
            category = 'Obese';
            categoryColor = '#e74c3c';
        }

        const bmiPercentage = Math.min(Math.max((bmi - 15) / 25 * 100, 0), 100);
        bmiMarker.style.left = `${bmiPercentage}%`;
        bmiMarker.style.backgroundColor = categoryColor;

        bmiValue.textContent = bmi.toFixed(1);
        bmiCategory.textContent = category;
        bmiCategory.style.color = categoryColor;
        bmrValue.textContent = Math.round(bmr);
        tdeeValue.textContent = Math.round(tdee);
        goalValue.textContent = Math.round(calorieGoal);
        goalType.textContent = goalText;
        currentBmi.textContent = `Your BMI: ${bmi.toFixed(1)} (${category})`;
        currentBmi.style.backgroundColor = categoryColor;
    }

    function calculateDailyBalance() {
        const caloriesIn = parseInt(caloriesInInput.value, 10) || 0;
        const exerciseCalories = parseInt(caloriesOutInput.value, 10) || 0;
        const totalCaloriesOut = bmr + exerciseCalories;
        const netCalories = caloriesIn - totalCaloriesOut;

        totalIn.textContent = caloriesIn;
        totalOut.textContent = Math.round(totalCaloriesOut);
        netBalance.textContent = Math.round(netCalories);

        let message;
        if (netCalories > 500) {
            message = 'You are in a <span class="highlight">significant calorie surplus</span>. Consider reducing intake or increasing exercise.';
        } else if (netCalories > 0) {
            message = 'You are in a <span class="highlight">calorie surplus</span>.';
        } else if (netCalories === 0) {
            message = 'You are at <span class="highlight">maintenance calories</span>.';
        } else if (netCalories >= -500) {
            message = 'You are in a <span class="highlight">calorie deficit</span>. Good for weight loss!';
        } else {
            message = 'You are in a <span class="highlight">significant calorie deficit</span>. Make sure you\'re getting enough nutrients.';
        }

        balanceMessage.innerHTML = message;
        trackerResults.style.display = 'block';
    }

    function resetDailyTracker() {
        caloriesInInput.value = 0;
        caloriesOutInput.value = 0;
        trackerResults.style.display = 'none';
    }

    function addCalories(type, amount) {
        const input = type === 'in' ? caloriesInInput : caloriesOutInput;
        const current = parseInt(input.value, 10) || 0;
        input.value = current + amount;
    }

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('change', function() {
            const min = parseInt(this.min, 10) || 0;
            const max = parseInt(this.max, 10) || Infinity;
            let value = parseFloat(this.value) || min;

            if (value < min) value = min;
            if (value > max) value = max;

            this.value = value;
        });
    });
});
