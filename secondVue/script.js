const app = Vue.createApp({
    data() {
        return {
            inputdata: "",
            counter: 0,
            newcounter: 0,
            resultinputData: "",
            exceriseinput: "",
            excerise2input: "",
            imgurl: 'https://source.unsplash.com/TCpfPxKPOvk/200x200',
        }
    },
    methods: {
        add() {
            return this.counter++;
        },
        minus() {
            return this.counter--;
        },
        inputFunc(event) {
            this.resultinputData = event.target.value;
        },
        submit() {
            alert(`${this.resultinputData}`)
        },
        keydownfun(event) {
            this.exceriseinput = event.target.value
        },
        enterfun(event) {
            this.excerise2input = event.target.value
        },
        resetdata() {
            this.exceriseinput = '';
            this.excerise2input = '';
        },
        add(num) {
            this.newcounter += num;
        }
    },
    computed: {
        fullName() {
            return this.exceriseinput + '\t patel'
        },
        callcounter() {

            if (this.newcounter < 37) {
                return "try again !"
            }
            else if (this.newcounter === 37) {
                return this.newcounter
            }
            else {
                return "value bigger than 37 !"
            }
        }
    },
    watch: {
        /* used whenever to set values  and add timer function 
          same as computed but alwayas write diff function 
         */
        counter(lastnewval) {

            if (lastnewval <= 0)
                this.counter = 0;
            else if (lastnewval >= 20)
                this.counter = 0;
        }
        ,
        newcounter() {

            if (this.newcounter >= 37) {
                this.newcounter = 0;
            }

        }
    }
})

app.mount('#app');