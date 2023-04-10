<template>
    <el-row :gutter="20" type="flex" justify="center" style="text-align: center;">
        <el-col :span="6" :offset="0"
            style="text-align: center; background-color: rgb(46, 167, 214); border-radius:5px;">

            <el-form label-width="80px" style="text-align: center;">
                <h3>注册账户</h3>
                <el-form-item label="账号：" style="padding-right: 10px; padding-left: 2px;">
                    <el-input placeholder="请输入账号" v-model="inputuser" style=" margin: auto;"></el-input>
                </el-form-item>
                <el-form-item label="密码：" style="padding-right: 10px; padding-left: 2px;">
                    <el-input placeholder="请输入密码" v-model="inputpwd"></el-input>
                </el-form-item>
                <el-form-item label-width="82px" label="确认密码：" style="padding-right: 10px;">
                    <el-input placeholder="请确认密码" v-model="inputpwd2"></el-input>
                </el-form-item>

                <el-button @click="registerHandle" style="margin-bottom: 20px;">注册账号</el-button>
            </el-form>
        </el-col>

    </el-row>
</template>

<script>
import loginApi from '@/apis/login'
export default {


    name: "IndexRegister",
    data() {
        return {
            inputuser: '17614625112',
            inputpwd: 'sundekai520.',
            inputpwd2: 'sundekai520.'
        }
    },
    methods: {
        //注册方法，与服务端交互
        registerHandle() {
            // console.log(123123)
            loginApi.registerHandle(this.inputuser, this.inputpwd, this.inputpwd2)
                .then(({ data }) => {
                    const { success, message } = data //解构参数
                    if (!success) {
                        this.$message.error(message)
                    } else {
                        this.$message({ message, type: 'success' })
                        this.$router.push('/index/login')
                    }

                })
        }
    },
}
</script>
