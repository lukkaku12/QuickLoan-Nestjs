¿Qué propósito cumple el archivo main.ts en un proyecto NestJS y por qué es crucial en la configuración inicial? Puedes leer más sobre el archivo aquí en la sección inferior de notas.R://
	•	Función: Inicia la aplicación NestJS.
	•	Importancia: Configura globalmente la app y arranca el servidor.

¿Qué diferencia existe entre app.module.ts y app.controller.ts? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación? Puedes leer sobre el archivo aquí o aquí. R://
	•	app.module.ts: Define el módulo principal y organiza componentes.
	•	app.controller.ts: Maneja las solicitudes HTTP del módulo.


¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos? R://

	•	Razón: Facilita organización, reutilización y mantenimiento del código.

¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación? R://

	•	Mantenimiento: Hace el código más fácil de actualizar.
	•	Escalabilidad: Permite agregar o modificar funcionalidades sin afectar toda la app.


Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados? R://
	•	Archivos: module.ts, controller.ts, service.ts.
	•	Relación: Estructuran y encapsulan las funcionalidades del módulo.


¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint? R:// 
	•	Consecuencia: El endpoint podría no funcionar correctamente o causar errores.

¿Por qué es importante manejar rutas dinámicas (por ejemplo, @Get(':id')) en aplicaciones que interactúan con bases de datos? R://
	•	Función: Permiten manejar recursos específicos en la base de datos, como buscar un registro por ID.

¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores? R://
	•	Beneficios: Mejora la organización, facilita la reutilización, separas las responsabilidades y es mas facil hacer pruebas.

¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación? R://
	•	Conexión: Facilita la modularidad y permite probar componentes de manera aislada.

¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras? R://

	1.	Seguridad: Evita que datos incorrectos o malintencionados causen fraudes o accesos no autorizados.
	2.	Integridad de los datos: Garantiza que las transacciones se realicen con información precisa, evitando errores en los registros financieros.
	3.	Manejo de errores: Facilita la detección y corrección de errores antes de que causen problemas mayores, asegurando que solo se procesen datos válidos.
	4.	Cumplimiento normativo: Asegura que la aplicación cumpla con las regulaciones financieras, lo que es esencial para evitar sanciones legales.

¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente? R://
