function orderNounours (teddy) {
    let newBlock = document.getElementById('yourCart')

        let titre = document.createElement('h2')
        let produit = document.createElement('p')
        let quantité = document.createElement('p')
        let prix = document.createElement('p')

        newBlock.appendChild(titre)
        newBlock.appendChild(produit)
        newBlock.appendChild(quantité)
        newBlock.appendChild(prix)
        
        titre.classList.add('titre')
        produit.classList.add('teddyName')
        prix.classList.add('teddyPrix')
        quantité.classList.add('teddyQuantité')

        titre.innerText = 'Votre panier'
        produit.innerText = 'Produit'
        quantité.innerText = 'Quantité'
        prix.innerText = 'Prix'

        produit.style.fontWeight = "bold"
        quantité.style.fontWeight = "bold"
        prix.style.fontWeight = "bold"
              
}