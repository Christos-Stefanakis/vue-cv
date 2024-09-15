<template>
    <div class="left">
        <div class="profileLeft">
            <img src="../../../img/profile.jpg">
        </div>
        <div id="contactLeft">
            <h2>CONTACT</h2>
            <table>
                <tbody>
                    <tr>
                        <td id="center"><img src="../../../img/icons/icons8-email-100.png"></td>
                        <td>christos.stefanakis@outlook.com</td>
                    </tr>
                    <tr>
                        <td id="center"><img src="../../../img/icons/icons8-phone-90.png"></td>
                        <td>+420739737538</td>
                    </tr>
                    <tr>
                        <td id="center"><img src="../../../img/icons/icons8-location-100.png"></td>
                        <td>Czech Republic, Brno, Styrice</td>
                    </tr>
                    <tr>
                        <td id="center"><img src="../../../img/icons/icons8-linkedin-90.png"></td>
                        <td><a href="https://www.linkedin.com/in/christos-stefanakis-74199543/">linkedin.com/in/christos-stefanakis-74199543</a></td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div id="skillsLeft">
            <h2>SKILLS</h2>
            <ul>
                <li>Programming (Python, Java)</li>
                <li>Web Design (HTML, CSS)</li>
                <li>Scripting</li>
                <li>SQL</li>
                <li>MS Office</li>
                <li>Computer System Repair and Configuration</li>
                <li>Customer Service</li>
                <li>Team Leadership</li>
                <li>Order and Inventory Management</li>
                <li>Technical Support</li>
            </ul>
        </div>
        <div id="languageLeft">
            <h2>LANGUAGES</h2>
            <ul>
                <li>Greek: C2</li>
                <li>Czech: C1</li>
                <li>English: B1</li>  
            </ul>
        </div>
  
        <div id="hobbiesLeft">
            <h2>HOBBIES</h2>
            <ul>
                <li>Multimedia applications</li>
                <li>Cycling</li>
                <li>Cooking</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftPage',
    props: {
    msg: String
    }
}
</script>