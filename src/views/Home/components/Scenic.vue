<template>
    <div class="scenic" 
         v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(200, 200, 200, 0.8)"
    >
        <el-row  :gutter="20">
            <el-col
                v-for="item in list"
                :key="item.id"
                :md="6"
                :sm="8"
                :xs="12"
                class="item"
                @click.native="to(item.url)"
            >
                 <el-card :body-style="{ padding: '0px' }" shadow="hover" >
                    <img :src="item.imgurl" class="image">
                    <div style="padding: 14px;" class="container">
                        <span class="title">{{item.title}}</span>
                        <span>({{item.grade ? item.grade : 'A'}})</span>
                        <div class="bottom clearfix">
                            <span class="time">{{item.price_min != 0 ? '¥ '+item.price_min : '免费'}}</span>
                            <span class="pingjia">满意度 {{parseInt(Math.random()*5)+95}}%</span>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'scenic',
    data () {
        return{
            loading:true,
            list:[]
        }
    },
    methods:{
        to(url){
            console.log(url);
            window.open(url);
        }
    },
    computed:{
        ...mapState(["cityId"])
    },
    created(){
           let cityId = this.cityId ? 0 : this.cityId;
          this.http.get(`/jdList/lifeservice/travel/scenery?page=1&cid=${this.cityId}&key=f33fcef5c3574e53908d5c3620fd6d39`)
                 .then(res=>{
                        this.list = res.data.result.splice(0,8);
                        this.loading = false;
                 })
                
                
    }
}
</script>

<style scoped>
    .scenic{
        padding:0 10px;
    }
    @media screen and (min-width:501px) {
        .scenic{
            min-height: 565px;
        }
    }
    @media screen and (max-width:500px) {
        .scenic{
            min-height: 820px;
        }
    }
    .container{
      white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    img{
        height: auto;
        width: 100%;
    }
    .item{
        margin-bottom: 10px;
    }
    .time {
        font-size: 20px;
        color:red;
    }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .pingjia{
      float: right;
      color: #999;
      font-size: 13px;
  }
</style>

