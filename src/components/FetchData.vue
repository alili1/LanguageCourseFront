<template> 
    <div v-if="!this.allData.htmlData">Loading...</div>
    <pre v-else>
        <span v-html="this.allData.htmlData"></span>
    </pre>
</template>

<script>
import { sanitize } from 'js-sanitizer';
import { fetchMessage } from '../services/fetchers'

  export default {
    data() {
      return {
        allData: {
            jsData: null,
            htmlData: null
        }
      };
    },
    async created() {
        try {
            await fetchMessage().then((msg) => {
                this.allData.htmlData = msg.htmlMessage
                this.allData.jsData = msg.jsMessage
            }).then(this.loadScripts)
        }
        catch(error){
            this.allData.htmlData = 'server error :('
        }
    },
    methods: {
        loadScripts() {
            var s = document.createElement('script');
            s.text = this.allData.jsData
            document.getElementsByTagName('head')[0].appendChild(sanitize(s));
            //document.getElementsByTagName('head')[0].appendChild(s);
        }
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
            return this.$sanitize(this.allData.htmlData);
        },
        cleanJs() {
           return sanitize(this.allData.jsData);
        }
    }
  };
</script>