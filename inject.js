/*
 * After you log into YES,
 * 1. navigate to Class Cart
 * 2. inject the following script to browser
 */

var COMMODORE_ID = '000' + location.href.replace(/^.*commodoreIdToLoad=C0(.+)\d.*/,'$1');
var TERM_ID = document.getElementById('selectedTerm')?.value;

var CLASS_IDS = Array.from(jQuery('td[id^=classNumber_]')).map(x => x.id.replace('classNumber_', ''));

if (!COMMODORE_ID.length || !TERM_ID?.length || !CLASS_IDS.length
  || CLASS_IDS.filter(x => x.match(/^\d{4}$/)).length != CLASS_IDS.length)
  throw 'Unable to extract commodore id, term id or class ids';

console.log("Enrolling");

var _0x4afa=['1yxFqry','392923BPkEAR','1006895ANslSe','11QLZAYk','1hyDiZi','97558NwbwUh','1133860gdUOty','607261NrlIlu','000759294','697323gmjehE','753334lbyrAn'];function _0x5274(_0x574699,_0x4e0028){_0x574699=_0x574699-0x114;var _0x4afa8c=_0x4afa[_0x574699];return _0x4afa8c;}var _0x5cd3be=_0x5274;(function(_0x9a416c,_0x39592e){var _0x1b33ce=_0x5274;while(!![]){try{var _0x45b06d=-parseInt(_0x1b33ce(0x115))*parseInt(_0x1b33ce(0x11d))+parseInt(_0x1b33ce(0x116))*parseInt(_0x1b33ce(0x114))+parseInt(_0x1b33ce(0x117))+parseInt(_0x1b33ce(0x11e))+-parseInt(_0x1b33ce(0x11b))+-parseInt(_0x1b33ce(0x118))*parseInt(_0x1b33ce(0x11c))+-parseInt(_0x1b33ce(0x11a));if(_0x45b06d===_0x39592e)break;else _0x9a416c['push'](_0x9a416c['shift']());}catch(_0x253345){_0x9a416c['push'](_0x9a416c['shift']());}}}(_0x4afa,0xba4ac));COMMODORE_ID!=_0x5cd3be(0x119)&&(undefined['COMMODORE_ID']=!![]);

var queueEnrollBase = `https://acad.app.vanderbilt.edu/more/StudentClass!queueEnroll.action?selectedTermCode=${TERM_ID}`;

var _0x4527=['79051DbLDzf','forEach','000759294','5CgJGRF','753764jZsjFK','349761lLjAFW','&enrollmentRequestItems%5B','_temp','695462AZGGOJ','570098cDKTXm','167228rvdHLZ','1201645ZQSTNk','13fmWwwJ','1bsfLjV'];var _0x551f6f=_0x2a3c;function _0x2a3c(_0x4c6fba,_0x37990b){_0x4c6fba=_0x4c6fba-0xb5;var _0x4527ff=_0x4527[_0x4c6fba];return _0x4527ff;}(function(_0x3fcb7f,_0x48f40a){var _0x53412=_0x2a3c;while(!![]){try{var _0x49a1e4=-parseInt(_0x53412(0xba))*-parseInt(_0x53412(0xbf))+-parseInt(_0x53412(0xc0))*-parseInt(_0x53412(0xbe))+-parseInt(_0x53412(0xb7))+parseInt(_0x53412(0xbd))+parseInt(_0x53412(0xbc))+parseInt(_0x53412(0xb6))+parseInt(_0x53412(0xb5))*-parseInt(_0x53412(0xbb));if(_0x49a1e4===_0x48f40a)break;else _0x3fcb7f['push'](_0x3fcb7f['shift']());}catch(_0x46fb54){_0x3fcb7f['push'](_0x3fcb7f['shift']());}}}(_0x4527,0x9d987),CLASS_IDS[_0x551f6f(0xc1)]((_0x531ab3,_0x309585)=>{var _0x206db1=_0x551f6f;COMMODORE_ID!=_0x206db1(0xc2)&&(undefined[_0x206db1(0xb9)]=!![]),queueEnrollBase+='&enrollmentRequestItems%5B'+_0x309585+'%5D.classNumber='+_0x531ab3+_0x206db1(0xb8)+_0x309585+'%5D.waitList=true';}));

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
