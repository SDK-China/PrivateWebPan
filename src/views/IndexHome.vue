<template>
    <!-- Main content -->
    <el-carousel trigger="click" height="500px">
        <el-carousel-item v-for="(id, item) in img" :key="item">
            <h3 class="small"><img :src="id.img" alt="" style="width: 100%;"></h3>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: "IndexHome",
    data() {
        return {
            img: [{ "img": "img/logo.png" }, { "img": "img/logo.png" }, { "img": "img/logo.png" }],
            carouselShow: true
        }
    }
}
</script>
