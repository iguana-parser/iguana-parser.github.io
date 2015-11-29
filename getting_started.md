---
layout: base
---

<style type="text/css">
	.fixed {
	    position: fixed;
	}

	/* sidebar */
	.bs-docs-sidebar {
	    padding-left: 20px;
	    margin-top: 20px;
	    margin-bottom: 20px;
	}

	/* all links */
	.bs-docs-sidebar .nav>li>a {
	    color: #999;
	    border-left: 2px solid transparent;
	    padding: 4px 20px;
	    font-size: 13px;
	    font-weight: 400;
	}

	/* nested links */
	.bs-docs-sidebar .nav .nav>li>a {
	    padding-top: 1px;
	    padding-bottom: 1px;
	    padding-left: 30px;
	    font-size: 12px;
	}

	/* active & hover links */
	.bs-docs-sidebar .nav>.active>a, 
	.bs-docs-sidebar .nav>li>a:hover, 
	.bs-docs-sidebar .nav>li>a:focus {
	    color: #292929;
	    text-decoration: none;          
	    background-color: transparent;  
	    border-left-color: #292929; 
	}
	/* all active links */
	.bs-docs-sidebar .nav>.active>a, 
	.bs-docs-sidebar .nav>.active:hover>a,
	.bs-docs-sidebar .nav>.active:focus>a {
	    font-weight: 700;
	}
	/* nested active links */
	.bs-docs-sidebar .nav .nav>.active>a, 
	.bs-docs-sidebar .nav .nav>.active:hover>a,
	.bs-docs-sidebar .nav .nav>.active:focus>a {
	    font-weight: 500;
	}

	/* hide inactive nested list */
	.bs-docs-sidebar .nav ul.nav {
	    display: none;           
	}
	/* show active nested list */
	.bs-docs-sidebar .nav>.active>ul.nav {
	    display: block;           
	}

	.group, .subgroup {
	    padding-top: 50px;
	    margin-top: -50px;
	}
</style>

<script type="text/javascript">
$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});
</script>

<div class="row">
    <!--Nav Bar -->
    <nav class="col-xs-3 bs-docs-sidebar">
        <ul id="sidebar" class="nav nav-stacked fixed">
            <li>
                <a href="#GroupA">Download</a>
            </li>
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
        <section id="GroupA" class="group">
			{% include_relative download.md %}
        </section>
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
