const queryString = window.location.search
const params = new URLSearchParams(queryString)
const product = params.get('id')

function unSeulNounours (teddy) {

// Début du code : modification du DOM en fonction du nounours sur lequel on a cliqué

    let newBlock = document.getElementById('unseulnounours')

        let pic = document.createElement('img')
        let title = document.createElement('p')
        let description = document.createElement('p')
        let price = document.createElement('p')
        let color = document.createElement('p')
        let boxbutton = document.createElement('button')

        newBlock.appendChild(pic)
        newBlock.appendChild(title)
        newBlock.appendChild(description)
        newBlock.appendChild(price)
        newBlock.appendChild(color)
        newBlock.appendChild(boxbutton)
        
        pic.classList.add('pic')
        title.classList.add('oneTeddyName')
        price.classList.add('oneTeddyPrice')
        description.classList.add('description')
        color.classList.add('color')
        boxbutton.classList.add('boxbutton')

        title.innerText = teddy.name
        description.innerText = teddy.description
        price.innerText = teddy.price/100 + ' euros'
        color.innerText = teddy.colors
        boxbutton.innerText = 'Ajouter à mon panier'        
        pic.src = teddy.imageUrl

// Fin du code : modification du DOM en fonction du nounours sur lequel on a cliqué

// Début du code : ajout au panier d'un nounours au click

    boxbutton.addEventListener('click', () => {
        let idProduits = JSON.parse(localStorage.getItem("cart"))
        if (idProduits != null){
            
            idProduits[teddy._id].incart += 1
        }
        else {
            idProduits = {
                [teddy._id]:teddy
            }
            teddy.incart = 1
        }
        localStorage.setItem("cart",JSON.stringify(idProduits))
        })
// Fin du code : ajout au panier d'un nounours au click

// Début du code : nombre de couleurs commandées par nounours

    function listColorsordered(cart, typeNounours) {
        for (let elem of Object.keys(cart[typeNounours])) {
            console.log(`${typeNounours} a été commandé ${cart[typeNounours][elem].inCart} fois en ${elem}`)
        
        }
    }

    function displayAllNounourses(cart) {
        for (let elem of Object.keys(cart)) {
            listColorsordered(cart, elem)
        }
    }
    displayAllNounourses(cart)

// Fin du code : nombre de couleurs commandées par nounours
}


function fillProduct() {
      fetch('http://localhost:3000/api/teddies/' + product)
      .then((response) => response.json())
      .then((teddy) => unSeulNounours(teddy))
}
fillProduct()