<template>

    <div class="popup fixed" id="popup" v-if="showPopup">
        <div class="popup__body fixed__center">
            <div class="popup__content">
                <div class="popup__container">
                    <div @click="togglePopup" class="popup__close"></div>

                    <div class="popup__title">
                        10%<span>off</span>
                    </div>

                    <div class="popup__title2">
                        your first order
                    </div>

                    <div class="popup__line"></div>

                    <div class="popup__text">
                        Subscrive to recieve 10% off promocode plus exclusive <br/> offers and deals
                    </div>

                    <div class="popup__email">
                        <div class="popup__email-title">
                            Email-adress
                        </div>
                        <input type="text" name="email" id="email" class="popup__email-input" v-model="newEmail" />
                    </div>

                    <div class="popup__btn">
                        <button type="submit" class="btn" @click="addEmail">
                            <a href="#">Subscribe!</a>
                        </button>
                    </div>

                    <div class="popup__agree">
                        <label class="popup__agree-label">
                            <input type="checkbox" id="agree" name="agree" class="popup__agree-checkbox">
                            <span class="popup__agree-style"></span>
                            I'm agree with privacy policy
                        </label>
                    </div>
                </div>
                <div class="popup__box"></div>
            </div>
        </div>
    </div>

</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';

    export default {
        data() {
            return {
                newEmail: "",
            };
        },
        computed: {
            ...mapState({
                showPopup: state => state.showPopup,
            }),
            ...mapGetters([
                'getIsNewSubscribe',
            ]),
        },
        mounted() {
            this.SET_EMAILS();
        },
        methods: {
            ...mapMutations([
                'SET_EMAILS',
                'SET_NEW_EMAIL',
                'INIT_SUBSCRIBE_POPUP',
                'SET_TOGGLE_POPUP',
            ]),
            addEmail() {
                const isNewSubscribe = this.isNewSubscribe();

                this.INIT_SUBSCRIBE_POPUP(isNewSubscribe);

                if (isNewSubscribe) {
                    this.SET_NEW_EMAIL(this.newEmail);
                }

                this.newEmail = "";
            },
            isNewSubscribe() {
                return this.getIsNewSubscribe(this.newEmail);
            },
            togglePopup() {
                return this.SET_TOGGLE_POPUP();
            },
        }
    }
</script>
