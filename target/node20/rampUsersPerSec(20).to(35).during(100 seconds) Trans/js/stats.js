var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11000",
        "ok": "11000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1297",
        "ok": "1297",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "percentiles1": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "percentiles2": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "percentiles3": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "percentiles4": {
        "total": "543",
        "ok": "543",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10977,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "104.762",
        "ok": "104.762",
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
        "total": "2750",
        "ok": "2750",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1297",
        "ok": "1297",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "percentiles1": {
        "total": "264",
        "ok": "264",
        "ko": "-"
    },
    "percentiles2": {
        "total": "271",
        "ok": "271",
        "ko": "-"
    },
    "percentiles3": {
        "total": "394",
        "ok": "394",
        "ko": "-"
    },
    "percentiles4": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2734,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "26.19",
        "ok": "26.19",
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
        "total": "8250",
        "ok": "8250",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles1": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "percentiles2": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles3": {
        "total": "176",
        "ok": "176",
        "ko": "-"
    },
    "percentiles4": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8243,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "78.571",
        "ok": "78.571",
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
