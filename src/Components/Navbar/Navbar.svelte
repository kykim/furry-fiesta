<script>
  export let navlists = [];
</script>

<section id="nav-bar">
  <nav class="navbar main-bgcolor navbar-expand-md navbar-dark">
    <a class="navbar-brand company_brand" href="/">
      <img class="navbar-img" src="images/kasheesh.png" alt="logo" />
      Kasheesh!
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
        <!--
        {#each navlists as list}
          <li class="nav-item">
            <a class="nav-link light-color" href={list.url}>{list.label}</a>
          </li>
        {/each}
        -->
        <li class="nav-item">
          <a class="btn btn-primary" href="https://docs.google.com/forms/d/1mEaInZF1YXEifeyWPocx1AKYxYMQ9Jr7FzOl96ka0X4">Signup</a>
        </li>
      </ul>
    </div>
  </nav>
</section>

<style>
  @font-face {
    font-family: 'Cooper Black';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/CooperBlack.otf');
  }

  .company_brand {
    font-family: 'Cooper Black', 'Capriola', sans-serif !important;
    font-size: 2.0rem !important;
    font-weight: 500;
  }

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
