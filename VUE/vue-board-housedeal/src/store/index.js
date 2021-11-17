import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    houses: [],
    house: null,
  },
  mutations: {
    // response.data = sidos
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    SET_HOUSE_LIST(state, houses) {
      state.houses = houses;
    },
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "선택하세요" }];
      state.houses = [];
      state.house = null;
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "선택하세요" }];
      state.houses = [];
      state.house = null;
    },
    SET_DETAIL_HOUSE(state, house) {
      state.house = house;
    },
  },
  actions: {
    // HouseSearchBar의 Created에서 호출
    getSido({ commit }) {
      http
        .get(`/map/sido`)
        .then((response) => {
          // console.log(data);
          commit("SET_SIDO_LIST", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getGugun({ commit }, sidoCode) {
      // sts로 실행하는 vueAPI2에 있는 DTO확인해서있는 sido에 sidoCode를 집어넣겟다
      const params = { sido: sidoCode };
      http
        .get(`/map/gugun`, { params })
        .then((response) => {
          // console.log(commit, response);
          commit("SET_GUGUN_LIST", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getHouseList({ commit }, gugunCode) {
      // 서비스키같이 숨겨져있는 값이 대놓고 보여지면 안됨, 환경변수를 건드리므로 서버 껏다 키기
      const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      // const SERVICE_KEY =
      //   "UwiawsY3oiYExzG8QpVAbwsW1qKJ5DZhaBwc2FPh2AN4iDt3HoDlRGLrKwu6WhoNLo3fAZ%2Foajgfm7Vyiyou1g%3D%3D";

      const SERVICE_URL =
        "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev";

      const params = {
        LAWD_CD: gugunCode,
        DEAL_YMD: "202110",
        serviceKey: decodeURIComponent(SERVICE_KEY),
      };

      http
        .get(SERVICE_URL, { params })
        .then((response) => {
          // console.log(commit, response);
          commit("SET_HOUSE_LIST", response.data.response.body.items.item);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    detailHouse({ commit }, house) {
      // 나중에 house 일련번호를 이용하여 API 호출
      commit("SET_DETAIL_HOUSE", house);
    },
  },
  modules: {},
});
