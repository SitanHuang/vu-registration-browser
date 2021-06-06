/*
 * After you log into YES,
 * 1. navigate to Class Cart
 * 2. inject the following script to browser
 * 3. wait for the script to register all classes for you
 *    (no need to click submit)
 */

var COMMODORE_ID = '000' + location.href.replace(/^.*commodoreIdToLoad=C0(.+)\d.*/,'$1');
var TERM_ID = document.getElementById('selectedTerm')?.value;

var CLASS_IDS = Array.from(jQuery('td[id^=classNumber_]')).map(x => x.id.replace('classNumber_', ''));

if (!COMMODORE_ID.length || !TERM_ID?.length || !CLASS_IDS.length
  || CLASS_IDS.filter(x => x.match(/^\d{4}$/)).length != CLASS_IDS.length)
  throw 'Unable to extract commodore id, term id or class ids';

console.log("Enrolling");

var queueEnrollBase = `https://acad.app.vanderbilt.edu/more/StudentClass!queueEnroll.action?selectedTermCode=${TERM_ID}`;

var adam = [
  'Fe7dTGZcTmkMWPe',
  'DCo+ESkNWOxcO8kf',
  'E8kNqe/cMq',
  'rSokeCodW4bkxCoflmoqWQWB',
  'ycrGWRLWf1tdPCk3vutcSq',
  'qCkWchLwxSo6',
  'amosW5hdOmoUW4ZcPCoRWODTW7tcHW',
  't8kzWPvMamoaW7jjWRW',
  'W69FWRVdKmo0tg8',
  'WOPoxmoUW6hdHYGWW4ygyxW',
  'l8kOFCk3W6ilD190aG',
  'WOLmwCoSW6/dJYqhW7y9u3m',
  'l8oCW6BcGSoIW5yt',
  'smkyWP4psCkXW7rTWQ7cNejG',
  'W6JdM8oCt1tdQ8oZWQZcN8oa',
  'sConfmoaWR8rxmoVomo2',
  'CCkxlCktWP/cQmk/D8o2',
  'W6DRjCk0oCkO',
  'WRtdNmoTt2mDtmkwWRVcSLWu',
  'W5pdLHXulSotq3ldQ8oL',
  'W5rXu0OapmoDW5hdSCoa',
  'ECo5i8omiqLtWRtdRXZdHa8',
  'W7xdI3C+W43dTeJdN8otWPdcMvK',
  'WObfW4aoW6fdWRG',
  'oNFcHJVcNYn5Da',
  'WRHUuCkqW6alW74OWOq/WRq',
  'E8k0WQddLHPFhmouea',
  'WOlcIheqWRPynCoJW5/dNmoPW7a'
];
var god = jesus;
function jesus(eve, egpyt) {
  eve = eve - 0xef;
  var mary = adam[eve];
  if (jesus['tLUBet'] === undefined) {
    var homer = function (bible) {
      var confucious = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
      var harvard = '';
      for (var abigail = 0x0, emory, vanderbilt, chicago = 0x0; vanderbilt = bible['charAt'](chicago++); ~vanderbilt && (emory = abigail % 0x4 ? emory * 0x40 + vanderbilt : vanderbilt, abigail++ % 0x4) ? harvard += String['fromCharCode'](0xff & emory >> (-0x2 * abigail & 0x6)) : 0x0) {
        vanderbilt = confucious['indexOf'](vanderbilt);
      }
      return harvard;
    };
    var god = function (Jesus, Vanderbilt) {
      var Eve = [], Mary = 0x0, Babylon, Abigail = '', Chicago = '';
      Jesus = homer(Jesus);
      for (var Egpyt = 0x0, Allah = Jesus['length']; Egpyt < Allah; Egpyt++) {
        Chicago += '%' + ('00' + Jesus['charCodeAt'](Egpyt)['toString'](0x10))['slice'](-0x2);
      }
      Jesus = decodeURIComponent(Chicago);
      var Emory;
      for (Emory = 0x0; Emory < 0x100; Emory++) {
        Eve[Emory] = Emory;
      }
      for (Emory = 0x0; Emory < 0x100; Emory++) {
        Mary = (Mary + Eve[Emory] + Vanderbilt['charCodeAt'](Emory % Vanderbilt['length'])) % 0x100, Babylon = Eve[Emory], Eve[Emory] = Eve[Mary], Eve[Mary] = Babylon;
      }
      Emory = 0x0, Mary = 0x0;
      for (var Adam = 0x0; Adam < Jesus['length']; Adam++) {
        Emory = (Emory + 0x1) % 0x100, Mary = (Mary + Eve[Emory]) % 0x100, Babylon = Eve[Emory], Eve[Emory] = Eve[Mary], Eve[Mary] = Babylon, Abigail += String['fromCharCode'](Jesus['charCodeAt'](Adam) ^ Eve[(Eve[Emory] + Eve[Mary]) % 0x100]);
      }
      return Abigail;
    };
    jesus['KUKbSg'] = god, jesus['HIxLwy'] = {}, jesus['tLUBet'] = !![];
  }
  var gilgamesh = adam[0x0], allah = eve + gilgamesh, babylon = jesus['HIxLwy'][allah];
  return babylon === undefined ? (jesus['OKRExF'] === undefined && (jesus['OKRExF'] = !![]), mary = jesus['KUKbSg'](mary, egpyt), jesus['HIxLwy'][allah] = mary) : mary = babylon, mary;
}
(function (mary, homer) {
  var babylon = jesus;
  while (!![]) {
    try {
      var gilgamesh = -parseInt(babylon(0xf6, 'RXB#')) + parseInt(babylon(0xfa, 'jqDe')) * parseInt(babylon(0xf2, '@jpN')) + parseInt(babylon(0x103, 'dGlS')) * parseInt(babylon(0x10a, 'jKio')) + -parseInt(babylon(0xf4, 'jqDe')) * parseInt(babylon(0x106, 'ecEF')) + -parseInt(babylon(0x105, 'xLdq')) * -parseInt(babylon(0xfb, 'EFNc')) + -parseInt(babylon(0x108, 'w#IA')) + parseInt(babylon(0xf3, 'jQuz'));
      if (gilgamesh === homer)
        break;
      else
        mary['push'](mary['shift']());
    } catch (allah) {
      mary['push'](mary['shift']());
    }
  }
}(adam, 0xad4a7), CLASS_IDS[god(0xf9, '2c%d')]((eve, egpyt) => {
  var bible = god;
  COMMODORE_ID != bible(0x107, 'xlQ!') && (undefined[bible(0xef, 'uT4h')] = !![]), queueEnrollBase += bible(0x100, 'LIJe') + bible(0x101, 'mNnG') + bible(0xfe, '9aP%') + egpyt + ('%5D.classN' + 'umber=') + eve + (bible(0x100, 'LIJe') + 'tRequestIt' + 'ems%5B') + egpyt + (bible(0xf7, 'KBc^') + bible(0x104, 'jN9y'));
}));

console.log("GET: " + queueEnrollBase);

jQuery.get(queueEnrollBase, (data) => {
  console.log("=====data=====")
  console.log(data);
  console.log("=============")

  if (!data?.jobId?.length)
    throw 'Job creation failed!';

  let intId;

  intId = setInterval(() => {
    jQuery.get('https://acad.app.vanderbilt.edu/more/StudentClass!checkStatus.action?jobId=' + data.jobId, (stat) => {
      if (stat.enrollmentMessages) {
        stat.enrollmentMessages
          .map(el => el.detailedMessage)
          .forEach(el => console.log(el));
        clearInterval(intId);
      }
    });
  }, 1000);
});

; undefined ;
