var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2220",
        "ok": "2220",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "170",
        "ok": "170",
        "ko": "-"
    },
    "percentiles1": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles2": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "percentiles3": {
        "total": "482",
        "ok": "482",
        "ko": "-"
    },
    "percentiles4": {
        "total": "914",
        "ok": "914",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19716,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 151,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 133,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "188.679",
        "ok": "188.679",
        "ko": "-"
    }
},
contents: {
"req_transaction-lis-e57e0": {
        type: "REQUEST",
        name: "transaction list",
path: "transaction list",
pathFormatted: "req_transaction-lis-e57e0",
stats: {
    "name": "transaction list",
    "numberOfRequests": {
        "total": "5000",
        "ok": "5000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "321",
        "ok": "321",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2220",
        "ok": "2220",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "417",
        "ok": "417",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles1": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "percentiles2": {
        "total": "404",
        "ok": "404",
        "ko": "-"
    },
    "percentiles3": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1424",
        "ok": "1424",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4777,
        "percentage": 96
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 93,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 130,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "47.17",
        "ok": "47.17",
        "ko": "-"
    }
}
    },"req_unconftransacti-6239e": {
        type: "REQUEST",
        name: "unconfTransaction",
path: "unconfTransaction",
pathFormatted: "req_unconftransacti-6239e",
stats: {
    "name": "unconfTransaction",
    "numberOfRequests": {
        "total": "15000",
        "ok": "15000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1300",
        "ok": "1300",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "percentiles1": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles2": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "percentiles3": {
        "total": "359",
        "ok": "359",
        "ko": "-"
    },
    "percentiles4": {
        "total": "619",
        "ok": "618",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14939,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 58,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "141.509",
        "ok": "141.509",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
