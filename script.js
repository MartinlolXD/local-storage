// Function to save name to local storage
function saveName() {
    const nameInput = document.getElementById('nameInput').value;
    localStorage.setItem('savedName', nameInput);
    displaySavedName();
}

// Function to display saved name
function displaySavedName() {
    const savedName = localStorage.getItem('savedName');
    const displayPoznamka = document.getElementById('displayPoznamka');
    if (savedName) {
        displayPoznamka.textContent = savedName;
    } else {
        displayPoznamka.textContent = ' ';
    }
}

// Call displaySavedName function when page loads
document.addEventListener('DOMContentLoaded', displaySavedName);
