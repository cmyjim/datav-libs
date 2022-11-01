<template>
  div
  <div class="container">
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="matrix(2 1 -1 2 50 0) "></rect>
    </svg>
  </div>
  <div class="container">
    <svg width="400" height="400" viewBox="0 0 400 400">
      <circle cx="200" cy="200" r="180" stroke-width="20" stroke="#d1d3d7" fill="none"></circle>
      <circle class="circle" cx="200" cy="200" r="180" stroke-width="20" stroke="#2789f3" fill="none"
              transform="matrix(0 -1 1 0 0 400)"
      ></circle>
    </svg>
  </div>
    <div class="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="200" height="200" stroke-width="8" stroke="#d1d3d7" fill="none"></rect>
        <rect class="rect" x="0" y="0" width="200" height="200" stroke-width="8" stroke="#2789f3" fill="none"
              transform="matrix(0 1 -1 0 200 0)"
        ></rect>
      </svg>
    </div>
  <div class="container">
    <svg  viewBox="0 0 1024 1024" width="200" height="200">
      <path class="logo" d="M885.333333 96c23.786667 0 39.253333 25.034667 28.618667 46.314667a7024.8 7024.8 0 0 0-56.917333 116.234666A424.853333 424.853333 0 0 1 938.666667 509.589333c0 235.637333-191.029333 426.666667-426.666667 426.666667s-426.666667-191.029333-426.666667-426.666667c0-235.648 191.029333-426.666667 426.666667-426.666666a424.938667 424.938667 0 0 1 196.544 47.872C762.453333 107.573333 821.482667 96 885.333333 96z m-164.234666 99.381333a32 32 0 0 1-29.696-1.066666A360.821333 360.821333 0 0 0 512 146.933333c-200.298667 0-362.666667 162.368-362.666667 362.666667 0 200.288 162.368 362.666667 362.666667 362.666667s362.666667-162.378667 362.666667-362.666667a360.96 360.96 0 0 0-79.850667-227.061333 32 32 0 0 1-4-33.706667 5870.922667 5870.922667 0 0 1 41.322667-85.589333c-39.786667 4.970667-76.768 15.701333-111.04 32.149333zM330.666667 362.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v64a42.666667 42.666667 0 1 1-85.333333 0v-64a42.666667 42.666667 0 0 1 42.666667-42.666666z m170.666666 0a42.666667 42.666667 0 0 1 42.666667 42.666666v64a42.666667 42.666667 0 1 1-85.333333 0v-64a42.666667 42.666667 0 0 1 42.666666-42.666666z" p-id="2182"></path></svg>
  </div>
  <div class="container">
    <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="100" height="50">
          <set attributeName="x" attributeType="XML" to="10" begin="1s"></set>
          <set attributeName="x" attributeType="XML" to="20" begin="2s"></set>
          <set attributeName="fill" attributeType="XML" to=green begin="3s"></set>
        </rect>
    </svg>
  </div>
  <div class="container">
    <svg width="200" height="200">
     <circle r="30" cx="30" cy="30" fill="red" >
       <animate attributeName="cx" attributeType="XML" from="0" to="100" dur="1s" repeatCount="1" fill="freeze"></animate>
       <animate attributeName="cy" attributeType="XML" from="0" to="50" dur="1s" repeatCount="1" fill="freeze"></animate>
      <animateTransform attributeName="transform" attributeType="XML" begin="0" dur="3s" type="scale" from="1" to="2" repeatCount="1" fill="freeze"></animateTransform>
     </circle>
    </svg>
  </div>
  <div class="container">
    <svg width="200" height="200">
      <rect width="10" height="10" fill="red" >
        <animateMotion
          path="M10 10 L110 10 L110 110 L10 110 Z"
          dur="5s"
          rotate="0"
          fill="freeze"
        >
        </animateMotion>
         </rect>
    </svg>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: "SvgAnimation",
setup(){
  onMounted(()=>{
    const logo = document.getElementsByClassName('logo')[0]
    console.log(logo.getTotalLength())
  })
}

}
</script>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid black;
  }

  .circle {
    animation: circle 5s linear infinite;
  }
}

@keyframes circle {
  from {
    stroke-dasharray: 0 1131;
  }
  to {
    stroke-dasharray: 1131 0;
  }
}

.rect {
  //stroke-dasharray: 10 20 30;
  animation: rect 5s linear infinite;
}

@keyframes rect {
  from {
    stroke-dasharray: 0 800;
  }
  to {
    stroke-dasharray: 800 0;
  }
}
.logo{
  fill: none;
  stroke: green;
  stroke-width: 10;
  animation: logo 2s linear 1 forwards;
}
@keyframes logo {
  0% {
    fill: white;
    stroke: #333;
    stroke-dasharray: 6072;
    stroke-dashoffset: 6072;
  }
  50%{
    fill: white;
    stroke: #333;
    stroke-dasharray: 6072;
    stroke-dashoffset: 0;
  }
  50%{
    fill: none;
    stroke: #333;
  }
  75%{
    fill: red;
    stroke: white;
  }
  100%{
    fill: blueviolet;
    stroke: white;
  }


}
</style>
