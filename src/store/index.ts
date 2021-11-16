import Vue from "vue";
import Vuex from "vuex";
import { db } from "../db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bakeList: {},
  },
  mutations: {
    setBakeList(state, data: []) {
      state.bakeList = data;
    },
  },
  actions: {
    getBakeryList(context, data: Array<string>) {
      db.collection("bakery")
        .where("status", "in", data)
        .get()
        .then((querySnapshot) => {
          this.commit(
            "setBakeList",
            querySnapshot.docs.map((doc) => doc.data())
          );
        });
    },
  },
  modules: {},
});
