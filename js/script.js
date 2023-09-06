const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "hello",
      emails: [],
    };
  },

  methods: {
    generatedEmails() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.emails.push(response.data.response);
          });
      }
    },
  },

  mounted() {
    this.generatedEmails();
    console.log(this.emails);
  },
}).mount("#app");
