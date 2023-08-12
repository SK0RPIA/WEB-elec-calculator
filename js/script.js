function calculateCosts() {
    var unit = document.getElementById('unit').value;
    var costUnit = document.getElementById('costUnit').value;
    var power = document.getElementById('power').value;
    var costPerKWh = document.getElementById('cost').value;
    var hours = document.getElementById('hours').value;

    if (unit === 'W') {
        power = power / 1000; // Convertir en kilowatts
    }

    if (costUnit === 'cent') {
        costPerKWh = costPerKWh / 100; // Convertir en euros
    }

    var dailyCost = power * hours * costPerKWh;
    var monthlyCost = dailyCost * 30;
    var yearlyCost = dailyCost * 365;

    document.getElementById('dailyCost').textContent = dailyCost.toFixed(2);
    document.getElementById('monthlyCost').textContent = monthlyCost.toFixed(2);
    document.getElementById('yearlyCost').textContent = yearlyCost.toFixed(2);

    document.getElementById('results').style.display = 'block';
}
