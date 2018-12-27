<template>
   <div class="main-footer">
       <span>
           author：{{ author }}
       </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span>
           email：{{ email }}
       </span>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   data() {
     return {
         author:"yougs",
         email:"ygs_it@163.com"
     }
   },
   components: {}
}
</script>

<style scoped lang="scss">
.main-footer{
    margin: 40px;
    text-align: center;
    color: #eee;
    text-shadow: 0 3px 0 2px #eee;
}
</style>
