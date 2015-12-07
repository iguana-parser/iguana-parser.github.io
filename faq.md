---
layout: base
---

<div class="row">
    <!--Nav Bar -->
    <nav class="col-xs-3 bs-docs-sidebar">
    </nav>

    <!--Main Content -->
    <div class="col-xs-9">
    	<h2>The Iguana FAQ</h2>

        <section class="faqItem">
        	<h3>What is the most distinct feature of Iguana?</h3>
        	<p>Iguana natively supports <a href="{{ site.baseurl }}/documentation.html#DataDependentdata">data-dependent grammars.</a>
        	This means the the user can use the powerful features of data-dependent grammars to 
        	define parsers that support context-sensitive constructs, without needing
        	to manually write a parser.</p>
        </section>

        <section class="faqItem">
        	<h3>What is the difference between Iguana and <a href="http://www.antlr.org">ANTLR 4</a>?</h3>
        	<p>ANTLR 4 supports all context-free grammars
        	except the ones with indirect/hidden left recursion, and has
        	worst case O(n<super>4</super>) runtime. Iguana, on the other hand,
        	supports all context-free grammars and is worst-case O(n<super>3</super>).
        	For parsing real programming languages, though, these limitations of ANTLR do not 
        	matter. In fact, ANTLR is much much faster on real grammars compared to Iguana.</p>

        	<p>Iguana is a general parsers, which means that it supports all context-free
        	grammars and delivers all parse trees in a compact form (SPPF). Iguana
        	supports explicit disambiguation rules, which can be partially applied.
        	ANTLR, on the other hand, will deliver at most one parse tree. This means
        	that it resolves ambiguities while parsing, in favor of the first alternative.
        	Iguana also provides full support for data-dependent grammars, while ANLTR
        	supports only few data dependency features, e.g., semantic predicates, to enable
        	expression of context-sensitive constructs. Therefore, it is fair to 
        	conclude that the internal machinery of Iguana is more heavyweight than ANTLR.
        	Moreover, ANTLR is a mature open source tool, while Iguana is still mostly
        	a research platform. We expect to reduce the gap between Iguana and ANTLR's 
        	performance in the future, but most likely, Iguana will never be as fast as
        	ANTLR, although it can be more expressive in some tasks.</p>
        </section>

    </div>
</div>