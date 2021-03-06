![Logo](./public/template-vue.png)
# ioBroker.template-vue
[![NPM version](http://img.shields.io/npm/v/iobroker.template-vue)](https://www.npmjs.com/package/template-vue)
[![Downloads](https://img.shields.io/npm/dm/iobroker.template-vue.svg)](https://www.npmjs.com/package/iobroker.template-vue)
[![stable](http://iobroker.live/badges/template-vue-stable.svg)](http://iobroker.live/badges/template-vue-stable.svg)
[![installed](http://iobroker.live/badges/template-vue-installed.svg)](http://iobroker.live/badges/template-vue-installed.svg)
[![Dependency Status](https://img.shields.io/david/steiger04/iobroker.template-vue.svg)](https://david-dm.org/steiger04/iobroker.template-vue)
[![Known Vulnerabilities](https://snyk.io/test/github/steiger04/ioBroker.template-vue/badge.svg)](https://snyk.io/test/github/steiger04/ioBroker.template-vue)

![Test and Release](https://github.com/steiger04/ioBroker.template-vue/workflows/Test%20and%20Release/badge.svg)

[![NPM](https://nodei.co/npm/iobroker.template-vue.png?downloads=true)](https://nodei.co/npm/iobroker.template-vue/)

## template-vue adapter for ioBroker
The template integrates Quasar with Vuex, a Vue.js-based framework and enables the simple and efficient development
of adapter administration. 

## Developer manual
### Perform the following steps in sequence:
1. Install Quasar
   ```
   npm install -g @quasar/cli
   ```

2. Clone github repo into your **_Development Folder_**
   ```
   git clone https://github.com/Steiger04/ioBroker.template-vue.git
   ```
3. npm install and eslint
   ```
   cd path/to/your/development-folder/ioBroker.template-vue
   npm install   
   ./node_modules/.bin/eslint --fix --ext .js,.vue ./
   ```
4. Rename ioBroker.template-vue to iobroker.template-vue
5. Go to your ioBroker folder and install adapter
   ```   
   cd path/to/your/iobroker-folder
   npm i path/to/your/development-folder/iobroker.template-vue
   ```

## Getting started
#### Start development server
 ```   
 cd iobroker.template-vue
 quasar dev  
 ```
#### Build admin
 ```   
 cd iobroker.template-vue
 quasar build
 ```
The admin folder is created in the iobroker.template-vue folder.

**Now remember to do an upload.**
 ```   
 cd iobroker
 iobroker upload template-vue
 ```
## Best Practices
All native properties are provided reactively in the Vuex store, including the necessary getters and
mutations. The following native sample object is used in the template:
```
"native": {
    "option1": false,
    "option2": "50",
    "adressen": [
      {
        "plz": 50259,
        "stadt": "Köln",
        "strasse": "Melchiorstraße",
        "hausnummer": 3
      },
      {
        "plz": 60327,
        "stadt": "Frankfurt am Main",
        "strasse": "Ludwig-Erhard-Anlage",
        "hausnummer": 1
      },
      {
        "plz": 80336,
        "stadt": "München",
        "strasse": "Schillerstraße",
        "hausnummer": 9
      }
    ]
  }
```
In the Home.vue file option1 and option2 are made available as computed property and can be used
immediately by all Quasar components in the template section.

``` javascript
<script>
import { mapFields } from 'vuex-map-fields';
import { fieldsTemplate } from '../mixin/fieldsTemplate';

export default {
    name: 'Home',
    mixins: [fieldsTemplate],
    data() {
        return {
            /* myNotStoreData1: '' */
        };
    },
    computed: {
        ...mapFields('template', {
            option1: 'native.option1',
            option2: 'native.option2',
        }),
    },
};
</script>
```
If the native object in io-package.json is extended by an option3, only the following needs
to be added to mapFields in Home.vue:
``` javascript
    computed: {
        ...mapFields('template', {
            option1: 'native.option1',
            option2: 'native.option2',
            option3: 'native.option3',
        }),
    },
};
```
That's all!
## Changelog

### 1.0.0
* (Steiger04) initial release

## License
MIT License

Copyright (c) 2020 Steiger04 <steiger04@posteo.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
