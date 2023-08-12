function calculateCosts() {
    var unit = document.getElementById('unit').value;
    var power = document.getElementById('power').value;
    var hours = document.getElementById('hours').value;
    var costPerKWh = document.getElementById('cost').value;

    // Convertir en kilowatts si l'unité choisie est en watts
    if (unit === 'W') {
        power = power / 1000;
    }

    var dailyCost = power * hours * costPerKWh;
    var monthlyCost = dailyCost * 30; // Approximation pour un mois
    var yearlyCost = dailyCost * 365; // Calcul pour une année

    document.getElementById('dailyCost').textContent = dailyCost.toFixed(2);
    document.getElementById('monthlyCost').textContent = monthlyCost.toFixed(2);
    document.getElementById('yearlyCost').textContent = yearlyCost.toFixed(2);

    document.getElementById('results').style.display = 'block';
}
