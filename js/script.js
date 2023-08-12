function calculateCosts() {
    var watts = document.getElementById('watts').value;
    var costPerKWh = document.getElementById('cost').value;
    var dailyCost = (watts / 1000) * costPerKWh * 24;
    var monthlyCost = dailyCost * 30;
    var yearlyCost = dailyCost * 365;

    document.getElementById('daily').textContent = dailyCost.toFixed(2);
    document.getElementById('monthly').textContent = monthlyCost.toFixed(2);
    document.getElementById('yearly').textContent = yearlyCost.toFixed(2);

    document.getElementById('results').style.display = 'block';
}