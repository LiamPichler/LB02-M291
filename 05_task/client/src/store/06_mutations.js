import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
    key: '06b_mutations',
    storage: window.localStorage
});

export default new Vuex.Store({
    state: {
        ausbildung: [
            {sid: 101, mid: 286, title: 'ABU', mark: 0},
            {
                sid: 101, mid: 287, title: 'French', mark: 0,
                _cellVariants: {mark: 'danger'}
            },
            {sid: 101, mid: 288, title: 'English', mark: 0},
            {sid: 101, mid: 307, title: 'MFS', mark: 0},
            {sid: 101, mid: 290, title: 'BK', mark: 0,
                _cellVariants: {mark: 'danger'}
            },
            {sid: 100, mid: 291, title: '291-Oberflächen (UIs) mit Webtechnologien entwickeln', mark: 'Pnab',
                _cellVariants: {mark: 'warning'}
            },
            {sid: 101, mid: 286, title: '286-Eigene ICT-Arbeitsinstrumente einrichten und bedienen', mark: 0},
            {sid: 101, mid: 287, title: '287-Websites mit CSS gestalten', mark: 0 },
            {sid: 100, mid: 288, title: '288-Programmiertechniken im Webfrontend einsetzen', mark: 0},
            {sid: 100, mid: 307, title: '307-Interaktive Webseite mit Formular erstellen', mark: 0},
            {sid: 100, mid: 290, title: '290-Datenbanken abfragen und verändern', mark: 0},
            {sid: 100, mid: 291, title: '291-Oberflächen (UIs) mit Webtechnologien entwickeln', mark: '0',
                _cellVariants: {mark: 'warning'}
            }
        ]

    },
    getters: {
        getByStudentId(state) {
            return function (sid) {
                return state.ausbildung.filter(mod => {
                    if (mod.sid === sid) {
                        return mod;
                    }
                });
            };
        }
    },
    mutations: {
        updateMark(state,modList){
            state.ausbildung = modList;
        }
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})
