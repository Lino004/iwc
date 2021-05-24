<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24">
    <path
      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '2.564rem'
    },
    width: {
      type: String,
      default: '2.677rem'
    }
  }
}
</script>
