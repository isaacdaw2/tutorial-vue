const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de la compra',
        frutas: [
            {nombre: 'Peras', cantidad: 10},
            {nombre: 'Manzanas', cantidad: 0},
            {nombre: 'Plátanos', cantidad: 11},
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta() {
            if(this.nuevaFruta){
                this.frutas.push({
                    nombre: this.nuevaFruta, cantidad: 0
                });
                this.nuevaFruta = ''
            }            
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
})