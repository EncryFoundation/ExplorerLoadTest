var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14000",
        "ok": "14000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1808",
        "ok": "1808",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "200",
        "ok": "200",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "151",
        "ok": "151",
        "ko": "-"
    },
    "percentiles1": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles2": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "percentiles3": {
        "total": "415",
        "ok": "415",
        "ko": "-"
    },
    "percentiles4": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13823,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 76,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 101,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "133.333",
        "ok": "133.333",
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
        "total": "3500",
        "ok": "3500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "258",
        "ok": "258",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1808",
        "ok": "1808",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "333",
        "ok": "333",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "percentiles1": {
        "total": "266",
        "ok": "266",
        "ko": "-"
    },
    "percentiles2": {
        "total": "328",
        "ok": "327",
        "ko": "-"
    },
    "percentiles3": {
        "total": "624",
        "ok": "624",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1294",
        "ok": "1294",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3379,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 26,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 95,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33.333",
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
        "total": "10500",
        "ok": "10500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1278",
        "ok": "1278",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "percentiles1": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "percentiles2": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles3": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "percentiles4": {
        "total": "669",
        "ok": "669",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10444,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 50,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "100",
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
