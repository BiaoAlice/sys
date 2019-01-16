<template>
    <div class="login">
        <el-form class="form" label-width="65px">
                <h2>登&nbsp;&nbsp;录</h2>
                <el-form-item label="学号" id="number">
                    <el-input 
                        @blur="tip"
                        v-model="studentId" 
                        placeholder="请输入学号"
                    ></el-input>
                </el-form-item>
                <el-form-item id="tip">
                    
                </el-form-item>
                <el-form-item label="密码">
                    <el-input
                        v-model="studentPsd" 
                        type="password"
                        placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <p>
                    <el-button type="primary" @click="submit">登录</el-button>
                </p>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return{
                studentId:'',
                studentPsd:''
            }
        },
        methods:{
            tip() {
                let reg= /^(2015)\d{8}$/;
                if(!reg.test(this.studentId)){
                    this.$message({
                    duration: 2000,
                    showClose: true,
                    message:'请输入正确的学号',
                    type:'error'
                    })
                }
            },
            submit () {
                let reg= /^(2015)\d{8}$/;
                if(this.studentId=='' || this.studentPsd =='' || !reg.test(this.studentId)){
                    this.$message({
                        duration: 2000,
                        showClose: true,
                        message:'请输入正确的学号/密码',
                        type:'error'
                    })
                }else{
                    let studentId = this.studentId;
                    let studentPsd = this.studentPsd;
                    this.http.post(`/api/user/login`,{
                                studentId,
                                studentPsd
                            })
                             .then((res)=>{
                                 if(res.data.code == 0){
                                      this.$message({
                                        duration: 2000,
                                        showClose: true,
                                        message:res.data.msg,
                                        type:'error'
                                    })
                                 }else{
                                     localStorage.setItem('token',res.data.token);
                                     this.$store.commit('changeUserName',res.data.name)
                                     this.$router.push('/home');
                                 }
                             })
                }
            }
        }
    }
</script>
<style scoped>

    .login{
        width:100%;
        height:100%;
        background-image: url('../../assets/login/login.png');
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form{
        width: 310px;
        height: 350px;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 10px;
        box-shadow: 0 0 10px #ccc;
        padding:20px;
        box-sizing: border-box;
    }
    input{
        width: 190px;
    }
    .el-form-item{
        text-align: center;
        padding-right: 7px;
    }
    h2{
        text-align: center;
        margin-bottom: 20px;
    }
    p{
        text-align: center;
    }
    .el-button{
        width:100%;
    }
    #tip,#number{
        margin-bottom: 10px;
    }
    #tip{
        text-align: left;
        text-align: center;
    }
    span{
        color: red;
    }
</style>


