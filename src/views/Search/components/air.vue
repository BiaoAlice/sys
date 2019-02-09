<template>
    <div class="list">
        <el-row>
            <el-col
                :span="24"
            >
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="航空公司:">
                            <span>{{ props.row.airLines }}</span>
                        </el-form-item>
                        <el-form-item label="航班准点率:">
                            <span>{{ props.row.flightRate }}</span>
                        </el-form-item>
                        <el-form-item label="航行时间:">
                            <span>{{ props.row.flightTime }}</span>
                        </el-form-item>
                        <el-form-item label="出发机场:">
                            <span>{{ props.row.from }}</span>
                        </el-form-item>
                        <el-form-item label="到达机场:">
                            <span>{{ props.row.to }}</span>
                        </el-form-item>
                        <el-form-item label="票价：">
                            <span class="red">¥{{props.row.price}}</span>
                            <el-button type="text" @click="handleEdit(props.row)">购票</el-button>
                        </el-form-item>
                        </el-form>
                    </template>
                    </el-table-column>
                    <el-table-column
                        label="航班号"
                        prop="flightNo">
                    </el-table-column>
                    <el-table-column
                        label="起飞时间"
                        prop="planTime">
                    </el-table-column>
                    <el-table-column
                        label="到达时间"
                        prop="planArriveTime">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'list',
    props:['airList','day1'],
    data () {
        return {
           
        }
    },
    methods:{
      handleEdit(msg) {
        this.$router.push({
                            path:'order',
                            query:{
                                type:'air',
                                msg,
                                day1:this.day1
                            }
                        })
      },  
    },
    computed:{
        tableData(){
            this.airList.forEach(item => {
                item.price = Math.round(Math.random()*300+300);
            });
            return this.airList;
        }
    }
}
</script>

<style scoped>
 .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .red{
      color:red;
  }
</style>
