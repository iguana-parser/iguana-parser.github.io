<div markdown="1">

#### Data-dependent grammars

<p>Iguana supports data-dependent grammars at its core. Data-dependent grammars
are an extension of context-free grammar that support arbitrary computation,
parametrized nonterminals, variable binding and constraints. These powerful
features allow the user to simulate hand-written parsers, and also implement
various disambiguation constructs.</p>

<p>Data-dependent grammars provide the following features:</p>

<ul>
	<li>Parametrized nonterminals of the form <code>A(p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub>)</code>.</li>
	<li>Bindings of the form <code>{v=e}</code>, where <code>e</code> is an arbitrary expression.</li>
	<li>Bindings of the form <code>{v=A(p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub>)}</code>, where <code>v</code> holds to the return value of <code>A(p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub>)</code>.</li>
	<li>Labeled symbols of the form <code>l:x</code>, where <code>l</code> is the label and <code>x</code> is a symbol (terminal or nonterminal).
	    A label provides access to the node corresponding to <code>x</code> in the parse forest, and has three properties: <code>l</code>, <code>r</code>, and
	    <code>yield</code>, which provide access to the left extent, right extent and the string parsed by <code>l</code>. One can access these properties
	    using a dot notation, e.g., <code>l.r</code> for the right extent.
	</li>
	<li>Return values of the form <code>{e}</code>, where <code>{e}</code> is the last symbol of an alternative.</li>
	<li>Conditional selections of the form <code>e ? &alpha; : &beta;</code>, where <code>e</code> is an expression
	    and <code>&alpha;</code> and <code>&beta;</code> are non-empty list of 
	    terminals and nonterminals. If <code>e</code> evaluates to <code>true</code>, <code>&alpha;</code> is
	    selected, otherwise <code>&beta;</code>.</li>
</ul>


To demonstrate the concept of data-dependent grammars we use an example from the 
IMAP protocol. In network protocol messages it is common to send the length of 
data before the actual data. In IMAP, these messages are called literals, and are
described by the following (simplified) context-free rule:

    L8 : '~{' Number '}' Octets

Here Octets recognizes a list of octet (any 8-bit) values. An example of L8 
is ~{6}aaaaaa. As can be seen, there is no data dependency in this context-free
grammar, but the IMAP specification says that the number of Octets is determined 
by the value parsed by Number. Using data-dependent grammars, we can specify such 
a data-dependency as: 

    L8 
      : '~{' nm:Number { n=toInt(nm.yield) } '}' Octets(n) 

    Octets(n) 
      : [n > 0] Octets(n - 1) Octet
      | [n == 0]                    // Empty rule


<p>In the data-dependent version, <code>nm</code> provides access to the value parsed by Number. 
We retrieve the substring of the input parsed by Number via nm.yield which is converted 
to integer using toInt. This integer value is bound to variable <code>n</code>, and is passed to Octets. 
Octets takes an argument that specifies the number of iterations. 
Conditions <code>[n > 0]</code> and <code>[n == 0]</code> specify which alternative 
is selected at each iteration.</p>


</div>