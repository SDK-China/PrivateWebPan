<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item><a href=""><img src="@/assets/logo.png" alt="logo"></a>
        </el-menu-item>

        <el-button type="primary" style="float:right; margin-top: 10px; margin-left: 10px;" @click="register">注销登录
        </el-button>
        <el-popover placement="right" width="400" trigger="click"
          style="float:right; margin-top: 10px; margin-left: 10px;">
          <el-upload class="upload-demo" ref="upload" name="" :file-list="fileList" :auto-upload="false"
            :on-remove="handleRemove" :on-preview="handlePreview" :on-success="handleUploadSuccess" drag
            action="http://localhost:8080/api-dev/v1/upload" multiple="true">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">上传文件不能超过4GB</div>
            <div class="el-upload__tip" slot="tip"><el-button @click="submitUpload" type="primary"
                slot="reference">确认上传</el-button></div>
          </el-upload>
          <el-button type="primary" slot="reference">上传文件</el-button>
        </el-popover>
        <el-button type="primary" style="float:right; margin-top: 10px;" @click="register">创建文件夹</el-button>
        <el-menu-item style="float:right" @click="indexShow">欢迎您：{{ $store.state.login.username }}</el-menu-item>

        <template>
          <el-select style="float:right; margin-top: 10px;" v-model="value" multiple filterable remote reserve-keyword
            placeholder="请输入关键词进行搜索" :remote-method="remoteMethod" :loading="loading">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-menu>
    </el-header>


    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

      </el-aside>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="name" label="文件名" width="140">
          </el-table-column>
          <el-table-column prop="date" label="修改时间" width="120">
          </el-table-column>
          <el-table-column prop="address" label="大小">
          </el-table-column>
          <el-table-column prop="download" label="操作">
            <template slot-scope="prop">
              <el-button type="primary" @click="del(prop.$index)">下载</el-button>
              <el-button type="primary" @click="del(prop.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import axios from "@/utils/http"

export default {
  name: 'HomeView',
  data() {
    const item = {
      date: '2016-05-02',
      name: '学习资料',
      address: '20GB'

    };

    return {
      tableData: Array(20).fill(item),
      options: [],
      value: [],
      list: [],
      loading: true,
      states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"],
      data: [],
      fileList: []
    };
  },

  methods: {
    del(index) {
      this.tableData.splice(index, 1)
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },

    handleUploadSuccess(res, file) {
      this.imageObjectUrl = URL.createObjectURL(file.raw);
      this.imageOnlineUrl = res.path;
    },
    submitUpload() {
      this.$refs.upload.submit();
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }

  },
  mounted() {
    console.log(this.$store.state.username)
    // this.list = this.states.map(item => {
    //     return { value: `value:${item}`, label: `label:${item}` };
    // },
    axios.post("/api-dev/v1/post_data")
      .then(({ data }) => this.data = data)
      .then(({ password }) => console.log(password))
    // result

    // )
    // Promise

    // resolve(result)
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
