<template>
  <div class="j-loading">
    <svg :width="width" :height="height" viewBox="0 0 50 50">
      <circle
          cx="25"
          cy="25"
          r="21"
          stroke-width="3"
          fill="none"
          :stroke="outsideColor"
          stroke-dasharray="34"
          stroke-linecap="round"
      >
        <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 25 25;360 25 25"

            :dur="`${duration}s`"
            repeatCount="indefinite"
        >

        </animateTransform>
        <animate
            attributeName="stroke"
            :values="outside"
            :dur="`${duration*2}s`"
            repeatCount="indefinite"
        >

        </animate>
      </circle>
      <circle
          cx="25"
          cy="25"
          r="12"
          stroke-width="3"
          fill="none"
          :stroke="insideColor"
          stroke-dasharray="19"
          stroke-linecap="round"
      >
        <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 25 25;-360 25 25"
            :dur="`${duration}s`"
            repeatCount="indefinite"
        >
        </animateTransform>
        <animate
            attributeName="stroke"
            :values="inside"
            :dur="`${duration*2}s`"
            repeatCount="indefinite"
        >
        </animate>
      </circle>
    </svg>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue'
export default {
  name: "Loading",
  props:{
    width:{
      type:Number,
      default:50
    },
    height:{
      type:Number,
      default:50
    },
    outsideColor:{
      type:String,
      default:'#3be6cb'
    },
    insideColor:{
      type:String,
      default:'#02bcfe'
    },
    duration:{
      type:[Number,String],
      default:2
    }

  },
  setup(ctx){
    const  outside = computed(()=>{
      return `${ctx.outsideColor};${ctx.insideColor};${ctx.outsideColor}`
    })
    const  inside = computed(()=>{
      return `${ctx.insideColor};${ctx.outsideColor};${ctx.insideColor}`
    })
    return{
      outside,
      inside
    }
  }
}
</script>

<style scoped>

</style>
