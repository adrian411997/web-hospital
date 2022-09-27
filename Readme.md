# Web Hospital Info

Estoy es una corta documentación sobre mi app para el curso de Desarrollo Full Stack de Incluyeme en colaboración con Mercado Libre.

## Tecnologías que he usado:

- React
- Javascript
- Node
- Express
- Css puro
- Redux-toolkit
- React-redux
- React-router V6

## ¿Qué hace mi proyecto?

Mi proyecto consiste en la creacion y modificacion de turnos utilizando una rest Api creada por mi mismo implementando un CRUD por lo que las acciones del usuario repercuten en la base de datos. A modo de una recepcion virtual en un hospital, el usuario puede:
- Incorporarse en la base de datos: Para ello debe completar un formulario para poder realizar mas acciones en la página colocando su DNI.
- Obtener un turno: El usuario estando registrado en la pagina, puede solicitar un turno en las diversas areas de atencion medica como neumonología, psicologia, etc, con doctores especificos en esa area.
. Modificar un turno: Puede modificar un turno cambiando solo la fecha y hora de atención.
- Eliminar un turno: Puede eliminar un turno si asi lo desea.

## ¿Como funciona mi Api?

Mi api funciona entregando informacion desde los siguientes endpoints

- api/turnos
- api/doctores
- api/doctores/spec

## ¿Puedo ejecutar el proyecto de forma local?

Si, el Backend y el Frontend estan configurados para ser ejectuados en el PC, solo se necesita las credenciales del usuario de postgress.

Dentro de la carpeta api, solo haz: 

```bash
npm install
```

Luego:

```bash
nodemon
```

Luego en la carpeta cliente:
```bash
npm install
```
Y luego 

```bash
npm start
```

### Gracias por venir!
