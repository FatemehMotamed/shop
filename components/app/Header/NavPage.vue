<template>
 <div>

    <v-container>
      <v-row >
        <v-col
          cols="12"
          md="12"
          sm="12"
          xl="12"
          lg="12"
        >
          <div id="menu-wrapper">

	        <ul class="nav">
            <li><nuxt-link to="/gifts">کارت هدیه</nuxt-link></li>
            <li>
              <nuxt-link to="/brands">برندها</nuxt-link>
              <div>
                <sub-nav></sub-nav>
              </div>
            </li>
            <li><a href="#">فروش ویژه</a></li>
            <li>
              <a href="#">زیبایی و سلامت</a>
              <div>
                <sub-nav></sub-nav>
              </div>
            </li>
            <li>
              <a href="#">بچه گانه</a>
              <div>
                <sub-nav></sub-nav>
              </div>
            </li>
            <li>
              <a href="#">زنانه</a>
              <div>
                <sub-nav></sub-nav>
              </div>
            </li>
            <li>
              <nuxt-link to="/products">مردانه</nuxt-link>
              <div>
                <sub-nav></sub-nav>
              </div>
		        </li>

          </ul>

        </div>

        </v-col>

      </v-row>

    </v-container>

 </div>
</template>

<script>
  import SubNav from "@/components/app/Header/SubNav";
    export default {
        name: "NavPage",
        components:{
            SubNav:SubNav,
        }
    }
</script>

<style scoped>

.nav,
.nav nuxt-link,
.nav a,
.nav ul,
.nav li,
.nav div,
.nav form,
.nav input {
	margin: 0;
	padding: 0;
	border: none;
	outline: none;
}

.nav a { text-decoration: none; }


.nav li { list-style: none;}

/* Menu Container */
.nav {
	display: inline-block;
	position: relative;
	cursor: default;
	z-index: 500;

}

/* Menu List */
.nav > li {
	display: block;
	float: left;
}

/* Menu Links */
.nav > li > a {
	position: relative;
	display: block;
	z-index: 510;
	height: 54px;
	padding: 0 3vw;
	line-height: 54px;

	font-family: 'Markazi Text', serif;
	/*font-weight: bold;*/
	font-size: 1.1vw;
	text-shadow: 0 0 1px rgba(0,0,0,.35);

	/*background: #372f2b;*/
	color: black;
	border-left: 0px solid #4b4441;
	border-right: 0px solid #312a27;

	-webkit-transition: all .3s ease;
	-moz-transition: all .3s ease;
	-o-transition: all .3s ease;
	-ms-transition: all .3s ease;
	transition: all .3s ease;
}

.nav > li:hover > a {
	/*background: #4b4441;*/
	/*color: orangered;*/
  font-weight: bold;
  font-size: 1.2vw;

}

.nav > li:first-child > a {
	border-radius: 3px 0 0 3px;
	border-left: none;
}

/* Menu Dropdown */
.nav > li > div {
	position: absolute;
	display: block;
	width: 200%;
  word-wrap: break-word;
	top: 30px;
	left: -55%;
  text-align: right;

	opacity: 0;
	visibility: hidden;
	overflow: hidden;

	background:transparent;
	border-radius: 0 0 3px 3px;

	-webkit-transition: all .3s ease .15s;
	-moz-transition: all .3s ease .15s;
	-o-transition: all .3s ease .15s;
	-ms-transition: all .3s ease .15s;
	transition: all .3s ease .15s;
}

.nav > li:hover > div {
	opacity: 1;
	visibility: visible;
	overflow: visible;
}

/* Menu Content Styles */
.nav .nav-column {
	float: left;
	width: 20%;
	padding: 2.5%;
}

.nav .nav-column h3 {
	margin: 20px 0 10px 0;
	line-height: 18px;

	font-family: Helvetica, Arial, sans-serif;
	font-weight: bold;
	font-size: 14px;
	color: #372f2b;
	text-transform: uppercase;
}



/*.nav .nav-column li a {*/
/*	display: block;*/
/*	line-height: 26px;*/

/*	font-family: Helvetica, Arial, sans-serif;*/
/*	font-weight: bold;*/
/*	font-size: 13px;*/
/*	color: #888888;*/
/*}*/

/*.nav .nav-column li a:hover { color: #666666; }*/



</style>
