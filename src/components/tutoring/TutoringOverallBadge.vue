<template>
    <div class="overview">
      <router-link @mouseover="hover_1 = true" @mouseleave="hover_1 = false" to="/tutoring/vorschule/abzaehlen_one" class="accordion abzaehlen" :class="[hover_1 ? 'big_tab' : 'small_tab']">
          <h1>Abzählen</h1>
          <div v-if="hover_1" class="text_container">
            <p>Hier üben die Kinder verschiedene Anzahlen von Gegenständen genau abzuzählen. Auch das ist die Grundlage, um später sicher rechnen zu können.</p>
          </div>
      </router-link>
      <hr>
      <router-link @mouseover="hover_2 = true" @mouseleave="hover_2 = false" to="/tutoring/vorschule/simultanerfassung_one" class="accordion simultanerfassung" :class="[hover_2 ? 'big_tab' : 'small_tab']">
          <h1>Simultanerfassung</h1>
          <div v-if="hover_2" class="text_container">
            <p>In diesem Spiel üben die Kinder die Anzahl von Dingen auf einen Blick zu bestimmen ohne abzählen zu müssen. Die Simultanerfassung ist eine wichtige Grundlage um das Rechnen zu lernen.</p>
          </div>
      </router-link>
      <hr>
      <router-link @mouseover="hover_3 = true" @mouseleave="hover_3 = false" to="/tutoring/vorschule/orientierung_one" class="accordion orientierung" :class="[hover_3 ? 'big_tab' : 'small_tab']">
          <h1>Orientierung</h1>
          <div v-if="hover_3" class="text_container">
            <p>Hier üben die Kinder die Lagebeziehungen rechts links, oben und unten sicher zu unterscheiden. Das ist die Voraussetzung, um sich auch in verschiedenen Zahlenräumen orientieren zu können und geometrische Aufgaben zu lösen.</p>
          </div>
      </router-link>
      <hr>
      <router-link @mouseover="hover_4 = true" @mouseleave="hover_4 = false" to="/tutoring/vorschule/mengen_one" class="accordion mengen" :class="[hover_4 ? 'big_tab' : 'small_tab']">
          <h1>Mengen</h1>
          <div v-if="hover_4" class="text_container">
            <p>In diesem Spiel üben die Kinder zuerst unterschiedliche Mengen von Gegenständen miteinander zu vergleichen und zu entdecken, wo mehr Gegenstände sind. Im Verlauf des Spiels üben die Kinder erkennen, um wie viele Gegenstände sich die Mengen unterscheiden.</p>
          </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: "TutoringOverallBadge",
  data() {
    return {
      hover_1: false,
      hover_2: false,
      hover_3: false,
      hover_4: false,
    }
  },
};
</script>

<style scoped>
.accordion {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: none;
  text-align: center;
  word-break: break-word;
  outline: none;
  transition: 0.4s;
}
.overview {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.big_tab {
  height: 75%;
}
.small_tab {
  height: 25%;
}
.abzaehlen {
  background-image: url("../../assets/abzaehlen_one/background.svg");
}
.simultanerfassung {
  background-image: url("../../assets/simultanerfassung_one/background.svg");
}
.orientierung {
  background-image: url("../../assets/orientation_one/background.svg");
}
.mengen {
  background-image: url("../../assets/mengen_one/background.svg");
}
h1 {
  margin-top: 5%;
  font-size: 2.5em;
}
p {
  padding: 10%;
}
a, a:visited {
  text-decoration: none;
  color: #ffffff;
}
.text_container {
  width: 70%;
  margin: auto;
}
hr{
  display: block;
  border: 0;
  border-top: 5px solid #fff;
  margin: 0 0;
  padding: 0;
}
</style>