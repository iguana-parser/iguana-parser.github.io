---
layout: base
---

<script type="text/javascript">
	$('body').scrollspy({
	    target: '.bs-docs-sidebar',
	    offset: 40
	});

	$("#sidebar").affix({
	    offset: {
	      top: 60
	    }
	});
</script>

<div class="row">
    <!--Nav Bar -->
    <nav class="col-xs-3 bs-docs-sidebar">
        <ul id="sidebar" class="nav nav-stacked fixed">
    		<li>
                <a href="#XML">XML elements</a>
            </li>
            <li>
                <a href="#OperatorePrecedence">Operator precedence</a>
            </li>
            <li>
                <a href="#Haskell">Indentation rules</a>
            </li>
        </ul>
    </nav>
    <!--Main Content -->
    <div class="col-xs-9">
        <section id="XML" class="group">
			{% include_relative examples/xml.md %}
        </section>
        <section id="OperatorePrecedence" class="group">
        	{% include_relative examples/operator_precedence.md %}
        </section>    
        <section id="Haskell" class="group">
        	{% include_relative examples/haskell.md %}
        </section>    
    </div>
</div>
