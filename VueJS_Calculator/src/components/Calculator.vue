<script setup>
    import { ref } from 'vue';

    let x = ref(0)
    let y = ref(0)

    let result = ref(0)
</script>
<template>
    <div class="card">
        <input type="text" id="x" class="number" v-model="x">
        <button type="button" id="add" @click="result = parseInt(x) + parseInt(y)">+</button>
        <button type="button" id="sub" @click="result = x-y">-</button>
        <button type="button" id="mul" @click="result = x*y">*</button>
        <button type="button" id="div" @click="result = x/y">/</button>
        <input type="text" id="y" class="number" v-model="y">
        <input type="text" id="result" class="number" v-model="result">
        
    </div>
</template>
<style>
    .number {
        padding: 0.6em 1.2em;
        width: 50px;
    }
</style>