document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.option');
    const submitBtn = document.getElementById('submit-btn');
    const resultText = document.getElementById('result');

    // Function to generate random numbers for options 

    function generateOptions() {
        const correctAnswer = Math.floor(Math.random() * 4);
        const correctValue = (Math.floor(Math.random() * 10) + 1) * 2;

        options.forEach((option, index) => {
            if (index === correctAnswer) {
                option.textContent = correctValue;
                option.dataset.correct = true;
            } else {
                option.textContent = (Math.floor(Math.random() * 10) + 1) * 2 + 1;
                option.dataset.correct = false;
            }
        });
    }

    // Initial options generation 

    generateOptions();

    // Submit button click event 

    submitBtn.addEventListener('click', function () {
        const selectedOption = document.querySelector('.option.selected');

        if (!selectedOption)
            return;

        if (selectedOption.dataset.correct === "true") {
            resultText.textContent = "Correct!";
        } else {
            resultText.textContent = "Incorrect!";
        }

        // Reset selected option
        selectedOption.classList.remove('selected');

        // Generate new options
        // generateOptions();
    });

    // Option click event 

    options.forEach(option => {
        option.addEventListener('click', function () {
            options.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});