let table = 
[
	[ "Mes", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Anual"],
	[ "Temp. máx. abs. (ºC)", 39.3, 38.1, 36.3, 32.5, 27.4, 22.2, 27.7, 24.7, 28.8, 34.4, 35.7, 39.4, 39.4],
	[ "Temp. máx. media (ºC)", 26.3, 25.8, 23.7, 20.5, 16.8, 13.8, 13.1, 14.4, 16.0, 18.5, 21.7, 24.4, 19.6],
	[ "Temp. media (ºC)", 20.3, 19.9, 18.0, 14.6, 11.3, 8.5, 8.1, 8.9, 10.5, 13.1, 15.9, 18.5, 14.0],
	[ "Temp. min. media (ºC)", 14.3, 14.1, 12.5, 9.1, 6.4, 4.1, 3.8, 4.0, 5.3, 7.6, 10.1, 12.7, 8.7],
	[ "Temp. min. abs (ºC)", 4.7, 1.2, 1.9, -1.0, -3.0, -5.5, -9.3, -6.4, -5.5, -3.0, -2.0, -0.2, -9.3],
	[ "Precipitación total (mm)", 100.1, 72.8, 107.0, 73.3, 73.5, 54.9, 58.9, 64.0, 56.4, 84.4, 75.3, 104.0, 107],
	[ "Dias de precipitaciones (≥ 0.1 mm)", 9, 8, 9, 9, 9, 9, 9, 8, 7, 10, 10, 10, 107],
	[ "Horas de sol", 288.3, 234.5, 232.5, 195.0, 167.4, 120.0, 127.1, 264.3, 174.0, 210.8, 222.0, 269.7, 2405.6],
	[ "Humedad relativa (%)", 76, 77, 79, 81, 83, 84, 81, 81, 80, 80, 77, 76, 80]
];

function makeTable(data){
    let html = "";
    html += "<h1>Parámetros climáticos</h1>"
    html += "<table><tr><th colspan='14'>Parámetros climáticos promedio de Mar del Plata, BA (1961-1990).</th></tr>";

    for (section of data) {
        html += "<tr>";
        for (info of section) {
            html += "<td>" + info + "</td>"
        }
        html += "</tr>";
    }

    html += "</table>";

    return html;
}

document.getElementById("divTable").innerHTML = makeTable(table);

function promediosAnuales(tabla) {
    let infoToReturn = "";
    let promedioTempMax = 0;
    let promedioTempMin = 0;
    let promedioHumedadRelativa = 0;

    for (let i = 1; i < tabla[2].length - 1; i++){
        promedioTempMax += tabla[2][i];
    }
    promedioTempMax = promedioTempMax/12;

    for (let i = 1; i < tabla[4].length - 1; i++){
        promedioTempMin += tabla[4][i];
    }
    promedioTempMin = promedioTempMin/12;

    for (let i = 1; i < tabla[9].length - 1; i++){
        promedioHumedadRelativa += tabla[9][i];
    }
    promedioHumedadRelativa = promedioHumedadRelativa/12;

    infoToReturn = "El promedio de temperatura maxima es: " + promedioTempMax + "\nEl promedio de temperatura minima es: " + promedioTempMin + "\nEl promedio de Humedad relativa es: " + promedioHumedadRelativa;
   
    return infoToReturn;
}

console.log(promediosAnuales(table));