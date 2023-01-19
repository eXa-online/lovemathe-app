<template>
    <div>
      <div class="centered_item start_button" v-if="!updating" @click="startIntro()"><img :src="letsStart" /></div>
      <div class="centered_item start_button" v-if="updating" disabled="true"><img :src="letsStartAnimated" /></div>
    </div>
  </template>
  
  <script>
  import { useMachine } from '@xstate/vue';
  import { createMachine, assign } from 'xstate';
  import Workbox from 'workbox-window';

    const update = assign({})
  
  const createUpdateMachine = (updating) => {
    return createMachine({
      id: 'update',
      initial: 'idle',
      context: {
        updating: updating
      },
      states: {
        idle: {
          on: {
            UPDATE: {
              target: 'updating',
              actions: 'update'
            }
          }
        },
        updating: {
          invoke: {
            src: 'update',
            onDone: {
              target: 'idle',
              actions: 'update'
            }
          }
        }
      }
    }, {
      actions: {
        update: assign({
          updating: (context, event) => {
            return !context.updating
          }
        })
      },
      services: {
        update: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 1000)
          })
        }
      }
    })
  }
  
  export default {
    name: "StartComponent",
    data() {
      return {
        updating: false,
        letsStart: require('../assets/introduce_games/start.svg'),
        letsStartAnimated: require('../assets/introduce_games/start_animated.svg')
      }
    },
    methods: {
        startIntro() {
            this.$router.push({ path: '/introduction' });
        }
    },
    mounted() {
      const wb = new Workbox('/sw.js');
      wb.addEventListener('updatefound', () => {
        if (wb.installing) {
          this.updating = true
          }
        });
      }
  };
  
  </script>
  
  <style scoped>
  .centered_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .start_button {
    width: 15vw;
  }
  </style>
  