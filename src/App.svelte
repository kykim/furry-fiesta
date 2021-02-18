<script>
  import Home from "./Pages/Home.svelte";
  import Dashboard from "./Pages/Dashboard.svelte";
  
  import { createAuth } from './auth';

  const auth0config = {
    domain: process.env.SVELTE_APP_AUTH0_DOMAIN,
    client_id: process.env.SVELTE_APP_AUTH0_CLIENT_ID,
  };

  const {
    isLoading,
    isAuthenticated,
    signup,
    login,
    logout,
    authToken,
    authError,
    userInfo
  } = createAuth(auth0config);

  $: state = {
    isLoading: $isLoading,
    isAuthenticated: $isAuthenticated,
    authError: $authError,
    userInfo: $userInfo ? $userInfo.name : null,
    authToken: $authToken.slice(0, 20)
  };
</script>

{#if $isAuthenticated}
  <Dashboard />
{:else}
  <Home />
{/if}