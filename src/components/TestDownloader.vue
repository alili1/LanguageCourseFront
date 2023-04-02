
<template>
    <div class="test">
      <span>{{title}}</span>
      <textarea type="text" class="test-input"></textarea>
      <FetchData/>
    </div>
</template>

<script>
import FetchData from "./FetchData.vue";
export default {
  name: 'TestDownloader',
  props: {title: String},
  components: {
    FetchData
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
.test {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &-input {
    margin-top: 30px;
    width: 30%;
  }
}
</style>