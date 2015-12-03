
<div markdown="1">

### Syntax

<p>Iguana supports data-dependent grammars at its core. Data-dependent grammars
are an extension of context-free grammar that support arbitrary computation,
parametrized nonterminals, variable binding and constraints. These powerful
features allow the user to simulate hand-written parsers, and also implement
various disambiguation constructs. In this section, we present the syntax
of Iguana for data-dependent grammars.</p>

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
while terminals are characters or regular expressions. Consider the following grammar:</p> 

    Stmt 
      : 'if' Expr 'then' Stmt 'else' Stmt
      | 'if' Expr 'then' Stmt
      | Num

    Expr
    ::= 'true'
      | 'false'
      | Num

    regex Num ::= [0-9]+

Terminals can be defined either single or double quotes. To define a regular
expression, we use the <code>regex</code> keyword. The syntax of regular
expressions is explained <a href="#RegularExpressions">here</a>.


<h4 id="RegularExpressions">Regular expressions</h4>

</div>