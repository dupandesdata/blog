import { navItems } from '../database/navItems.js';

export default {
  data: () => ({
    nav: false,
    navItem: navItems
  }),
  computed: {
    isMobile: () => window.innerWidth <= 800
  },
  methods: {
    toggleMenu() {
      this.nav = !this.nav;
    },
    toggleMenuList() {
      if (this.isMobile) this.nav = false;
    }
  },
  mounted() {
    if (!this.isMobile) this.nav = true;
  },
  template: `
    <header :class="['w-full md:w-[16rem] px-1 flex flex-col overflow-hidden md:mt-7', { active: nav }]">
      <section class="flex border-bottom items-center justify-between bg-white md:order-2 md:mt-10 md:ml-3">
        <h1 data-aos="fade-left" data-aos-delay="100" class="font-bold text-2xl mb-1">Dupan Code</h1>
        <button class="w-7 h-6 mt-1" @click="toggleMenu">
          <span v-for="n in 3" :key="n" data-aos="fade-left" :data-aos-delay="100 * n"></span>
        </button>
      </section>

      <section class="relative container-hiro">
        <img class="blur m-auto mt-5 rounded-b-sm w-[95%] h-[95px] md:h-[85px]" 
             :class="{ loaded: nav }"
             alt="cover" 
             src="https://i.pinimg.com/564x/94/6f/de/946fde6213aec69618591411d5840fd2.jpg" />
        <img class="blur rounded-full absolute w-[75px] left-[17px] bottom-[-35px] profile" 
             :class="{ loaded: nav }"
             alt="profile" 
             src="https://media.licdn.com/dms/image/D5603AQHAE83OmvspBA/profile-displayphoto-shrink_200_200/0/1667724513053?e=2147483647&v=beta&t=62r0inkFR8jRqGKqgtriYzhCW2j2keu_PS86i1mVLG4" />
      </section>

      <nav class="p-4 md:order-2 flex justify-between md:flex-col mt-6 md:mt-0 md:p-2 w-full">
        <ul class="w-full">
          <li v-for="item in navItem" :key="item.title" class="p-1 w-full">
            <router-link :to="item.title === 'Home' ? '/' : '/' + item.title.toLowerCase()" 
                         class="flex gap-1 item-center" 
                         @click="toggleMenuList">
              <svg class="w-4 h-4 mt-[1px]" 
                   :viewBox="item.viewBox" 
                   :fill="item.fill" 
                   xmlns="http://www.w3.org/2000/svg" 
                   v-html="item.path"></svg>
              <span>{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  `
};