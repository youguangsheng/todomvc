<template>
   <div class="helper">
      <span class="left">{{ unFinshedTodoLength }} items left</span>
      <span class="tabs">
         <span    v-for="state in states"
                  :key="state"
                  :class="[state,filter === state ? 'actived' : '']"
                  @click="toggleFilter(state)"
         >
            {{ state }}
         </span>
      </span>
      
      <span class="clear" @click="clearAllCompleted">clear completed</span>
   </div>
</template>

<script type="text/ecmascript-6">

export default {
   props:{
      filter:{
         type:String,
         required:true,
         default:'all'
      },
      todos:{
         type:Array,
         required:true,
      }
   },
   data() {
     return {
        states:['all','active','completed']
     }
   },
   computed: {
      unFinshedTodoLength() {
         return (this.todos.filter(item => item.done === false)).length;
      }
   },
   methods: {
      toggleFilter(state) {
         this.$emit('toggle',state);
         console.log(this.filter);
      },
      clearAllCompleted() {
         this.$emit('clearAllCompleted');
      }
   },
   components: {

   }
}
</script>

<style scoped lang="scss">
.helper {
   width: 100%;
   background-color: #fff;
   font-size: 14px;
   font-weight:100;
   padding: 5px 0;
   font-smoothing:antialiased;
   line-height: 30px;
   justify-content: space-between;
   display: flex;
   .left, .clear, .tabs {
      padding: 0 10px;
      box-sizing: border-box;
   }
   .left, .clear {
      width: 150px
   }
   .left {
      text-align: left;
   }
   .clear {
      text-align: right;
      cursor:pointer;
   }
   .tabs {
      width: 200px;
      display: flex;
      justify-content: space-around;
      * {
         display: inline-block;
         padding: 0 10px;
         cursor: pointer;
         border: 1px solid rgba(175,47,47,0);
         &.actived {
            border-color: rgba(175,47,47,0.4);
            border-radius: 5px;
         }
      }
   }
}
</style>
