<template>
    
    <Subscribe />
    <Popup />
    <Main />

</template>

<script>
  import Subscribe from "@/components/Subscribe";
  import Popup     from "@/components/Popup";
  import Main   from "@/components/Main";

  export default {
    components: {
        Subscribe,
        Popup,
        Main
    },
}
</script>

<style lang="scss">
  @import "@/assets/style.scss";
</style>
