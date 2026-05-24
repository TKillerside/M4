<script setup>
import CardHeroes from "../components/CardHeroes.vue"
import { onMounted, ref } from "vue";

let cards = ref([
    {
        img: "https://static.wikia.nocookie.net/zlodei/images/3/37/%D0%A3%D0%BE%D0%BB%D1%82%D0%B5%D1%80_%D0%A5%D0%B0%D1%80%D1%82%D0%B2%D0%B5%D0%BB%D0%BB_%D0%A3%D0%B0%D0%B9%D1%82.jpg/revision/latest?cb=20230321202509&path-prefix=ru",
        title: "Уолтер Уайт",
        desc: "",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-HXxDW-QrBQNfQqa4XXe1w0JmikIfxaX3xsYCbdKmw-OZJlCuKdGW6nWdquaIzAYaOHJm8cjlR_wqO0z589qahA8CU0hWTIwl-ryOw&s=10",
        title: "Джесси Пинкман",
        desc: "",
    },
    {
        img: "https://static.wikia.nocookie.net/breakingbad/images/b/be/Season_4_-_Gus.jpg/revision/latest/scale-to-width/360?cb=20220803152647&path-prefix=ru",
        title: "Гус Фринг",
        desc: "",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCz9Im_TES8z1Qv-54hhgUPRQ_Nfv53W_AA&s",
        title: "Сол Гудмэн",
        desc: "",
    }
]);
</script>

<template>
    <section>
        <CardHeroes v-for="(card, i) in cards" :key="i" :card="card"/>
    </section>
</template>

<style scoped>
section {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(4, 1fr);
}
</style>