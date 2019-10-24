package encry

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class ExplorerSim extends Simulation {

  val httpProtocol = http
    .baseUrl("http://172.16.11.20:9000") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  // A scenario is a chain of requests and pauses
  val scn = scenario("Explorer").exec(Explorer.scenario)

  setUp(scn.inject(
    //atOnceUsers(50)
    constantUsersPerSec(1).during(30 seconds)
    //rampUsers(1000).during(60 seconds)
//        .throttle(
//          reachRps(100) in (10 seconds),
//          holdFor(1 minute),
//          jumpToRps(50),
//          holdFor(2 hours)
  )
    .protocols(httpProtocol))
}
