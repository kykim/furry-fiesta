<script>
  import Navbar from "../Components/Navbar/Navbar.svelte";
  import Banner from "../Components/Banner/Banner.svelte";
  import Services from "../Components/Services/Services.svelte";
  import About from "../Components/About/About.svelte";
  import Footer from "../Components/Footer/Footer.svelte";
  import DATA from "../Data/data";
</script>

<!-- Navbar -->
<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
<!-- Banner -->
<Banner bannerData={DATA.BANNER_DATA} />
<!-- Services -->
<!-- <Services serviceData={DATA.SERVICE_DATA} /> -->
<!-- About -->
<!-- <About aboutData={DATA.ABOUT_DATA} /> -->
<!-- Footer -->
<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />
