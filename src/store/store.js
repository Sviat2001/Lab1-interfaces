import { createStore } from 'vuex';

export const store = createStore({
    state: {
        currentPage: 1,
        users: [],
        currentLoggedUser: {
            index: -1,
            phonebook: []
        }
    }
})

export default store