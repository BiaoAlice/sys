<template>
    <div class="bottom">
        <el-row>
            <el-col
                :md="8"
                :lg="8"
                class="hidden-md-only"
            >
            </el-col>
            <el-col
                :md="8"
                :lg="8"
            >
                <h4>漓江学院票务系统</h4>
                <i>关于我们</i>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i>联系我们</i>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'Bottom'
}
</script>

<style scoped>
    .bottom{
        padding: 10px 0px;
        background-color: #666666;
        color:#b4b4b4;
        text-align: center;
    }
    .hidden-md-only{
        height: 10px;
    }
    i{
        font-size: 12px;
    }
</style>


