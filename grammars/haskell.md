
<div markdown="1">

### Haskell

The grammar is extracted from the <a href="https://www.haskell.org/definition/haskell2010.pdf">Haskell 2010 language report</a>.
GHC deals with indentation-sensitive rules in the lexing phase, and the context-free part is
written as if no indentation rules exist. The specification grammar of Haskell does
not capture indentation-sensitive rules. In the Indentation-sensitive grammar,
we use <code>align</code>, <code>offside</code> and <code>ignore</code> to express
the indentation-rules.

- [Specification Grammar](https://github.com/iguana-parser/grammars/blob/master/src/haskell/specification/Haskell.rsc)
- [Indentation-sensitive Grammar](https://github.com/iguana-parser/grammars/blob/master/src/haskell/datadependent/HaskellDD.rsc)

</div>