
<h2>Download and Install</h2>

<p>Iguana is under active development and we plan the first public release by 15 
March 2016. At the moment you can use Iguana by building it from source.</p>

<div id="Source" class="subgroup" markdown="1">
### From source

<p>To build Iguana from source you need to clone the following git 
repositories:</p>

- [iguana](https://github.com/iguana-parser/iguana): The main Iguana parser functionality
- [parse-trees](https://github.com/iguana-parser/parse-trees): SPPF constructions and terms
- [regex](https://github.com/iguana-parser/regex): Regular expressions
- [utils](https://github.com/iguana-parser/utils): Parsing utilities

<p>All these projects are <a href="http://www.scala-sbt.org">sbt</a> projects.
To build Iguana, go to the <code>iguana</code> directory and execute:</p>
    
    sbt package

<p>If you prefer to install the jar files in the local repository and use it,
 run:</p>

    sbt publish-local

<p>You can use the produced jar files in your SBT project using the following 
dependency:</p>


    "iguana" % "iguana" % "0.1.0"

</div>

<div id="Binary" class="subgroup" markdown="1">
### From binary

Currently, the only way to build Iguana is to build it from source using sbt.
In the near future, after the first release, we plan to put binaries to an online repository.
</div>

