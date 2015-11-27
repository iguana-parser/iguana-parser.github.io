---
---

{% include_relative header.md %}
{% include_relative navigation.md %}
    
<div style="width: 70%; height: 50%; float:left;" markdown="1">
## Iguana: A data-dependent parsing framework

<div id="example" style="margin-top:30px;">
<ul class="nav nav-tabs">
    <li class="active"><a href="#home">Example 1</a></li>
    <li><a href="#menu1">Example 2</a></li>
    <li><a href="#menu2">Example 3</a></li>
</ul>

<div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h4>XML elements</h4>

<pre>
Element ::= s=STag Content ETag(s)
STag    ::= '<' n:Name Attribute* '>' { n.yield }
ETag(s) ::= '</' n:Name [n.yield == s] '>'
</pre>

    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
</div>

</div>

<div style="width: 30%; height: 50%; float:right; margin-top:20; margin-bottom:20;">
    <img src="images/iguana.jpg" width="100%">
</div>

<script>
$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});
</script>


{% include_relative footer.md %}
