<template>

    <div class="subscribe" v-if="showSubscribe">
        <div :class="`subscribe__popup ${color}`">
            {{ text }}
        </div>
    </div>

</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
        ...mapState({
            showSubscribe: state => state.showSubscribe,
            color:         state => state.subscribeData.color,
            text:          state => state.subscribeData.text,
        })
    },
  }
</script>
