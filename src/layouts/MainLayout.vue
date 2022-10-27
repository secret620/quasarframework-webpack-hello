<template>
  <q-layout view="lHh Lpr lFf">
    <!-- 头部 start -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Quasar CLI with Webpack App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
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
        class="bg-yellow shadow-2"
      >
        <div class="row">
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
      <router-view />
    </q-page-container>
    <!-- 工作区 end -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

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
    };
  },
});
</script>
