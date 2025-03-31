<template>
    <div id="app">
      <h1>Hello from Vue 3 in Django! testing</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'This is a Vue 3 component rendered through Django'
      };
    }
  };
  </script>
