function normalizeForPieChart(abilities = 0, kinetic = 0, energy = 0, heavy = 0) {
    var sum = abilities + kinetic + energy + heavy;
    abilities = abilities / sum;
    kinetic = kinetic / sum;
    energy = energy / sum;
    heavy = heavy / sum;
    return [abilities, kinetic, energy, heavy];
}

function changePieChart(abilities = 0, kinetic = 0, energy = 0, heavy = 0) {
    let chart = normalizeForPieChart(...arguments)
    document.getElementById("piechart").style.setProperty("--abilities", chart[0]*157+"%")
    document.getElementById("piechart").style.setProperty("--kinetic", chart[1]*157+"%")
    document.getElementById("piechart").style.setProperty("--energy", chart[2]*157+"%")
    document.getElementById("piechart").style.setProperty("--heavy", chart[3]*157+"%")
}

function addItem(params) {

}

changePieChart(25, 25, 10, 5)