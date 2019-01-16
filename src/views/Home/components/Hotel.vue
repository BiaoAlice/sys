<template>
    <div class="hotel">
        <el-row :gutter="10">
            <el-col
                :md="16"
                :lg="16"
                :xs="24"
            >
                 <el-card :body-style="{ padding: '0px' }" class="card" >
                    <img :src="arr.imgurl" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <time class="time">111</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col
                class="tab"
                v-for="(item,index) in list"
                :md="8"
                :lg="8"
                :xs="12"
                :key="index"
            >
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="item.imgurl" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <time class="time">111</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'Hotel',
    data () {
        return{
            arr:{
        address: "北京市丰台区王佐镇青龙湖公园",
        cityId: "",
        comm_cnt: null,
        grade: "AAA",
        imgurl: "http://pic5.40017.cn/01/000/8f/2a/rBANC1lCWzmAXuNTAAQAAEtkR4s881_240x135_00.jpg",
        price_min: "29",
        sid: "18241",
        title: "青龙湖公园",
        url: "http://www.ly.com/scenery/BookSceneryTicket_18241.html",
    },
            list:[{
        address: "北京市丰台区王佐镇青龙湖公园",
        cityId: "",
        comm_cnt: null,
        grade: "AAA",
        imgurl: "http://pic5.40017.cn/01/000/8f/2a/rBANC1lCWzmAXuNTAAQAAEtkR4s881_240x135_00.jpg",
        price_min: "29",
        sid: "18241",
        title: "青龙湖公园",
        url: "http://www.ly.com/scenery/BookSceneryTicket_18241.html",
    },  {
        address: "北京市房山区韩村河镇",
        cityId: "",
        comm_cnt: null,
        grade: "",
        imgurl: "http://pic3.40017.cn/scenery/destination/2015/04/30/09/RAmPSU_240x135_00.jpg",
        price_min: "0",
        sid: "20655",
        title: "北京上方山国家森林公园",
        url: "http://www.ly.com/scenery/BookSceneryTicket_20655.html",
    },{
        address: "北京市房山区韩村河镇",
        cityId: "",
        comm_cnt: null,
        grade: "AAA",
        imgurl: "http://pic3.40017.cn/scenery/destination/2015/04/30/09/RAmPSU_240x135_00.jpg",
        price_min: "0",
        sid: "20655",
        title: "北京上方山国家森林公园",
        url: "http://www.ly.com/scenery/BookSceneryTicket_20655.html",
    },{
        address: "北京市房山区韩村河镇",
        cityId: "",
        comm_cnt: null,
        grade: "",
        imgurl: "http://pic3.40017.cn/scenery/destination/2015/04/30/09/RAmPSU_240x135_00.jpg",
        price_min: "0",
        sid: "20655",
        title: "北京上方山国家森林公园",
        url: "http://www.ly.com/scenery/BookSceneryTicket_20655.html",
    }]
        }
    },
    created () {
        // http://apis.haoservice.com/lifeservice/travel/HotelList?cityid=37&page=1&key=您申请的APPKEY
        // this.http.get('/jdList/lifeservice/travel/HotelList?cityid=37&page=1&key=f33fcef5c3574e53908d5c3620fd6d39')
        //          .then(res=>{
        //              console.log(res);
                     
        //          })
    }
}
</script>

<style scoped>
    img{
        height: auto;
        width: 100%;
    }
    .tab{
        text-align: center;
    }
    .time {
    font-size: 13px;
    color: #999;
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
  .el-row{
      padding-right: 10px;
  }
  .el-col{
      margin-bottom: 10px;
  }
  @media screen and (min-width:500px) {
      .card{
          height: 328px;
      }
  }
</style>

