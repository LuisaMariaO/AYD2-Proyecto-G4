DROP DATABASE Qnave;
CREATE DATABASE Qnave;

USE Qnave;

CREATE TABLE rol (
    rol_id INT NOT NULL AUTO_INCREMENT,
    nombre_rol VARCHAR(25),
    PRIMARY KEY (rol_id)
);

CREATE TABLE estado_civil (
	estado_civil_id INT NOT NULL AUTO_INCREMENT,
	nombre_estado_civil VARCHAR(25),
	PRIMARY KEY (estado_civil_id)
);

CREATE TABLE usuario(
	usuario_id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
	genero CHAR(1) NOT NULL,
	dpi VARCHAR(13) NOT NULL,
	celular INT NOT NULL,
	edad INT NOT NULL,
	fotografia TEXT,
	direccion TEXT,
	password TEXT NOT NULL,
	estado_cuenta CHAR(1) NOT NULL,
	estado_civil INT NOT NULL,
	rol INT NOT NULL,
	PRIMARY KEY (usuario_id),
	FOREIGN KEY (estado_civil) REFERENCES estado_civil (estado_civil_id),
	FOREIGN KEY (rol) REFERENCES rol (rol_id)
);

CREATE TABLE marca_vehiculo (
	marca_id INT AUTO_INCREMENT NOT NULL,
	marca_nombre VARCHAR(25),
	PRIMARY KEY (marca_id)
);

CREATE TABLE vehiculo (
	vehiculo_id INT AUTO_INCREMENT NOT NULL,
	fotografia TEXT,
	placa VARCHAR(25),
	anio INT,
	marca INT,
	PRIMARY KEY (vehiculo_id),
	FOREIGN KEY (marca) REFERENCES marca_vehiculo (marca_id)
);

CREATE TABLE empleado (
	codigo_empleado INT AUTO_INCREMENT NOT NULL,
	curriculum TEXT,
	usuario_id INT NOT NULL,
	vehiculo INT,
	PRIMARY KEY (codigo_empleado),
	FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id),
	FOREIGN KEY (vehiculo) REFERENCES vehiculo (vehiculo_id)
);

CREATE TABLE zonas (
	zona INT AUTO_INCREMENT NOT NULL,
	PRIMARY KEY (zona)
);

CREATE TABLE tarifa (
	tarifa_id INT AUTO_INCREMENT NOT NULL,
	inicio INT NOT NULL,
	fin INT NOT NULL,
	precio INT NOT NULL,
	PRIMARY KEY (tarifa_id),
	FOREIGN KEY (inicio) REFERENCES zonas(zona),
    FOREIGN KEY (fin) REFERENCES zonas(zona)
);

CREATE TABLE viaje (
	viaje_id INT AUTO_INCREMENT NOT NULL,
	estado CHAR(1),
	fecha date,
	tarifa INT NOT NULL,
	metodo_pago CHAR(1),
	usuario_solicitud INT,
	usuario_conductor INT,
	PRIMARY KEY (viaje_id),
	FOREIGN KEY (tarifa) REFERENCES tarifa (tarifa_id),
	FOREIGN KEY (usuario_solicitud) REFERENCES usuario (usuario_id),
	FOREIGN KEY (usuario_conductor) REFERENCES usuario (usuario_id)
);

CREATE TABLE categoria_problema (
	categoria_id INT AUTO_INCREMENT NOT NULL,
	categoria_nombre VARCHAR(100),
	PRIMARY KEY (categoria_id)
);

CREATE TABLE conductor_problema (
	problema_id INT AUTO_INCREMENT NOT NULL,
	categoria INT NOT NULL,
	evidencia TEXT,
	resolucion TEXT,
	viaje INT NOT NULL,
	PRIMARY KEY (problema_id),
	FOREIGN KEY (categoria) REFERENCES categoria_problema (categoria_id),
	FOREIGN KEY (viaje) REFERENCES viaje (viaje_id)
);

CREATE TABLE usuario_problema (
	problema_id INT AUTO_INCREMENT NOT NULL,
	viaje INT NOT NULL,
	descripcion TEXT NOT NULL,
	fecha DATE,
	PRIMARY KEY (problema_id),
	FOREIGN KEY (viaje) REFERENCES viaje (viaje_id)
);