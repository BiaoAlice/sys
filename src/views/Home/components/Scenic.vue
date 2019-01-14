<template>
    <div class="scenic">
        <el-row  :gutter="20">
            <el-col
                v-for="item in list"
                :key="item.id"
                :md="6"
                :sm="8"
                :xs="12"
                class="item"
            >
                 <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img :src="item.imgurl" class="image">
                    <div style="padding: 14px;" class="container">
                        <span class="title">{{cityId}}</span>
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
            list:[]
    //         list:[{
    //     address: "北京市丰台区王佐镇青龙湖公园",
    //     cityId: "",
    //     comm_cnt: null,
    //     grade: "AAA",
    //     imgurl: "http://pic5.40017.cn/01/000/8f/2a/rBANC1lCWzmAXuNTAAQAAEtkR4s881_240x135_00.jpg",
    //     price_min: "29",
    //     sid: "18241",
    //     title: "青龙湖公园",
    //     url: "http://www.ly.com/scenery/BookSceneryTicket_18241.html",
    // },  {
    //     address: "北京市房山区韩村河镇",
    //     cityId: "",
    //     comm_cnt: null,
    //     grade: "",
    //     imgurl: "http://pic3.40017.cn/scenery/destination/2015/04/30/09/RAmPSU_240x135_00.jpg",
    //     price_min: "0",
    //     sid: "20655",
    //     title: "北京上方山国家森林公园",
    //     url: "http://www.ly.com/scenery/BookSceneryTicket_20655.html",
    // },{
    //     address: "北京市房山区韩村河镇",
    //     cityId: "",
    //     comm_cnt: null,
    //     grade: "AAA",
    //     imgurl: "http://pic3.40017.cn/scenery/destination/2015/04/30/09/RAmPSU_240x135_00.jpg",
    //     price_min: "0",
    //     sid: "20655",
    //     title: "北京上方山国家森林公园",
    //     url: "http://www.ly.com/scenery/BookSceneryTicket_20655.html",
    // },{
    //     address: "北京市房山区韩村河镇",
    //     cityId: "",
    //     comm_cnt: null,
    //     grade: "",
    //     imgurl: "http://pic3.40017.cn/scenery/destination/2015/04/30/09/RAmPSU_240x135_00.jpg",
    //     price_min: "0",
    //     sid: "20655",
    //     title: "北京上方山国家森林公园",
    //     url: "http://www.ly.com/scenery/BookSceneryTicket_20655.html",
    // }]
        }
    },
    computed:{
        ...mapState(["cityId"])
    },
    created(){
        // console.log(this.cityId);
        //http://apis.haoservice.com/lifeservice/travel/cityList?key=您申请的APPKEY
           // let cityId = this.cityId ? 0 : this.cityId;
            // console.log(this.cityId);
        //   this.http.get(`/jdList/lifeservice/travel/scenery?page=1&cid=${this.cityId}&key=f33fcef5c3574e53908d5c3620fd6d39`)
        //   this.http.get(`/jdList/lifeservice/travel/cityList?key=f33fcef5c3574e53908d5c3620fd6d39`)
                //  .then(res=>{
                //      console.log(res);
                //         this.list = res.data.result.splice(0,8);
                //  })
    }
}
</script>

<style scoped>
    .scenic{
        padding:0 10px;
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

