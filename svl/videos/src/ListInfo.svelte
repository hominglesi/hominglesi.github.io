<script>
    export let isHighlighted;
    export let isFliped = false;
    export let name;
    export let link;
    export let playlists;
    export let date;
    export let lengthDisplay;

    import { fly } from 'svelte/transition';
    
    var dateOptions = {year: 'numeric', month: 'short', day: 'numeric'}
</script>

<style>
    div{
        height: 180px;
        margin-top: 20px;
        overflow: hidden;
        transition: all 0.2s linear;
    }
    
    div.info-highlighted{
        padding-bottom: 70px;
        margin-top: 40px;
    }

    h2{
        margin: 0;
        width: 250px;
        font-family: "Quantico", sans-serif;
        
    }
    h2.info-fliped{
        text-align: right;
        margin-left: auto;
    }

    h1{
        transform: translateY(20px);
        transition: 0.2s linear , color 0.08s linear;;
        font-family: "Quantico";
        color: var(--c-accent3b);
        
        margin-top: 20px;
        font-size: 38px;
    }

    h1:hover{
        color: var(--c-accent3);
    }

    h1.info-highlighted{
        transform: translateY(-10px);
        font-size: 30px;
    }
    h1.info-fliped{
        text-align: right;
    }
    a{
        text-decoration: none;
    }
</style>

<div class="list-info-container {isHighlighted ? "info-highlighted" : ""}">
    <a href={link}><h1 class="{isFliped ? "info-fliped" : ""} {isHighlighted ? "info-highlighted" : ""}">{name}</h1></a>
    {#if isHighlighted}
        {#if isFliped==false}
            <!--<h2 transition:fly={{x:-250, opacity:1}}>{playlists}</h2>-->
            <h2 transition:fly={{x:-250, delay:0, opacity:1}}>Date: {date.toLocaleDateString("en-GB", dateOptions)}</h2>
            <h2 transition:fly={{x:-250, delay:30, opacity:1}}>Length: {lengthDisplay}</h2>
        {:else}
            
            <!--<h2 transition:fly={{x:250, opacity:1}} class="info-fliped">{playlists}</h2>-->
            <h2 transition:fly={{x:250, delay:30, opacity:1}} class="info-fliped">Date: {date.toLocaleDateString("en-GB", dateOptions)}</h2>
            <h2 transition:fly={{x:250, delay:60, opacity:1}} class="info-fliped">Length: {lengthDisplay}</h2>
        {/if}
    {/if}
    
</div>
