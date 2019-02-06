<template>
    <div class="list">
        <el-row>
            <el-col
                :span="24"
            >
                <el-table
                :data="tableData"
                >
                <el-table-column
                    prop="stationTrainCode"
                    label="车次"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    prop="startTime"
                    label="出发时间"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    prop="lishi"
                    label="历时"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    prop="arriveTime"
                    label="到达时间"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    prop="pricewz"
                    label="最低票价"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    align="center">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="success"
                        @click="handleEdit(scope.$index, scope.row)">购票</el-button>
                    </template>
                </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'list',
    props:['trainList'],
    data () {
        return {
             
        }
    },
    methods:{
      handleEdit(index, row) {
        console.log(index, row);
      },  
    },
    computed:{
        tableData(){
            return this.trainList;
        }
    }
}
</script>

<style scoped>

</style>
