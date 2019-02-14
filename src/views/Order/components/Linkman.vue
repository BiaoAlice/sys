<template>
    <div class="linkman">
        <h3>联系人信息</h3>
        <el-form label-position="left" label-width="90px" :model="formLabelAlign">
            <el-form-item label="姓名">
                <el-input v-model="formLabelAlign.name" @input="check" placeholder="（必填）联系人姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input v-model="formLabelAlign.tell" @input="check" placeholder="（必填）通过手机可接受订单信息"></el-input>
            </el-form-item>
            <el-form-item class="center">
            <el-button @click="play" :disabled="show" type="warning">提交订单并支付</el-button>
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
                tell: ''
            },
            show:true
        }
    },
    methods:{
        check(){
            let checkTell = /^[1][3,4,5,7,8][0-9]{9}$/,
                checkName = /^[\u4E00-\u9FA5]{2,4}$/;
            if(checkName.test(this.formLabelAlign.name) && checkTell.test(this.formLabelAlign.tell)){
                this.show = false;
            }else{
                this.show = true;
            }
        },
        play(){

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
    .center{
        margin-left:0 !important;
        text-align: center;
    }
</style>
