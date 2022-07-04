<template>
  <form id="stageform" @submit.prevent="onSubmit">
    <div v-for="gameName in gameOrder" :key="gameName">
      <label :for="gameName">{{ gameName }}: </label>
      <input @input="onChange" type="range" :id="gameName" :name="gameName" min="0" max="5"/>
    </div>
    <input type="submit" value="change" />
  </form>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores/MainStore'
export default {
  name: 'StageForm',
  data() {
    return {
      formData: {}
    }
  },
  computed: {
    ...mapState(useMainStore, ["gameOrder"]),
  },
  methods: {
    ...mapActions(useMainStore, ['setBadgeLevels']),
    onChange (e) {
      this.formData[e.target.name] = e.target.value
    },
    onSubmit (e) {
      e.preventDefault();
      if (Object.keys(this.formData).length !== 0){
        this.setBadgeLevels(this.formData)
      }
      this.$router.push({ path: '/overall-badge' });
    }
  }
}
</script>
