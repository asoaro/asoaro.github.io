<template>
  <div class="circle-container">
    <div class="circle-wrap">
      <!-- 最外层 -->
      <div class="outerCircle" ref="outerCircle">&lt;html&gt;&lt;head&gt;&lt;body&gt;&lt;title&gt;&lt;meta&gt;&lt;link&gt;&lt;style&gt;&lt;script&gt;</div>

      <!-- 中间层 -->
      <div class="middle">
        <div class="middleCircle" ref="middleCircle">css-less-scss-sass-stylus</div>
      </div>

      <!-- 最内层 -->
      <div class="inner">
        <div class="innerCircle" ref="innerCircle">var-let-const</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue'
onMounted(() => {
  circleSplit()
})
const { proxy } = getCurrentInstance()
// 定义环形文字环绕函数
const circleSplit = () => {
  // 调用环形文字处理函数，参数1:dom引用，参数2：文字环绕圆弧角度
  getCircleSpan(proxy.$refs.outerCircle, 360)
  getCircleSpan(proxy.$refs.middleCircle, 180)
  getCircleSpan(proxy.$refs.innerCircle, 100)
}

// 定义处理环形文字字符函数
const getCircleSpan = (refer, deg) => {
  // 拆分环形字符为字符串数组
  const strArr = refer.innerText.split('')
  // 遍历数组并返回一个span元素数组，字符环绕deg度
  const spanArr = strArr.map((item, index) => {
    return `<span style="transform:rotate(${index * (deg / strArr.length)}deg)">${item}</span>`
  })
  // 合并span字符串数组并赋值回环形文字
  refer.innerHTML = spanArr.join('')
}
</script>

<style lang="scss">
.circle-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 280px;
}
// 环形文字
.circle-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 100%;
  // border-radius: 50%;
  // background-color: #fff;
  // color: #031214;
  color:#2cb2c2;

  // 环形文字公共样式
  .outerCircle,
  .middleCircle,
  .innerCircle {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 20px;
    font-family: 'Roboto';
    user-select: none;
    border-radius: 50%;
    animation: outerSpin 20s linear infinite;
  }

  // 环形span公共样式
  span {
    position: absolute; // 因为整圈都有span，所有四个方位都要设置
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 100%;
  }

  // 中间，内层环形盒子公共样式
  .middle,
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
  }

  // 中间层环形私有样式
  .middleCircle {
    font-size: 20px;
    animation: middleSpin 18s linear infinite;
  }

  // 内层环形盒子私有样式
  .inner {
    width: 60%;
    height: 60%;
  }
  // 内层环形私有样式
  .innerCircle {
    font-size: 18px;
    animation: innerSpin 12s linear infinite;
  }
  // 定义最外层环形动画
  @keyframes outerSpin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  // 定义中间层环形动画
  @keyframes middleSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  // 定义中间层环形动画
  @keyframes innerSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
