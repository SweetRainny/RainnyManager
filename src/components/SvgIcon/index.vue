<template>
  <svg :class="svgClass" aria-hidden="true" >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">

export default {
  data() {
    return {
      name: "hello"
    }
  },
  name: "SvgIcon",
  props: {
    className: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    svgClass() {
      if(this.className) {
        return `svg-icon ${this.className}`
      }
      return `svg-icon`
    },

    iconName() {
      console.log(this.name)
      return `#icon-${this.iconClass}`
    }
  }
}

</script>
<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .svg-external-icon {
    background-color: currentColor;
    mask-size: cover!important;
    display: inline-block;
  }
</style>