<div markdown="1">

## Source distribution

<p>To build Iguana from source you need to clone the following git 
repositories:</p>

- [iguana](https://github.com/iguana-parser/iguana): The Iguana runtime
- [parse-trees](https://github.com/iguana-parser/parse-trees): SPPF and term construction facility
- [regex](https://github.com/iguana-parser/regex): Regular expressions
- [utils](https://github.com/iguana-parser/utils): Parsing utilities

<p>All these projects are built using <a href="http://www.scala-sbt.org">sbt</a>.
To build Iguana, go to the <code>iguana</code> directory and execute:</p>

    sbt publish-local

<p>This command produces the necessary binary jar files and puts them in your local 
repository. Then, you can use Iguana using the following dependency in SBT:</p>

    "iguana" %% "iguana" % "0.1.0"

</div>