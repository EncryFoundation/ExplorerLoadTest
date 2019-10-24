package encry

import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

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

  def getTrans(id: String): ChainBuilder = {
    exec(
      http("trans")
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
      getBlock("0052d16317160f3579563691033c916a0be2b405a791dacf2a685cde2aa68a00")
    ).pause(1)
      .exec(
        getTrans("ba0de6b393e736dc23551a7daf3b05b3e2ff719d58bafcda627a1594a0dc6c44")
      )

}