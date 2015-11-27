
<h4>XML elements</h4>

<p>XML is a popular data exchange format, and there are numerous XML parers
for different programming languages. Most of these parsers are handwritten,
rather than being generated from a grammar. The main problem is that the
syntax of XML is not context-free.</p>

<p>
The <a href="http://www.w3.org/TR/xml11/#NT-element">XML reference</a> has a very straightforward syntax of 
</p>

<pre>
Element ::= s=STag Content ETag(s)
STag    ::= '<' n:Name Attribute* '>' { n.yield }
ETag(s) ::= '</' n:Name [n.yield == s] '>'
</pre>