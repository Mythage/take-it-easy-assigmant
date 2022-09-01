

// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// let total = null;
// const totalSold = inventory.map((tv) => {
//     total += tv.sold
// })
// console.log(total)

const output = document.getElementById('output-container');

let totalSoldTv = null;
for (let i = 0; i < inventory.length; i++) {
    totalSoldTv += inventory[i].sold
}

// output.innerHTML = `
//     <p>Total sold Tv's: <span
//     class ="sold-items">${totalSoldTv}</span></p>
//     `;
// tvSold.innerText = totalsoldtv

//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.


let boughtTvs = null;
for (let i = 0; i < inventory.length; i++) {
    boughtTvs += inventory[i].originalStock

    console.log(boughtTvs)
}
//     Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
//     Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

output.innerHTML = `
<p>Total sold Tv's: <span
    class ="sold-items">${totalSoldTv}</span></p>
<p>Total sold Tv's: <span
    class ="bought-items">${boughtTvs}</span></p>
<p>Total Inventory: <span
    class ="inventory">${boughtTvs - totalSoldTv}</span></p>`

