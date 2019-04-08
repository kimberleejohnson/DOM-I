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
navitem1.setAttribute('src', siteContent["nav"]["nav-item-1"]);
navitem1.innerText = siteContent["nav"]["nav-item-1"]; 

 const navitem2 = navItems[1]; 
 navitem2.setAttribute('src', siteContent["nav"]["nav-item-2"]);
 navitem2.innerText = siteContent["nav"]["nav-item-2"];   

 const navitem3 = navItems[2]; 
 navitem3.setAttribute('src', siteContent["nav"]["nav-item-3"]); 
 navitem3.innerText = siteContent["nav"]["nav-item-3"]; 

 const navitem4 = navItems[3]; 
 navitem4.setAttribute('src', siteContent["nav"]["nav-item-4"]); 
 navitem4.innerText = siteContent["nav"]["nav-item-4"]; 

 const navitem5 = navItems[4]; 
 navitem5.setAttribute('src', siteContent["nav"]["nav-item-5"]); 
 navitem5.innerText = siteContent["nav"]["nav-item-5"]; 

 const navitem6 = navItems[5]; 
 navitem6.setAttribute('src', siteContent["nav"]["nav-item-6"]);
 navitem6.innerText = siteContent["nav"]["nav-item-6"];  
