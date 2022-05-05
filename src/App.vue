<template>
<div class="main">
<div class="preloader">
  <span
     class="loaderText">Establishing API Connection.</span>
  <div class="loaders">
    <span></span>
    <span></span>
    <span></span>
</div>
</div>
<div class="min-h-screen max-w-screen-xl p-5 w-full px-[40px] mx-auto transition-all duration-300">
    <Navbar />
    <About />
    <Technologies />
    <button onclick="topper()" class="hover:bg-[#d1d1e0]/50 topperButton">
        <i class="fa-regular fa-chevron-up"></i>
    </button>
<!-- modal -->
<div class="modal-overlay">
  <div class="modal">
    
    <button class="close-modal text-color">
      <i class="fa-solid fa-x"></i>
    </button>

      <div class="dc-bg pb-1 rounded-b-lg rounded-t-lg" style="heigth: 200px;width:350px;">
    <div>
        <div class="-mt-12 relative ml-4"><img class="border-[6px] border-[#EEE8ED] discord_user_img bg-[#EEE8ED] rounded-full" width="95" src="" alt=""></div>
        <div class="mb-3">
            <h1 class="ml-4 font-bold text-color text-xl mt-3 discord_username"><span class="text-color text-gray-500">#</span></h1>
        </div>
    </div>
</div>
    
  </div>
</div>
  <div class="footer">
        <div class="footer-in padding">
            <p class="footer-text">{{ new Date().getFullYear()}} mishu</p>
        </div>
    </div>
</div>
</div>
</template>
<script>
    import Navbar from './Navbar.vue';
    import About from './About.vue';
    import Technologies from './Technologies.vue';
    export default {
        components: {
            Navbar,
            About,
            Technologies
        }
    }
</script>
<style data-href="https://fonts.googleapis.com/css2?family=Saira:wght@100;200;300;400;500;600;700;800;900&amp;display=swap">
    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 100;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memWYa2wxmKQyPMrZX79wwYZQMhsyuShhKMjjbU9uXuA71rDoss.woff) format('woff')
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 200;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memWYa2wxmKQyPMrZX79wwYZQMhsyuShhKMjjbU9uXuA79rCoss.woff) format('woff')
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 300;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memWYa2wxmKQyPMrZX79wwYZQMhsyuShhKMjjbU9uXuA7wTCoss.woff) format('woff')
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memWYa2wxmKQyPMrZX79wwYZQMhsyuShhKMjjbU9uXuA71rCoss.woff) format('woff')
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 500;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memWYa2wxmKQyPMrZX79wwYZQMhsyuShhKMjjbU9uXuA72jCoss.woff) format('woff')
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 600;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memWYa2wxmKQyPMrZX79wwYZQMhsyuShhKMjjbU9uXuA74TFoss.woff) format('woff')
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memWYa2wxmKQyPMrZX79wwYZQMhsyuShhKMjjbU9uXuA773Foss.woff) format('woff')
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 800;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memWYa2wxmKQyPMrZX79wwYZQMhsyuShhKMjjbU9uXuA79rFoss.woff) format('woff')
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 900;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memWYa2wxmKQyPMrZX79wwYZQMhsyuShhKMjjbU9uXuA7_PFoss.woff) format('woff')
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 100;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 100;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 100;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvSdyqOvg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 200;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 200;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 200;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvSdyqOvg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 300;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 300;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 300;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvSdyqOvg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvSdyqOvg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 500;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 500;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 500;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvSdyqOvg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 600;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 600;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 600;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvSdyqOvg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 700;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 700;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 700;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvSdyqOvg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 800;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 800;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 800;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvSdyqOvg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 900;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 900;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSdyqOvlaB.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 900;
        font-stretch: 100%;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/saira/v8/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvSdyqOvg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }
</style>
