const app = Vue.createApp({
    data() {
        return {
            borderFlag: false,
            borderFlag1: false,
            boxclick: false,
        }
    },
    methods: {
        borderChange(num) {
            if (num === 1)
                this.borderFlag = !this.borderFlag;
            else if (num === 2) {

                this.borderFlag1 = !this.borderFlag1;
                this.boxclick = !this.boxclick;
            }
        }
    },
    computed: {
        bordeChg() {

        }
    },
    watch: {

    }
})

app.mount('#app');



const data = {
    msg: "hey"
}
const handler =
{
    set(target, key, value) {
        console.log("key", key);
        console.log("value", value);
        console.log("target ", target);
    }
}

const proxy = new Proxy(data, handler);
console.log("before", proxy.msg);
proxy.msg = "hello word"
console.log("after", proxy.msg);