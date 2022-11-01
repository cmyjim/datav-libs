<!--
 * @Author: jim
 * @Date: 2022-10-27 16:11:18
 * @LastEditTime: 2022-10-28 13:12:30
 * @Description:
-->
<template>
      <svg width="0" height="0" >
        <defs>
          <symbol id="more" viewBox="0 0 100 100">
            <circle r="5" cx="20" cy="25" fill="currentColor" />
            <circle r="5" cx="20" cy="50" fill="currentColor" />
            <circle r="5" cx="20" cy="75" fill="currentColor" />
            <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor"></line>
            <line x1="40" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor"></line>
            <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor"></line>
          </symbol>
        </defs>
      </svg>
</template>

<script>
export default {
  name: "TestComponent",
  setup() {
    const message = "Hello 11"
    return {
      message,
    }
  },
}
</script>
<style lang="scss" scoped>
.test {
  color: green;
}
</style>
