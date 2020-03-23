<template>
     <b-card bg-variant="light" :header="name" class="text-center">
        <b-card-text>
            <div>Cases: {{cases}}</div>
            <div>Deathts: {{deaths}}</div>
            <div>Recovered: {{recovered}}</div>
        </b-card-text>
      </b-card>
</template>
<script>
export default {
    props:['name','cases','deaths','recovered']
}
</script>