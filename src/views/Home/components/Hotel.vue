<template>
    <div class="hotel">
        <el-row :gutter="10">
            <el-col
                :md="16"
                :lg="16"
                :xs="24"
            >
                 <img src="@/assets/home/hotelLogo.jpg" alt="">
            </el-col>
            <el-col
                class="tab"
                v-for="(item,index) in list"
                :md="8"
                :lg="8"
                :xs="12"
                :key="index"
            >
                <el-card :body-style="{ padding: '0px'}">
                    <img :src="item.imgurl" class="image">
                    <div style="padding: 14px;">
                        <span>{{item.title}}</span>
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
            list:[{
            imgurl: "@/../static/list1.jpg",
            title: "上海三湘大厦",
    },  {
        imgurl: "@/../static/list2.jpg",
        title: "桔子酒店",
    },{
        imgurl: "@/../static/list4.jpg",
        title: "深圳中南海怡酒店 ",
    },{
        imgurl: "@/../static/list3.jpg",
        title: "正熙国际酒店",
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
      padding-right: 0px;
  }
  .el-col{
      margin-bottom: 10px;
  }
  @media screen and (min-width:500px) {
      .card{
          height: 328px;
      }
      .el-row{
      padding-right: 10px;
  }
  }
  .image{
      height: 200px;
  }
</style>

