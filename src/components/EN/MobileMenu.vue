<template>
   <div class="mobilemenu">
        <a href="cz/index.html"><img src="../../../img/icons/czflag.png"></a>
        <a href="#aboutme">ABOUT ME</a>
        <a href="#skills">SKILLS</a>
        <a href="#education">EDUCATION</a>
        <a href="#coursesattended">COURSES</a>
        <a href="#workexperience">WORK EXPERIENCE</a>
        <a href="#languages">LANGUAGES</a>
        <a href="#hobbies">HOBBIES</a>
        <a href="#contact">CONTACT</a>
    </div> 
</template>

<script>
export default {
    name: 'MobileMenu',
    props: {
    msg: String
    }
}
</script>