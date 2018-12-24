<template>
   <div class="real-app">
        <input  type="text"
                placeholder="接下来做点什么呢？"
                autofocus="autofocus"
                class="add-input"
                @keyup.enter="addTodo"
        /> 

        <app-item
            v-for="todo in filterTodos"
            :key="todo.id"
            v-bind:todo="todo"
            @deletedTodo="deletedTodo"
        />

        <app-tab :filter="filter"
                 :todos="todos"
                 @toggle="toggleFilter"
                 @clearAllCompleted="clearAllCompleted"
        />       
   </div>
</template>

<script type="text/ecmascript-6">
import AppItem from './todo/Item.vue'
import AppTab from './todo/tab.vue'
export default {
   data() {
     return {
         todos:JSON.parse(window.localStorage.getItem('todos')||'[]'),
         filter:'all'
     }
   },
   /*  watch 监视
		  当data中的数据成员发生改变时 会自动执行该方法
		  当watch监视是对象或数组时，只能监听到数组添加或删除，但无法检测到数组成员属性
		  改变,此时需要深度监视才可以*/
   watch: {
       todos:{
           handler(){
               //本地存储
               window.localStorage.setItem('todos',JSON.stringify(this.todos));
           },
           deep:true
       }
   },
   methods:{
       addTodo(e) {
           if(e.target.value.trim()){
               this.todos.push({
                   id:this.todos.length+1,
                   content:e.target.value.trim(),
                   done:false
               })
           } else {
               alert("笨蛋，你还什么都还么有输入！-_-")
           }
           e.target.value = '';
        //    console.log(this.todos)
       },
       deletedTodo(id) {
           this.todos.splice(this.todos.findIndex(item => item.id === id),1);
       },
       toggleFilter(state) {
           this.filter = state;  
       },
       clearAllCompleted() {
           this.todos = this.todos.filter(item => item.done === false);
       }
   },
   computed: {
       filterTodos() {
           if(this.filter === 'all'){
               return this.todos;
           }
           let completed = this.filter === 'completed';
           return this.todos.filter(item => item.done === completed)
       }
   },
   components: {
       AppItem,
       AppTab
   }
}
</script>

<style scoped lang="scss">
.real-app {
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 5px #666;
    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4;
        border: 0;
        outline: none;
        color:inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, .03)
    }
}

</style>
