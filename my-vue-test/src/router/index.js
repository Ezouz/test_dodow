import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ZipCodeForm from '@/components/ZipCodeForm';
import Confirm from '@/components/Confirm';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: { name: 'ZipCodeForm' },
      component: HelloWorld,
    },
    {
      path: '/zip-code-form',
      name: 'ZipCodeForm',
      component: ZipCodeForm,
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm,
    },
  ],
});
