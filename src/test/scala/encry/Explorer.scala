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

  val scenario: ChainBuilder =
    exec(
      getIndex
    )

}
