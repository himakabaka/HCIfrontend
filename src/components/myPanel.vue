<!-- Panel.vue -->

<template>
  <div class="panel">
    <div class="panel-header">
        {{ title}}
      <a href= "{{ url }}" target="_blank">PDF</a>
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
    }

  }
};
</script>

<style scoped>
.panel {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.panel:hover {
  transform: scale(1.02);
}

.panel-header {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  font-size: 1.2em;
  border-bottom: 1px solid #ddd;
  border-radius: 8px 8px 0 0;
}

.panel-content {
  padding: 20px;
}
</style>
