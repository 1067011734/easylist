var Profile = Vue.extend({
    props:{
        msg:Array
    },
    template:
     `
    <div v-bind:style={width:width} class="easylist">
        <input type="search" v-model="target.name" style="width:100%" v-on:input="input">
        <div class="items-wrap">
            <p v-for="item in filterDate"  v-on:click='itemSelect(item)'>{{item.name}}</p>
        </div>
     </div>
    `,
    data() {
        return {
            // msg:[
            //     { name: "张三", id: "1" },
            //     { name: "李四", id: "2" },
            //     { name: "往往", id: "3" },
            //     { name: "放松放松的", id: "4" },
            //     { name: "放松de心情", id: "4" },
            //     { name: "放放舒服舒服反反复复", id: "4" },
            // ],
            width: "200px",
            filterDate: [],
            target: { id: "", name: "" },
        }
    },
    mounted() {
        this.filterDate = this.msg;
    },
    methods: {
        input() {
            let name = event.target.value.trim();
            let data = "";
            if (name) {
                data = this.msg.filter(x => x.name.includes(name));
            } else {
                data = this.msg;
            }
            this.filterDate = data;
        },
        itemSelect(item) {
            this.target = Object.assign({}, item);
            this.filterDate = this.msg.filter(x => x.name.includes(item.name));
        }
    }
});

Vue.component("component-easylist",Profile)