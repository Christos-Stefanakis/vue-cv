
<template>
<div class="main">

    <h1>CHRISTOS STEFANAKIS</h1>

    <h2 id="aboutme">ABOUT ME</h2>
    <p>I am a dedicated and versatile Computer and Network Engineer with a strong interest in programming, web design, and scripting. I am currently expanding my technical skills through courses in programming, SQL and JavaScript. My professional experience includes leadership roles where I have overseen customer service, order management, employee supervision, machinery maintenance, and sales operations.</p>

    <h2 id="skills">SKILLS</h2>
    
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

    <h2 id="coursesattended">COURSES ATTENDED</h2>
    <ul>
        <li>
            <a href="https://sdacademy.cz/kurzy/java/">Software Development Academy,</a> March 2024, in progress
            <br>
            <b>Git, JUnit, SQL, HTML, CSS, Angular, Java Script, Node js, Angular CLI</b>
        </li>
        <li>
            University of California, Davis, February 2024, in progress
            <br>
            <b>JavaScript</b>
        </li>
        <li>
            Americká Jazykovka, January 2024, in progress
            <br>
            <b>English</b>
        </li>
        <li>
            University of Michigan, December 2023
            <br>
            <b>Python</b>
        </li>
    </ul>

    <h2 id="education">EDUCATION</h2>

    <div class="work">  
        <h2>I.E.K. (Institute of Vocational Training)</h2>
        <p><b>Diploma: </b>Network Engineer and web developer</p>
        <p>ISCED 4</p> 
        <p>2003 - 2006</p>
    </div>

    <ul>
        <li>Installation and configuration of computers, networks.</li>
        <li>Web sites building and multimedia applications.</li>
    </ul>

    <div class="work">  
        <h2>T.E.E. (Technical Vocational Institute)</h2>
        <p><b>Diploma: </b>Support of operating systems and networks. (Information Technology)</p>
        <p>ISCED 3</p> 
        <p>2000 - 2003</p>
    </div>

    <ul>
        <li>Computer Engineer (hardware, software).</li>
        <li>Installations of operating systems and programs.</li>
        <li>Networks support and information systems.</li>
    </ul>

    <h2 id="workexperience">WORK EXPERIENCE</h2>

    <div class="work">    
        <h2>Team Leader, at Tesco Stores s.r.o,</h2> 
        <p>2012 - 2023</p>
        <p>District Brno-City, Czech Republic</p>
    </div>

    <ul>
        <li>Led a team of 12 employees, fostering a collaborative and productive work environment.</li>
        <li>Developed and managed employee schedules to ensure optimal coverage and efficient operations.</li>
        <li>Provided comprehensive training to team members, enhancing their skills and performance.</li>
        <li>Maintained high standards of customer service, resolving issues and ensuring customer satisfaction.</li>
        <li>Monitored team performance and implemented strategies to improve efficiency and effectiveness.</li>
        <li>Coordinated with other departments to streamline operations and achieve organizational goals.</li>
        <li>Conducted regular team meetings to communicate updates, provide feedback, and motivate staff.</li>
    </ul>

    <div class="work">  
        <h2>Computer support and Team leader at "Stadium" - entertainment center</h2> 
        <p>2008 - 2011</p>
        <p>66 Karaoli & Dimitriou str., 562 24 Thessaloniki - Evosmos, Greece</p>
    </div>

    <ul>
        <li>Team Leadership: Supervised a team of 9 employees, providing guidance, support, and training to ensure high performance and professional growth.</li>
        <li>Scheduling: Planned and managed work schedules, ensuring optimal coverage and efficient use of resources to meet operational demands.</li>
        <li>Order Management: Coordinated and placed orders for necessary supplies and equipment, maintaining inventory levels and ensuring timely replenishment.</li>
        <li>Customer Service: Delivered exceptional customer service, addressing and resolving customer inquiries and issues promptly to ensure satisfaction.</li>
        <li>Technical Support: Performed computer repairs and troubleshooting, resolving technical issues and ensuring the smooth operation of IT systems.</li>
        <li>Process Improvement: Identified and implemented process improvements to enhance team efficiency and service quality.</li>
    </ul>
  
    <div class="work">  
        <h2>Driver at Greek Army</h2> 
        <p>2007 - 2008</p>
        <p>Kaválla, Eastern Macedonia and Thrace, Greece</p>
    </div>
    <ul>
        <li>I performed the role of a driver.</li>
    </ul>
  
    <div class="work">  
        <h2>System Administrator at "College" - internet cafe</h2> 
        <p>2006 - 2007</p>
        <p>48 Gevgelis str., 561 21 Thessaloniki - Ampelokipoi, Greece</p>
    </div>

    <ul>
        <li>Customer Service: Providing excellent customer service, addressing inquiries, and resolving issues promptly.</li>
        <li>System Monitoring: Keeping track of computer usage, monitoring for any unusual activity, and ensuring the smooth operation of all systems.</li>
        <li>User Management: Creating and managing user accounts, ensuring appropriate access levels, and maintaining user databases.</li>
        <li>Financial Transactions: Handling payments, managing cash flow, and maintaining accurate records of transactions.</li>
        <li>Inventory Management: Keeping track of hardware and software inventory, ordering supplies as needed.</li>
    </ul>

    <div class="work">  
        <h2>School practice at Altec s.a.</h2> 
        <p>2006</p>
        <p>Michail Kalou 6, 546 29 Thessaloniki, Greece</p>
    </div>

    <ul>
        <li>Installation of computer units and their configuration.</li>
        <li>Connecting devices to the network.</li>
        <li>Troubleshooting peripheral components.</li>
    </ul>

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
export default {
    name: 'RightPage',
    props: {
    msg: String
    }
}
</script>