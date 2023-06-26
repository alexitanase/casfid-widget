<template>
  <b-list-group>
    <b-list-group-item class="text-center">
      <b-skeleton animation="wave" width="35%" class="m-auto"></b-skeleton>
    </b-list-group-item>
    <b-list-group-item>
      <b-skeleton animation="wave" width="85%"></b-skeleton>
      <div class="right-element">
        <b-skeleton animation="wave" width="10%" class="d-inline-block"></b-skeleton>
      </div>
    </b-list-group-item>
    <b-list-group-item>
      <b-skeleton animation="wave" width="55%"></b-skeleton>
      <div class="right-element">
        <b-skeleton animation="wave" width="15%" class="d-inline-block"></b-skeleton>
      </div>
    </b-list-group-item>
    <b-list-group-item class="text-center">
      <b-skeleton animation="wave" width="25%" class="m-auto"></b-skeleton>
    </b-list-group-item>
    <b-list-group-item>
      <b-skeleton animation="wave" width="80%"></b-skeleton>
      <div class="right-element">
        <b-skeleton animation="wave" width="10%" class="d-inline-block"></b-skeleton>
      </div>
    </b-list-group-item>
    <b-list-group-item>
      <b-skeleton animation="wave" width="65%"></b-skeleton>
      <div class="right-element">
        <b-skeleton animation="wave" width="25%" class="d-inline-block"></b-skeleton>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "LoadingView"
}
</script>

<style scoped>
.list-group {
  border-radius: 0px;
}
.list-group .list-group-item {
  border-left: 0;
  border-right: 0;
  position: relative;
  padding: 10px 0px;
}
.list-group .list-group-item:last-child {
  border-bottom: 0;
  font-size: 24px;
}
.list-group .list-group-item > .right-element {
  position: absolute;
  top: 10px;
  right: 0px;
  font-weight: bold;
  display: inline-block;
  width: 100%;
  text-align: right;
}
</style>