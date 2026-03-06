import { computed, signal } from '@angular/core';

const count = signal(0);
const doubled = computed(() => count() * 2);

count.set(2);
count.update((v) => v + 3);

console.log('count:', count());
console.log('doubled:', doubled());
