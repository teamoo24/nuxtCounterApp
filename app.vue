<template>
  <div>
    <p>{{ counter }}</p>
    <button v-on:click="counterStore.countUp">+</button>
    <button v-on:click="counterStore.countDown">-</button>
    <button v-on:click="counterStore.Reset">Reset</button>
  </div>
</template>
<script setup>
  const counterStore = useCounterState()
  const { counter } = counterStore
</script>