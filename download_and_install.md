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
            <li><a href="#Requirements">Requirements</a></li>
            <li><a href="#Source">Source distribution</a></li>
            <li><a href="#Binary">Binary distribution</a></li>
            <li><a href="#Developers">For developers</a></li>
        </ul>
    </nav>
    <!--Main Content -->
    <div class="col-xs-9">
        <section id="Requirements" class="group">
            {% include_relative download/requirements.md %}
        </section>
        <section id="Source" class="group">
            {% include_relative download/source.md %}
        </section>
        <section id="Binary" class="group">
            {% include_relative download/binary.md %}
        </section>
        <section id="Developers" class="group">
            {% include_relative download/developers.md %}
        </section>
    </div>
</div>
