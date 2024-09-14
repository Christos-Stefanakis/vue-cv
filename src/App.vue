<template>
  <TopMenu></TopMenu>
  <MobileMenu></MobileMenu>
  <LeftPage>
    <AboutMeEn></AboutMeEn>
  </LeftPage>
  <RightPage></RightPage>
</template>

<script>
import MobileMenu from './components/EN/MobileMenu.vue';
import TopMenu from './components/EN/TopMenu.vue';
import LeftPage from './components/EN/LeftPage.vue';
import AboutMeEn from './components/EN/Elements/AboutMeEn.vue';
import RightPage from './components/EN/RightPage.vue';

export default {
  name: 'App',
  components: {
    MobileMenu,
    TopMenu,
    LeftPage,
    AboutMeEn,
    RightPage
  }
}

</script>




