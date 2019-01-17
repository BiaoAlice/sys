<template>
    <div class="choose">
        <input type="text" @focus="focus" @blur="hidden">
        <div class="container" v-show="show">
            <ul class="ul">
                <li v-for="item in cityListKey" :key="item" @mouseenter="move">{{item}}</li>
            </ul>
        </div>
        <h1>123</h1>
  </div>
</template>

<script>
export default {
    name:'choose',
    data () {
        return{
            show:false,
            activeName:"first",
            cityListKey:["abcd","efgh","igkl","mnop","rstu","wxyz"]
        }
    },
    methods:{
        focus(){
            this.show = true;
        },
        hidden(){
            this.show = false;
        },
        change(){
            this.activeName = 'third';
            console.log(this.activeName)
        },
        move(){
            console.log('move')
        }
    },
    created () {
        this.http.get('/api/citylist/getlist')
                 .then(res=>{
                     console.log(res.data.data[0].cities); 
                 })
    }
}
</script>

<style scoped>
   .container{
       width: 300px;
       min-height: 200px;
       position:absolute;
       background: white;
       z-index: 20;
   }
   .ul{
       display: flex;
       list-style: none;
   }
   .ul li{
       width:60px;
   }
   .ul li:hover{
       color: red;
   }
</style>
