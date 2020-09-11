<template>
  <div id="app">
    <section>
      <div class="h"></div>
      <div class="i">
        <div class="ir">
          <div class="hir">
            <div>Hello! Good {{ this.hora() }}</div>
            <div>I'm Rickson William</div>
            <h1>
              <span
                class="typer"
                id="some-id"
                data-words="Motion Designer.,UX/UI Designer.,Develper.,Web Designer.,3D Designer"
                data-delay="100"
                data-colors="#08605F,#177E89,purple"
              ></span>
              <span
                style="font-size:1.2em;vertical-align:middle;"
                class="cursor"
                data-cursor-display="_"
                data-owner="some-id"
              ></span>
            </h1>
          </div>
          <div class="itens">
            <div class="subiten">
              <div class="iten">
                <div>
                  <img src="./assets/logoFlutter.svg" alt="logo flutter" />
                  <img src="./assets/icon-react.svg" alt="logo flutter" />
                </div>
                Mobile Developer
              </div>
              <div class="iten">
                <div>
                  <img src="./assets/icon-html.svg" alt="logo html" />
                  <img src="./assets/icon-css.svg" alt="logo css" />
                  <img src="./assets/icon-js.svg" alt="logo js" />
                </div>
                Web Developer
              </div>
            </div>
            <div class="subiten">
              <div class="iten">
                <img src="./assets/icon-blender.svg" alt="logo blender" />
                3D Designer
              </div>
              <div class="iten">
                <div>
                  <img src="./assets/icon-ae.svg" alt="logo ae" />
                  <img src="./assets/icon-ps.svg" alt="logo ps" />
                  <img src="./assets/icon-lottie.svg" alt="logo lottie" />
                </div>
                Motion Designer
              </div>
            </div>
          </div>
        </div>
        <div class="cw">
          <img src="./assets/my.png" alt="Eu" />
        </div>
      </div>
    </section>
    <section>
      <h1>Skills</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",

  mounted() {},

  methods: {
    hora() {
      let d = new Date();
      let h = d.getHours();
      var hs =
        h >= 0 && h < 12
          ? "Morning"
          : h >= 12 && h < 18
          ? "Afternoon"
          : "Night";
      return hs;
    },
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  background-color: #121212;
}
section {
  height: 100vh;
  color: #fff;
}
.h {
  background-color: #1e1e1e;
  /* width: 100%; */
  /* height: 280px; */
  height: 35%;
  position: relative;
}
.i {
  width: 90%;
  max-width: 1280px;
  height: 450px;
  position: relative;
  margin: -105px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: blue; */
}
.ir {
  width: 550px;
  height: 400px;
  margin-left: 30px;
  /* background-color: red; */
}
.cw {
  width: 310px;
  height: 310px;
  margin-right: 25px;
  background-color: rebeccapurple;
  border-radius: 50%;
}
.cw img {
  height: 96%;
  border-radius: 50%;
  float: left;
}
.hir {
  /* border: blue 1px solid; */
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 30px 20px;
}
.hir div:nth-child(1) {
  color: #d3d3d3;
  font-size: 2rem;
  /* margin-left: 10px; */
}
.hir div:nth-child(2) {
  color: #ededed;
  font-size: 2.7rem;
}
.hir h1 {
  margin: 0px;
  color: #ededed;
  font-size: 1.8rem;
}
.itens {
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.subiten {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  flex: 1;
  /* border: red 1px solid; */
}
@media (max-width: 640px) {
  .subiten {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
  }
}
@media (max-width: 440px) {
  .subiten {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 1080px) {
  .i {
    justify-content: center;
    flex-direction: column-reverse;
  }
  .cw {
    height: 250px;
    width: 250px;
  }
}

@media (max-width: 640px) {
  .hir {
    text-align: center;
  }
  .itens {
    flex-direction: column;
  }
}

.itens .iten:nth-child(2) > div > img {
  padding-bottom: 5px;
}
.iten {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
}
.iten img {
  height: 36px;
  padding: 8px 5px;
}
</style>
