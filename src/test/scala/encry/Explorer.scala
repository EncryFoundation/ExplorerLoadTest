package encry

import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder

import scala.concurrent.duration._

object Explorer {

  def getIndex: ChainBuilder = {
    exec(
      http("Index")
        .get("/")
        .check(
          status is 200
        )
    )
  }

  def getBlocks: ChainBuilder = {
    exec(
      http("blocks")
        .get("/")
        .check(
          status is 200
        )
    )
  }

  def getBlock(id: String): ChainBuilder = {
    exec(
      http("block")
        .get(s"/block/$id")
        .check(
          status is 200
        )
    )
  }

  def getTrans: ChainBuilder = {
    exec(
      http("transactions")
        .get(s"/transactions?page=0")
        .check(
          status is 200,
          regex("href=\"/transaction/(.*?)\"").findAll.saveAs("transIds")
        )
    ).pause(500 millis)
      .exec(visitRandomTrans).pause(1 seconds)
      .exec(visitRandomTrans).pause(1 seconds)

//      .exec { session =>
//        println(session)
//        session
//      }
  }

  def visitRandomTrans: HttpRequestBuilder = {
    http("transaction")
      .get("/transaction/${transIds.random()}")
      .check(status is 200)
  }

  def getTrans(id: String): ChainBuilder = {
    exec(
      http("transaction")
        .get(s"/transaction/$id")
        .check(
          status is 200
        )
    )
  }

  def getNodes: ChainBuilder = {
    exec(
      http("nodes")
        .get("/node")
        .check(
          status is 200
        )
    )
  }

  val scenario =
    exec(
      getTrans
    ).pause(1)

}