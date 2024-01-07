<!-- Panel.vue -->

<template>
  <div class="panel">
    <div class="panel-header">
        {{ title}}
      <a :href="url" target="_blank">PDF</a>
      <a :href="paper" target="_blank">文章</a>
    </div>


    <div class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {List} from "@opentiny/vue";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    author:{
      type:List,
      required: true
    },url:{
      type:String,
      required: true
    },paper:{
    type:String,
    required: true
  }

  }
};
</script>

<style scoped>
.panel {

  max-width: 80%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 30px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.panel:hover {
  transform: scale(1.02);
}

.panel-header {
  background-color: #57b8ff;
  color: #fff;
  padding: 10px;
  font-size: 1.2em;
  border-bottom: 1px solid #ddd;
  border-radius: 8px 8px 0 0;
}

.panel-content {
  padding: 20px;
}
a {
  margin-right: 6px;
  font-size: medium;
  color: #FF6347;
  text-decoration: none;
  transition: 0.3s ease;
}
a:hover {
  color: #51a1ee;
  text-decoration: none;
}
a:last-child {
  margin-right: 0;
}
</style>
