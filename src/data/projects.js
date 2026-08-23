import dashboardMembresias from "../assets/images/projects/membresias/dashboard.webp";
import sociosMembresias from "../assets/images/projects/membresias/socios.webp";
import accesosMembresias from "../assets/images/projects/membresias/accesos.webp";
import pagosMembresias from "../assets/images/projects/membresias/pagos.webp";

import dashboardMembresiasGallery from "../assets/images/projects/membresias/dashboard.webp?inline";
import sociosMembresiasGallery from "../assets/images/projects/membresias/socios.webp?inline";
import accesosMembresiasGallery from "../assets/images/projects/membresias/accesos.webp?inline";
import pagosMembresiasGallery from "../assets/images/projects/membresias/pagos.webp?inline";

import lectorBiometrico from "../assets/images/projects/biometrica/lector.webp";

import lectorBiometricoGallery from "../assets/images/projects/biometrica/lector.webp?inline";
import apiBiometrica from "../assets/images/projects/biometrica/api.webp?inline";
import asistenciaBiometrica from "../assets/images/projects/biometrica/asistencia.webp?inline";
import registroBiometrico from "../assets/images/projects/biometrica/registro.webp?inline";
/*Importaciones de las imagenes de los videos*/
import prototipoInnovatecnm from "../assets/images/projects/innovatecnm/prototipo.webp";
import aplicacionInnovatecnm from "../assets/images/projects/innovatecnm/aplicacion.webp";
import electronicaInnovatecnm from "../assets/images/projects/innovatecnm/electronica.webp";
import eventoInnovatecnm from "../assets/images/projects/innovatecnm/evento.webp";
import logoInnovatecnm from "../assets/images/projects/innovatecnm/logo.webp";

import prototipoInnovatecnmGallery from "../assets/images/projects/innovatecnm/prototipo.webp?inline";
import aplicacionInnovatecnmGallery from "../assets/images/projects/innovatecnm/aplicacion.webp?inline";
import electronicaInnovatecnmGallery from "../assets/images/projects/innovatecnm/electronica.webp?inline";
import eventoInnovatecnmGallery from "../assets/images/projects/innovatecnm/evento.webp?inline";
import logoInnovatecnmGallery from "../assets/images/projects/innovatecnm/logo.webp?inline";

/*Importaciones de las imagenes de los videos*/
import portadaVisualPlayer from "../assets/images/projects/visualplayer/portada.webp";
import previewVisualPlayer from "../assets/images/projects/visualplayer/preview.webp";
import playlistVisualPlayer from "../assets/images/projects/visualplayer/playlist.webp";
import showVisualPlayer from "../assets/images/projects/visualplayer/show.webp";
import controlsVisualPlayer from "../assets/images/projects/visualplayer/controls.webp";

import portadaVisualPlayerGallery from "../assets/images/projects/visualplayer/portada.webp?inline";
import previewVisualPlayerGallery from "../assets/images/projects/visualplayer/preview.webp?inline";
import playlistVisualPlayerGallery from "../assets/images/projects/visualplayer/playlist.webp?inline";
import showVisualPlayerGallery from "../assets/images/projects/visualplayer/show.webp?inline";
import controlsVisualPlayerGallery from "../assets/images/projects/visualplayer/controls.webp?inline";

const projects = [

    // Membresias
    {
        id: "membresias",

        featured: true,

        title:
            "Sistema Web de Gestión de Membresías y Control de Accesos",

        category:
            "DESARROLLO WEB · FULL STACK",

        image:
            dashboardMembresias,

        imageAlt:
            "Dashboard del sistema web de gestión de membresías",

        description:
            "Sistema web desarrollado para centralizar la gestión de socios, membresías, visitas y accesos mediante códigos QR.",

        modalDescription:
            "Sistema web desarrollado para centralizar la gestión de socios, membresías, visitas y accesos, facilitando el control administrativo y el seguimiento de las asistencias.",

        problem:
            "La gestión de entradas, salidas y visitas de los socios se realizaba de manera poco eficiente, dificultando el seguimiento de las asistencias semanales y mensuales, así como el control de las membresías y la generación de reportes.",

        solution:
            "Se desarrolló un sistema web para centralizar la gestión de socios, membresías, visitas y accesos. Cada socio cuenta con una credencial que incluye información básica y un código QR para registrar sus entradas y salidas.",

        role:
            "Desarrollo integral del sistema, incluyendo frontend, backend, diseño de la base de datos, diseño de credenciales, integración del sistema QR y realización de pruebas unitarias.",

        technologies: [
            "React",
            "JavaScript",
            "PHP",
            "MySQL",
            "QR"
        ],

        features: [

            "Gestión de socios.",

            "Gestión de membresías.",

            "Registro de entradas y salidas mediante QR.",

            "Control de visitas.",

            "Gestión de pagos.",

            "Reportes semanales y mensuales.",

            "CRUD de usuarios.",

            "Generación de credenciales con QR."

        ],

        gallery: [

            {
                src: dashboardMembresiasGallery,
                alt: "Dashboard del sistema"
            },

            {
                src: sociosMembresiasGallery,
                alt: "Gestión de socios"
            },

            {
                src: accesosMembresiasGallery,
                alt: "Registro de accesos"
            },

            {
                src: pagosMembresiasGallery,
                alt: "Gestión de pagos"
            }

        ]

    },

    // Biometrica
    {
        id: "biometrica",

        featured: false,

        title:
            "API Biométrica para Control de Asistencias",

        category:
            "INTEGRACIÓN · BIOMETRÍA",

        image:
            lectorBiometrico,

        imageAlt:
            "Lector de huella digital HID utilizado en el sistema de asistencia",

        description:
            "Desarrollo de una API en C# para integrar un lector de huella HID con un sistema de asistencia desarrollado en Flask.",

        modalDescription:
            "Solución desarrollada para integrar un lector de huella digital HID con un sistema de asistencia en Flask, permitiendo registrar huellas y utilizarlas posteriormente para identificar usuarios y registrar sus asistencias.",

        problem:
            "El sistema de asistencia utilizaba inicialmente identificadores y posteriormente códigos QR, pero los usuarios podían olvidar estos datos. Se optó por un lector de huella HID, aunque el SDK disponible presentaba limitaciones que impedían recuperar correctamente la información registrada desde la aplicación web.",

        solution:
            "Se desarrolló una API en C# utilizando las librerías RTE proporcionadas con el SDK del dispositivo. La API permitió establecer la comunicación necesaria entre el lector HID y el sistema desarrollado en Flask.",

        role:
            "Desarrollo de la API en C# e integración del lector de huella HID con el sistema Flask, haciendo posible el registro y lectura de huellas para utilizarlas en el control de asistencias.",

        technologies: [
            "C#",
            "Flask",
            "SDK HID",
            "RTE"
        ],

        features: [

            "Lectura de huellas digitales.",

            "Registro de huellas.",

            "Integración con el lector HID.",

            "Comunicación mediante API.",

            "Identificación mediante huella.",

            "Registro de asistencias."

        ],

        gallery: [

            {
                src: lectorBiometricoGallery,
                alt: "Lector de huella digital HID"
            },

            {
                src: registroBiometrico,
                alt: "Registro mediante huella digital"
            },

            {
                src: asistenciaBiometrica,
                alt: "Registro de asistencia mediante huella"
            },

            {
                src: apiBiometrica,
                alt: "API desarrollada en C#"
            }

        ]

    },

    // Innovatecnm

    {
        id: "innovatecnm",

        featured: false,

        title:
            "Sistema Domótico Asistivo para Control del Hogar",

        category:
            "IOT · AUTOMATIZACIÓN · HARDWARE",

        image:
            logoInnovatecnm,

        imageAlt:
            "Prototipo del sistema domótico asistivo desarrollado con Arduino",

        description:
            "Sistema domótico diseñado para facilitar la autonomía de personas con discapacidad motriz mediante el control de dispositivos del hogar desde una aplicación móvil.",

        modalDescription:
            "Proyecto desarrollado para integrar hardware, software y comunicación inalámbrica mediante un sistema domótico basado en Arduino Uno. La solución permite controlar elementos del hogar como iluminación, puertas, ventanas y otros dispositivos mediante una aplicación móvil.",

        problem:
            "Las personas con limitaciones de movilidad pueden enfrentar dificultades para realizar acciones cotidianas dentro del hogar, como controlar iluminación, accesos, ventilación u otros dispositivos. Esto reduce su autonomía y requiere soluciones adaptadas a sus necesidades.",

        solution:
            "Se desarrolló un sistema domótico asistivo compuesto por un módulo electrónico basado en Arduino Uno, comunicación Bluetooth y una aplicación móvil. El sistema permite enviar instrucciones hacia diferentes actuadores para controlar dispositivos del hogar sin necesidad de modificar completamente la instalación existente.",

        role:
            "Participación en el desarrollo integral del proyecto, incluyendo diseño de componentes electrónicos, documentación técnica, desarrollo de elementos visuales y colaboración en la integración general del sistema junto al equipo de trabajo.",

        technologies: [
            "Arduino Uno",
            "C/C++",
            "Arduino IDE",
            "MIT App Inventor",
            "Bluetooth",
            "Electrónica"
        ],

        features: [

            "Control de dispositivos del hogar mediante aplicación móvil.",

            "Automatización de iluminación y sistemas eléctricos.",

            "Integración de sensores y actuadores.",

            "Comunicación inalámbrica mediante Bluetooth.",

            "Pantalla LCD para mostrar información del sistema.",

            "Diseño orientado a accesibilidad e inclusión."

        ],

        gallery: [

            {
                src: prototipoInnovatecnmGallery,
                alt: "Prototipo del sistema domótico asistivo"
            },

            {
                src: aplicacionInnovatecnmGallery,
                alt: "Aplicación móvil para controlar el sistema"
            },

            {
                src: electronicaInnovatecnmGallery,
                alt: "Módulo electrónico del sistema domótico"
            },

            {
                src: eventoInnovatecnmGallery,
                alt: "Presentación del proyecto durante INNOVATECNM 2024"
            }

        ]

    },

    /*Visual player*/
    {
        id: "visualplayer",

        featured: false,

        title:
            "Sistema de Gestión y Proyección de Visuales",

        category:
            "DESARROLLO DE SOFTWARE · MULTIMEDIA",

        image:
            portadaVisualPlayer,

        imageAlt:
            "Interfaz principal de Visual Player para gestión y proyección de contenido multimedia",

        description:
            "Aplicación de escritorio desarrollada en Python para organizar, previsualizar y proyectar contenido multimedia durante presentaciones musicales.",

        modalDescription:
            "Aplicación de escritorio desarrollada para gestionar visuales durante presentaciones musicales, permitiendo seleccionar contenido, crear y reorganizar colas de reproducción, realizar previsualizaciones y enviar contenido a una pantalla de salida mediante VLC.",

        problem:
            "La reproducción de visuales mediante reproductores convencionales dificultaba la selección y organización del contenido durante las presentaciones, obligando a realizar pausas y gestionar manualmente los archivos mientras se desarrollaba el espectáculo.",

        solution:
            "Se desarrolló una aplicación de escritorio capaz de centralizar la gestión de visuales, permitiendo seleccionar carpetas, previsualizar contenido, crear y reorganizar listas de reproducción y enviar los visuales a una salida independiente mediante VLC. El sistema también incorpora controles de reproducción y audio separados para PREVIEW y SHOW.",

        role:
            "Desarrollo de la aplicación de escritorio, implementación de la interfaz en PyQt6, integración de VLC mediante python-vlc y desarrollo de la lógica para gestión de visuales, previsualización, reproducción, cola y salida independiente.",

        technologies: [
            "Python",
            "PyQt6",
            "VLC",
            "python-vlc"
        ],

        features: [

            "Selección de carpetas de contenido multimedia.",

            "Previsualización independiente de los visuales.",

            "Gestión y reorganización de listas de reproducción.",

            "Reproducción automática de la cola.",

            "Salida independiente para SHOW.",

            "Control de avance y detención de la reproducción.",

            "Controles de audio independientes para PREVIEW y SHOW.",

            "Soporte comprobado para MP4, MOV, WEBM, MKV y AVI."

        ],

        gallery: [

           

            {
                src: previewVisualPlayerGallery,
                alt: "Previsualización de contenido multimedia"
            },

            {
                src: playlistVisualPlayerGallery,
                alt: "Gestión de la lista de reproducción de visuales"
            },

            {
                src: showVisualPlayerGallery,
                alt: "Salida SHOW utilizada para proyectar contenido"
            },

            {
                src: controlsVisualPlayerGallery,
                alt: "Controles de reproducción y audio de Visual Player"
            }

        ]
    }


];


export default projects;