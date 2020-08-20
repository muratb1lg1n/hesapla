var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      girdi: '',
    },
    methods: {
        yaz(sayi){
            this.girdi = this.girdi + sayi
        },
        esit(){
            this.girdi = eval(this.girdi)
        },
        temiz(){
            this.girdi = ""
        },
        sil(){
            this.girdi = this.girdi.slice(0,this.girdi.length-1)
        },
        kare(){
            this.girdi = Math.pow(this.girdi,2)
        },
        kok(){
            this.girdi = Math.sqrt(this.girdi)
        }
    }
  })