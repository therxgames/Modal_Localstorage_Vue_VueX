import { createStore } from "vuex";
import { NEW_SUBSCRIBE, OLD_SUBSCRIBE } from '@/config/subscribe.js';

export default createStore({
    state: {
        emails: [],
        showSubscribe: false,
        showPopup: false,
        subscribeData: {
            color: "",
            text: ""
        },
    },
    getters: {
        getIsNewSubscribe (state) {
            return email => !state.emails.includes(email)
        },
    },
    mutations: {
        SET_EMAILS (state) {
            if (localStorage.getItem("emails")) {
                try {
                    state.emails = JSON.parse(localStorage.getItem("emails"));
                }
                catch (e) {
                    localStorage.removeItem("emails");
                }
            }
        },
        SET_NEW_EMAIL (state, newEmail) {
            state.emails.push(newEmail);
            localStorage.setItem("emails", JSON.stringify(state.emails));
        },
        INIT_SUBSCRIBE_POPUP (state, isNewSubscribe) {
            state.subscribeData = isNewSubscribe ? NEW_SUBSCRIBE : OLD_SUBSCRIBE;
            state.showSubscribe = true;
            setTimeout(() => state.showSubscribe = false, 2000);
        },
        SET_TOGGLE_POPUP (state) {
            state.showPopup = !state.showPopup;
        }
    },
    actions: {

    }
})