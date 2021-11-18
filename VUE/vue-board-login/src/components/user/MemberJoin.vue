<template>
  <div>
    <b-container class="bv-example-row mt-3">
      <b-row>
        <b-col>
          <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
        </b-col>
      </b-row>
    </b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-id" label="아이디:" label-for="userid">
        <b-form-input
          id="userid"
          v-model="form.id"
          placeholder="아이디를 입력하세요"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-pwd" label="비밀번호:" label-for="userpwd">
        <b-form-input
          id="userpwd"
          v-model="form.pwd"
          placeholder="비밀번호를 입력하세요"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-name" label="이름:" label-for="username">
        <b-form-input
          id="username"
          v-model="form.name"
          placeholder="이름을 입력하세요"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-email" label="이메일:" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="이메일을 입력하세요"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "MemberJoin",
  data() {
    return {
      form: {
        id: "",
        pwd: "",
        name: "",
        email: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style></style>
