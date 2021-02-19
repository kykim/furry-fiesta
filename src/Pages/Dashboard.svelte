<script>
  import Router from 'svelte-spa-router';
  import { getAuth } from '../auth';

  import Root from '../Components/Dashboard/Root.svelte'
  import Activity from '../Components/Dashboard/Activity.svelte'
  import Services from '../Components/Dashboard/Services.svelte'
  import NotFound from '../Components/Dashboard/NotFound.svelte'

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

<h1>Dashboard</h1>

<ul>
    <li><a href="#/">Home</a></li>
    <li><a href="#/activity">Activity</a></li>
    <li><a href="#/services">Account Services</a></li>
    <li><a href="#/does/not/exist">Not found</a></li>
</ul>
<button on:click={() => logout()}>Logout</button>

<Router {routes} />

<div id="dump">{JSON.stringify($userInfo)}</div>
