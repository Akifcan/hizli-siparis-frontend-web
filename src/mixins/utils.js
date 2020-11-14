export const backgroundChanger = {
  mounted() {
    setInterval(() => {
      this.currentBg++;
      if (this.currentBg == this.bgs.length) {
        this.currentBg = 0;
      }
    }, 10000);
  },
  data() {
    return {
      bgs: [
        require("@/assets/images/auth/image-1.jpg"),
        require("@/assets/images/auth/image-2.jpg"),
        require("@/assets/images/auth/image-3.jpg"),
        require("@/assets/images/auth/image-4.jpg"),
      ],
      currentBg: 0,
    };
  },
};

export const user = {
  computed: {
    user() {
      return this.$store.getters["Auth/user"];
    },
  },
};
