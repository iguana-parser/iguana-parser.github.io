---
layout: base
---

<div style="width:30%; height:50%; float:left; margin-top:20px; margin-right:10px;">
    <img src="images/iguana.jpg" width="100%">
</div>

<div style="width:68%; float:right; margin-top:2px;" markdown="1">
# Iguana: A data-dependent parsing framework

<div id="description" style="margin-top:40px;">

<p>Iguana is a parsing framework based on <a href="{{ site.baseurl }}/documentation.html#data_dependent_grammars">data-dependent grammars</a>.
Data-dependent grammars extend context free grammars with arbitrary computation, 
variable binding, and constraints. These powerful features enable construction of
parsers for context-sensitive languages. We also use data-dependent grammars
as a layer to implement different disambiguation constructs such as 
<a href="http://localhost:4000/examples.html#OperatorePrecedence">operator precedence</a>.</p>

<p>Iguana is created by <a href="http://afroozeh.github.io" target="_blank">Ali Afroozeh</a>
and <a href="http://anastassija.github.io" target="_blank">Anastasia Izmaylova</a> at <a href="http://www.cwi.nl">CWI</a> 
Amsterdam. For source code and bug reports please visit 
our <a href="https://github.com/iguana-parser">Github</a> repository.</p>

</div>

<!-- <div>
	<div style="width: 37%; float:left; margin-top:52px;">
		<img src="images/architecture.png" width="100%">
	</div>
	<div style="width: 63%; float:right;">
		<a href="https://cdn.rawgit.com/iguana-parser/papers/master/onward15.pdf"  target="_blank"><img src="images/vision.jpg" width="100%"></a>
	</div>
</div> -->

<div style="overflow: hidden; margin-top:50px;">
	<div style="float:left; width:55%;">
		<h4>Selected publications:</h4>
		<ul style="padding-left:20px; padding-top:5px;">
			<li><a href="https://cdn.rawgit.com/iguana-parser/papers/master/onward15.pdf">One Parser to Rule Them All</a></li>
			<li><a href="https://cdn.rawgit.com/iguana-parser/papers/master/cc15.pdf">Faster, Practical GLL Parsing</a></li>
			<li><a href="https://cdn.rawgit.com/iguana-parser/papers/master/pepm16.pdf">Operator Precedence for Data-Dependent Grammars</a></li>
		</ul>		
	</div>	
	<div style="float:right; width: 40%; text-align: center;">
		<h4>Architecture of Iguana:</h4>
		<img src="images/architecture.jpg" width="100%" style="padding-top:15px;">
	</div>
</div>

</div>

