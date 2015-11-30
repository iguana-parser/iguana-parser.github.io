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
                <a href="#GroupB">XML elements</a>
            </li>
            <li>
                <a href="#GroupC">Indentation rules</a>
            </li>
            <li>
                <a href="#GroupD">Using Iguana Grammar API</a>
            </li>
        </ul>
    </nav>
    <!--Main Content -->
    <div class="col-xs-9">
        <section id="GroupB" class="group">
			{% include_relative examples/xml.md %}
        </section>
        <section id="GroupC" class="group">
        	{% include_relative examples/haskell.md %}
        </section>    
        <section id="GroupD" class="group">
        	{% include_relative examples/api.md %}
        </section>    
    </div>
</div>
