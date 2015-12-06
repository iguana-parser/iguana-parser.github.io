
<div markdown="1">

#### Layout

<p>In almost all programming languages, whitespace and comment, which we refer to
as <b>layout</b>, are optional and can appear anywhere in the program. In a 
traditional two-phase parsing setting (lexing before parsing), layout is usually thrown
away by the lexer and the context-free part is written as if no
layout exists. In single-phase parsing, layout should be defined as part of 
the syntax, like any other grammar symbol. Because it is tedious to manually
insert layout into the grammar, and also the fact that it may hinder readability
and maintainability, we support automatic layout insertion in Iguana.</p>

<p>Our layout insertion is inspired by <a href="http://homepages.cwi.nl/~daybuild/daily-books/syntax/2-sdf/sdf.html">SDF</a>,
where layout is inserted between symbols in body of rules. More precisely,
if <code>S ::= A<sub>1</sub> A<sub>2</sub> ... A<sub>n</sub></code> is a context-free
rule, and <code>L</code> is a layout definition, the grammar after the layout 
insertion will be <code>S ::= A<sub>1</sub> L A<sub>2</sub> L ... L A<sub>n</sub></code>.</p>

<p>In Iguana, layout is defined using the <code>@Layout</code> annotation. For
example, the common layout definition in a language such as Java is as follows:</p>

    @Layout
    Layout ::= [\ \t \f \r \n]*

There can be only one layout definition per grammar definition, and by default,
layout is inserted in all the rules unless they are explicitly
marked with <code>@NoLayout</code>. The <code>@NoLayout</code> annotation is
useful in cases where the structure of a lexical definition is needed. For example,
a float number can be defined as:

    @NoLayout 
    Float ::= Number '.' Number

In this case, no whitespace between the symbols of <code>Float</code> is allowed.

</div>