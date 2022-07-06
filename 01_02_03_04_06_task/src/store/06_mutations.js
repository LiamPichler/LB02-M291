import Vue from 'vue'
import Vuex from 'vuex'
//https://flaviocopes.com/vuex-persist-localstorage/
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
    key: '06b_mutations',
    storage: window.localStorage
});

export default new Vuex.Store({
    state: {
        ausbildung: [
            {sid: 100, mid: 286, title: '286-Eigene ICT-Arbeitsinstrumente einrichten und bedienen', mark: 4.0},
            {
                sid: 100, mid: 287, title: '287-Websites mit CSS gestalten', mark: 3.5,
                _cellVariants: {mark: 'danger'}
            },
            {sid: 100, mid: 288, title: '288-Programmiertechniken im Webfrontend einsetzen', mark: 5.5},
            {sid: 100, mid: 307, title: '307-Interaktive Webseite mit Formular erstellen', mark: 5.5},
            {sid: 100, mid: 290, title: '290-Datenbanken abfragen und verändern', mark: 3.5,
                _cellVariants: {mark: 'danger'}
            },
            {sid: 100, mid: 291, title: '291-Oberflächen (UIs) mit Webtechnologien entwickeln', mark: 'Pnab',
                _cellVariants: {mark: 'warning'}
            },
            {sid: 101, mid: 286, title: '286-Eigene ICT-Arbeitsinstrumente einrichten und bedienen', mark: 5},
            {sid: 101, mid: 287, title: '287-Websites mit CSS gestalten', mark: 5.0 },
            {sid: 101, mid: 288, title: '288-Programmiertechniken im Webfrontend einsetzen', mark: 5},
            {sid: 101, mid: 307, title: '307-Interaktive Webseite mit Formular erstellen', mark: 6},
            {sid: 101, mid: 290, title: '290-Datenbanken abfragen und verändern', mark: 6.0},
            {sid: 101, mid: 291, title: '291-Oberflächen (UIs) mit Webtechnologien entwickeln', mark: 'Pnab',
                _cellVariants: {mark: 'warning'}
            }
        ]

    },
    getters: {
        getByStudentId(state) {
            return function (sid) {
                return state.ausbildung.filter(mod => {
                    if (mod.sid === sid) {
                        //console.log(mod);
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
