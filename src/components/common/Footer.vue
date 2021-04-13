<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-2">
          <a href="#" class="footer__logo">
            <img src="../../assets/logo.png" class="footer__logo-img" alt="logo">
          </a>
        </div>
        <div class="col-12 col-md-10">
          nav
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer{
  padding: 60px 0;
  color: #fff;
  background: #0A0B21;
  &__logo{
    img{
      width: 100%;
      height: auto;
    }
  }
}
</style>