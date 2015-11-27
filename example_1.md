
<h4>XML elements</h4>

<pre>
Element ::= s=STag Content ETag(s)
STag    ::= '<' n:Name Attribute* '>' { n.yield }
ETag(s) ::= '</' n:Name [n.yield == s] '>'
</pre>