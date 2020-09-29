<h1 align="center"> Software Developers Identity(portfolio) 🔥 </h1> 
<h3 align="center"> The most amazing ,beautiful, simple and  responsive portfolio template for Software Developers! </h3>

<p align="center">
  <kbd>
<img src="https://user-images.githubusercontent.com/62281201/93919142-b83fe080-fd26-11ea-90e2-c5684cb02d42.gif"></img>
  </kbd>
</p>

  <a align="center" href="https://reactjs.org/"><img alt="Made With React" src="https://img.shields.io/badge/made%20with-react-61DAFB?style=flat-square" /></a>
   <a align="center" href="http://badges.mit-license.org/"><img alt="License" src="http://img.shields.io/:license-mit-blue.svg?style=flat-square?style=flat-square" /></a>
  
##Sections 📚

✔️ Summary and About me\
✔️ Skills\
✔️ Github Profile\
✔️ Projects\
✔️ Contact me


To view a live example, **[click here](https://mugheesmb.github.io/developerIdentity/)**

## Getting Started....
- The website is completely built on `react-js` framework of `javascript` and that's why we need `nodejs` and `npm` installed.
- After the successful installation of `nodejs` and `npm`, clone the repository into your local system using below command:

```bash
# Clone this repository
$ git clone https://github.com/MugheesMb/developerIdentity.git

# Go into the repository
$ cd developerIdentity

# Install dependencies
$ npm install

#Start's development server
$ npm start
```
# Customize it to make your own portfolio ✏️

### package.json

Open this file, which is in the main cloned directory, choose any "name" and change "homepage " to `https://<your-github-username>.github.io`. Do not forget the `https://`, otherwise fonts will not load.

### Personal Information

First of all go to src/components/main/Main and go to line number 17 

```javascript

 I' m Your name.</span> change this with your name
 ```
 
### Skills

Now go to src/component/data/skillsData  and change this with your skills..

```javascript
 {
        id: '1',
        title: 'HTML5 / CSS3',     // change this with your skill name
        icon: 'fab fa-html5',       // go to fontawsome and find your desire icon and paste it here
        percent: 99,             // change this to how much  percent you are good at this skills
        barloading: 98           // barloading show on  display
        
    },
    {
        id: '2',
        title: 'SASS / SCSS / Responsive web',             // change this with your skill name
        icon: 'fab fa-sass',                       // go to fontawsome and find your desire icon and paste it here
        percent: 90,             // change this to how much  percent you are good at this skills
        barloading: 90        // barloading show on  display
    },
    
    Do same with rest of skills and if you want to add more skills then , just copy this and paste and change its id to next number ...
    
    {
        id: '2',
        title: '',
        icon: '',           
        percent: ,          
        barloading:  
    },
```    

### Projects

Now go to src/component/project/Projectdata  and change this with your project data...


```javascript

{
        info: 'write your app little info here',
        linkUrl: 'deployment link',   
      title: '  your app name',
      imageUrl: df ,          
      id: 1,
    },
    {
      info: 'write your app little info here',
      linkUrl: 'deployment link',
    title: '  your app name',
      imageUrl: df,
      id: 2,     
    },

if you want to add more projects then , just copy this and paste and change its id to next number ...

 info: 'write your app little info here',
        linkUrl: 'deployment link',   
      title: '  your app name',
      imageUrl: df ,          
      id: 1,

```


## if you want to do changing in about me  , then you do by going to  src/component/about/About and line number 15


### Contact Me


Now go to src/component/footer/footer  and change this with your information

```javascript

 <span > write your email here </span>          //  On line number 16 
 
  <span > write your number here </span>                // on line number 22
  
  <span >  put your linkdin link here</span>  on line number 24
  
  ```
  
  ## Deployment 📦
  
  When you are done with the setup, you should host your website online.
We highly recommend to read through the [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Deploying to Github Pages

This section guides you to deploy your portfolio on Github pages.

- Navigate to `package.json` and enter your domain name instead of `https://developerfolio.js.org/` in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/developerIdentity`, add the same to the homepage section of `package.json`.
  
 - Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).


## Contributing 💡
If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/MugheesMb/developerIdentity/pulls).

plz give star on github :)


