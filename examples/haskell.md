
<div markdown="1">

## Indentation-sensitive languages

In this example we show how to define a simple Haskell-like indentation-sensitive
language. In programming languages, such as Haskell and Python, whitespace is
significant, i.e., it determines the meaning of programs.
For example, consider the following function with two cases. 

{% highlight haskell %}
f x = case x of
      0 -> 1
      _ -> x + 2
           + 4
{% endhighlight %}

In Haskell, the keywords <b>do</b>, <b>let</b>, <b>of</b> and <b>where</b>
signal the start of a block, where all the statements should be aligned.
In our example two cases, starting with 0 and _, are aligned. Inside each
statements the tokens should be <a href="">offsided</a>. It means that that all the tokens
have to be to the right of the starting token. For example, in the second
alternative of the match, all tokens should be to the right of _.

Now we consider a slightly modified version of the example above, where we
shift <code>+ 4</code> to the left, so that it will be at the same column as
_:

{% highlight haskell %}
f x = case x of
      0 -> 1
      _ -> x + 2
      + 4
{% endhighlight %}

In this version, <code>+ 4</code> does not belong to the second alternative, as
it is not to the right of its starting token. Rather it belongs to the whole case
expression. If we call this function with <code>f 0</code> the answer will be
5, while in the previous version it was 1.

</div>