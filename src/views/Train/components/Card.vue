<template>
    <div class="card">
        <el-row :gutter="20">
            <el-col :lg="6" :xs="12" :md="6" v-for="(item,index) in list" :key="index">
                <el-card shadow="hover">
                <img :src="item.url" class="image">
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
    name:'Card',
    data (){
        return{
            list:[
                {
                    url:'@/../static/trainlist1.jpg',
                    title:"‘环西部火车游’精品旅游路线"
                },
                {
                    url:'@/../static/trainlist2.jpg',
                    title:"‘环西部火车游’甘南3日游"
                },
                {
                    url:'@/../static/trainlist3.jpg',
                    title:"‘西部火车游’西海湖2日游"
                },
                {
                    url:'@/../static/trainlist4.jpg',
                    title:"‘西部火车游‘嘉敦5日游"
                }
            ]
        }
    }
}
</script>

<style scoped>
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
  .el-card{
      margin-bottom: 5px;
  }
</style>
