<h1 align="center"> Software Developers Identity(portfolio) 🔥 </h1> 
<h3 align="center"> The most amazing ,beautiful, simple and  responsive portfolio template for Software Developers! </h3>

  <a align="center" href="https://reactjs.org/"><img alt="Made With React" src="https://img.shields.io/badge/made%20with-react-61DAFB?style=flat-square" /></a>
   <a align="center" href="http://badges.mit-license.org/"><img alt="License" src="http://img.shields.io/:license-mit-blue.svg?style=flat-square?style=flat-square" /></a>
  
# Sections 📚

✔️ Summary and About me\
✔️ Skills 
✔️ Github Profile
✔️ Projects
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













