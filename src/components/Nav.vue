<template>
    <div class="nav">
        <el-row>
            <el-col class="navBar">
                <h1>
                    <img src="../assets/home/logo.jpg" alt="">
                </h1>
                <ul class="show">
                    <li>
                        票务系统
                    </li>
                </ul>
                <ul class="hidden">
                    <router-link
                        v-for="(item,index) in nav"
                        :key="index"
                        :to="item.link"
                        tag="li"
                    >
                    {{item.name}}
                    </router-link>
                </ul>
                <ul class="right hidden">
                    <li>
                          <el-dropdown>
                        <span class="el-dropdown-link">
                            {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><router-link to="/mine">个人中心</router-link></el-dropdown-item>
                            <el-dropdown-item divided @click.native="exit">注销</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                </ul>
                <ul class="right show">
                    <li>
                        <el-dropdown  trigger="click">
                           
                                <i class="el-icon-caret-bottom el-icon--right"></i>
                        
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item,index) in nav" :key="index">
                                    <router-link :to="item.link">{{item.name}}</router-link>
                                </el-dropdown-item>
                                <el-dropdown-item><router-link to="/mine">个人中心</router-link></el-dropdown-item>
                                <el-dropdown-item divided @click.native="exit">注销</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Nav',
    data () {
        return{
            nav:[
                {
                    name:'首页',
                    link:'/home'
                },
                {
                    name:'飞机票',
                    link:'/airplane'
                },
                {
                    name:'火车票',
                    link:'/train'
                },
            ]
        }
    },
    methods:{
        exit(){
            localStorage.removeItem('userName');
            this.$router.push('/');
        }
    },
    computed:{
        ...mapState(['userName'])
    }
}
</script>
<style scoped >
    .router-link-active{
        color: red;
    }
    h1{
        float: left;
    }
    img{
        width:60px;
        height:60px;
    }
    .navBar{
        box-sizing: border-box;
        padding:10px 15px 0px;
        border-bottom: 1px solid #ccc;
        line-height: 40px;
    }
    ul{
        float: left;
        list-style: none;
        display:flex;
        align-items: center;
    }
    li{
        width:100px;
        text-align: center;
    }
    .right{
        float: right;
    }
    .hidden{
        margin-top: 10px;
    }
    @media screen and (max-width:500px) {
        .hidden{
            display: none;
        }
        .show{
            display: block;
        }
    }
    @media screen and (min-width:500px) {
        .show{
            display: none;
        }
    }
    .show > li{
        margin-top:10px;
        text-align: right;
    }
    .el-dropdown-menu{
        display: block;
    }
    .el-dropdown{
        min-width:50px;
    }
    li{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
</style>

