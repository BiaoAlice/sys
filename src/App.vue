<template>
  <div id="app">
    <router-view/>
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
</style>
