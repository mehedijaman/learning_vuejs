<script setup>
const hero = {
    title:'App Landing page template',
    slogan:'Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait',
    stores:[
        {
            name:'Google Play',
            icon_class:'bx bxl-play-store',
            link:'#'
        },
        {
            name:'App Store',
            icon_class:'bx bxl-apple',
            link:'#'
        }
    ]
}
</script>

<template>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                <div>
                    <h1>{{ hero.title}}</h1>
                    <h2>{{ hero.slogan }}</h2>
                    <a :href="store.link" class="download-btn" v-for="(store, index) in hero.stores" :key="index"><i :class="store.icon_class"></i> {{ store.name }}</a>
                </div>
                </div>
                <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
                <img src="/img/hero-img.png" class="img-fluid" alt="">
                </div>
            </div>
        </div>
    </section><!-- End Hero -->`
</template>

<style scoped></style>