<template>
    <svg width="374" height="300" viewBox="0 0 374 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
        class="path1" 
        d="M6.99999 135C6.99999 142.933 5.52253 150.93 5.22222 158.889C4.78217 170.55 4.87326 182.278 5.05555 193.944C5.36045 213.458 12.6247 227.25 26.8889 241C74.6327 287.022 142.38 302.012 206.889 292.556C239.374 287.794 266.956 274.241 292.667 254.278C318.762 234.015 345.502 208.216 358.778 177.333C376.097 137.044 374.172 89.3883 342.833 56.6667C308.514 20.833 252.217 10.2189 205.111 6.5C191.118 5.39529 176.923 5.70201 162.889 5.22222C155.909 4.98361 148.726 4.56099 141.778 5.5C137.466 6.08266 134.12 6.88044 131 10" stroke="#FF0000" 
        stroke-width="8" 
        stroke-linecap="round"
        />
    </svg>
</template>

<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({
    name: 'Error'
})
</script>

<style>
@media (prefers-reduced-motion) {
path {
    animation: none !important;
    stroke-dasharray: unset !important;
}
}
@keyframes grow {
    0% {
        stroke-dashoffset: 1px;
        stroke-dasharray: 0 1000px;
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    to {
        stroke-dasharray: 1000px 0;
    }
}
.path1 {
    stroke-dashoffset: 1px;
    stroke-dasharray: 1000px 0;
    animation: grow 0.5s ease forwards;
    transform-origin: center;
    animation-delay: 0s;
}
</style>