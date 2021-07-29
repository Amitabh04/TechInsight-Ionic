<template>
    <div>
       
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'TicketList',
    data () {
        return {
            segment: [
                { name: 'Check-In Request(New)', color: '#52b6f9' },
                { name: 'Check-In Approval', color: '#f39c12' },
                { name: 'Pre-Check', color: '#f39c12' },
                { name: 'Pre-Check Validation', color: '#f39c12' },
                { name: 'Nest-Active', color: '#e74c3c' },
                { name: 'Reject-Check Out', color: '#ff6a5a' }
            ],
            tickets: [
                { name: 'IE04443A-Anchor', color: '#52b6f9' },
                // { name: 'IE04443B-Anchor', color: '#f39c12' },
                // { name: 'IE04443C-Anchor', color: '#f39c12' },
                // { name: 'IE04443D-Anchor', color: '#f39c12' },
                // { name: 'IE04443E-Anchor', color: '#e74c3c' },
                // { name: 'IE04443F-Anchor', color: '#ff6a5a' }
            ]
        }
    },
    

});
</script>

<style lang="css">

</style>
