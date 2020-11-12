<template>
    <footer>
        <div class="container">
            <span>&copy; webdasein</span>
        </div>
    </footer>
</template>

<script>
   export default {
       name: 'Footer',
   }
</script>

<style scoped>
footer{
    color:rgb(255, 253, 253);
    padding: 0.75rem 0;
}
.container{
    display: flex;
    justify-content: center;
}
span{
    font-weight: bold;
}
</style>