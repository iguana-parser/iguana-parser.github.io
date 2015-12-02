---
layout: base
---

<style type="text/css">
	.bs-docs-sidebar .nav ul.nav {
		display: block;
	}
</style>

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
    			<a href="#Grammars">Grammars</a>
    			<ul class="nav nav-stacked">
                	<li><a href="#Java">Java</a></li>
                	<li><a href="#CSharp">C#</a></li>
                	<li><a href="#C">C</a></li>
                	<li><a href="#OCaml">OCaml</a></li>
                	<li><a href="#Haskell">Haskell</a></li>
                	<li><a href="#XML">XML</a></li>
                	<li><a href="#Python">Python</a></li>
                	<li><a href="#Scala">Scala</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <!--Main Content -->
    <div class="col-xs-9">
        <section id="Grammars" class="group" markdown="1">
## Grammars

<p>The grammars of programming languages written for Iguana can be found
in [this repository](https://github.com/iguana-parser/grammars).
The grammars are extracted from their corresponding language specification manual. 
For some grammars, we also provide a version of the grammar that has a natural 
expression grammar which is declaratively disambiguated.<p>

<p>The grammars are written in [Rascal](http://www.rascal-mpl.org/). The integration 
of Iguana into Rascal is a work in progress. To use the Iguana backend for Rascal, you 
need the [Iguana branch](https://github.com/cwi-swat/rascal/tree/iguana) of Rascal. 
We plan to gradually convert the grammars to the [reference syntax]().</p>

If you find a bug in the grammars, or wish to see a specific grammar
in this list, please open an [issue](https://github.com/iguana-parser/grammars/issues) on Github.

			<div id="Java" class="subgroup">
				{% include_relative grammars/java.md %}
			</div>
			<div id="CSharp" class="subgroup">
				{% include_relative grammars/csharp.md %}
			</div>
			<div id="C" class="subgroup">
				{% include_relative grammars/c.md %}
			</div>
			<div id="OCaml" class="subgroup">
				{% include_relative grammars/ocaml.md %}
			</div>
			<div id="Haskell" class="subgroup">
				{% include_relative grammars/haskell.md %}
			</div>
			<div id="XML" class="subgroup">
				{% include_relative grammars/xml.md %}
			</div>
			<div id="Python" class="subgroup">
				{% include_relative grammars/python.md %}
			</div>
			<div id="Scala" class="subgroup">
				{% include_relative grammars/scala.md %}
			</div>
        </section>
    </div>
</div>