
<div markdown="1">

## For developers

<p>Iguana is under active development and APIs and implementations are subject to
frequent change. You can use both <a href="https://www.jetbrains.com/idea/">IntelliJ</a> 
and <a href="https://eclipse.org/home/index.php">Eclipse</a> to develop Iguana.</p>

<ul>
	<li>
		<p>We use <a href="https://www.jetbrains.com/idea/download/"> IntelliJ IDEA 15</a>
		(with Scala plugin) for developing Iguana. 
		The Intellij IDEA project information are checked into
		Git, so if you checkout the repository and open <code>Iguana</code>, it should
		work out of the box. The only thing you need to set is the Scala and Java SDKs
		and reload the projects in the SBT view of IntelliJ IDEA. If you encounter any 
		problems in using IntelliJ IDEA for developing Iguana, please open an issue on <a href="https://github.com/iguana-parser/iguana">Github</a>.</p>		
	</li>
	<li>
		<p>To use Eclipse, you need to install <a href="http://scala-ide.org">Scala IDE</a>.
		The Eclipse project files are not by default checked into Git, because
		the <a href="https://github.com/typesafehub/sbteclipse">sbt-eclipse</a> generates
		absolute dependency paths that are not portable. To use Eclipse, you need 
		to generate the Eclipse projects before importing
		the projects into Eclipse. For this, run <code>sbt eclipse</code>.</p>

		<p>There is one caveat in generating Eclipse projects for Iguana. Before 
		running <code>sbt eclipse</code>, uncomment <a href="https://github.com/iguana-parser/iguana/blob/master/build.sbt#L42">this line</a>
		in the <code>build.sbt</code>.
		</p>
	</li>
</ul>


</div>