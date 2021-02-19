<h2>Actvity Component</h2>

<p>
    Show all the transactions for the user between :start and :end
    <b>{params.start}</b>
    <b>{#if params.last}{params.end}{/if}</b>
</p>
<p>This comes from the URL, matching <code>/activity/:start?/:end?</code>,
where the start and end dates are optional.</p>

<script>
// The params prop contains values matched from the URL
export let params = {}
</script>
