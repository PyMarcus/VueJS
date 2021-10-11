const app = Vue.createApp({ //ao criar essa instancia do vue(coração dele), passa-se opções de objetos
  data(){
    return{
      product: 'Socks' //passa como entrada para onde o mount app referenciar
      ,
      brand:'Vue Mastery',
      selectedVariant: 0,
      url: 'https://github.com/PyMarcus',
      inventory: 100,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants:[
        {id:2234, color: 'green', image:'./assets/images/socks_green.jpg', quantitaty: 59},
        {id:2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantitaty: 0},
      ],
      cart: 0,
    }
  },
  methods:{
    addToCart(){
      this.cart += 1
    },
    updateVariant(index){
      this.selectedVariant = index
    },


  },
  computed:{ //permite por funcoes lá
    title(){
      return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].image
    },
    inStock(){
      return this.variants[this.selectedVariant].quantitaty
    },
    
  }
})

