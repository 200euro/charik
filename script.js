const catalog = [
   {
       name: 'Фотозоны',
       img: './charikall.png',
       price: 1200,
       oldPrice: 1400, 
       currency: '₽',
       description: '',
   },
   {
       name: 'Фотозоны',
       img: './charikall.png',
      
       price: 1200,
       oldPrice: 1400, 
       currency: '$',
       description: 'Какое-то описание',
   },
   {
       name: 'Фотозоны',
       img: './charikall.png',
    
       price: 1200,
       oldPrice: 1400, 
       currency: '$',
       description: 'Какое-то описание',
   },
   {
       name: 'Фотозоны',
       img: './charikall.png',
     
       price: 1200,
       oldPrice: 1400, 
       currency: '$',
       description: 'Какое-то описание',
   },


   {
      name: 'Фотозоны',
      img: './charikall.png',
    
      price: 1200,
      oldPrice: 1400, 
      currency: '$',
      description: 'Какое-то описание',
  },
  {
   name: 'Фотозоны',
   img: './charikall.png',
 
   price: 1200,
   oldPrice: 1400, 
   currency: '$',
   description: 'Какое-то описание',
},

]


   
const catalog2 = [
   {
       name: 'Фотозоны',
       img: './charikall.png',
       price: 1200,
       oldPrice: 1400, 
       currency: '₽',
       description: '',
   },
   {
       name: 'Фотозоны',
       img: './charikall.png',
      
       price: 1200,
       oldPrice: 1400, 
       currency: '$',
       description: 'Какое-то описание',
   },
   {
       name: 'Фотозоны',
       img: './charikall.png',
    
       price: 1200,
       oldPrice: 1400, 
       currency: '$',
       description: 'Какое-то описание',
   },
   {
       name: 'Фотозоны',
       img: './charikall.png',
     
       price: 1200,
       oldPrice: 1400, 
       currency: '$',
       description: 'Какое-то описание',
   },


   {
      name: 'Фотозоны',
      img: './charikall.png',
    
      price: 1200,
      oldPrice: 1400, 
      currency: '$',
      description: 'Какое-то описание',
  },
  {
   name: 'Фотозоны',
   img: './charikall.png',
 
   price: 1200,
   oldPrice: 1400, 
   currency: '$',
   description: 'Какое-то описание',
},

]
   
   
   

   
   const wrap4 = document.querySelector ('.wrap4')

const card2 =  catalog.map(card2 => {
   return`
   <div class="card2">
   <img src=${card2.img} alt="">
   <h4>${card2.name}</h4>
   <div class="div">
      <p>${card2.price}</p>
      <p>${card2.oldPrice}</p>
   </div>
   <button class="btn2">Заказать</button>
   
</div>
   `
})

wrap4.innerHTML = card2


