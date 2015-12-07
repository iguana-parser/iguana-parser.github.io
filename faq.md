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
        	supports all context-free grammars and is worst-case O(n<super>3</super>) on 
        	context-free grammars.
        	For parsing real programming languages, though, these limitations of ANTLR do not 
        	matter. In fact, ANTLR is much much faster on real grammars compared to Iguana.</p>

        	<p>Iguana is a general parser: it supports all context-free
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

        <section class="faqItem">
        	<h3>What is the difference between data-dependent grammars and parser combinators?</h3>

        	<p>Data-dependent grammars is a formalism that unifies many ideas about
        	directing parsing actions based on data of a previous parse. These ideas
        	come from parser combinators, attribute grammars, attribute directed 
        	parsing, to name a few. Therefore, it is not surprising to see similarities
        	between data-dependent grammars and other parsing systems.</p>

        	<p>In particular, monadic parser combinators allow threading of values
        	through sequence combinators. These features has been used in parsing
        	network protocols and indentation-sensitive languages.
        	As parser combinators are ordinary functions, the user has a lot of
        	freedom to write parsers. In contrast data-dependent grammars still have a 
        	flavor of a grammar and give more control for syntax definition.</p>

        	<p>Finally, traditional parser combinators do not support left-recursive
        	rules and can have worst-case exponential runtime. We also have a
        	general parser combinator library, <a href="http://meerkat-parser.github.io">Meerkat</a>,
        	that supports left-recursive rules and provides a cubic runtime guarantee. 
        	Using the Meerkat library, one can express data-dependency, directly in Scala.</p>
        </section>

        <section>
        	<h3>How much is the cost of data dependency in practice?</h3>

        	<p>Nothing comes for free! There is always an overhead of using data-dependency
        	while parsing, but our results (<a href="https://cdn.rawgit.com/iguana-parser/papers/master/onward15.pdf">Onward'15</a> 
        	and <a href="https://cdn.rawgit.com/iguana-parser/papers/master/pepm16.pdf">PEPM'16</a>) show that
        	the overhead is negligible when parsing real programming languages.</p>

        	<p>Note that using data dependency can potentially break the cubic bound of
        	GLL parsing, the underlying parsing technique of Iguana. Data dependency
        	can also lead to non-termination. These concerns are mostly theoretical 
        	and do not happen in grammars of programming languages.
        	</p>
        </section>

    </div>
</div>