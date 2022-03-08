<template>
  <nav>
    <img src="./assets/logo.svg" alt="logo">
  </nav>
  <ContentCenter></ContentCenter> 
</template>

<script>
import ContentCenter from '@/components/ContentCenter.vue'
export default {
  components: {
    ContentCenter
  }
}
</script>

<style lang="scss">

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

fieldset,
img {
  border: 0;
}

a {
  color: #000;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}

li {
  list-style: none;
}

caption,
th {
  text-align: left;
}

q:before,
q:after {
  content: "";
}

abbr,
acronym {
  border: 0;
  font-variant: normal;
}

sup {
  vertical-align: text-top;
}

sub {
  vertical-align: text-bottom;
}

input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-size: 100%;
}

legend {
  color: #000;
}

del,
ins {
  text-decoration: none;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
html {
  color: #000;
  background: #fff;
}
@font-face {
    font-family: 'FiraSans';
    src: url(./assets/fonts/FiraSans/FiraSans-Thin.otf);
    font-weight: 100;
}
@font-face {
    font-family: 'FiraSans';
    src: url(./assets/fonts/FiraSans/FiraSans-UltraLight.otf);
    font-weight: 200;
}
@font-face {
    font-family: 'FiraSans';
    src: url(./assets/fonts/FiraSans/FiraSans-Light.otf);
    font-weight: 300;
}
@font-face {
    font-family: 'FiraSans';
    src: url(./assets/fonts/FiraSans/FiraSans-Book.otf);
    font-weight: 500;
}
@font-face {
    font-family: 'FiraSans';
    src: url(./assets/fonts/FiraSans/FiraSans-SemiBold.otf);
    font-weight: 700;
}
@font-face {
    font-family: 'FiraSans';
    src: url(./assets/fonts/FiraSans/FiraSans-Heavy.otf);
    font-weight: 800;
}

@font-face {
    font-family: 'Caviar Dreams';
    src: url(./assets/fonts/Caviar/CaviarDreams.ttf);
    font-weight: 500;
}
@font-face {
    font-family: 'Caviar Dreams';
    src: url(./assets/fonts/Caviar/Caviar_Dreams_Bold.ttf);
    font-weight: 900;
}
@font-face {
    font-family: 'Caviar Dreams';
    src: url(./assets/fonts/Caviar/CaviarDreams_Italic.ttf);
    font-style: italic;
}


@font-face {
    font-family: 'BoomBoom';
    src: url(./assets/fonts/BoomBoom/Boomboom.otf);
    font-weight: 900;
}

@font-face {
    font-family: 'Montserrat';
    src: url(./assets/fonts/Montserrat/Montserrat-ExtraLight.ttf);
    font-weight: 100;
}
@font-face {
    font-family: 'Montserrat';
    src: url(./assets/fonts/Montserrat/Montserrat-Light.otf);
    font-weight: 200;
}
@font-face {
    font-family: 'Montserrat';
    src: url(./assets/fonts/Montserrat/MontserratAlternates-Medium.ttf);
    font-weight: 900;
}

@font-face {
    font-family: 'Comforter';
    src: url(./assets/fonts/Comforter/Comforter-Regular.ttf);
}
</style>
