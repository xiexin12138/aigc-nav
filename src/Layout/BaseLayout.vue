<template>
  <t-layout style="height: 100vh">
    <t-header>
      <div
        style="
          display: flex;
          align-content: center;
          height: 50px;
          line-height: 50px;
          justify-content: flex-start;
          align-items: flex-end;
          padding-left: 20px;
          cursor: pointer;
        "
      >
        <div style="font-size: 32px; line-height: 32px; height: 32px">
          <!-- {{ currentDomain }} -->
          AIGC
        </div>
        <div
          style="
            font-size: 18px;
            line-height: 18px;
            height: 18px;
            padding-bottom: 20px;
            padding-left: 10px;
          "
        >
          导航站
        </div>
      </div>
    </t-header>
    <t-layout style="height: calc(100vh - 50px); position: sticky; top: 0">
      <t-aside class="hide-in-mobile">
        <SidebarView />
      </t-aside>
      <t-content
        style="height: calc(100vh - 50px); overflow-y: scroll; width: 100vw"
      >
        <router-view />
      </t-content>
      <!-- <t-footer>Footer</t-footer> -->
    </t-layout>
  </t-layout>
</template>

<script>
import SidebarView from "@/views/SidebarView.vue";
export default {
  components: { SidebarView },
  data() {
    return {
      currentDomain: "",
    };
  },
  mounted() {
    this.currentDomain = window.location.hostname;
  },
};
</script>
