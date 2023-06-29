<template>
  <div>
    <div class="footer">
      <div class="break-line"></div>
      <div class="box-flex">
        <div class="inside-box">
          <div class="inside-box">
            <img
              class="imgfooter"
              src="https://eptummers.nl/media/wysiwyg/Footer_medewerker.png"
            />
          </div>
        </div>
        <div class="inside-box">
          <div class="header">Service</div>
          <div class="main">
            <ul>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
            </ul>
          </div>
        </div>
        <div class="inside-box">
          <div class="header">Service</div>
          <div class="main">
            <ul>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>WebSite created By Dhruv patel</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
.imgfooter {
  object-fit: cover;
  height: 200px;
}
.copyright p {
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
}
.footer {
  margin-top: 80px;
  background-color: grey;
}
.break-line {
  background-color: #3abd3a;
  height: 70px;
}
.box-flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.inside-box {
  padding: 20px;
  margin: 10px;
}
.copyright {
  padding: 10px;
  background-color: #424141;
}
</style>
