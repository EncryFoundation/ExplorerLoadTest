package encry

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class ExplorerSim extends Simulation {

  val httpProtocol = http
    .baseUrl("http://172.16.11.20:9000") // Here is the root for all relative URLs
    //.baseUrl("http://192.168.0.105:9000") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  // A scenario is a chain of requests and pauses
  val scn = scenario("Explorer").exec(/*Explorer.transactionsScenario,*/ Explorer.blocksScenario/*, Explorer.nodesScenario*/)

  setUp(scn.inject(
    //atOnceUsers(1)
    //constantUsersPerSec(1).during(60 seconds)
    rampUsersPerSec(10).to(25).during(100 seconds)
    //rampUsers(3000).during(100 seconds)
  ).protocols(httpProtocol))
}
