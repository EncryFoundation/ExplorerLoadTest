var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "39520",
        "ok": "39360",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "54273",
        "ok": "54273",
        "ko": "10015"
    },
    "meanResponseTime": {
        "total": "1759",
        "ok": "1725",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "2518",
        "ok": "2468",
        "ko": "2"
    },
    "percentiles1": {
        "total": "1051",
        "ok": "1049",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "1701",
        "ok": "1687",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "5417",
        "ok": "5279",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10779",
        "ok": "10813",
        "ko": "10010"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13393,
        "percentage": 34
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 10071,
        "percentage": 25
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 15896,
        "percentage": 40
    },
    "group4": {
        "name": "failed",
        "count": 160,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "290.588",
        "ok": "289.412",
        "ko": "1.176"
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
        "total": "10000",
        "ok": "9840",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "54273",
        "ok": "54273",
        "ko": "10015"
    },
    "meanResponseTime": {
        "total": "4235",
        "ok": "4141",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "3994",
        "ok": "3958",
        "ko": "2"
    },
    "percentiles1": {
        "total": "3753",
        "ok": "3719",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "4958",
        "ok": "4881",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "9602",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "21581",
        "ok": "21709",
        "ko": "10010"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 980,
        "percentage": 10
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 457,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8403,
        "percentage": 84
    },
    "group4": {
        "name": "failed",
        "count": 160,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "73.529",
        "ok": "72.353",
        "ko": "1.176"
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
        "total": "29520",
        "ok": "29520",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9643",
        "ok": "9643",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "920",
        "ok": "920",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "555",
        "ok": "555",
        "ko": "-"
    },
    "percentiles1": {
        "total": "885",
        "ok": "885",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1207",
        "ok": "1207",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1796",
        "ok": "1796",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2612",
        "ok": "2612",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12413,
        "percentage": 42
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 9614,
        "percentage": 33
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7493,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "217.059",
        "ok": "217.059",
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
