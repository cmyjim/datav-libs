<template>
  <div class="fly-box" ref="flyBox">
    <svg :width="width" :height="height">
      <defs>
        <path
            :id="pathId"
            :d="path"
            fill="none"
        >

        </path>
        <radialGradient
            :id="radialGradientId"
            cx="50%"
            cy="50%"
            fx="100%"
            fy="50%"
            r="50%"
        >
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <mask :id="maskId">
          <circle :r="flyLength" cx="0" cy="0" :fill="`url(#${radialGradientId})`">
            <animateMotion
                :dur="`${duration}s`"
                :path="path"
                rotate="auto"
                repeatCount="indefinite"
            ></animateMotion>
          </circle>
        </mask>
      </defs>
      <use
          :href="`#${pathId}`"
          stroke-width="1"
          :stroke="lineColor"
      >
      </use>
      <use
          :href="`#${pathId}`"
          stroke-width="3"
          :stroke="flyColor"
          :mask="`url(#${maskId})`"
      >
      </use>


    </svg>
    <div class="fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import {v4 as uuidv4} from 'uuid'

export default {
  name: "FlyBox",
  props: {
    lineColor: {
      type: String,
      default: '#2789f3'
    },
    flyColor: {
      type: String,
      default: 'red'
    },
    flyLength: {
      type: Number,
      default: 80
    },
    duration: {
      type: [Number, String],
      default: 3
    }
  },
  setup(ctx) {
    const uuid = uuidv4()
    const width = ref(0)
    const height = ref(0)
    const flyBox = ref(null)
    const pathId = `fly-box-path-${uuid}`
    const radialGradientId = `radialGradient-${uuid}`
    const maskId = `fly-box-mask-${uuid}`
    const path = computed(() =>
        `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`
    )
    const init = () => {
      const dom = flyBox.value;
      width.value = dom.clientWidth
      height.value = dom.clientHeight
    }
    onMounted(() => {
      init()
    })
    return {
      width,
      height,
      flyBox,
      path,
      pathId,
      radialGradientId,
      maskId
    }
  }
}
</script>

<style lang="scss" scoped>
.fly-box {
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .fly-box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
  }
}
</style>
