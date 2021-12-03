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
        { name: "民族舞" },
        { name: "民族舞" },
        { name: "民族舞" },
        { name: "民族舞" },
        { name: "书法" },
        { name: "象棋" },
        { name: "围棋" },
        { name: "围棋" },
        { name: "围棋" },
        { name: "围棋" },
        { name: "围棋" },
        { name: "太极" },
        { name: "太极" },
        { name: "太极" },
        { name: "太极" },
        { name: "太极" },
        { name: "太极" },
        { name: "太极" },
        { name: "太极" },
        { name: "太极" },
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

<style>
#app {
  width: 800px;
  height: 800px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
