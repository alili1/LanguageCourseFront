<template> 
    <div v-if="!this.data">Loading...</div>
    <pre v-else><span v-html="this.data"></span></pre>
</template>

<script>
import { fetchMessage } from '../services/fetchers'

  export default {

    data() {
      return {
        data: null,
      };
    },
    async created() {
        try {
            this.data = await fetchMessage().then(msg => msg.jsMessage)
            // .then(() => {
            //     this.executeScript();
            // });
        }
        catch(error){
            this.data = 'server error :('
        }
        // this.loadScripts()
        // .then(() => {
        //     this.executeScript();
        // });
        console.log(this.data)
    },
    methods: {
        loadScripts() {
            return new Promise(resolve => {
                let scriptEl = document.createElement("script");
                scriptEl.src = this.data;
                scriptEl.type = "text/javascript";
                console.log(scriptEl)
                // Attach script to head
                document.getElementsByTagName("head")[0].appendChild(scriptEl); 
                // Wait for tag to load before promise is resolved     
                scriptEl.addEventListener('load',() => {
                    resolve();
                });
            });
        },
        // executeScript() {
        //     // remove script tags from string (this has been declared globally)
        //     let script = string.replace(/<\/?script>/g,"")
        //     eval(script)
        // }
    },
    // methods: {
    //   async fetchData() {      
    //     const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");      
    //     this.data = await response.json();
    //   }, 
    // },
    // mounted() {
    //   this.fetchData();
    // },
    computed:{
        cleanMessage() {
            return this.$sanitize(this.data);
        }
    }
  };
</script>