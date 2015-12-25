
<div markdown="1">

### Indentation-sensitive languages

<p>In this section we show how to define a simple Haskell-like indentation-sensitive
language. In programming languages, such as Haskell and Python, whitespace is
significant as it determines the meaning of programs.
For example, consider the following Haskell function:</p>

<pre><code class="language-haskell">
f x = case x of
      0 -> 1
      _ -> x + 2
           + 4
</code></pre>

<p>In Haskell, the keywords <code>do</code>, <code>let</code>, <code>of</code> 
and <code>where</code> signal the start of a block. All statements that belong to 
the same block should be aligned. In our example, two alternatives belong to the 
same block of the <code>case</code> expression as they are aligned with respect 
to each other. Haskell also applies the <i>offside</i> rule for each statement of a block. 
This means that all tokens inside a statement 
have to be to the right of its starting token. For example, in the second
alternative of the <code>case</code> expression, the right-hand-side expression 
includes subexpression <code>4</code> as all the tokens, including <code>+ 4</code>, 
are to the right of <code>_</code>.

<p>In Haskell, the keywords <b>do</b>, <b>let</b>, <b>of</b> and <b>where</b>
signal the start of a block, where all the statements should be aligned.
In our example two cases, starting with 0 and _, are aligned. Inside each
statements the tokens should be <a href="">offsided</a>. It means that that all the tokens
have to be to the right of the starting token. For example, in the second
alternative of the match, all tokens should be to the right of _.</p>

<p>Now we consider a slightly modified version of the example above, where we
shift <code>+ 4</code> to the left, so that it will be at the same column as
<code>_</code>:

<pre><code class="language-haskell">
f x = case x of
      0 -> 1
      _ -> x + 2
      + 4
</code></pre>


<p>In this version, <code>+ 4</code> does not belong to the second alternative anymore, as
it is not to the right of its starting token. Rather it belongs to the outermost 
addition expression with the <code>case</code> expression and <code>4</code> as 
its subexpressions. Now, if we call <code>f 0</code>, it returns 5, while the previous 
version returns 1.</p>

<p>Indentation sensitivity in programming languages cannot be expressed 
by pure context-free grammars, and has often been implemented by hacks in the lexer. 
For example, Haskell deals with indentation sensitivity in the lexing phase, and 
the context-free part is written as if no indentation-sensitivity exists. 
In Haskell, the lexer translates indentation information into curly braces 
and semicolons, based on the rules specified
by the L function in the <a href="https://www.haskell.org/definition/haskell2010.pdf">Haskell language manual</a>,
and the parser is constructed using an LALR parser generator.</p>

<p>A block of declarations in Haskell 
is defined by the following context-free grammar (we use a simplified grammar of Haskell):</p>

<pre><code class="language-bison">
Decls ::= '{' Decl (';' Decl)* '}'
</code></pre>

<p>This grammar says that a <code>Decls</code> starts and ends with curly braces, and
inside the braces, <code>Decl</code>s are separated by simicolons. In Haskell, when curly
braces are explicitly used, the indentation rules inside the braces are ignored. 
The indentation-sensitive version of this 
rule, in which a block is identified by a list of aligned <code>Decl</code>'s and 
each <code>Decl</code> is offsided, is implicit and is not part of its reference 
grammar. To have a declarative, single-phase specification of layout-sensitive
constructs, Iguana presents three high-level constructs: <code>align</code>, <code>offside</code> and <code>ignore</code>.
Using these constructs, we can redefine the rule above and add the new one as follows:</p>

<div class="code-container">
<pre><code class="language-bison">
Decls ::= ignore '{' Decl (';' Decl)* '}'
        | align (offside Decl)*
</code></pre>
<a href="https://github.com/iguana-parser/examples/blob/master/src/resources/grammars/IndentationSensitive.iggy#L8-L9" target="_blank" class="github-link"></a>
</div>

The use of <code>ignore</code> states that the indentation rules should
be ignored when the explicit delimiters are used, <code>align</code> states that 
all <code>Decl</code>'s inside the list should be aligned, and finally, <code>offside</code> 
states that each <code>Decl</code> should be offsided with regard to its first token. These definitions
clearly and concisely captures the indentation rules.

</div>
