---
layout: base
---

<script type="text/javascript">
    $('body').scrollspy({
        target: '.bs-docs-sidebar',
        offset: 40
    });

</script>

<div class="row">
    <!--Nav Bar -->
    <nav class="col-xs-3 bs-docs-sidebar">
        <ul id="sidebar" class="nav nav-stacked fixed">
            <li>
                <a href="#Download">Download and Install</a>
                <ul class="nav nav-stacked">
                    <li><a href="#Source">From Source</a></li>
                    <li><a href="#Binary">From Binaries</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <!--Main Content -->
    <div class="col-xs-9">
        <section id="Download" class="group">
<h2>Download and Install</h2>

<p>Iguana is under active development and we plan the first public release by 15 
March 2016. At the moment you can use Iguana by building it from source, or
using our pre-built binaries.</p>

<div id="Source" class="subgroup" markdown="1">
### From source

<p>To build Iguana from source you need to clone the following git 
repositories:</p>

- [iguana](https://github.com/iguana-parser/iguana)
- [parse-trees](https://github.com/iguana-parser/parse-trees)
- [utils](https://github.com/iguana-parser/utils)

<p>Iguana and utils are [maven](https://maven.apache.org) projects, while
parse-trees is an [sbt](http://www.scala-sbt.org) project.
To build maven projects run:</p>

    mvn -DskipTests install

and for the sbt project:

    sbt publish

<p>This will build and install the jar files into your local repositories.
We configured the sbt build file to also publish the jars in the maven
repository. For more information about the project structure of Iguana see 
<a href="{{ site.baseurl }}/documentation.html#Projects">here</a>.</p>

<p>If you use maven as your build tool and need to define a dependency to Iguana,
add the following dependencies to your pom.xml file.</p>

    <dependency>
        <groupId>iguana</groupId>
        <artifactId>iguana</artifactId>
        <version>0.1.0</version>
    </dependency>

    <dependency>
        <groupId>iguana</groupId>
        <artifactId>utils</artifactId>
        <version>0.1.0</version>
    </dependency>

    <dependency>
        <groupId>iguana</groupId>
        <artifactId>parse-trees_2.11</artifactId>
        <version>0.1.0</version>
    </dependency>

</div>

<div id="Binary" class="subgroup" markdown="1">
### From binary

At the moment you can download the latest pre-built binaries of Iguana 
[here](). In the future, we plan to release the binaries in maven central.
</div>

        </section>
    </div>
</div>
