let Profile = Vue.extend({
    props:{
        msg:Array
    },
    template:
     `
    <div v-bind:style={width:width} class="easylist" >
        <input type="search" v-model="target.name" style="width:100%" v-on:input="input" v-on:focus="focus" v-on:blur="blur">
        <div v-bind:class='{"items-wrap":true,"hide":isHide,}' v-on:mouseleave="mouseleave" v-on:mouseenter="mouseenter">
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
            isHide:true,//下拉框是否隐藏
            isLeave:true,//鼠标是否在下拉框里
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
        focus(){
            this.isHide=false;
        },
        blur(){
            if(this.isLeave){
                this.isHide = true; 
            }
            
        },
        mouseleave(){
            this.isLeave=true;
        },
        mouseenter(){
            this.isLeave=false;
        },
        itemSelect(item) {
            this.target = Object.assign({}, item);
            this.filterDate = this.msg.filter(x => x.name.includes(item.name));
            this.isHide = true; 
        }
    }
});

Vue.component("component-easylist",Profile)