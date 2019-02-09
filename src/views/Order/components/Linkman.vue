<template>
    <div class="linkman">
        <h3>联系人信息</h3>
        <el-form label-position="left" label-width="90px" :model="formLabelAlign">
            <el-form-item label="姓名">
                <el-input v-model="formLabelAlign.name" placeholder="联系人姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input v-model="formLabelAlign.tell" placeholder="通过手机可接受订单信息"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:'Linkman',
    data () {
        return{
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    }
}
</script>

<style scoped>
    .linkman{
        margin-top:15px;
        border:1px solid #ccc;
        border-top:3px solid #589ef8;
        padding:10px;
    }
    h3{
        color: #888;
        padding-left: 10px;
        margin-bottom: 10px;
    }
    .el-form{
        padding:0 30px;
    }
</style>
