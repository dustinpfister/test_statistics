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
console.log( getCPTWPD(1000, 7, 7) );     // 1
console.log( getCPTWPD(300, 1116, 31) );  // 120

// lodash includes
console.log( getCPTWPD(875, 582, 28) );   