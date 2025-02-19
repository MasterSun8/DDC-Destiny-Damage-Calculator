const REL = 15

function normalizeForPieChart(abilities = 0, kinetic = 0, energy = 0, heavy = 0) {
    var sum = abilities + kinetic + energy + heavy;
    abilities = abilities / sum;
    kinetic = kinetic / sum;
    energy = energy / sum;
    heavy = heavy / sum;
    return [abilities, kinetic, energy, heavy];
}

function calculateAngles(abilities = 0, kinetic = 0, energy = 0, heavy = 0) {
    heavy = ((abilities+kinetic+energy+heavy) * 2 - heavy)  * Math.PI;
    energy = ((abilities+kinetic+energy) * 2 - energy) * Math.PI;
    kinetic = ((abilities+kinetic) * 2 - kinetic) * Math.PI ;
    abilities = abilities * Math.PI;
    return [abilities, kinetic, energy, heavy];
}

function changePieChart(abilities = 0, kinetic = 0, energy = 0, heavy = 0) {
    let chart = normalizeForPieChart(...arguments)
    let angles = calculateAngles(...chart)
    document.getElementById("piechart").style.setProperty("--abilities", chart[0] * Math.PI * 2 * REL + "%")
    document.getElementById("piechart").style.setProperty("--kinetic", chart[1] * Math.PI * 2 * REL + "%")
    document.getElementById("piechart").style.setProperty("--energy", chart[2] * Math.PI * 2 * REL + "%")
    document.getElementById("piechart").style.setProperty("--heavy", chart[3] * Math.PI * 2 * REL + "%")

    document.getElementById("piechart").style.setProperty("--abilities-left", Math.sin(angles[0]) + "vh")
    document.getElementById("piechart").style.setProperty("--abilities-top", Math.cos(angles[0]) + "vh")
    document.getElementById("piechart").style.setProperty("--kinetic-left", Math.sin(angles[1]) + "vh")
    document.getElementById("piechart").style.setProperty("--kinetic-top", Math.cos(angles[1]) + "vh")
    document.getElementById("piechart").style.setProperty("--energy-left", Math.sin(angles[2]) + "vh")
    document.getElementById("piechart").style.setProperty("--energy-top", Math.cos(angles[2]) + "vh")
    document.getElementById("piechart").style.setProperty("--heavy-left", Math.sin(angles[3]) + "vh")
    document.getElementById("piechart").style.setProperty("--heavy-top", Math.cos(angles[3]) + "vh")
}

function addItem(params) {

}

changePieChart(1, 1, 1, 1)