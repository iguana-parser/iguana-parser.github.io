<div markdown="1">

<style type="text/css">

table {
    border-collapse: collapse;
    border-style: hidden;
}

td, th {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    border: 1px solid black;
}
</style>

### Operator Precedence

<p>In this example we use high-level constructs for declarative specification
of operator precedence. More information about these constructs can be found
in our <a href="https://cdn.rawgit.com/iguana-parser/papers/master/onward15.pdf">Onward! 15</a> paper.</p>

<p>Expression grammars in their natural and concise form are ambiguous. It is 
common to rewrite an expression grammar to an unambiguous grammar that
encodes operator precedence. However, this rewriting is not trivial for grammars of 
real programming languages, and leads to large grammars.</p>

<p>We advocate a declarative approach to operator precedence where an ambiguous grammar and
a set of declarative constructs are used. Consider an excerpt of the OCaml grammar and its accompanying operator
precedence and associativity table from its language specification:</p>


<div style="width: 100%; overflow: hidden;">
	<div style="width: 54%; float:left;">
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

<div style="width: 46%; float:right; padding-left:20px;" markdown="1">

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

<p>We can encode this grammar in Iguana using high-level syntactic constructs
<code>></code>, <code>left</code>, and <code>right</code> as follows:

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