<div markdown="1">

### Operator Precedence

<p>In this example we use high-level constructs for declarative specification
of operator precedence. More information about these constructs can be found
in our recent work~\cite{Afroozeh2016}</p>

<p>Expression grammars in their natural and concise form are ambiguous. It is 
common to rewrite an expression grammar to an unambiguous grammar that
encodes operator precedence. However, this rewriting is not trivial for grammars of 
real programming languages, and leads to large grammars.</p>

<p>We advocate a declarative approach to operator precedence where an ambiguous grammar and
a set of declarative constructs are used. Consider an excerpt of the OCaml grammar and its accompanying operator
precedence and associativity table from its language specification:</p>


<div style="width: 100%; overflow: hidden;">
	<div style="width: 50%; float:left;">
<pre>
expr ::= expr '.' field  
       | expr expr
       | '-' expr
       | expr '*' expr
       | expr '+' expr
       | expr '-' expr
       | 'if' expr 'then' expr 'else' expr
       | expr ';' expr
       | '(' expr ')'
       | num
</pre>       
	</div>

<div style="width: 50%; float:right; padding-left:50px;" markdown="1">

| Operator             | Associativity |
|----------------------|:-------------:|
| .                    |       -       |
| function application |      left     |
| - (unary)            |       -       |
| *                    |      left     |
| + -                  |      left     |
| if-then-else         |       -       |
| ;                    |     right     |

</div>
</div>

<p>We can encode this grammar in Iguana using high-level syntactic constructs \code{>}, \code{left},
and \code{right} as follows:

<pre>
expr ::= expr '.' field  
       > expr expr                           left
       > '-' expr
       > expr '*' expr                       left
       > (expr '+' expr | expr '-' expr)     left
       > 'if' expr 'then' expr 'else' expr
       > expr ';' expr                       right
       | '(' expr ')'
       | num	
</pre>

<p>As can be seen, operator precedence is defined by <code>></code> between
two alternatives, and it is decreasing, i.e., the first alternative has the highest
precedence. Associativity is defined using <code>left</code> and <code>right</code>. 
For rules that have the same precedence, but are left-associative with respect to
each other, e.g., the <code>'+'</code> and <code>'-'</code> rules, an associativity 
group is defined.</p>


</div>