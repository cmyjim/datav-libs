<template>
  <div id="container" ref="container" >
    <template v-if="ready">
      <slot></slot>
    </template>

  </div>
</template>

<script>
import {ref, onMounted,onUnmounted,nextTick} from 'vue'
import {debounce} from '../../utils/index'
export default {
  name: "jim-container",
  props: {
    options: {
      type: Object
    }
  },
  setup(ctx) {
    const container = ref(null)
    const width = ref(0)
    const height = ref(0)
    const originalWidth = ref(0)
    const originalHeight = ref(0)
    let dom,observer;

    let style = ref({})
  let ready =ref(false)
    const changeStyle = ()=>{
      style.value = {
        ...style,
        height:'1000px'
      }
    }

    const initSize =()=>{
      return new Promise((resolve)=>{
        nextTick(()=>{
          //大屏真实尺寸
          if (ctx.options && ctx.options.width && ctx.options.height) {
            width.value = ctx.options.width
            height.value = ctx.options.height
          }else{
            width.value = dom.clientWidth
            height.value = dom.clientHeight
          }
          //画布尺寸
          if(!originalWidth.value || !originalHeight.value){
            originalWidth.value = window.screen.width
            originalHeight.value = window.screen.height
          }
          resolve()
        })

      })


    }
    //更新尺寸
    const updateSize = ()=>{
      if(width.value && height.value){
        dom.style.width = `${width.value}px`
        dom.style.height = `${height.value}px`
      }else{
        dom.style.width = `${originalWidth.value}px`
        dom.style.height = `${originalHeight.value}px`
      }
    }
    //更新比例
    const updateScale = ()=>{
      //真实区域
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight

      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value

      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight

      dom.style.transform = `scale(${widthScale}, ${heightScale})`
    }
    const resetSize = async ()=>{
      await initSize()
      updateScale()
    }
    //监听样式变化
    const initMutationObserver = () =>{
      const MutationObserver = window.MutationObserver
      observer = new MutationObserver(resetSize)
      observer.observe(dom,{
        attributes:true,
        attributeFilter:['style'],
        attributeOldValue:true
      })
    }
    //移出
    const removeMutationObserver = ()=>{
      observer.disconnect()
      observer.takeRecords()
      observer=null
    }
    onMounted(async () => {
      ready.value=false
      dom = container.value;
      await initSize()
      updateSize()
      updateScale()
      window.addEventListener('resize',debounce(100,resetSize))
      initMutationObserver()
      ready.value=true
    })
    onUnmounted(()=>{
      window.addEventListener('resize',resetSize)
      removeMutationObserver()
    })
    return{
      container,
      ready
    }
  }

}
</script>

<style scoped>
#container{
  position: fixed;
  top: 0;
  left: 0;
  transform-origin: top left;
  z-index: 999;
}
</style>
