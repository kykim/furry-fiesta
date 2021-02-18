<script>
  import { getAuth } from '../auth';
  
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
<button on:click={() => logout()}>Logout</button>

