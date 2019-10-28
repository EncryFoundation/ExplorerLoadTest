var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "39610",
        "ok": "39480",
        "ko": "130"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "54553",
        "ok": "54553",
        "ko": "10019"
    },
    "meanResponseTime": {
        "total": "1767",
        "ok": "1740",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "2547",
        "ok": "2507",
        "ko": "2"
    },
    "percentiles1": {
        "total": "1037",
        "ok": "1035",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "1699",
        "ok": "1688",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "5459",
        "ok": "5345",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "12099",
        "ok": "12162",
        "ko": "10005"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13819,
        "percentage": 35
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 9990,
        "percentage": 25
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 15671,
        "percentage": 40
    },
    "group4": {
        "name": "failed",
        "count": 130,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "282.929",
        "ok": "282",
        "ko": "0.929"
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
        "ok": "9870",
        "ko": "130"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "54553",
        "ok": "54553",
        "ko": "10019"
    },
    "meanResponseTime": {
        "total": "4293",
        "ok": "4218",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "4024",
        "ok": "3997",
        "ko": "2"
    },
    "percentiles1": {
        "total": "3751",
        "ok": "3724",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "5004",
        "ok": "4942",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10779",
        "ok": "10854",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "21048",
        "ok": "21098",
        "ko": "10005"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1000,
        "percentage": 10
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 465,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8405,
        "percentage": 84
    },
    "group4": {
        "name": "failed",
        "count": 130,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "71.429",
        "ok": "70.5",
        "ko": "0.929"
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
        "total": "29610",
        "ok": "29610",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "17051",
        "ok": "17051",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "914",
        "ok": "914",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles1": {
        "total": "867",
        "ok": "867",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1193",
        "ok": "1193",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1807",
        "ok": "1807",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2606",
        "ok": "2606",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12819,
        "percentage": 43
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 9525,
        "percentage": 32
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7266,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "211.5",
        "ok": "211.5",
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
