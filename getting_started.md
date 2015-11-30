---
layout: base
---

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
                <a href="#Download">Download and Install</a>
                <ul class="nav nav-stacked">
                    <li><a href="#Source">From Source</a></li>
                    <li><a href="#Binary">From Binaries</a></li>
                </ul>
            </li>
            <li>
                <a href="#Running">Running Iguana</a>
            </li>
        </ul>
    </nav>
    <!--Main Content -->
    <div class="col-xs-9">
        <section id="Download" class="group">
            {% include_relative download.md %}
        </section>
        <section id="Running" class="group">
            {% include_relative examples/api.md %}
        </section>
    </div>
</div>
