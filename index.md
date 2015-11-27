---
---

{% include_relative header.md %}
{% include_relative navigation.md %}
    
<div style="width: 70%; height: 50%; float:left;" markdown="1">
## Iguana: A data-dependent parsing framework

<span>
Iguana is a parsing framework based on <a href="">data-dependent grammars</a>
</span>

<div id="example" style="margin-top:30px;">
<ul class="nav nav-tabs">
    <li class="active"><a href="#example1">Example 1</a></li>
    <li><a href="#example2">Example 2</a></li>
    <li><a href="#example3">Example 3</a></li>
</ul>

<div class="tab-content">
    <div id="example1" class="tab-pane fade in active">{% include_relative example_1.md %}</div>
    <div id="example2" class="tab-pane fade in active">{% include_relative example_2.md %}</div>
    <div id="example3" class="tab-pane fade in active">{% include_relative example_3.md %}</div>
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
