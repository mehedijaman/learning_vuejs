<script setup>
const logo = {
    a: {
        href: 'http://www.example.com',
        appName: 'AppLand'
    },
    img: {
        src: 'imageurl.com',
        alt: 'Logo Image',
    }
}

const menus = [
    { name:'Home',link:'#hero', status:'active'},
    { name:'App Featurees',link:'#features'},
    { name:'Gallery',link:'#gallery'},
    { name:'Pricing',link:'#pricing'},
    { name:'F.A.Q',link:'#faq'},
    { name:'F.A.Q',link:'#faq'},
    { name:'Contact',link:'#contact'},
]

</script>

<template>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top  header-transparent ">
        <div class="container d-flex align-items-center justify-content-between">

        <div class="logo">
            <h1><a :href="logo.a.href">{{ logo.a.appName }}</a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a :href="logo.a.href"><img :src="logo.img.src" :alt="logo.img.alt" class="img-fluid"></a> -->
        </div>

        <nav id="navbar" class="navbar">
            <ul>
                <li v-for="menu, index in menus" :key="index"><a class="nav-link scrollto" :class="'active' == menu.status?active:''" :href="menu.link">{{ menu.name }}</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
        </div>
    </header><!-- End Header -->
</template>

<style scoped>
</style>