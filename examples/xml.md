
<div markdown="1">

### XML elements

<p>XML is a popular data exchange format, and there are numerous XML parsers
for different programming languages. These parsers, however, are handwritten,
rather than being generated from a grammar. The main problem is that the
syntax of XML is not context-free. In this example, we show how to write
a data-dependent grammar for parsing XML.</p>

<p>The <a href="http://www.w3.org/TR/xml11/#NT-element">XML reference manual</a>
has a very straightforward grammar. For example, an XML element is defined by the
following context-free rules: 
<p>

<pre>
Element ::= STag Content ETag
STag    ::= '<' Name Attribute* '>'
ETag    ::= '</' Name '>'
</pre>

<p>In this grammar <code>Element</code> defines an XML element with a 
start (<code>STag</code>) and end (<code>ETag</code>) tag. As can be seen, there 
is no constraint in this grammar to ensure that the start and end tags are the same. 
For example, according to this grammar, the following example is valid XML:</p>


<pre>
&lt;note&gt;
  &lt;to&gt;Bob&lt;/from&gt;
  &lt;from&gt;Alice&lt;/to&gt;
&lt;/note&gt;
</pre>

<p>Now we show a data-dependent version of an XML element:</p>

<pre>
Element ::= s=STag Content ETag(s)
STag    ::= '<' n:Name Attribute* '>' { n.yield }
ETag(s) ::= '</' n:Name [n.yield == s] '>'
</pre>

<p>This grammar specifies 
that the string parsed by <code>Name</code> should be the same for the start and end 
tags. Data-dependent grammars have an intuitive semantics. One can consider their
runtime semantics as a recursive-descent parser with a guard for left recursion,
and cubic runtime bound for the worst case. In the data-dependent grammar of XML
elements, we make the following changes:</p>

<ul>
	<li>In the <code>Element</code> rule, we introduce the variable 
		<code>s</code>, which holds the value returned by <code>STag</code>. 
		This value is then passed to the parametrized nonterminal <code>ETag</code>.
	</li>

	<li>In the <code>STag</code> rule, we get the text
		associated with <code>Name</code>. For this, we label the use of 
		nonterminal <code>Name</code>, <code>n:Name</code>,
		where <code>n</code> is a variable referring to the node represented
		by <code>Name</code>. The last element of the <code>STag</code> rule is the return
		expression. In this case, we return the string parsed by <code>Name</code>, accessing it via
		the <code>yield</code> property.
	</li>

	<li>In the <code>ETag</code> rule, we compare the start tag, passed via the parameter
		<code>s</code>, with the matched end tag's string <code>n.yield</code>. If constraint
		<code>n.yield == s</code> evaluates to false, the parsing path terminates.
		This ensures that only balanced XML elements are matched.
	</li>
</ul>

</div>
