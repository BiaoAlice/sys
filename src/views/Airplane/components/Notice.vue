<template>
    <div class="notice">
        <ol>
            <li 
                v-for="(item,index) in list"
                :key="index"
            >
                {{item}}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name:'Notice',
    data () {
        return{
            list:[
                '关于在国航机上便携式电子设备使用规范的通知',
                '关于涉及国航自营纽约（肯尼迪、纽瓦克）、华盛顿航线客票非自愿处置标准的通知',
                '关于调整国航实际承运航班各舱位累积率的公告',
                '关于民航旅客行李中携带锂电池规定的公告',
                '防诈骗专题',
                '关于扬子江航空更名为金鹏航空的公告',
                '赴美旅客提前了解粉状物质运输新要求的提示',
                '关于国航航班在越南芽庄金兰机场航站楼调整的通知',
                '关于未成年人入境阿联酋要求的通知',
                '关于从澳大利亚、新西兰出境的国际旅客需提前了解的行李运输新要求'
            ]
        }
    }
}
</script>

<style scoped>
    ol{
        padding-left: 5px;
    }
    li{
        padding: 2px 0;
    }
    @media screen and (max-width:500px) {
        ol{
            list-style: none;
        }
    }
    .notice{
        padding: 5px 0;
    }
</style>
