<template>

  <home data/>
  <button @click="fetchData('cs.SE')">获取数据</button>
  <div>
    <div v-for="(tuple, index) in tuples" :key="index">

      <panel :title="tuple[1]['标题'] " :url="tuple[1]['PDF链接']" :paper="tuple[1]['链接']" >

        <div v-for="(value, key) in tuple[1]" :key="key">
          <strong>{{ key }}:</strong> {{ value }}
        </div>
      </panel>
    </div>
  </div>
</template>

<script>
import Home from "@/components/myHome";
import Panel from '@/components/myPanel.vue';
import axios from 'axios';  //导入axios

export default {
  name: 'App',
  components: {
    Home,
    Panel
  } ,
  data() {
    return {
      jsonData: {
        "2312.17248v1": {
          "id": "2312.17248v1",
          "url": "http://arxiv.org/abs/2312.17248v1",
          "pdf": "http://arxiv.org/pdf/2312.17248v1",
          "title": "Rethinking Model-based, Policy-based, and Value-based Reinforcement Learning via the Lens of Representation Complexity",
          "abstract": "Reinforcement Learning (RL) encompasses diverse paradigms, including\nmodel-based RL, policy-based RL, and value-based RL, each tailored to\napproximate the model, optimal policy, and optimal value function,\nrespectively. This work investigates the potential hierarchy of representation\ncomplexity -- the complexity of functions to be represented -- among these RL\nparadigms. We first demonstrate that, for a broad class of Markov decision\nprocesses (MDPs), the model can be represented by constant-depth circuits with\npolynomial size or Multi-Layer Perceptrons (MLPs) with constant layers and\npolynomial hidden dimension. However, the representation of the optimal policy\nand optimal value proves to be $\\mathsf{NP}$-complete and unattainable by\nconstant-layer MLPs with polynomial size. This demonstrates a significant\nrepresentation complexity gap between model-based RL and model-free RL, which\nincludes policy-based RL and value-based RL. To further explore the\nrepresentation complexity hierarchy between policy-based RL and value-based RL,\nwe introduce another general class of MDPs where both the model and optimal\npolicy can be represented by constant-depth circuits with polynomial size or\nconstant-layer MLPs with polynomial size. In contrast, representing the optimal\nvalue is $\\mathsf{P}$-complete and intractable via a constant-layer MLP with\npolynomial hidden dimension. This accentuates the intricate representation\ncomplexity associated with value-based RL compared to policy-based RL. In\nsummary, we unveil a potential representation complexity hierarchy within RL --\nrepresenting the model emerges as the easiest task, followed by the optimal\npolicy, while representing the optimal value function presents the most\nintricate challenge.",
          "authors": [
            "Guhao Feng",
            "Han Zhong"
          ],
          "update_time": "2023-12-29 02:59:49",
          "summary": null
        },
        "2312.17248v2": {
          "id": "2312.17248v1",
          "url": "http://arxiv.org/abs/2312.17248v1",
          "pdf": "http://arxiv.org/pdf/2312.17248v1",
          "title": "Rethinking Model-based, Policy-based, and Value-based Reinforcement Learning via the Lens of Representation Complexity",
          "abstract": "Reinforcement Learning (RL) encompasses diverse paradigms, including\nmodel-based RL, policy-based RL, and value-based RL, each tailored to\napproximate the model, optimal policy, and optimal value function,\nrespectively. This work investigates the potential hierarchy of representation\ncomplexity -- the complexity of functions to be represented -- among these RL\nparadigms. We first demonstrate that, for a broad class of Markov decision\nprocesses (MDPs), the model can be represented by constant-depth circuits with\npolynomial size or Multi-Layer Perceptrons (MLPs) with constant layers and\npolynomial hidden dimension. However, the representation of the optimal policy\nand optimal value proves to be $\\mathsf{NP}$-complete and unattainable by\nconstant-layer MLPs with polynomial size. This demonstrates a significant\nrepresentation complexity gap between model-based RL and model-free RL, which\nincludes policy-based RL and value-based RL. To further explore the\nrepresentation complexity hierarchy between policy-based RL and value-based RL,\nwe introduce another general class of MDPs where both the model and optimal\npolicy can be represented by constant-depth circuits with polynomial size or\nconstant-layer MLPs with polynomial size. In contrast, representing the optimal\nvalue is $\\mathsf{P}$-complete and intractable via a constant-layer MLP with\npolynomial hidden dimension. This accentuates the intricate representation\ncomplexity associated with value-based RL compared to policy-based RL. In\nsummary, we unveil a potential representation complexity hierarchy within RL --\nrepresenting the model emerges as the easiest task, followed by the optimal\npolicy, while representing the optimal value function presents the most\nintricate challenge.",
          "authors": [
            "Guhao Feng",
            "Han Zhong"
          ],
          "update_time": "2023-12-29 02:59:49",
          "summary": null
        },
        "2312.17248v22": {
          "id": "2312.17248v1",
          "url": "http://arxiv.org/abs/2312.17248v1",
          "pdf": "http://arxiv.org/pdf/2312.17248v1",
          "title": "Rethinking Model-based, Policy-based, and Value-based Reinforcement Learning via the Lens of Representation Complexity",
          "abstract": "Reinforcement Learning (RL) encompasses diverse paradigms, including\nmodel-based RL, policy-based RL, and value-based RL, each tailored to\napproximate the model, optimal policy, and optimal value function,\nrespectively. This work investigates the potential hierarchy of representation\ncomplexity -- the complexity of functions to be represented -- among these RL\nparadigms. We first demonstrate that, for a broad class of Markov decision\nprocesses (MDPs), the model can be represented by constant-depth circuits with\npolynomial size or Multi-Layer Perceptrons (MLPs) with constant layers and\npolynomial hidden dimension. However, the representation of the optimal policy\nand optimal value proves to be $\\mathsf{NP}$-complete and unattainable by\nconstant-layer MLPs with polynomial size. This demonstrates a significant\nrepresentation complexity gap between model-based RL and model-free RL, which\nincludes policy-based RL and value-based RL. To further explore the\nrepresentation complexity hierarchy between policy-based RL and value-based RL,\nwe introduce another general class of MDPs where both the model and optimal\npolicy can be represented by constant-depth circuits with polynomial size or\nconstant-layer MLPs with polynomial size. In contrast, representing the optimal\nvalue is $\\mathsf{P}$-complete and intractable via a constant-layer MLP with\npolynomial hidden dimension. This accentuates the intricate representation\ncomplexity associated with value-based RL compared to policy-based RL. In\nsummary, we unveil a potential representation complexity hierarchy within RL --\nrepresenting the model emerges as the easiest task, followed by the optimal\npolicy, while representing the optimal value function presents the most\nintricate challenge.",
          "authors": [
            "Guhao Feng",
            "Han Zhong"
          ],
          "update_time": "2023-12-29 02:59:49",
          "summary": null
        },
        "2312.17248v23": {
          "id": "2312.17248v1",
          "url": "http://arxiv.org/abs/2312.17248v1",
          "pdf": "http://arxiv.org/pdf/2312.17248v1",
          "title": "Rethinking Model-based, Policy-based, and Value-based Reinforcement Learning via the Lens of Representation Complexity",
          "abstract": "Reinforcement Learning (RL) encompasses diverse paradigms, including\nmodel-based RL, policy-based RL, and value-based RL, each tailored to\napproximate the model, optimal policy, and optimal value function,\nrespectively. This work investigates the potential hierarchy of representation\ncomplexity -- the complexity of functions to be represented -- among these RL\nparadigms. We first demonstrate that, for a broad class of Markov decision\nprocesses (MDPs), the model can be represented by constant-depth circuits with\npolynomial size or Multi-Layer Perceptrons (MLPs) with constant layers and\npolynomial hidden dimension. However, the representation of the optimal policy\nand optimal value proves to be $\\mathsf{NP}$-complete and unattainable by\nconstant-layer MLPs with polynomial size. This demonstrates a significant\nrepresentation complexity gap between model-based RL and model-free RL, which\nincludes policy-based RL and value-based RL. To further explore the\nrepresentation complexity hierarchy between policy-based RL and value-based RL,\nwe introduce another general class of MDPs where both the model and optimal\npolicy can be represented by constant-depth circuits with polynomial size or\nconstant-layer MLPs with polynomial size. In contrast, representing the optimal\nvalue is $\\mathsf{P}$-complete and intractable via a constant-layer MLP with\npolynomial hidden dimension. This accentuates the intricate representation\ncomplexity associated with value-based RL compared to policy-based RL. In\nsummary, we unveil a potential representation complexity hierarchy within RL --\nrepresenting the model emerges as the easiest task, followed by the optimal\npolicy, while representing the optimal value function presents the most\nintricate challenge.",
          "authors": [
            "Guhao Feng",
            "Han Zhong"
          ],
          "update_time": "2023-12-29 02:59:49",
          "summary": null
        }
      }
    };
  },
  computed: {
    tuples() {
      // Convert JSON data to array of tuples
      return Object.entries(replaceKeywordsWithChinese(this.jsonData));
    }
},methods:{
    //使用： <button @click="fetchData('url')">获取数据</button>、</div>
    async fetchData(apiUrl) {
      try {
        // 发送GET请求获取数据
        let response = await axios.get(`http://127.0.0.1:8000/${apiUrl}`);
        // 将获取到的数据赋值给dataset
        // eslint-disable-next-line no-unused-vars
        this.jsonData = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

}

}


function replaceKeywordsWithChinese(jsonData) {
  const replacedData = {};

  for (const key in jsonData) {

      const item = jsonData[key];
      const replacedItem = {
        "编号": item.id,
        "链接": item.url,
        "PDF链接": item.pdf,
        "标题": item.title,
        "摘要": item.abstract,
        "作者": item.authors,
        "更新时间": item.update_time,
        "概述": item.summary
      };

      replacedData[key] = replacedItem;

  }

  return replacedData;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0;
}
</style>
