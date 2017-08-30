'use strict';
const wtf = require('./src/index');
// const wtf = require('./builds/wtf_wikipedia');
// const wtf = require('./build');
function from_file(page) {
  let str = require('fs').readFileSync('./tests/cache/' + page.toLowerCase() + '.txt', 'utf-8');
  // console.log(wtf.plaintext(str));
  let r = wtf.parse(str);
  console.log(r.sections[20].tables[0]);
  // console.log(JSON.stringify(r.sections, null, 2));
}

// from_file('list');
// from_file("earthquakes");
// from_file("bluejays");
// from_file('Toronto');
// from_file('Toronto_Star');
// from_file('Radiohead');
// from_file('Jodie_Emery');
// from_file('Redirect')
// from_file("Africaans")
// from_file('rnli_stations');

// wtf.from_api('List_of_earthquakes_in_2011', 'en', function(markup) {
//   var obj = wtf.parse(markup);
//   console.log(obj);
// });

// {
//   type: '', //page/redirect/category/template
//   infoboxes: [{
//     template: '', //template name
//     data: {} //key-value data
//   }],
//   categories: [], //parsed categories
//   images: [], //image files + their md5 urls
//   interwiki: {},
//   sections: [{ //each heading
//       title: '',
//       images: '',
//       lists: '',
//       tables: '',
//       sentences: [{ //each sentence
//         text: ''
//         links: [{
//           text: '',
//           link: '' //(if different)
//         }]
//       }]
//     }]
// }
var str = `hello.
{| class="wikitable"
|-
! [[Ethnic origins of people in Canada|Ethnic Origin]] !! Population !! Percentage
|-
| [[English Canadian|English]] || 333,220 || 12.9
|-
| [[Chinese Canadian|Chinese]] || 308,690 || 12.0
|-
| [[Canadian]] || 291,665 || 11.3
|}`;
console.log(wtf.parse(str).sections[0].tables[0]);
