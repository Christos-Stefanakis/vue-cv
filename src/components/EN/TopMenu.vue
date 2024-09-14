<template>
    <div class="navbar">
        <a href="cz/index.html"><img src="../../../img/icons/czflag.png"></a>
        <a id="hobbiesMenu" href="#hobbies">HOBBIES</a>
        <a id="languagesMenu" href="#languages">LANGUAGES</a>
        <a href="#workexperience">WORK EXPERIENCE</a>
        <a href="#education">EDUCATION</a>
        <a href="#coursesattended">COURSES</a>
        <a id="skillsMenu" href="#skills">SKILLS</a>
        <a href="#aboutme">ABOUT ME</a>
    </div>
</template>

<script>
export default {
    name: 'TopMenu',
    props: {
    msg: String
    }
}
</script>