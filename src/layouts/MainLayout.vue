<template>
  <q-layout view="lHh Lpr lFf">
    <!-- 头部 start -->
    <q-header class="bg-yellow shadow-up-2">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-avatar>
          <img alt="Quasar logo" src="~assets/quasar-logo-inner.svg" />
        </q-avatar>
        <q-toolbar-title>Express App</q-toolbar-title>

        <div>Version v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <!-- 头部 end -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <q-tabs
        v-model="tab"
        narrow-indicator
        dense
        align="justify"
        class="bg-yellow"
      >
        <div class="row justify-evenly full-width">
          <div class="col">
            <q-tab :ripple="false" name="mails" icon="mail" label="首页" />
          </div>
          <div class="col">
            <q-tab :ripple="false" name="alarms" icon="alarm" label="下单" />
          </div>
          <div class="col">
            <q-tab :ripple="false" name="movies" icon="movie" label="订单" />
          </div>
          <div class="col">
            <q-tab :ripple="false" name="me" icon="mail" label="我的" />
          </div>
        </div>
      </q-tabs>
    </q-drawer>

    <!-- 工作区 start -->
    <q-page-container>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails">
          <div class="text-h6">首页</div>
          <keep-alive>
            <component v-bind:is="Navigations.IndexLayout"></component>
          </keep-alive>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">商品</div>
          <keep-alive>
            <component v-bind:is="Navigations.SkuLayout"></component
          ></keep-alive>
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h6">订单</div>
          <keep-alive>
            <component v-bind:is="Navigations.OrderLayout"></component
          ></keep-alive>
        </q-tab-panel>

        <q-tab-panel name="me">
          <div class="text-h6">我的</div>
          <keep-alive>
            <component v-bind:is="Navigations.MeLayout"></component
          ></keep-alive>
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>
    <!-- 工作区 end -->

    <!-- 底部 start  active-bg-color="lime"-->
    <q-footer class="shadow-2">
      <q-tabs
        v-model="tab"
        narrow-indicator
        dense
        active-color="red"
        align="justify"
        class="bg-yellow"
      >
        <div class="row justify-evenly full-width">
          <div class="col text-dark">
            <q-tab :ripple="false" name="mails" icon="mail" label="首页" />
          </div>
          <div class="col text-dark">
            <q-tab :ripple="false" name="alarms" icon="alarm" label="商品" />
          </div>
          <div class="col text-dark">
            <q-tab :ripple="false" name="movies" icon="movie" label="订单" />
          </div>
          <div class="col text-dark">
            <q-tab :ripple="false" name="me" icon="mail" label="我的" />
          </div>
        </div>
      </q-tabs>
    </q-footer>
    <!-- 底部 end -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import Navigations from '../common/navigation.js';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tab: ref('mails'),
      Navigations,
    };
  },
});
</script>
