<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h2 id="education">EDUCATION</h2>
    <IEK></IEK>
    <TEE></TEE>
</template>

<script>
import IEK from './Schools/IEK.vue';
import TEE from './Schools/TEE.vue';

export default {
    name: 'Education',
    components: {
    IEK,
    TEE
  }
    
}
</script>