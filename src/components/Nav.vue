<template>
    <div class="nav">
        <el-row>
            <el-col class="navBar">
                <h1>
                    <img src="../assets/home/logo.jpg" alt="">
                </h1>
                <ul>
                    <li
                        v-for="(item,index) in nav"
                        :key="index"
                    >
                    {{item}}
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'Nav',
    data () {
        return{
            nav:['首页','飞机票','火车票']
        }
    }
}
</script>
<style scoped >
    img{
        width:60px;
        height:60px;
    }
    .navBar{
        box-sizing: border-box;
        padding:10px 0px 0px 15px;
        border-bottom: 1px solid #ccc;
        display: flex;
    }
    ul{
        list-style: none;
        display:flex;
        align-items: center;
    }
    li{
        width:100px;
        text-align: center;
    }
</style>

