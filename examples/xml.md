
<div markdown="1">

## XML elements

<p>XML is a popular data exchange format, and there are numerous XML parers
for different programming languages. Most of these parsers are handwritten,
rather than being generated from a grammar. The main problem is that the
syntax of XML is not context-free. In this example, we show how to write
a data-dependent grammar for parsing XML.</p>

<p>
The <a href="http://www.w3.org/TR/xml11/#NT-element">XML reference</a> has a very 
straightforward grammar of XML. For example, an XML element is defined by the
following context-free grammar: 
</p>

<pre>
Element ::= STag Content ETag
STag    ::= '<' Name Attribute* '>'
ETag    ::= '</' Name '>'
</pre>

<p>
<code>Element</code> defines an XML element with a start (<code>STag</code>)
and end(<code>ETag</code>) tag. As can be seen, the names in the start and 
end tags are not related to each other. For example, the following piece of 
XML is valid according to this grammar.
</p>

<pre>
&lt;note&gt;
  &lt;to&gt;Bob&lt;/from&gt;
  &lt;from&gt;Alice&lt;/to&gt;
&lt;/note&gt;
</pre>

<p>
As can be seen the start and end tags do not match. Below, the data-dependent
version of XML elements is shown. This grammar specifies that the value of
<code>Name</code> should be the same for the start and end tags.
</p>

<pre>
Element ::= s=STag Content ETag(s)
STag    ::= '<' n:Name Attribute* '>' { n.yield }
ETag(s) ::= '</' n:Name [n.yield == s] '>'
</pre>

<p>
Data-dependent grammars has an intuitive semantics. One can consider their
runtime semantics as a recursive-descent parser with a guard for left recursion,
and cubic runtime bound for the worse case. In the data-dependent grammar of XML
elements, we change the rules as follows:

<ul>
	<li>In the <code>Element</code> rule we introduce the variable <code>s</code> holds
		the value parsed by <code>STag</code> and passes it the parametrized nonterminal
		<code>ETag</code>. </li>

	<li>In the <code>STag</code> rule we need to get the text
		associated with <code>Name</code>. For this, we label the label <code>n:Name</code>,
		where <code>n</code> is a variable referring to the parse tree node represented
		by <code>Name</code>. The last element of the <code>STag</code> rule is its return
		value. In this case, we return the string parsed by <code>Name</code>, using
		the <code>yield</code> property of labels.</li>

	<li>In the <code>ETag</code> we compare the start tag, passed via the parameter
		<code>s</code> with the matched end tag, <code>n.yield</code>. If constraint
		<code>[n.yield == s]</code> evaluates to false, the parsing path terminates.
		This ensures that we only match balanced XML elements.
	</li>
</ul>
</p>

</div>
