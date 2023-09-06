const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "hello",
      emailArray: [],
    };
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response.data.response);
      });
  },
}).mount("#app");
