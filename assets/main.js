const app = Vue.createApp({
  data() {
    return {
      produto: {
        nome: 'Canecas Radioativas',
        imagem: {
          src: './assets/img/cup/OriginalCup.jpg',
          alt: 'Canecas Brancas'
        },
        corSelecionada: 'Branca',
        cores: [
          {
            nome: 'Branca',
            hex: '#ffffff',
            imagem: './assets/img/cup/OriginalCup.jpg'

          },
          {
            nome: 'Vermelha',
            hex: '#ff0000',
            imagem: './assets/img/cup/RedCup.jpg'

          },
          {
            nome: 'Verde',
            hex: '#00ff00',
            imagem: './assets/img/cup/GreenCup.jpg'

          }
        ]
      }
    }
  },
  methods: {
    mudarCor(cor) {
      this.produto.corSelecionada = cor.nome
      this.produto.imagem.src = cor.imagem
    },
    comprar() {
      alert('Compra não implementada.')
    }
  }
})