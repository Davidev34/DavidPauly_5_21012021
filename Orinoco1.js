function nounoursNames(teddies) {
    let mainBlock = document.getElementById('lenounours')
    

    for (let elem of teddies) {
        let block = document.createElement('div')
        let link = document.createElement('a')
        let title = document.createElement('p')
        let pics = document.createElement('img')
        let price = document.createElement('p')
        let more = document.createElement('p')

        mainBlock.appendChild(block)
        block.appendChild(link)
        link.appendChild(pics)
        link.appendChild(title)
        link.appendChild(price)
        link.appendChild(more)

        block.classList.add('block')
        title.classList.add('teddyName')
        price.classList.add('teddyPrice')
        pics.classList.add('pics')

        pics.src = elem.imageUrl
        title.innerText = elem.name
        price.innerText = elem.price/100 + ' euros'
        more.innerText = 'Cliquez pour en savoir plus'
        link.href = `./index2.html?id=${elem._id}`
    }
}


async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies')
      .then((response) => response.json())
      .then((teddies) => nounoursNames(teddies))
}
fillProducts()