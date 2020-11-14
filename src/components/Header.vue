<template>
  <header>
    <nav class="nav-bar">
      <h1 class="inline-block headline"> {{$t('nav.headline')}} </h1>
      <div class="nav-routes">
        <ul class="router-links">
          <li>
            <router-link to="/" class="router-link inline-block"
              > {{$t('nav.home')}}</router-link
            >
          </li>
          <li>
            <router-link to="/About" class="router-link inline-block"
              > {{$t('nav.about')}} </router-link
            >
          </li>
          <li>
            <router-link to="/Main" class="router-link inline-block"
              > {{$t('nav.customer-service')}} </router-link
            >
          </li>
        </ul>
      </div>
      <div class="reg-login">
        <ul class="router-links">
          <li><a href="#" class="inline-block router-link reg"> {{$t('nav.register')}} </a></li>
          <li><a href="#" class="inline-block router-link login"> {{$t('nav.login')}} </a></li>
        </ul>
        <select class="custom-select" v-model="lang"  @change="selectLanguage($event)">
          <option value="de" class="option-language"> {{$t('nav.german')}} </option>
          <option value="en" class="option-language"> {{$t('nav.english')}} </option>
          
        </select>
      </div>
      
    </nav>
  </header>
</template>

<script>
//import i18n from "@/i18n"
export default {
  name: "Header",
  data() {
    return {
      lang : localStorage.getItem('lang' || 'en')
    };
  },
  methods: {
    selectLanguage(event){
      localStorage.setItem('lang', event.target.value);
      this.$i18n.locale = localStorage.getItem('lang');
      }
  }
    

};
</script>

<style scoped>
header {
  padding: 8px 3%;
  border-bottom: 2px solid rgb(250, 243, 243);
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(250, 243, 243);
  padding: 5px 0;
}
.reg-login{
  display: flex;
}
.reg, .login{
  border: 1px solid rgb(253, 103, 16);
  border-radius: 5px;
  margin-right: 1rem;
  background: rgb(253, 103, 16);
}

.custom-select{
  background-color: rgb(253, 103, 16);
  border: 1px solid rgb(253, 103, 16);
  border-radius: 5px;
  margin-right: 1rem;
  outline: none;
  
}
select option {
    color:  rgb(250, 243, 243);
    border-radius: 5px;
}
.router-links {
  display: flex;
}
.router-link {
  padding: 0 1rem;
}
.inline-block {
  display: inline-block;
}
a, .custom-select{
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  font-size: 1.3rem;
  transition: color 0.5s ease-in-out,
              
              
}
a:hover, .custom-select:hover{
  color: rgb(122, 191, 247);
}
ul {
  list-style: none;
}
h1 {
  font-size: 1.7rem;
}
</style>