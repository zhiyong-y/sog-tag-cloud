<template>
  <svg
    class="tag-cloud"
    :width="options.width"
    :height="options.height"
    @mousemove="listener($event)"
  >
    <a v-for="(tag, index) in allTags" :key="index">
      <text
        :x="tag.x"
        :y="tag.y"
        :font-size="20 * (options.fontSize / (options.fontSize - tag.z))"
        :fill-opacity="(options.opacity + tag.z) / 600"
        :style="{ fill: tag.color }"
      >
        {{ tag.name }}
      </text>
    </a>
  </svg>
</template>
<script>
export default {
  name: "SogTagCloud",
  props: {
    tags: {
      type: Array,
      require: true,
      default: () => [],
    },
    options: {
      type: Object,
      require: false,
      default: () => {
        return {
          width: 600,
          height: 600,
          radius: 200,
          opacity: 300,
          fontSize: 600,
        };
      },
    },
  },
  data() {
    return {
      speedX: Math.PI / 720, //绕x轴旋转的角度
      speedY: Math.PI / 720, //绕y轴旋转的角度
      allTags: [],
    };
  },
  computed: {
    centerX() {
      //球心x坐标
      return this.options.width / 2;
    },
    centerY() {
      //球心y坐标
      return this.options.height / 2;
    },
  },
  mounted() {
    // 默认加载旋转动画
    setInterval(() => {
      this.rotateX(this.speedX);
      this.rotateY(this.speedY);
    }, 17);
  },
  created() {
    // 处理标签数据
    for (let i = 0; i < this.tags.length; i++) {
      let tag = {};
      let k = -1 + (2 * (i + 1) - 1) / this.tags.length;
      let a = Math.acos(k);
      let b = a * Math.sqrt(this.tags.length * Math.PI);
      tag.name = this.tags[i].name;
      tag.color = this.tags[i].tagColor;
      tag.x = this.centerX + this.options.radius * Math.sin(a) * Math.cos(b);
      tag.y = this.centerY + this.options.radius * Math.sin(a) * Math.sin(b);
      tag.z = this.options.radius * Math.cos(a);
      this.allTags.push(tag);
    }
  },
  methods: {
    rotateX(angleX) {
      var cos = Math.cos(angleX);
      var sin = Math.sin(angleX);
      for (let tag of this.allTags) {
        var y1 = (tag.y - this.centerY) * cos - tag.z * sin + this.centerY;
        var z1 = tag.z * cos + (tag.y - this.centerY) * sin;
        tag.y = y1;
        tag.z = z1;
      }
    },
    rotateY(angleY) {
      var cos = Math.cos(angleY);
      var sin = Math.sin(angleY);
      for (let tag of this.allTags) {
        var x1 = (tag.x - this.centerX) * cos - tag.z * sin + this.centerX;
        var z1 = tag.z * cos + (tag.x - this.centerX) * sin;
        tag.x = x1;
        tag.z = z1;
      }
    },
    listener(event) {
      //响应鼠标移动
      var x = event.clientX - this.centerX;
      var y = event.clientY - this.centerY;
      console.log(x, y);

      this.speedX =
        x * 0.0001 > 0
          ? Math.min(this.options.radius * 0.00003, x * 0.0001)
          : Math.max(-this.options.radius * 0.00003, x * 0.0001);
      this.speedY =
        y * 0.0001 > 0
          ? Math.min(this.options.radius * 0.00003, y * 0.0001)
          : Math.max(-this.options.radius * 0.00003, y * 0.0001);
    },
  },
};
</script>

<style scoped>
.tag-cloud {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
