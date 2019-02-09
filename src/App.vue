<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <router-view/>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  *{
    margin:0;
    padding:0;
 }
  html,body{  
      height: 100%;  
      width: 100%;  
  }  
 #app{
   width: 100%;
   height:100%;
 }
 .el-form-item__label{
        text-align: center;
    }
  @media screen and (max-width:500px){
    .el-carousel__container{
        height: 80px;
    }
}
.el-tabs__header{
  padding-left: 12px;
}
.el-tabs__item{
  padding: 0px;
  padding-right: 10px;
}
@media screen and (max-width:500px){
    .el-loading-spinner{
      position: relative;
      /* top:-20px; */
      top:160px;
    }
    .vcp-panel{
      width: 280px !important;
      left: -50px !important;
    }
}
@media screen and (min-width: 501px) {
    .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);
  }
  
  .el-table thead{
    color: black;
  }

  .red .el-breadcrumb__inner{
        color: red !important;
    }
 
</style>
