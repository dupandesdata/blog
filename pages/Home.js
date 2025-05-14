import { projects } from '../database/projects.js';
import { svgs } from '../database/svg.js';

export default {
  data: () => ({
    search: "",
    currentPage: 1,
    itemsPerPage: window.innerWidth <= 768 ? 5 : 9,
    isMobile: window.innerWidth <= 768, 
  }),
  computed: {
    filteredProjects() {
      const q = this.search.trim().toLowerCase();
      return q ?
        projects.filter(p => (p.title || '').toLowerCase().includes(q)) :
        projects;
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredProjects.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.max(1, Math.ceil(this.filteredProjects.length / this.itemsPerPage));
    }
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
      this.$nextTick(() => {
        AOS.refresh();
      });
    },
    handleResize() {
      this.itemsPerPage = window.innerWidth <= 768 ? 5 : 9;
      this.isMobile = window.innerWidth <= 768;
      this.currentPage = 1;
    },
    getSvg(tag) {
      return svgs.find(svg => svg.title.toLowerCase() === tag.toLowerCase());
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    
    new Typed('#typewrter', {
      strings: ['Dupandes Milenium.', 'Website Developer.', 'Logic Builder.', 'Website Development.'],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    });
    
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  watch: {
    search() {
      this.currentPage = 1;
      this.$nextTick(() => AOS.refresh());
    },
    paginatedProjects() {
      this.$nextTick(() => {
        AOS.refresh();
        const projectEl = document.querySelector('.project');
        if (projectEl) {
          projectEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  },
  template: `
    <section data-aos="fade-left" data-aos-delay="100" class="home">
      <div data-aos="fade-left" data-aos-delay="100" class="flex gap-1">
        <h2 class="text-xl">Hi, I'm</h2>
        <span id="typewrter" class="text-xl font-semibold"></span>
      </div>

      <p data-aos="fade-left" data-aos-delay="150" class="mt-4 text-neutral-800">
        Seorang insinyur pengembangan web dengan keahlian dalam <strong>front-end dan back-end development</strong>,
        khususnya dalam <strong>JavaScript dan Google Script</strong>. Terlepas dari keterbatasan motorik yang saya miliki
        sebagai individu difabel, saya tetap berkomitmen untuk menciptakan aplikasi web yang <strong>efisien, skalabel, dan
        mudah diakses</strong>. Saya percaya bahwa teknologi dapat membawa dampak positif bagi banyak orang, dan saya
        selalu berusaha menghadirkan solusi digital inovatif yang memberikan pengalaman pengguna yang luar biasa. Dengan
        semangat kolaborasi dan inovasi, saya terus belajar dan berkembang untuk menciptakan produk yang bermanfaat bagi
        semua.
      </p>

        <div class="flex flex-col mt-8 mb-1">
        <div class="flex gap-1 item-center border-bottom pb-2">
          <svg data-aos="fade-left" data-aos-delay="200" class="w- h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5203 18.3408L16.0758 18.9449H16.0758L16.5203 18.3408ZM17.5 13.8296L16.9737 14.364C17.2657 14.6515 17.7343 14.6515 18.0263 14.364L17.5 13.8296ZM18.4797 18.3408L18.0351 17.7367L18.4797 18.3408ZM17.5 18.8201L17.5 19.5701L17.5 18.8201ZM16.9649 17.7367C16.4677 17.3709 15.8871 16.891 15.4382 16.374C14.9683 15.8329 14.75 15.3733 14.75 15.0361H13.25C13.25 15.9337 13.7742 16.7455 14.3056 17.3575C14.858 17.9937 15.5376 18.5488 16.0758 18.9449L16.9649 17.7367ZM14.75 15.0361C14.75 14.2796 15.0929 13.9195 15.4138 13.8038C15.7508 13.6823 16.3333 13.7332 16.9737 14.364L18.0263 13.2953C17.0918 12.3749 15.9243 12.0252 14.905 12.3927C13.8697 12.766 13.25 13.7847 13.25 15.0361H14.75ZM18.9242 18.9449C19.4624 18.5488 20.142 17.9937 20.6944 17.3575C21.2258 16.7455 21.75 15.9337 21.75 15.0361H20.25C20.25 15.3733 20.0317 15.8329 19.5618 16.374C19.1129 16.891 18.5323 17.3709 18.0351 17.7367L18.9242 18.9449ZM21.75 15.0361C21.75 13.7847 21.1303 12.766 20.095 12.3927C19.0757 12.0252 17.9082 12.3749 16.9737 13.2953L18.0263 14.364C18.6667 13.7332 19.2492 13.6823 19.5862 13.8038C19.9071 13.9195 20.25 14.2796 20.25 15.0361H21.75ZM16.0758 18.9449C16.4541 19.2232 16.8783 19.5701 17.5 19.5701L17.5 18.0701C17.4796 18.0701 17.4637 18.071 17.4032 18.0387C17.3121 17.99 17.1982 17.9084 16.9649 17.7367L16.0758 18.9449ZM18.0351 17.7367C17.8019 17.9084 17.688 17.99 17.5968 18.0387C17.5363 18.071 17.5204 18.0701 17.5 18.0701L17.5 19.5701C18.1217 19.5701 18.5459 19.2232 18.9242 18.9449L18.0351 17.7367Z" fill="#1C274C"></path> <path d="M10 14H3" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 18H3" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 6L13.5 6M20 6L17.75 6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 10L9.5 10M3 10H5.25" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
          <h3 data-aos="fade-left" data-aos-delay="250" class="text-xl">My Project</h3>
        </div>

        <input 
          v-model="search"
          placeholder="Cari project..."
          class="mt-4 px-3 py-2 border rounded w-full sm:w-1/2 focus:outline-none"
        />
        </div>
      <section data-aos="fade-left" data-aos-delay="100" class="project pt-4 mt-6 flex flex-wrap gap-7 md:justify-around md:pb-3">

        <router-link
          v-for="(item, index) in paginatedProjects"
          :key="item.id"
          :to="'/project/' + item.link"
          class="bg-white p-1 pb-2 rounded card w-full md:w-xs md:h-[360px] md:flex flex-col justify-between"
        >
          <img
            :src="item.image"
            :alt="item.title || 'Project image'"
            class="w-full h-40 object-cover rounded"
          />
          <div
            class="mt-2 font-semibold flex gap-1 items-center">
            {{ item.title }}
            <span class="font-medium price px-1 text-sm rounded">{{ item.price }}</span>
          </div>
          <p class="text-neutral-800 text-xs my-1 md:text-base"> {{ item.content }} </p>
          <div class="flex gap-2">
          <div 
            v-for="(tag, i) in item.tags"
            class="mt-2 text-sm py- px-2 bg-emerald-50 border rounded flex gap-1 items-center">
            <svg
              v-if="getSvg(tag)"
              class="w-4 h-4"
              :viewBox="getSvg(tag).viewBox"
              :fill="getSvg(tag).fill"
              xmlns="http://www.w3.org/2000/svg"
              v-html="getSvg(tag).path"
            ></svg>
            {{ tag }}
          </div>
          </div>
        </router-link>

        <div v-if="filteredProjects.length === 0" class="col-span-full text-center text-gray-500">
          Tidak ada project yang ditemukan.
        </div>
      </section>

      <div class="mt-6 flex gap-2 justify-center" v-if="totalPages > 1">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          class="px-3 py-1 rounded bg-emerald-400"
          :class="{ 'bg-emerald-500 text-white': currentPage === page }"
        >
          {{ page }}
        </button>
      </div>
    </section>
  `,
}