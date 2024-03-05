# Introducción al testing con javascript
## Clase 1 - ¿Qué es el testing?
✔️ Gestionar el riesgo que siempre va a existir

❌ Demostrar que el software funciona como debería

"The earlier you find a mistake, the easier it is to fix"

- *Static analysis* runs in your editor. Finds typos, incorrect function calls, autocompletes code
- *Unit tests* take a few seconds to verify your code does what you think it does
- *Integration tests* take a few minutes to validate yor system works. May catch fun edge cases.
- *Code review* takes a few hours to validate you are following standard norms and practices of your team.
- *QA* takes a few hours or days to ensure everything works together as expected.

## Clase 2 - La pirámide de testing
Pirámide general:

    Top: UI

    Medium: Service

    Base: Unit

Pirámide con más detalles:

    UI Tests, se emula un browser o dispositivo físico

    End to end tests, test a como funciona la app, con base de datos, api

    Integration tests, testeamos como funcionan varias unidades en conjunto

    Unit Tests, directamente al código por unidad

Pirámide anti patron CONO (Es cuando se invierte el orden de la pirámide)

Patrón Trofeo:

    End to end

    Integration

    Unit

    Static

## Clase 3 - Deuda técnica
Etapas de vida de software: diseño - desarrollo - pruebas -producción

Es menos costoso corregir un error en una etapa temprana

La deuda técnica es una estrategia para alcanzar algo y luego se paga. Depende de la fase en la que se encuentra la compañia:
1. Tracción, la compañia busca velocidad sobre presición (en esta etapa el testing está sobrevalorada)
2. Inflexión
3. Escala
4. Expansión

## Clase 4 - Herramientas de testing (ecosistema de js)
Herramientas en general
- Jest.js
- chai
- mocha
- etc

Herramientas UI Testing:
- cypress
- puppeteer
- etc...

Herramientas API testing
- supertest
- dread
- postman

Herramientas Pruebas estáticas
- sdlink
- typescrtip

## Clase 7 - Pruebas estáticas
Para esto se utilizan ESlint, typescript, prettier

## Clase 8 - matchers

- toEqual: Compara si dos valores son iguales en contenido.
- toBeNull: Verifica si un valor es nulo.
- toBeDefined: Verifica si un valor está definido.
- not.toBeUndefined: Verifica si un valor no es indefinido.
- toBeTruthy: Verifica si un valor es verdadero.
- not.toBeFalsy: Verifica si un valor no es falso.
- toBeFalsy: Verifica si un valor es falso.
- toMatch: Verifica si una cadena coincide con un patrón regular.
- toContain: Verifica si un elemento está presente en un arreglo.

## Clase 9 - setup teardown

- beforeAll(): se ejecuta antes de todas las pruebas.
- beforeEach(): se ejecuta antes de cada prueba.
- afterEach(): se ejecuta después de cada prueba.
- afterAll(): se ejecuta después de todas las pruebas Nota: Todas estas funciones se ejecutan dentro del alcance del scope.

## Clase 10 implementando setup

npm run test -- 06-person  // para ejecutar solo un archivo en especifico, en este caso el archivo 06-person

## Clase 11 Tipos de pruebas

- SUT (System Under Test): Sujeto Bajo Prueba, por ejemplo, Person sería nuestro SUT, no necesariamente tiene que ser un sistema.
- Validar: A la hora de validar resolvemos la siguiente pregunta: ++¿estamos construyendo el sistema correcto?++, por lo general, en la capa de requerimientos con el cliente y si le da valor a él.
- Verificar: Cuando ya se hacen pruebas, se verifica teniendo en mente la pregunta: ++¿estamos construyendo el sistema correctamente?++ casi obviando que ya se produce valor al cliente.
- En todas las capas se pueden hacer pruebas, incluso sin código, como en los UML o en la revisión con el equipo de Scrum
  - Pruebas Funcionales Son las que validan que se cumplan los requerimientos de valor para el cliente (como guardar bien los buenos datos de un usuario); hasta este punto es lo que hemos hecho en VS code. Por norma general, las pruebas unitarias las entrega el desarrollador, el tester se empieza a involucrar en las pruebas de integración o E2E.
  - Pruebas No Funcionales Verifican más el óptimo manejo de los recursos del software, no el cumplimiento de requisitos persé, como lo son pruebas de: +rendimiento +carga o estabilidad +estrés +usabilidad +seguridad. Estas pruebas no necesariamente deben estar desde el principio.

## Clase 12 Metodologías

- TDD (Test Driven Development): Desarrollo guiado por pruebas, donde primero se hacen las pruebas antes de escribir el código(primero los expects).
- BDD (Behavior Driven Development): Desarrollo guiado por comportamiento de acuerdo a los requisitos y luego las pruebas.
- AAA "Mantra" para hacer pruebas (Arrange(given), Act(when), Assert(then))

Sistema Legacy Son sistemas que te piden agregar pruebas a algo funcional, incluso en paralelo; hay que refactorizar los métodos enormes a pequeños para hacer unit test de pocos a muchos métodos; legacy no lleva una buena arquitectura.

Clean Architecture Este patrón lleva buenas prácticas desde el principio, cada método está bien dividido y con responsabilidades acertadas, es mucho más facil de agregar el set de pruebas.

## Clase 13 Pruebas Unitarias

Son las más comunes y se enfocan en probar unidades específicas, incluso conectando dependencias como BD o librerías emuladas (Dummies); se les conoce también como pruebas de estado o de caja negra, ya que solo importan las entradas y las salidas, en algunas ocasiones se hace con dependencias reales.

Una unidad puede ser una función o un método o una clase, depende del paradigma usado en desarrollo (funcional o POO); una unidad debe tener solo una responsabilidad en específico.

Una utilidad importante de las Unit Test es el Cover Report (reporte de cobertura)

Se pueden hacer pruebas unitarias de dos maneras:

- caja negra: no me importa lo que haga dentro
- caja blanca: tego en cuenta lo que hace dentro, lo verifico en la prueba Las unidades que se testean deberían hacer una sola cosa (single responsability) y entonces aplicaríamos el testeo de caja negra.

## Clase 14 Coverage report

npm run test -- --coverage
Al ejecutar ese comando, jest realiza un analisis de cobertura y crea una nueva carpeta llamada "coverage" con los resultados, se puede ver en index.html

"Coverage report" es una medida porcentual que evalua el grado que un codigo ha sido ejecutado

El coverage report también es usada como técnica para eliminar código que nunca va a ser ejecutado.

## Clase 17 Mocking, stub, doubles

- Dummy: son datos ficticios y se usan para rellenar información
- Fake: simulan un objeto real y sirven para suplantar ciertos datos y comportamientos
- Stubs: proveen respuestas preparadas y se pueden llamar durante el test para simular un comportamiento
- Spies: pueden ser stub pero puedo recolectar información de como fue llamado
- Mocks: stub+spies, a veces pueden ya estar preparados

## Clase Integration Test

Ya no se realizan las pruebas a un solo modulo sino a varios y ver como funcionan en conjunto, no se conectan con bases de datos, de hecho se utilizan mocks para simular las bases de datos

## Clase e2e End to end

Para estas pruebas si nos conectamos con bases de datos, sin embargo se puede configurar el entorno para consumir bases de datos de prueba paralelos

## Clase 24 UI Test

Se enfocan en emular dispositivos y hacer pruebas del sistema
Test en los que se prueba la aplicacion final, usualmente la realizan los equipos especializados en testing, estas pruebas son independientes del lenguaje con el que se haya desarrollado la aplicacion a testear
playwright es util para simular un navegador

## Clase 25  Automatizar con github Actions

