<template>
  <t-space style="box-sizing: border-box; padding: 10px" direction="vertical">
    <t-card v-for="(group, index) in navJson" :key="index" header-bordered>
      <t-tabs
        :id="defaultSelectItem[index]"
        :value="defaultSelectItem[index]"
        @change="(newVal) => changeTab(index, newVal)"
      >
        <t-tab-panel
          v-for="sub in group"
          :key="sub.name"
          :value="sub.name"
          :label="sub.name"
        >
          <t-row
            style="box-sizing: border-box; padding-top: 32px"
            :gutter="[24, 32]"
          >
            <t-col
              v-for="i in sub.children"
              :key="i.title"
              :xs="{ span: 8 }"
              :sm="{ span: 4 }"
              :md="{ span: 4 }"
              :lg="{ span: 4 }"
              :xl="{ span: 3 }"
              :xxl="{ span: 2 }"
            >
              <a :href="i.url" style="text-decoration: none" target="_blank">
                <t-comment :author="i.name">
                  <template #avatar>
                    <div class="t-comment__avatar">
                      <t-image
                        :src="require('@/assets/img/' + i.name + '.png')"
                        class="t-comment__avatar-image"
                      />
                    </div>
                  </template>
                  <template #content>
                    <t-tooltip theme="light" :content="i.description">
                      <div
                        style="
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;
                          overflow: hidden;
                        "
                      >
                        {{ i.description }}
                      </div>
                    </t-tooltip>
                  </template>
                </t-comment>
              </a>
            </t-col>
          </t-row>
        </t-tab-panel>
      </t-tabs>
    </t-card>
  </t-space>
</template>

<script>
import nav from "@/assets/nav.json";

export default {
  data() {
    return {
      defaultSelectItem: {},
      imgSet: {},
      navJson: nav,
    };
  },
  mounted() {
    // ! 备用，勿删
    // let mySet = {};
    // const context = require.context(
    //   "@/assets/img",
    //   true,
    //   /\.(png|jpg|jpeg|gif|webp)$/
    // );
    // context.keys().forEach((key) => {
    //   mySet[key.substring(2).replace(/\.(png|jpg|jpeg|gif|webp)$/, "")] =
    //     context(key);
    // });
    this.navJson.forEach((sub, index) => {
      this.$set(this.defaultSelectItem, index, sub[0].name);
      // ! 备用，勿删
      // sub.forEach((item) => {
      //   item.children.forEach((child) => {
      //     child.base64 = mySet[child.name];
      //   });
      // });
    });
  },
  methods: {
    changeTab(index, newVal) {
      this.defaultSelectItem[index] = newVal;
    },
  },
};
</script>
