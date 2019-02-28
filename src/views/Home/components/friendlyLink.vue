<template>
    <div class="friendlyLink">
        <el-row>
            <el-col
                :md="10"
                :lg="10"
                :offset="2"
                :xs='20'
            >
                <h4>友情链接</h4>
                <el-row :gutter="20">
                    <el-col
                        :md="12"
                        :lg="12"
                        :sm="24"
                        v-for="item in 4"
                        :key="item"
                    >
                        <img :src="`@/../static/link0${item}.png`" alt="">
                    </el-col>
                </el-row>
            </el-col>
            <el-col
                :md="9"
                :lg="9"
                :offset="2"
                :xs="20"
            >
                <el-row :gutter="20">
                    <el-col
                        :md="6"
                        :lg="6"
                        :xs="12"
                        v-for="item in list"
                        :key="item.id"
                    >
                        <h5>{{item.title}}</h5>
                        <img :src="`@/../static/w${item.id}.png`" alt="">
                    </el-col>
                </el-row>
            </el-col>
            
        </el-row>
    </div>
</template>

<script>
export default {
    name:'friendlyLink',
    data () {
        return{
            list:[
                {
                    id:1,
                    title:"中国铁路微信"
                },
                {
                    id:2,
                    title:"中国铁路微博"
                },
                {
                    id:3,
                    title:"12306公众号"
                },
                {
                    id:4,
                    title:"铁路12306"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .friendlyLink{
        background-color: #f8f8f8;
        padding-top: 20px;
    }
    img{
        width:100%;
        height: auto;
        margin-bottom: 5px;
    }
    h4,h5{
        margin-bottom: 10px;
    }
    h5{
        text-align: center;
    }
</style>

