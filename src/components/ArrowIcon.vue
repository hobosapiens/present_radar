<template>
    <svg 
        :style="`transform: translate(-50%, -50%)rotate(${rotate}deg)`"
        class="arrow-icon"
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 121.64 122.86"
    >
        <path d="M59,1.24.2,120.08a1.92,1.92,0,0,0,.88,2.58,1.89,1.89,0,0,0,1.76,0h0l58-30.87,58,30.87h0a1.89,1.89,0,0,0,1.76,0,1.92,1.92,0,0,0,.88-2.58L62.64,1.24a2,2,0,0,0-3.64,0Z" />
    </svg>
</template>

<script>
export default {
    name: 'ArrowIcon',

    props: {
        rotate: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.arrow-icon {
    width: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
}
</style>
