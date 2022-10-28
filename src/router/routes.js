const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  // {
  //   path: '/indexLayout',
  //   component: () => import('layouts/navigation/IndexLayout.vue'),
  // },
  // 总是把这个放在最后，补货无效路由的显示界面
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
