
<div markdown="1">

#### Regular expressions

<p>In our grammar formalism, terminals can be written using regular expressions.
Although the regular expression operators in this section are similar to the ones
of the EBNF in context-free grammars, their implementation is very different.
Regular expressions are only recognizers, i.e., do don't capture the structure,
and cannot be recursive. I addition, the repetition operators, <code>*</code> 
and <code>+</code>, are only greedy. We do not support non-greedy
quantifiers such as possessive or reluctant. For such uses, use a context-free rule.
The regular expressions are implemented as DFAs, and at the moment no advanced
features such as lookahead and lookbehind, commonly found in backtracking regular expressions, 
are supported.
</p>

<p>A regular expression is defined as follows:</p>

<ul>
    <li><code>c</code>: the character <code>c</code>.</li>

    <li><code>[c<sub>1</sub>-c<sub>2</sub>]</code>: a character range from <code>c<sub>1</sub></code> to <code>c<sub>2</sub></code>.</li>

    <li><code>[^c<sub>1</sub>-c<sub>2</sub>]</code>: negation (any character not in the range)</li>

	<li><code>r*</code>: (Kleene star) zero or more repetition of <code>r</code>.</li>

	<li><code>r+</code>: one or more repetition of <code>r</code>.</li>

	<li><code>r?</code>: zero or more occurrence of <code>r</code>.</li>

	<li><code>r<sub>1</sub>|r<sub>2</sub></code>: r<sub>1</sub> or r<sub>2</sub></code>.</li>

	<li><code>(r<sub>1</sub>r<sub>2</sub>...r<sub>n</sub>)</code>: a group of <code>r<sub>1</sub></code> <code>r<sub>2</sub></code> ... <code>r<sub>n</sub></code>.</li>	

</ul>

<p>Regular expressions are defined using the <code>regex</code>. The nested definitions of the
regular expressions are flattened. For example, consider the following grammar definition of
float and integer numbers.</p>

    @regex 
    float
      : integer '.' integer

    @regex  
    integer
      : [1-9][0-9]*

When <code>float</code> is used in a grammar rule as a terminal, its definitions
are flattened, i.e., treated as <code>[1-9][0-9]*[.][1-9][0-9]*</code>.

</div>