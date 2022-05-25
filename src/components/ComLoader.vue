<template>
  <div class="page-load" v-if="!isLoaded">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isLoaded:false,
        }
    },
    mounted(){
        document.onreadystatechange=()=>{
            // console.log(document.readyState);
            if(document.readyState=="complete") {
                setTimeout(() => {
                    this.isLoaded=true
                }, 2000);
            }
        }
    }
}
</script>

<style lang="scss" scope>
    $colors: #8CC271, #69BEEB, #F5AA39, #E9643B;
    .page-load{
        display: flex;
        justify-content: center;
        align-items:center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #333;
        z-index: 99;
        transition: 2s;
        overflow: hidden;
    }
    .cube{
        width: 30px;
        height: 30px;
        margin: 0 2px;
        border-radius: 100%;
        @for $i from 1 through length($colors){
            &:nth-child(#{$i}){
                background-color: nth($colors , $i );
            }
            &:first-child{
                animation: left 1s infinite;
            }
            &:last-child{
                animation: right 1s infinite .5s;
            }
        }
    }
    @keyframes left {
        40%{
            transform: translateX(-60px);
        }
        50%{
            transform: translateX(0);
        }
    }
    @keyframes right {
        40%{
            transform: translateX(60px);
        }
        50%{
            transform: translateX(0);
        }
    }
</style>