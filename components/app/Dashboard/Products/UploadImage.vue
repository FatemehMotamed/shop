<template>

  <div>
<!--    {{ product_id}}-->
    <el-upload
      :action="'http://localhost:8000/api/product/image/upload?product_id='+parseInt(this.product_id)"
      list-type="picture-card"
      :on-success="handleSuccess"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      name="file[]"
      :file-list="fileList">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    {{file}}
    {{dialogImageUrl}}

  </div>
</template>

<script>
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);

  export default {
    props:{
     product_id:{
                type: String,
                required: true,
            },
    },
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        file: '',
        fileList: [],


      }
    },
    methods: {
      handleSuccess(response, file, fileList) {
        console.log('---------------------');
        console.log(response);
        console.log('---------------------');
        // var self = this;
        // self.step_5.comment = '';
        // self.fileList = [];
        // self.files.push(response[0][0]);
        // console.log(self.files);
        // self.getImg();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    },

  }
</script>

<style scoped>

  hr{
    color: dimgrey;
    margin-top: 4vw;
  }

</style>
