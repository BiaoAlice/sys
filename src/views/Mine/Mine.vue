<template>
    <div class="mine">
        <div class="msg">
            <div class="toux"></div>
            <h2 class="h2">{{form.name}}</h2>
            <p class="p">余额：{{balance}}</p>
        </div>
        <el-tabs type="border-card">
            <el-tab-pane label="订单中心">
                <div class="order">
                    <div class="absolute">
                        <i class="img"></i>
                        <span>暂时没有相关订单</span>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="修改信息" class="changeMsg">
                <el-form ref="form" :model="form" label-width="80px" class="form">
                    <el-form-item label="姓名" >
                        <el-input v-model="form.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="学号" >
                        <el-input v-model="form.id" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="登录密码">
                        <el-input v-model="form.logPsd" placeholder="输入新密码（默认为旧密码）" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="支付密码">
                        <el-input v-model="form.payPsd" placeholder="输入新密码（默认为旧密码）" type="password"></el-input>
                    </el-form-item>
                    <el-form-item class="center">
                        <el-button type="warning" @click="submit">确认修改</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="充值中心" class="changeMsg">
                <el-form ref="form" :model="price" label-width="80px" class="form">
                    <el-form-item label="姓名" >
                        <el-input v-model="price.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="金额">
                        <el-radio-group v-model="radio2">
                            <el-radio :label="100">100元</el-radio>
                            <el-radio :label="300">300元</el-radio>
                            <el-radio :label="500">500元</el-radio>
                            <el-radio :label="1000">1000元</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="支付密码">
                        <el-input v-model="price.payPsd" placeholder="输入支付密码" type="password"></el-input>
                    </el-form-item>
                    <el-form-item class="center">
                        <el-button type="warning" @click="submit">确认支付</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name:"Mine",
    data(){
        return{
            form:{
                name:'',
                id:'',
                logPsd:'',
                payPsd:''
            },
            price:{
                name:'',
                payPsd:''
            },
            radio2: null,
            payPsd:'',
            balance:null
        }
    },
    methods:{
        submit(){
            if(this.radio2!=null && this.payPsd == this.price.payPsd){
                this.http.get('/api/user/updata',{
                    params:{
                        token:localStorage.getItem("token"),
                        price:this.radio2
                    }
                    })
                    .then(res=>{
                        this.$message({
                                duration: 2000,
                                showClose: true,
                                message:'充值成功',
                                type:'success'
                            });
                        this.form.name = res.data.msg.studentName;
                        this.form.id = res.data.msg.studentId;
                        this.price.name = res.data.msg.studentName;
                        this.payPsd = res.data.msg.studentPayPsd;
                        this.balance = res.data.msg.balance;
                        this.radio2 = null;
                        this.price.payPsd="";
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }else{
                alert("密码错误！")
            }
        }
    },
    created(){
         this.http.get('/api/user/getmsg',{
            params:{
                token: localStorage.getItem('token')
            }
        })
        .then(res=>{
            if(res.code == 0){
                this.$router.path('/');
            }else{
                console.log(res);
                this.form.name = res.data.msg.studentName;
                this.form.id = res.data.msg.studentId;
                this.price.name = res.data.msg.studentName;
                this.payPsd = res.data.msg.studentPayPsd;
                this.balance = res.data.msg.balance;
                console.log(this.payPsd);
            }
        })
    }
}
</script>

<style scoped>
 .mine{
        padding:10px 123px;
    }
    @media screen and (max-width:500px) {
        .mine{
            padding:10px 0;
        }
   }
   .msg{
       width:100%;
       height:104px;
       background-image: url('../../assets/mine/mine1.png');
       position: relative;
   }
   .toux{
       width:80px;
       height:80px;
       border-radius: 50%;
       background-color: red;
       background-image: url('../../assets/mine/mine2.jpg');
       background-size: contain;
       position: absolute;
       top:12px;
       left:40px;
   }
   .h2{
       position: absolute;
       top:32px;
       left:150px;
       color: white;
   }
   .p{
       position: absolute;
       top:40px;
       left:300px;
       color: white;
   }
   .red{
       width: 100%;
       height:200px;
       background-color: red;
   }
   .order{
       width:100%;
       min-height: 190px;
       position: relative;
   }
   .img{
       display: block;
       width: 112px;
       height: 108px;
       background:url('../../assets/mine/mine3.png') 0 -110px no-repeat;;
   }
   .absolute{
       position: absolute;
        top:50%;
       left:50%;
       margin-left:-56px;
       margin-top: -54px;
   }
   .changeMsg{
       display: flex;
       justify-content: center;
   }
   .form{
       width:300px;
   }
   .center{
        margin-left:0 !important;
        text-align: center;
    }
    .el-radio{
        width:70px;
    }
</style>
