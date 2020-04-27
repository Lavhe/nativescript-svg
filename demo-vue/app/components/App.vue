<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="auto,*">
      <Label class="message" :text="msg" col="0" row="0" />
      <SVG row="1" svg="this is an svg">
        <g>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="3"
            fill="red"
          />
        </g>
        <circle
          cx="20"
          cy="20"
          r="20"
          stroke="yellow"
          stroke-width="3"
          fill="blue"
        ></circle>
        <circle
          cx="90"
          cy="90"
          r="30"
          stroke="green"
          stroke-width="3"
          fill="orange"
        ></circle>
        <line
          x1="90"
          y1="90"
          x2="30"
          y2="30"
          stroke="green"
          stroke-width="1"
          fill="orange"
        />
      </SVG>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      msg: "Hello World!"
    };
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
