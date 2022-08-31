// Opdracht 1 - Array Methoden

// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const titleTvType = document.getElementById('tvType')
titleTvType.innerText = `Tv types for sell`

function sortOnType(tvType) {
    const list = document.getElementById('listTvType')
    return tvType.map((entry) => {
        list.innerHTML = list.innerHTML + `
            <li class="list-item">${entry.type}</li>
        `
    })
}
sortOnType(inventory)

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOut = inventory.filter((tv) => {
        if (tv.originalStock - tv.sold === 0)
            return [];
    }
)
console.log(soldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const ambiLighttv = inventory.filter((tv)=>{
    if (tv.options.ambiLight)
        return [];
}
)
console.log(ambiLighttv)

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

const sortedTV = inventory.sort((a, b) => a.price - b.price);

console.log(sortedTV)