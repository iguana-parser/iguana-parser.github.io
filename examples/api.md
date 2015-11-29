
<div markdown="1">

##A simple context-free grammar

<p>Iguana is a grammar interpreter, as opposed to a parser generator. This means
that Iguana directly interprets an in-memory representation of a grammar, and 
there is no need to first generate a parser from the grammar specification.
For example, consider the following simple grammar that encodes 


The following simple example shows how to encode a grammar in Iguana and run it.</p>


{% highlight java %}

// Building a grammar corresponding to A ::= A 'a' | 'a' 
Nonterminal A = Nonterminal.withName("A");
Terminal a = Terminal.from(Character.from('a'));
Rule r1 = Rule.withHead(A).addSymbols(A, a).build();
Grammar grammar = Grammar.builder().addRule(r1).build();

Input input = Input.fromString("aaa");
ParseResult result = Iguana.parse(input, grammar, startSymbol);
if (result.isParseSuccess()) {
    NonterminalNode sppfNode = result.asParseSuccess().getSPPFNode();
    Tree tree = result.asParseSuccess().getTree();
} else {
   System.out.println(result.asParseFailure());
}

{% endhighlight %}

<p>Iguana is build on top of the <a href="{{ site.baseurl }}/documentation.html#gll_parsing">Generalized LL (GLL)</a> parsing algorithm. GLL is a 
top-down parsing algorithm that supports all context-free grammars and produces
a <a href="{{ site.baseurl }}/documentation.html#binarized_sppf">binarized SPPF</a>.
Binarized SPPFs, however, are part of the internal machinery of GLL, and are not 
meant for the end user. Iguana provides support for conversion of binarized SPPF 
terms that reflect the context-free grammar used for parsing. The SPPF and
terms corresponding to the example above are shown below.</p>

<div>
	<div style="width: 43%; float:left;">
		<img src="../images/sppf.png" width="100%">
	</div>
	<div style="width: 50%; float:right;">
		<img src="../images/tree.png" width="100%">
	</div>
</div>

</div>