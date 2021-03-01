// WC   => Word Count
// CPTW => Clicks Per Thousand Words Per Day
// days => Number of 24 hour day(s)

// retruns => Traffic per days

let getPostTraffic = (WC, CPTWPD, days) => {
    WC = WC === undefined ? 500 : WC;
    CPTWPD = CPTWPD === undefined ? 1 : CPTWPD;
    days = days === undefined ? 1 : days;
    return WC * (CPTWPD / 1000) * days;
};

console.log( getPostTraffic(1000, 1, 7) );   // 7
console.log( getPostTraffic(300, 120, 31) ); // 1116

// BEST POST => lodash includes is my best post as of this writing
let bestPost = {
  wc: 875,
  CPTWPD: 23.755102040816325,
  days: 28,
  traffic: 0
};
bestPost.traffic = getPostTraffic(bestPost.wc, bestPost.CPTWPD, bestPost.days);
console.log( 'best post: ', bestPost.traffic );
// best post: 582

// SITE WIDE => site wide I have a grand total of 702,332 words over 813 posts
// with a CPTWPD of only 0.9153180303006881
let siteWide = {
  wc: 702332,
  CPTWPD: 0.9153180303006881,
  days: 28,
  traffic: 0
};
siteWide.traffic = getPostTraffic(siteWide.wc, siteWide.CPTWPD, siteWide.days);
console.log('site wide: ', siteWide.traffic);
// site wide: 18000

// My best preforming post is pulling in 582 clicks per 28 day span
// which is way better than what is going on site wide which seems to
// be ranking in around 22 per 28 day span
console.log(siteWide.traffic / 813);
// 22.14022140221402
