import NotFound from '@/views/auth/NotFound.vue'
import SignIn from '@/views/auth/SignIn.vue'
import SignUp from '@/views/auth/SignUp.vue'
import ShoppingCart from '@/views/cart/ShoppingCart.vue'
import Home from '@/views/home/Home.vue'
import MenuItemList from '@/views/menu-item/MenuItemList.vue'
import MenuItemUpsert from '@/views/menu-item/MenuItemUpsert.vue'
import OrderConfirmation from '@/views/order/OrderConfirmation.vue'
import OrderHistoryList from '@/views/order/OrderHistoryList.vue'
import OrderManagement from '@/views/order/OrderManagement.vue'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { createRouter, createWebHistory } from 'vue-router'
import NoAccess from '@/views/auth/NoAccess.vue'
import { requireAuth, requireAdmin } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: APP_ROUTE_NAMES.HOME,
      component: Home,
    },
    {
      path: '/no-access',
      name: APP_ROUTE_NAMES.ACCESS_DENIED,
      component: NoAccess,
    },
    {
      path: '/sign-in',
      name: APP_ROUTE_NAMES.SIGN_IN,
      component: SignIn,
    },
    {
      path: '/sign-up',
      name: APP_ROUTE_NAMES.SIGN_UP,
      component: SignUp,
    },
    {
      path: '/cart',
      name: APP_ROUTE_NAMES.CART,
      component: ShoppingCart,
      beforeEnter: [requireAuth],
    },
    {
      path: '/admin/manage-menu-items',
      name: APP_ROUTE_NAMES.MENU_ITEM_LIST,
      component: MenuItemList,
      beforeEnter: [requireAdmin],
    },
    {
      path: '/admin/manage-menu-items/create',
      name: APP_ROUTE_NAMES.CREATE_MENU_ITEM,
      component: MenuItemUpsert,
      beforeEnter: [requireAdmin],
    },
    {
      path: '/admin/manage-menu-items/update/:id',
      name: APP_ROUTE_NAMES.EDIT_MENU_ITEM,
      component: MenuItemUpsert,
      props: true,
      beforeEnter: [requireAdmin],
    },
    {
      path: '/admin/order-confirmation/:orderId',
      name: APP_ROUTE_NAMES.ORDER_CONFIRM,
      component: OrderConfirmation,
      props: true,
      beforeEnter: [requireAuth],
    },
    {
      path: '/order-list',
      name: APP_ROUTE_NAMES.ORDER_LIST,
      component: OrderHistoryList,
      beforeEnter: [requireAuth],
    },
    {
      path: '/admin/order-management',
      name: APP_ROUTE_NAMES.MANAGE_ORDER_ADMIN,
      component: OrderManagement,
      beforeEnter: [requireAdmin],
    },
    {
      path: '/:catchAll(.*)',
      name: APP_ROUTE_NAMES.NOT_FOUND,
      component: Home,
    },
  ],
})

export default router
