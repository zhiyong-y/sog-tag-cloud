// 导入组件，组件必须声明 name
import SogTagCloud from "./src/main";

// 为组件添加 install 方法，用于按需引入
SogTagCloud.install = function (Vue) {
  Vue.component(SogTagCloud.name, SogTagCloud);
};

export default SogTagCloud;
