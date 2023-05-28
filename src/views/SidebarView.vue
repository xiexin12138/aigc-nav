<template>
  <t-menu :value="value" @change="change">
    <t-menu-item v-for="(name, index) in list" :key="index" :value="name">
      {{ name }}</t-menu-item
    >
  </t-menu>
</template>

<script>
import nav from "@/assets/nav.json";
export default {
  data() {
    return {
      navJson: nav,
      list: [],
      value: "",
    };
  },
  mounted() {
    this.navJson.forEach((ele) => {
      this.list.push(ele[0].name);
    });
    this.value = this.list[0];
  },
  methods: {
    change(name) {
      this.value = name;
      let ele = document.getElementById(name);
      ele.scrollIntoView();
      window.scrollBy(0, -80);
    },
  },
};
</script>
