<template>
    <div class="home">
        <swiper></swiper>
    </div>
</template>

<script>
import Swiper from './components/Swiper'
export default {
    name:'Home',
    components:{
        swiper:Swiper
    },
    created(){
        this.http.get('/train/train/tickets/queryByStationToStation?key=275a8c8708ce0&start=乌海&end=北京')
                 .then(res=>{
                    console.log(res);
                 })
    }
}
</script>

