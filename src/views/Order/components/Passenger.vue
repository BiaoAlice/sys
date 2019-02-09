<template>
    <div class="passenger">
        <h3>乘机人</h3>
        <p>选择乘机人</p>
        <el-form label-position="left" label-width="90px" :model="formLabelAlign">
            <el-form-item label="姓名">
                <el-input v-model="formLabelAlign.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="学号">
                <el-input v-model="formLabelAlign.number" disabled></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input v-model="formLabelAlign.tell" placeholder="（选填）用于接收航班信息"></el-input>
            </el-form-item>
        </el-form>
        <p></p>
        <el-form label-position="left" label-width="90px"  v-if="type == 'air'">
            <el-form-item label="意外险">
                <el-select v-model="value1" placeholder="请选择" >
                    <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    @click.native="change(item.price)"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="延迟险">
                <el-select v-model="value2" placeholder="请选择">
                    <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    @click.native="change1(item.price)"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:'passenger',
    props:['type'],
    data () {
        return {
            formLabelAlign: {
                name: '',
                region: '',
                type: '',
            },
            val1:0,
            val2:0,
            value1:"选项2",
             options1: [{
                value: '选项1',
                label: '保险：保额200万 10元/份',
                price: 10
                }, {
                value: '选项2',
                label: '我不需要购买保险',
                price: 0
            }],
            value2:"选项2",
             options2: [{
                value: '选项1',
                label: '¥5/份',
                price: 5
                }, {
                value: '选项2',
                label: '不需要',
                price: 0
            }]
        }
    },
    methods:{
       change(val){
          this.val1 = val;
       },
       change1(val){
          this.val2 = val;
       }
    },
    updated(){
        let val = this.val1 + this.val2;
         this.$store.commit('changePrice',val);
    }
}
</script>

<style scoped>
    .passenger{
        border:1px solid #ccc;
        border-top:3px solid #589ef8;
        padding:10px;
    }
    @media screen and (max-width:500px){
        .passenger{
            margin-bottom: 10px;
        }
    }
    h3{
        color: #888;
        padding-left: 10px;
        margin-bottom: 10px;
    }
    p{
        font-size: 12px;
        padding-bottom: 10px;
        margin:10px 10px;
        border-bottom: 1px solid #ccc;
    }
    .el-form{
        padding:0 30px;
    }
</style>

