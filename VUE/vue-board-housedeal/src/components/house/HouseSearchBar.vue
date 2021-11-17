<template>
  <b-row class="mt-4 mb-4 text-center">
    <!-- <b-col class="sm-3">
      <b-form-input
        v-model.trim="dongCode"
        placeholder="동코드 입력...(예 : 11110)"
        @keypress.enter="sendKeyword"
      ></b-form-input>
    </b-col>
    <b-col class="sm-3" align="left">
      <b-button variant="outline-primary" @click="sendKeyword">검색</b-button>
    </b-col> -->
    <b-col class="sm-3">
      <!-- 시도코드를 선택하는 option -->
      <b-form-select
        v-model="sidoCode"
        :options="sidos"
        @change="gugunList"
      ></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <!-- 구군코드 선택하는 option -->
      <b-form-select
        v-model="gugunCode"
        :options="guguns"
        @change="searchApt"
      ></b-form-select>
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "HouseSearchBar",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
    };
  },
  // index.js 에서 처리된 sidos의 값을 가져오기
  computed: {
    // sidos 로 되어있는 state를 그대로 가져옴
    ...mapState(["sidos", "guguns", "houses"]),
    // sidos() {
    //   return this.$store.state.sidos;
    // },
  },
  created() {
    this.CLEAR_SIDO_LIST();
    // 비동기 통신 위한 action의 getSido 호출
    // this.$store.dispatch("getSido");
    this.sidoList();
  },
  methods: {
    ...mapActions(["getSido", "getGugun", "getHouseList"]),
    ...mapMutations(["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST"]),
    sidoList() {
      // created에서 sidoList()를 호출하는 순간 Actions의 getSido를 호출함
      this.getSido();
    },
    gugunList() {
      // console.log(this.sidoCode);
      // 기본적으로 push만 계속하기때문에 CLEAR를 통해 gugunList가 호출될때마다 clear하고 sidocode에 맞는 구군 띄워주기
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      // sidoCode가 선택됐다면 actions의 getGugun 호출, sidoCode를 param으로 갖고가야함
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    // 아파트 정보 얻어오기
    searchApt() {
      if (this.gugunCode) this.getHouseList(this.gugunCode);
    },
  },
};
</script>

<style></style>
