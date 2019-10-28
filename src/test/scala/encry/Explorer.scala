package encry

import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder

import scala.concurrent.duration._

object Explorer {

  def transactionsScenario: ChainBuilder = {
    exec(
      http("transaction list")
        .get("/transactions?page=0")
        .check(
          status is 200,
          regex("href=\"/transaction/(.*?)\"").findAll.saveAs("transIds")
        )
    ).pause(800 millis, 1000 millis)
      .exec(visitRandomTrans("unconfTransaction")).pause(800 millis, 1000 millis)
      .exec(visitRandomTrans("unconfTransaction")).pause(800 millis, 1000 millis)
      .exec(visitRandomTrans("unconfTransaction")).pause(800 millis, 1000 millis)
  }

  def visitRandomTrans(name: String): HttpRequestBuilder = {
    http(name)
      .get("/transaction/${transIds.random()}")
      .check(status is 200)
  }

  def blocksScenario: ChainBuilder = {
    exec(
      http("block list")
        .get(s"/")
        .check(
          status is 200,
          regex("href=\"/block/(.*?)\"").findAll.saveAs("blockIds")
        )
    ).pause(800 millis, 1000 millis)
      .exec(http("block")
        .get("/block/${blockIds.random()}")
        .check(
          status is 200,
          regex("href=\"/transaction/(.*?)\"").findAll.saveAs("transIds")
        )
      ).pause(800 millis, 1000 millis)
      .exec(visitRandomTrans("transaction")).pause(800 millis, 1000 millis)
      .exec(visitRandomTrans("transaction")).pause(800 millis, 1000 millis)
      .exec(visitRandomTrans("transaction")).pause(800 millis, 1000 millis)
  }

  def nodesScenario: ChainBuilder = {
    exec(
      http("node list")
        .get("/node")
        .check(
          status is 200
        )
    )
  }

}