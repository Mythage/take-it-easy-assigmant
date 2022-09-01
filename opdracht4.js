// Opdracht 4 -Functies

// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft
// in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

function tvName( tv ) {
    return `${tv.brand} ${tv.type} - ${ tv.name}`
}

// console.log(tvName(inventory[0]))

// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

function tvPrice( tv ) {
    return `€${tv.price},-`
}

// console.log(tvPrice(inventory[0]))

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv.
// De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
// Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

function tvSizeses( tv ) {
    let output = ''
    for (let i = 0; i < tv.availableSizes.length ; i++) {
        const cuttentTvSizeInCm = tv.availableSizes[i] * 2.54
        const cuttentTvSizeInInc = tv.availableSizes[i]

        output += `${cuttentTvSizeInInc} inch (${cuttentTvSizeInCm} cm)`
        if ( i <tv.availableSizes.length - 1 ) {
            output = `${output}  |  `
        }
    }
    return output
}

// console.log(tvSizeses(inventory[0]))

// Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld.
// Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

function tvInformation(tv) {
    const tvInfoBox = document.getElementById('infoTv');
    return tvInfoBox.innerText = `
        ${tvName(tv)}
        ${tvPrice(tv)}
        ${tvSizeses(tv)}
    `;
}

// tvInformation(inventory[1])
// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina.
// Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function createAllTvInfo ( arr ) {
    const tvInfoBox = document.getElementById('infoTv');
    arr.map( (tv) => {
        return tvInfoBox.innerText += `
        ${tvName(tv)}
        ${tvPrice(tv)}
        ${tvSizeses(tv)}
    `;
    })
}
createAllTvInfo( inventory)