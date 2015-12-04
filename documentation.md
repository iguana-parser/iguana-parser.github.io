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
                <a href="#Syntax">Syntax</a>
                <ul class="nav nav-stacked">
                	<li><a href="#ContextFree">Context-free</a></li>
                	<li><a href="#DataDependent">Data-dependent</a></li>
                    <li><a href="#RegularExpressions">Regular expressions</a></li>
                </ul>
            </li>
    		<li>
                <a href="#Disambiguation">Disambiguation</a>
                <ul class="nav nav-stacked">
                    <li><a href="#Lexical">Lexical</a></li>
                	<li><a href="#OperatorPrecedence">Operator Precedence</a></li>
                </ul>
            </li>
            <li>
                <a href="#Theory">Theory</a>
                <ul class="nav nav-stacked">
                    <li><a href="#GLL">GLL Parsing</a></li>
                	<li><a href="#SPPF">Binarized SPPF</a></li>
                </ul>
            </li>
        </ul>
    </nav>

    <!--Main Content -->
    <div class="col-xs-9">
        <section id="Syntax" class="group">
        	{% include_relative documentation/syntax.md %}
        	<div id="ContextFree" class="subgroup">
                {% include_relative documentation/context-free.md %}
            </div>
            <div id="DataDependent" class="subgroup">
                {% include_relative documentation/data-dependent.md %}
            </div>
            <div id="RegularExpressions" class="subgroup">
                {% include_relative documentation/regex.md %}
            </div>
        </section>
        <section id="Disambiguation" class="group">
        	<h2>Disambiguation</h2>
        	<div id="Lexical" class="subgroup">
                {% include_relative documentation/lexical.md %}
            </div>
            <div id="OperatorPrecedence" class="subgroup">
                {% include_relative documentation/operator_precedence.md %}
            </div>
        </section>
        <section id="Theory" class="group">
        	<h2>Theory</h2>
        	<div id="GLL" class="subgroup">
                {% include_relative documentation/gll.md %}
            </div>
            <div id="SPPF" class="subgroup">
                {% include_relative documentation/binarized_sppf.md %}
            </div>
        </section> 
    </div>
</div>
