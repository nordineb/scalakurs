package oppg1_intro

import scala.io.Source

object SyntaxIntro {

  // Values and variables are two differnt consepts and
  // they (mostly) don't specify a return type…
  val fixed = null

  // …but they could
  var reAssignable: String = ""

  // Methods don't need a parameterlist
  // or a return type either.
  // Curly braces are optional too
  def callMe = ???

  def theMeaningOfLife: String = {
    "Don't know"
  }

  //HINT: Add some parameters and a body using them
  def add() = 9

  def rightLanguage(lang: String) = {
    // Everything in Scala is an expression, thus it can
    // be assigned to a value.
    // E.g. the result of an if/else statement
    val theAnswer: String = if(true) ??? else ???
    theAnswer
  }

  var nr = 0
  def countToTen() {
    // It's not often one would use a for-loop for side
    // effects like this, but you could. The range syntax
    // is quite nice
    for (i <- 1 to ???) {
      ???
    }
  }

  val isXLargerThanY = null

  def checkResultOfFunction(func: (Int, Int) => Boolean) = {
    func.apply(2, 4)
  }

  def printSomething() {
    for(line <- Source.fromURL(getClass.getResource("/flower.txt")).getLines())
      println(line)
  }

}
