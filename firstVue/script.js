
Vue.createApp({
    data() {
        return {
            arr: [],
            inputValue: "",
            firstext: 'kmsdfdlf',
            secondext: 'wqwwererterte',
            Vuslink: "https://piyushgarg.dev"
        }
    },
    methods: {
        addData() {
            this.arr.push(this.inputValue);
            this.inputValue = ''
        },
        myfunout() {

            const num = Math.random() * 100;
            console.log(num);
            if (num < 50) {
                return this.firstext;
            } else
                return this.secondext;
        }

    }
}).mount("#app")