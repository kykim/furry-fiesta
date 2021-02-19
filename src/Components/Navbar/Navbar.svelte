<script>
  export let navlists = [];

  import { getAuth } from '../../auth';
  
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

<section id="nav-bar">
  <nav class="navbar main-bgcolor navbar-expand-md navbar-dark">
    <a class="navbar-brand company_brand" href="/">
      <img class="navbar-img" src="images/kasheesh.png" alt="logo" />
      KASHEESH
    </a>
    
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        {#each navlists as list}
          <li class="nav-item">
            <a class="nav-link light-color" href={list.url}>{list.label}</a>
          </li>
        {/each}
        {#if $isAuthenticated}
          <li class="nav-item">
            <button class="btn btn-primary" on:click={() => logout()}>Logout</button>
          </li>
        {:else}
          <li class="nav-item">
            <button class="btn btn-primary" on:click={() => signup()}>Signup</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-info" on:click={() => login()}>Login</button>
          </li>
        {/if}
      </ul>
    </div>
  </nav>
</section>

<style>
  #nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
  }

  .navbar {
    padding: 0 40px !important;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
  }

  .navbar-nav li a, button {
    font-weight: 600;
    text-transform: uppercase;
    float: right;
    text-align: left;
  }

  .navbar-img {
    width: 40px;
    height: 40px;
  }
</style>