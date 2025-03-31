import { createApp } from 'vue';
import App from './components/App.vue';

console.log('Vue is loading...');  // Check browser console for this

document.addEventListener('DOMContentLoaded', () => {
console.log('DOM loaded, mounting Vue...');  // Should appear after page load
  const app = createApp(App);
  app.mount('#app');
});
