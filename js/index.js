const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Adding images 
  // CTA image 
  const ctaImg = document.getElementById("cta-img"); 
  ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

  // Middle image 
  const middleImg = document.getElementById("middle-img"); 
  middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Adding nav bar 

// Adding a variable so I can select and assign multiple nav items 
const navItems = document.querySelectorAll('nav a');  
 
  const navitem1 = navItems[0]; 
  navitem1.innerText = siteContent["nav"]["nav-item-1"]; 
  // Setting color to each individual item 
  navitem1.style.color = 'green'; 

  const navitem2 = navItems[1]; 
  navitem2.innerText = siteContent["nav"]["nav-item-2"];   
  navitem2.style.color = 'green';

  const navitem3 = navItems[2]; 
  navitem3.innerText = siteContent["nav"]["nav-item-3"]; 
  navitem3.style.color = 'green';

  const navitem4 = navItems[3]; 
  navitem4.innerText = siteContent["nav"]["nav-item-4"]; 
  navitem4.style.color = 'green';

  const navitem5 = navItems[4]; 
  navitem5.innerText = siteContent["nav"]["nav-item-5"]; 
  navitem5.style.color = 'green';

  const navitem6 = navItems[5]; 
  navitem6.innerText = siteContent["nav"]["nav-item-6"];  
  navitem6.style.color = 'green';

  // Adding new nav items 

  // Append 
    const addedNav1 = document.createElement('a'); 
    const addedNavText = document.createTextNode('New nav'); 
    // Adding the text to the new a Element 
    addedNav1.appendChild(addedNavText); 
    addedNav1.style.padding = "0 0 0 45px"; 

    // Adding to the nav bar 
    navitem6.appendChild(addedNav1); 

  // Prepend 
    const addedNav2 = document.createElement('a'); 
    const addedNavText2 = document.createTextNode('Other new nav'); 
    // Adding the text to the new a Element 
    addedNav2.appendChild(addedNavText2); 
    addedNav2.style.padding = "0 45px 0 0"; 


    // Adding to the nav bar 
    navitem1.prepend(addedNav2);



 


// CTA, adding H1 
const ctaText = document.querySelector('.cta-text h1'); 
ctaText.innerText = siteContent["cta"]["h1"]; 

// CTA, adding button for Get Started 
 const ctaButton = document.querySelector('.cta-text button'); 
 ctaButton.innerText = siteContent["cta"]["button"];

// Main content section 

 const headings = document.querySelectorAll('h4'); 
 headings[0].innerText = siteContent['main-content']['features-h4']; 
 headings[1].innerText = siteContent['main-content']['about-h4']; 
 headings[2].innerText = siteContent['main-content']['services-h4']; 
 headings[3].innerText = siteContent['main-content']['product-h4']; 
 headings[4].innerText = siteContent['main-content']['vision-h4']; 

 const mainInfo = document.querySelectorAll('p'); 
 mainInfo[0].innerText = siteContent['main-content']['features-content']; 
 mainInfo[1].innerText = siteContent['main-content']['about-content']; 
 mainInfo[2].innerText = siteContent['main-content']['services-content']; 
 mainInfo[3].innerText = siteContent['main-content']['product-content']; 
 mainInfo[4].innerText = siteContent['main-content']['vision-content']; 

// Contact section 
const contactHeading= document.querySelector('.contact h4'); 
contactHeading.innerText = siteContent['contact']['contact-h4'];

const contactdetails = document.querySelectorAll('.contact p'); 
contactdetails[0].innerText = siteContent['contact']['address']; 
contactdetails[1].innerText = siteContent['contact']['phone']; 
contactdetails[2].innerText = siteContent['contact']['email'];

// Footer 
const footer = document.querySelector('footer'); 
footer.innerText = siteContent['footer']['copyright']; 





