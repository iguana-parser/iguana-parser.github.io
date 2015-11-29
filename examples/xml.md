
<div markdown="1">

## XML elements

<p>XML is a popular data exchange format, and there are numerous XML parers
for different programming languages. Most of these parsers are handwritten,
rather than being generated from a grammar. The main problem is that the
syntax of XML is not context-free.</p>

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
and cubic runtime bound for the worse case. In this example, <code>s</code> holds
the value parsed by <code>STag</code> and passes it the parametrized nonterminal
<code>ETag</code>. Inside the <code>STag</code> rule, we need to get the text
associated with <code>Name</code>.
</p>

</div>
