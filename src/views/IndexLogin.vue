<template>
    <el-row :gutter="20" type="flex" justify="center" style="text-align: center;">
        <el-col :span="6" :offset="0"
            style="text-align: center; background-color: rgb(46, 167, 214); border-radius:5px;">

            <el-form label-width="80px" style="text-align: center;">
                <h3>登录账户</h3>
                <el-form-item label="账号：" style="padding-right: 10px;">
                    <el-input v-model="inputusers" placeholder="请输入账号" style=" margin: auto;">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码：" style="padding-right: 10px;">
                    <el-input placeholder="请输入密码" v-model="inputpwd"></el-input>
                </el-form-item>
                <el-button type="primary" @click="loginHandle" style="margin-bottom: 20px;">
                    登录</el-button>
                <el-button>注册</el-button>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import loginApi from '@/apis/login'
import { mapMutations } from 'vuex'

export default {
    name: "IndexLogin",
    data() {
        return {
            inputusers: '17614625112',
            inputpwd: 'sundekai520.',
            routePath: [{
                path: "home",
                name: "主页"
            }, {
                path: "login",
                name: "登录"
            }, {
                path: "register",
                name: "注册"
            }]
        }
    },
    methods: {
        //登录方法，与服务端交互
        ...mapMutations("login", ["setToken"]),
        loginHandle() {
            loginApi.loginHandle(this.inputusers, this.inputpwd)
                .then(({ data }) => {
                    const { success, message, token, username } = data
                    if (!success) this.$message({
                        message,
                        type: "error"
                    })
                    else {
                        this.$message({
                            message,
                            type: "success"
                        })
                        this.loading = true
                        this.setToken({
                            username,
                            token
                        })
                        setTimeout(() => this.$router.push("/main"), 1000)
                    }
                });
        },
    }
}
</script>
