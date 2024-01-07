<template>
  <div class="footer">
    Powered by <tiny-link href = "https://tongyi.aliyun.com/qianwen/" type="primary" target="_blank">通义千问</tiny-link>.
  </div>
</template>

<script setup lang="jsx">
import { Link as TinyLink } from '@opentiny/vue'
</script>


<style>
  .footer {
    text-align: center;
    color: #bbb;
    font-size: 15px;
    padding-bottom: 5px;
  }
</style>