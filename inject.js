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

var queueEnrollBase = `https://acad.app.vanderbilt.edu/more/StudentClass!queueEnroll.action?selectedTermCode=${TERM_ID}`;

CLASS_IDS.forEach((x, i) => {
  queueEnrollBase += '&enrollmentRequestItems%5B' + i +
                     '%5D.classNumber=' + x +
                     '&enrollmentRequestItems%5B' + i +
                     '%5D.waitList=true';
});

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
