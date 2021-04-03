var app = new Vue({
    el: "#root",
    data:{
        albums: '',
        valType:'',
        musicType: [],
    },

    mounted(){
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result) => {
            this.albums = result.data.response;

            this.filter();
            this.order();
            })
    },

    methods: {
        filter(){
            this.albums.forEach(element =>{
                if(this.musicType.includes(element.genre)){
                    this.musicType.push(element.genre);
                }
            });
        },
        order(){
            this.albums.sort((albumA,albumB) => albumA.year - albumB.year)
        }
    }


});