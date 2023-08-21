<h3>
¿Qué sucedió al usar async y await?
</h3>
<p>Al usar <strong>async</strong> y <strong>await</strong>, el programa espera a que cada función asíncrona (aquellas que devuelven promesas) se complete antes de pasar a la siguiente línea de código. Esto hace que el flujo del programa sea más claro y legible, similar a la programación síncrona.</p>

---

<h3>
¿Qué sucedió al usar el método then()?
</h3>
<p>Al usar el método <strong>then()</strong>, puedes encadenar acciones que deben ejecutarse después de que una promesa se resuelva correctamente. Esto permite un control más detallado sobre el flujo de ejecución, pero a menudo conduce a un código más anidado y menos legible en comparación con <strong>async/await.</strong></p>

---

<h3>
¿Qué diferencias encontraste entre async, await y el método then()?
</h3>
<ul>
<h4>¿Qué diferencias encontraste entre async, await y el método then()?</h4>
<h5>Las principales diferencias son:</h5>
<li>async/await hace que el código sea más legible y se vea como código síncrono, mientras que el método then() puede conducir a un código más anidado y menos legible.</li>
<li>async/await maneja automáticamente los errores a través de un bloque try/catch, mientras que con el método then(), debes manejar explícitamente los errores usando .catch().</li>
<li>async/await es más fácil de razonar y depurar, ya que los errores se capturan de manera más intuitiva y los errores no capturados en funciones asíncronas se propagan correctamente, lo que no siempre ocurre con el método then().</li>
</ul>