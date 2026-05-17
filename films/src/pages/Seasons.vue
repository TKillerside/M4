<script setup>
import CardSeasons from "../components/CardSeasons.vue"
import { onMounted, ref } from "vue";

let cards = ref([
    {
        img: "https://www.kino-teatr.ru/video/28821/start.jpg",
        title: "1 сезон (2008 год): 7 серий.",
        desc: "У школьного учителя химии Уолтера Уайта диагностируют неоперабельный рак легких. Пытаясь обеспечить семью, он объединяется с бывшим учеником Джесси Пинкманом и начинает варить метамфетамин.",
    },
    {
        img: "https://www.kino-teatr.ru/video/28823/start.jpg",
        title: "2 сезон (2009 год): 13 серий.",
        desc: "Наркобизнес начинает приносить плоды, но Уолтер и Джесси сталкиваются с жестокостью картелей, рэкетирами и первыми серьезными потерями.",
    },
    {
        img: "https://www.kino-teatr.ru/video/28824/start.jpg",
        title: "3 сезон (2010 год): 13 серий.",
        desc: "Уолтер пытается наладить производство в огромной лаборатории, работая на крупного наркобарона Гуса Фринга, что приводит к разладу в семье и конфликтам.",
    },
    {
        img: "https://www.kino-teatr.ru/video/28825/start.jpg",
        title: "4 сезон (2011 год): 13 серий.",
        desc: "Противостояние между Уолтером и Гусом Фрингом накаляется до предела. Учитель химии разрабатывает опасный план по устранению своего босса.",
    },
    {
        img: "https://www.kino-teatr.ru/video/28827/start.jpg",
        title: "5 сезон (2012–2013 годы): 16 серий",
        desc: "Хайзенберг становится крупнейшим наркодилером, но его империя начинает рушиться под давлением УБН (DEA) и внутренних разногласий с Джесси.",
    },
]);
</script>

<template>
    <section>
        <CardSeasons v-for="(card, i) in cards" :key="i" :card="card"/>
    </section>
</template>

<style scoped>
section {
    display: grid;
    gap: 40px;
}
</style>