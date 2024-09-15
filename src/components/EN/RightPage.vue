
<template>
<div class="main">

    <h1>CHRISTOS STEFANAKIS</h1>

    <AboutMeEn></AboutMeEn>
    <SkillsEn></SkillsEn>
    <CoursesAttended></CoursesAttended>
    <Education></Education>

    <h2 id="workexperience">WORK EXPERIENCE</h2>

    <div id="languagesMain">
        <h2 id="languages">LANGUAGES</h2>
        <ul>
            <li>Greek: C2</li>
            <li>Czech: C1</li>
            <li>English: B1</li>  
        </ul>
    </div>

    <div id="hobbiesMain">
        <h2 id="hobbies">HOBBIES</h2>
        <ul>
            <li>Multimedia applications</li>
            <li>Cycling</li>
            <li>Cooking</li>
        </ul>
    </div>       
</div>

<div id="pdf">
    <a href="documents/Christos_Stefanakis_CV_en.pdf"><img style="width: 50px; position: fixed; bottom: 0px; right:10px;" src="../../../img/icons/pdf-icon.png"></a>
</div>
    
 </template>

<script>
import AboutMeEn from './Elements/AboutMeEn.vue';
import SkillsEn from './Elements/SkillsEn.vue';
import Education from './Elements/Education.vue';
import CoursesAttended from './Elements/CoursesAttended.vue';

export default {
    name: 'RightPage',
    components: {
    AboutMeEn,
    SkillsEn,
    Education,
    CoursesAttended
  }
}
</script>