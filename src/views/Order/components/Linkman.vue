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
            <el-form-item label="支付密码">
                <el-input v-model="formLabelAlign.payPsd" placeholder="（必填）请输入支付密码" type="password"></el-input>
            </el-form-item>
            <el-form-item class="center">
                <el-button @click="pay" :disabled="show" type="warning">提交订单并支付</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Linkman',
    props:['type'],
    data () {
        return{
            formLabelAlign: {
                name: '',
                tell: '',
                payPsd:''
            },
            show:true
        }
    },
    computed:{
        ...mapState(['userId','orderMsg','payPsd','balance'])
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
        pay(){
            if(this.formLabelAlign.payPsd != this.payPsd){
                 this.$message({
                            duration: 2000,
                            showClose: true,
                            message:'请输入正确的密码',
                            type:'error'
                        });
                        return ;
            }
                        console.log(this.balance);

            if(this.balance < this.orderMsg.price){
                this.$message({
                            duration: 2000,
                            showClose: true,
                            message:'余额不足，请前往充值',
                            type:'error'
                        });
                this.$router.push('/mine');
                return ;
            }
            Date.prototype.Format = function (fmt) { 
                    var o = {
                        "M+": this.getMonth() + 1, //月份 
                        "d+": this.getDate(), //日 
                        "h+": this.getHours(), //小时 
                        "m+": this.getMinutes(), //分 
                        "s+": this.getSeconds(), //秒 
                        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                        "S": this.getMilliseconds() //毫秒 
                    };
                    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                    for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    return fmt;
                }
                    let day = new Date().Format("yyyy-MM-dd");
                        let {code , price ,start,end,startTime,endTime,time} = this.orderMsg;
                        let orderId = this.userId +day.replace(/-/g,'')+ Math.round(Math.random()*1000+9000);
                        this.http.get('/api/order/add',{
                            params:{
                                studentId:this.userId,
                                orderId,
                                name:this.formLabelAlign.name,
                                tell:this.formLabelAlign.tell,
                                type:this.type,
                                code,
                                price,
                                start,
                                end,
                                startTime,
                                endTime,
                                time
                            }
                    })
                    .then(res=>{
                        if(res.code == "0"){
                            this.$message({
                            duration: 2000,
                            showClose: true,
                            message:'登录过时',
                            type:'error'
                        });
                            this.$router.push('/');
                            return;
                        }
                        let money = parseInt(this.balance) - parseInt(price);
                        console.log(money);
                        console.log(price);
                        this.http.get('/api/user/money',{
                            params:{
                                token:localStorage.getItem("token"),
                                price:money
                            }
                        }).then(res=>{
                            if(res.code == "0"){
                                this.$message({
                                duration: 2000,
                                showClose: true,
                                message:'登录过时',
                                type:'error'
                            });
                                this.$router.push('/');
                                return;
                            }
                            this.$message({
                                duration: 2000,
                                showClose: true,
                                message:'购买成功',
                                type:'success'
                            });
                            this.$store.commit('changebalance',res.data.balance);
                            this.$router.push('/mine');
                        })
                    })
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
