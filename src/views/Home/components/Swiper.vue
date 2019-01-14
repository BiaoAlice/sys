<template>
    <div class="swiper">
        <div class="block">
            <el-carousel> 
                <el-carousel-item v-for="(item,index) in imgList" :key="index">
                    <img :src="`../../../../static/${item}`" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name:"Swiper",
    data () {
        return{
            imgList:['swiper1.jpg','swiper2.jpg','swiper3.jpg','swiper4.jpg']
        }
    }
}
</script>

<style scoped>
    img{
        width:100%;
        height: auto;
    }
    .swiper{
        margin-bottom: 10px;
    }
</style>

