<template>
    <div class="main fixed">
        <div class="main__container fixed__center">
            <button @click="togglePopup" class="main__btn">
                Открыть модальное окно
            </button>
        </div>
    </div>

</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    methods: {
        ...mapMutations([
            'SET_TOGGLE_POPUP',
        ]),
        togglePopup() {
            return this.SET_TOGGLE_POPUP();
        },
    }
}
</script>
