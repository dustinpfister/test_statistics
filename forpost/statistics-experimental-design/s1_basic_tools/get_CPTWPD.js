// WC   => Word Count
// Traffic => Number of clicks for a post in search console 
// days => Number of 24 hour day(s)
// retruns => CPTWPD ( Clicks Per Thousand Words Per Day )
let getCPTWPD = (WC, traffic, days) => {
    WC = WC === undefined ? 500 : WC;
    traffic = traffic === undefined ? 0 : traffic;
    days = days === undefined ? 1 : days;
    return traffic / days / WC * 1000;
};

// a post that is 1,000 words that gets 7 clicks in one week
// has a CPTWPD of 1
console.log( getCPTWPD(1000, 7, 7) );     // 1
// a post that is only 300 words that gets 1,116 clicks in a 31 day span
// has a CPTWPD of 120
console.log( getCPTWPD(300, 1116, 31) );  // 120

/********** ********** **********
 PLUG IN SOME REAL DATA FROM SEARCH CONSOLE
*********** ********** *********/

// lodash includes is my best post as of this writing
console.log('best post: ', getCPTWPD(875, 582, 28) );
// 23.755102040816325

// I can also plug in a site wide total for word count along with
// traffic for a 28 day span to get this CPTWPD value for thw whole site
let siteWideTotalWC = 702332;
let siteWide = getCPTWPD(siteWideTotalWC, 18000, 28);
console.log('site wide: ', siteWide);
// 0.9153180303006881

// some posts that are 1,800+ words
console.log('js-array-length: ', getCPTWPD(2777, 160, 28) );      // 2.057719018468028
console.log('js-javascript-foreach: ', getCPTWPD(3805, 29, 28) ); // 0.27219823540454297

// some posts that are < 1000 words
console.log('lodash_includes : ', getCPTWPD(875, 582, 28) ); // 23.755102040816325
console.log('lodash_groupby : ', getCPTWPD(856, 549, 28) ); // 22.905540720961284
console.log('lodash_sum : ', getCPTWPD(800, 502, 28) ); // 22.410714285714285

/********** ********** **********
 PLUG IN SOME THEORETICAL DATA
*********** ********** *********/

console.log(  getCPTWPD(siteWideTotalWC, 100000, 28) ); // 5.085100168337156
console.log(  getCPTWPD(siteWideTotalWC, 250000, 28) ); // 12.712750420842893
console.log(  getCPTWPD(siteWideTotalWC, 500000, 28) ); // 25.425500841685786
