<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <g
      id="Icon_feather-plus"
      data-name="Icon feather-plus"
      transform="translate(-6 -6)"
    >
      <path
        id="Tracé_10"
        data-name="Tracé 10"
        d="M18,7.5v21"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
      <path
        id="Tracé_11"
        data-name="Tracé 11"
        d="M7.5,18h21"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '2.122rem'
    },
    width: {
      type: String,
      default: '2.679rem'
    }
  }
}
</script>
