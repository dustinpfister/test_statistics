
// WC   => Word Count
// CPTW => Clicks Per Thousand Words Per Day
// days => Number of 24 hour day(s)

// retruns => Traffic per days

let guessPostTraffic = (WC, CPTWPD, days) => {
    WC = WC === undefined ? 500 : WC;
    CPTWPD = CPTWPD === undefined ? 1 : CPTWPD;
    days = days === undefined ? 1 : days;
    return WC * (CPTWPD / 1000) * days;
};

console.log( guessPostTraffic(1000, 1, 7) );   // 7
console.log( guessPostTraffic(300, 120, 31) ); // 1116
