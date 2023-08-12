function calculateCosts() {
    var unit = document.getElementById('unit').value;
    var costUnit = document.getElementById('costUnit').value;
    var power = document.getElementById('power').value;
    var costPerKWh = document.getElementById('cost').value;
    var hours = document.getElementById('hoursInput').value;
    var hoursUnit = document.getElementById('hoursUnit').value;

    if (unit === 'W') {
        power = power / 1000;
    }

    if (costUnit === 'cent') {
        costPerKWh = costPerKWh / 100;
    }

    switch (hoursUnit) {
        case 'day':
            hours = hours * 1;
            break;
        case 'week':
            hours = hours * 7;
            break;
        case 'month':
            hours = hours * 30;
            break;
        case 'year':
            hours = hours * 365;
            break;
    }

    var dailyCost = power * hours * costPerKWh;
    var monthlyCost = dailyCost * 30;
    var yearlyCost = dailyCost * 365;

    document.getElementById('dailyCost').textContent = dailyCost.toFixed(2);
    document.getElementById('monthlyCost').textContent = monthlyCost.toFixed(2);
    document.getElementById('yearlyCost').textContent = yearlyCost.toFixed(2);

    document.getElementById('results').style.display = 'block';
}
