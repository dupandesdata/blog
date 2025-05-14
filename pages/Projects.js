import { projects } from '../database/projects.js';

export default {
  data: () => ({ 
    projectId: "",
    projectContent: "",
    loading: true,
    tab: 0,
    isLoading: true,
    navItems: [
      { title: "Dokumentasi", path: "<g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <g> <g> <rect y='38.957' width='512' height='33.391'></rect> </g> </g> <g> <g> <rect y='139.13' width='400.696' height='33.391'></rect> </g> </g> <g> <g> <rect y='239.304' width='512' height='33.391'></rect> </g> </g> <g> <g> <rect y='439.652' width='512' height='33.391'></rect> </g> </g> <g> <g> <rect y='339.478' width='400.696' height='33.391'></rect> </g> </g> </g>", viewBox: "0 0 512 512", fill: "currentColor",link: "" },
      { title: "Preview", path: "<g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z' stroke='currentColor' stroke-width='1.5'></path> </g>", viewBox:"0 0 24 24", fill: "none", link: "" },
      { title: "Source Code", path: "<g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> </g>",viewBox:"0 0 24 24", fill: "none", link: "https://example.com/demo" },
    ]
  }),
created() {
  this.projectId = this.$route.params.id;
  const { dev, published_date, tags } = projects.find(item => item.link === this.projectId) || {};
  
  axios.get(`database/articles/${this.projectId}.html`)
    .then(res => {
      const doc = new DOMParser().parseFromString(res.data, 'text/html');
      const h2 = doc.querySelector('h2');
      
      if (h2) {
        const section = document.createElement('section');
        section.className = 'my-2';
        
        const info = [
          { title: dev, svg: '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g></svg>' },
          { title: published_date, svg: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>' }
        ];
        
        info.forEach(({ title, svg }) => {
          const div = document.createElement('div');
          div.className = 'flex items-center space-x-2';
          
          const temp = document.createElement('div');
          temp.innerHTML = svg;
          const svgEl = temp.firstChild;
          
          const span = document.createElement('span');
          span.className = 'text-base';
          span.textContent = title;
          
          div.append(svgEl, span);
          section.appendChild(div);
        });
        
        h2.insertAdjacentElement('afterend', section);
      }
      
      this.projectContent = doc.body.innerHTML;
    })
    .catch(err => console.error("Gagal memuat artikel:", err))
    .finally(() => { this.loading = false; });
},

  methods: {
    tabClick(index) {
      this.tab = index;
    }
  },

  template: `
    <section class="article">
      <section class="flex gap-4 w-full project-button p-1 flex-wrap">
        <template v-for="(item, index) in navItems" :key="item.title">
          <a
            v-if="item.link"
            :href="'https://github.com/dupancode/my-projects/blob/main/' + projectId + '/index.html'"
            target="_blank"
            rel="noopener"
            data-aos="fade-left"
            data-aos-delay="50 * index"
            class="flex items-center gap-2 font-medium cursor-pointer p-2 border-non rounded-sm"
          >
            <svg class="w-4 h-4" 
                :viewBox="item.viewBox"
                :fill="item.fill" 
                xmlns="http://www.w3.org/2000/svg" 
                v-html="item.path">
            </svg>
            <span :class="{ 'text-primary': tab === index && !item.link }">{{ item.title }}</span>
          </a>
          <a
            v-else
            @click="tabClick(index)"
            data-aos="fade-left"
            data-aos-delay="50 * index"
            :class="['flex items-center gap-2 font-medium cursor-pointer p-2 transition-colors duration-300 ease-out border-non p-2 rounded-sm', { 'text-primary border': tab === index }]"
          >
            <svg class="w-4 h-4" 
                :viewBox="item.viewBox"
                :fill="item.fill" 
                xmlns="http://www.w3.org/2000/svg" 
                v-html="item.path">
            </svg>
            <span :class="['transition-colors duration-300 ease-out', { 'text-primary': tab === index }]">{{ item.title }}</span>
          </a>
        </template>
      </section>
      
      <template v-if="tab === 0">
        <article data-aos="fade-left" data-aos-delay="200" v-if="!loading" v-html="projectContent"></article>
        <div v-else class="text-center py-4"> Memuat konten...</div>
      </template>      
      
      <template v-if="tab === 1">
      <div
        v-if="isLoading"
        class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10"
      >
        <div class="animate-spin rounded-full h-10 w-10 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
      
      <a class="flex gap-1 my-3 p-2 bg-emerald-400 text-white rounded-sm w-[118px]" :href="'https://dupancode.github.io/my-projects/' + projectId">
        <svg class="w-5 h-5" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="20 8 8 8 8 20"></polyline><line x1="8" y1="8" x2="24" y2="24"></line><polyline points="56 20 56 8 44 8"></polyline><line x1="56" y1="8" x2="40" y2="24"></line><polyline points="44 56 56 56 56 44"></polyline><line x1="56" y1="56" x2="40" y2="40"></line><polyline points="8 44 8 56 20 56"></polyline><line x1="8" y1="56" x2="24" y2="40"></line></g></svg>
        <span>Full Screen</span>
      </a>

      <iframe
        :src="'https://dupancode.github.io/my-projects/' + projectId"
        class="w-full h-screen"
        height="100"
        width="100"
        @load="isLoading = false"
        @beforeunload="isLoading = true"
      ></iframe>
      </template>
    </section>
  `
}