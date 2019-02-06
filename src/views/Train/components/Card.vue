<template>
    <div class="card">
        <el-row :gutter="20">
            <el-col :lg="6" :xs="12" :md="6" v-for="(o, index) in 4" :key="index">
                <el-card shadow="hover">
                <img src="@/assets/train/card1.jpg" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                    <!-- <time class="time">{{ currentDate }}</time> -->
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
    name:'Card'
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
