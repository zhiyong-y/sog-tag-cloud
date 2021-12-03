# sog-tag-cloud

## Setup
```
npm i sog-tag-cloud

import SogTagCloud from 'sog-tag-cloud';

Vue.use(SogTagCloud)
```

### Usage

| 参数名  | 描述     |
| ------- | -------- |
| tags    | 标签数组 |
| options | 配置项   |


| Options  | 默认值 | 描述                                       |
| -------- | ----- | ------------------------------------------ |
| width    | 600 | 标签云宽度：100                            |
| height   | 600 | 标签云高度：100                            |
| radius   | 200 | 标签云半径：200                            |
| opacity  | 300 | 标签透明度：300 注:数值越小透明度越高      |
| fontSize | 600 | 标签大小：600 注:数值越大字体越小[300-600] |

### The instance
```
<template>
  <div id="app">
    <SogTagCloud :tags="tags" :options="options" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tags: [
        { name: "民族舞" },
        { name: "书法" },
        { name: "象棋" },
        { name: "围棋" },
        { name: "太极" },
      ],
      options: {
        width: 600,
        height: 600,
        radius: 200, // 球体半径
        opacity: 300, // 数值越小透明度越高
        fontSize: 600, // 数值越大字体越小[300-600]
      },
    };
  },
};
</script>
```

### GitHub
See [Code](https://github.com/zhiyong-y/sog-tag-cloud.git).
