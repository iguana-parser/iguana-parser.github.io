
<div markdown="1">

#### Context-free grammars

<p>Iguana supports all context-free grammars in a single-phase parsing mode.
This means that in Iguana we use a single specification to define the context-free
and lexical syntax, and there is no separate lexing phase before parsing.
Grammars can be defined to the level of characters, conforming to
<a href="https://en.wikipedia.org/wiki/Scannerless_parsing">Scannerless parsing</a> or 
using regular expressions, conforming to
<a href="https://www.umsec.umn.edu/sites/www.umsec.umn.edu/files/gpce.pdf">Context-aware scanning</a>.
Context-aware scanning basically means that we use a separate lexer during parser
to match tokens. You can find more information about benefits of single-phase parsing in our
<a href="https://cdn.rawgit.com/iguana-parser/papers/master/onward15.pdf">Onward&#39;15 paper</a>.</p>

<p>A grammar is a set of <b>rules</b>, where each rule has a <b>head</b> (a nonterminal)
and a <b>body</b> (a list of terminal and nonterminals). Nonterminals are indentifiers,
while terminals are characters or regular expressions. Consider the following
simple grammar of statements:</p> 

    Stmt 
      : 'if' Expr 'then' Stmt 'else' Stmt
      | 'if' Expr 'then' Stmt
      |  Id

    Expr
      : 'true'
      | 'false'

    regex Id
      : [a-z]+  


<p>As can be seen, each rule definition starts with a nonterminal followed by 
<code>:</code> followed by a list of alternatives which are separated by <code>|</code>.
Moreover, rules must be preceded by a new line character, except for the
first rule in the file. Terminals can be defined using either single or double quotes. To define a regular
expression, we use the <code>regex</code> keyword. The syntax of regular
expressions is explained <a href="#RegularExpressions">here</a>.</p>


<p>We also support the following EBNF operators:</p>

<ul>
	<li><code>A*</code>: Zero or more occurrence of A.</li>
	<li><code>A+</code>: One or more occurrence of A.</li>
	<li><code>A?</code>: Zero or one occurrence of A.</li>
	<li><code>(&alpha;): </code>A group of non-empty list of symbols &alpha;.</li>
	<li><code>A|B</code>: A or B. This operator, in contrast to the normal alternatives in 
	context-free rules, can appear in the body of a rule.</li>
</ul>

<p>Note that <code>*</code> and <code>+</code> are not greedy in context-free rules.</p>

</div>