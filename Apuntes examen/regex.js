// Cristina Correa
const REGEX_LETRAS = /[a-zA-Z]+/: // Letras mayúsculas y minúsculas -> El "+" significa uno o más
const REGEX_NUMEROS = /[0-9]+/; // Números 
const REGEX_SIMBOLOS = /\W+/; // Cualquier carácter que no sea una letra, un número o un guion bajo -> "W"
const REGEX_CUALQUIER_CARACTER = /^.{1,20}$/; // Cualquier caracter "." -> también puede ser "w"

/*
\w	Coincide con cualquier caracter de palabra -> igual a [a-zA-Z0-9_]
\W	Coincide con cualquier otra cosa que no sea una letra, dígito o subrayado
\d	Coincide con cualquier dígito decimal. Equivalente a [0-9]
\D	Coincide con cualquier cosa que no sea un dígito decimal
\s  Coincide con un espacio en blanco
*/

// -------------------------- REGEX HECHAS -----------------------------------------
const REGEX_CUALQUIER_SIMBOLO = /^[\s\S]{1,20}$/; // Cualquier símbolo o caracter, mínimo 1 y máximo 20 (Ej: C19-*2/5&) -> para contraseñas 
const REGEX_NOMBRE = /[a-zA-Z]{2,20}/; // Cualquier letra (Ej: cristina) 
const REGEX_NOMBRE_ESTRICTO = /^(?=.{2,35}$)[A-Z][a-z]+(?: [A-Z][a-z]+)?$/; // Dos palabras que empiezan por mayus y siguen con minus (Ej: Cristina Correa)
const REGEX_NOMBRE_COMPLETO = /[a-zA-Z\s]{1,50}$/; // Cualquier letra minúscula o mayúscula + espacios (Ej: cristina correa)
const REGEX_EDAD = /^([0-9]|[1-9][0-9]|10[0-5])$/; // Cualquier edad del 0 al 105
const REGEX_NUMERO_O_VACÍO = /^(|[\d]+)$/; // Un número o que no esté cubierto (Ej: 5)
const REGEX_FECHA_BARRAS = /^\d{1,2}\/\d{1,2}\/\d{4}$/; // Una fecha de tipo dd/mm/aaaa
const REGEX_FECHA_GUIONES = /^\d{1,2}-\d{1,2}-\d{4}$/; // Una fecha de tipo dd-mm-aaaa
const REGEX_HORA = /^([01][0-9]|2[0-3]):[0-5][0-9]$/; // Una fehca de tipo hh:mm -> hora y minutos
const REGEX_HORAS = /^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/; // Una fecha de tipo hh:mm:ss -> hora, minutos y segundos
const REGEX_TELEFONO = /^\d{9}$/; // Cualquier número de teléfono (Ej: 666555444)
const REGEX_TELEFONO_PREFIJO = /^\+34\s\d{3}\s\d{3}\s\d{3}$/; // Cualquier número de teléfono con un prefijo español (Ej: +34 666 555 444)
const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Un mail con cualquier dominio (Ej: cristina@hotmail.com)
const REGEX_EMAIL_DOMINIO = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Un mail con un dominio @gmail.com (Ej: cristina@gmail.com)  
const REGEX_DNI = /^\d{8}-[a-zA-Z]$/; // Ocho números, un guión y una letra mayus o minus (Ej: 12345678-A)
const REGEX_PASAPORTE = /^[A-Z]{3}[0-9]{6}$/; // Tres letras y seis números (Ej: ABC123456) 
const REGEX_IBAN = /^([A-Z]{2}\d{2})(\d{4}){5}$/; // Dos mayúsculas y 22 números (Ej: ES1234567890123456789012)
const REGEX_OPCIONES = /^(Casada|Soltera)$/; // Solo dos opciones

// ------------------------- OTROS REGEX USADOS ----------------------------------
const REGEX1 = /^[A-Z]{2}\W\d{4}$/; // dos letras en mayúscula, un símbolo (algo que no sea ni letras ni números) y cuatro dígitos (ej. WW$1234)
const REGEX2 = /^[A-Z]{2,3}_([A-Z][a-z]*):(\d{4})$/; // dos o tres letras mayúsculas, un guión bajo, una palabra con la primera letra Mayúscula y el resto en minúsculas, dos puntos, y 4 dígitos (ej. NM_Madrid:1234).
