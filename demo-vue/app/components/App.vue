<template>
  <Page :showActionTitle="false">
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="auto,*,auto">
      <Label class="message" text="Nativescript SVG below 😇" col="0" row="0" />
      <SVG row="1">
        <g>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="2"
            fill="red"
          />
          <circle
            cx="70"
            cy="100"
            r="20"
            stroke="yellow"
            stroke-width="1"
            fill="black"
          />
        </g>
        <circle
          :cx="circle.cx"
          :cy="circle.cy"
          :r="circle.r"
          stroke="yellow"
          stroke-width="1"
          fill="blue"
        ></circle>
        <rect
          :x="rect.x1"
          :y="rect.x2"
          :width="200"
          :height="200"
          stroke="green"
          stroke-width="1"
          fill="orange"
        ></rect>
        <rect
          :x="rect.x2 - 100"
          :y="rect.x1"
          :width="100"
          :height="rect.y1"
          rx="15"
          stroke="orange"
          stroke-width="1"
          fill="purple"
        ></rect>
        <line
          :x1="line.x1"
          :x2="line.x2"
          :y1="line.y1"
          :y2="line.y2"
          stroke="green"
          stroke-width="1"
          fill="orange"
        />
      </SVG>
      <Button
        row="2"
        :text="isAnimating ? 'Stop animation' : 'Start animation'"
        @tap="toggleAnimation()"
      ></Button>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      circle: {
        cx: 200,
        cy: 200,
        r: 50
      },
      rect: {
        x1: 100,
        x2: 400,
        y1: 100,
        y2: 400
      },
      line: {
        x1: 0,
        x2: 500,
        y1: 0,
        y2: 500
      },
      isAnimating: false,
      timer: null
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    toggleAnimation() {
      if (this.isAnimating) {
        this.stopAnimation();
      } else {
        this.startAnimation();
      }
    },
    startAnimation() {
      this.isAnimating = true;
      this.timer = setInterval(() => {
        this.circle.cx >= 900 ? (this.circle.cx = 0) : this.circle.cx++;
        this.circle.r >= 90 ? (this.circle.r = 0) : (this.circle.r += 5);

        this.line.x2 >= 200 ? (this.line.x2 = 0) : (this.line.x2 += 5);
        this.line.y2 >= 200 ? (this.line.y2 = 0) : (this.line.y2 += 5);

        this.rect.x1 <= 0 ? (this.line.x1 = 600) : (this.line.x1 -= 5);
        this.rect.y1 <= 0 ? (this.line.y1 = 600) : (this.line.y1 -= 5);
        this.$forceUpdate();
      }, 700);
    },
    stopAnimation() {
      this.isAnimating = false;
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  beforeDestroy() {
    this.stopAnimation();
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
