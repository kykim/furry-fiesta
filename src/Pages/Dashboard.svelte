<script>
  import Router from 'svelte-spa-router';
  import { getAuth } from '../auth';

  import Root from '../Components/Dashboard/Root.svelte'
  import Activity from '../Components/Dashboard/Activity.svelte'
  import Services from '../Components/Dashboard/Services.svelte'
  import NotFound from '../Components/Dashboard/NotFound.svelte'

  import Navbar from "../Components/Navbar/Navbar.svelte";
  import Footer from "../Components/Footer/Footer.svelte";
  import DATA from "../Data/data";

  // the route definition object
  const routes = { 
      '/': Root,
      '/activity/:start?/:end?': Activity,
      '/services': Services,
      // Catch-all, must be last
      '*': NotFound,
  }
  
  const {
    isLoading,
    isAuthenticated,
    signup,
    login,
    logout,
    authToken,
    authError,
    userInfo
  } = getAuth();
</script>

<Navbar navlists={DATA.DASHBOARD_NAVBAR_DATA} header={DATA.HEADER} />
<section class="main-bgcolor">
     <img src="images/wave1.png" alt="" class="wave-img" />
</section>

<section class="section container-fluid min-vh-100">
  <Router {routes} />
</section>

<div class="grey-bgcolor" id="dump">{JSON.stringify($userInfo)}</div>

<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />


<style>
  .wave-img {
    width: 100%;
    height: auto;
  }
</style>  
