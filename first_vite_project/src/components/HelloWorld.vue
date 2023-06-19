<script setup>
  import { ref } from 'vue'

  defineProps({
    msg: String,
  })

  const count = ref(0)

  const greet = function(name){
    return name;
  }

  console.log(greet("Mehedi"))

  const greet2 = (name) => name
  console.log(greet2("Hello Mehedi"))


  const fname = "Mehedi"
  const lname = "Jaman"

  const output = `Hello ${fname} ${lname}`

  console.log(output)


  const p1 = 23
  const p2 = 343

  const output2 = `Total Price of ${p1} + ${p2} = ${p1+p2}`

  console.log(output2);

  
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count+=2">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
