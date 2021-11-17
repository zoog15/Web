<template>
  <b-row
    class="m-2"
    @click="selectHouse"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col cols="2" class="text-center align-self-center">
      <b-img
        thumbnail
        src="https://picsum.photos/250/250/?image=58"
        alt="Image 1"
      ></b-img>
    </b-col>
    <b-col cols="10" class="align-self-center">
      [{{ house.일련번호 }}] {{ house.아파트 }}
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HouseListRow",
  data() {
    return {
      isColor: false,
    };
  },
  // 부모 컴포넌트인 HouseList의 <house-list-row> 디렉티브 안에서 :house:"house"로 바인딩되어있음, 그걸 props로 가져오고, 형태는 Object
  props: {
    house: Object,
  },
  methods: {
    ...mapActions(["detailHouse"]),
    colorChange(flag) {
      this.isColor = flag;
    },
    selectHouse() {
      // action의 detailHouse 호출
      this.detailHouse(this.house);
    },
  },
};
</script>

<style scoped>
.apt {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
