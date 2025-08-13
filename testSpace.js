{
    "type": "object",
        "properties"        : {
        "Id"                : { "type"  : ["integer", "null"] },
        "Unidade"           : { "oneOf" : [  {"type": "null" }, {"type": "object", "properties": { 
                                "Id"    : { "type": "integer" } }, "required": ["Id"] } ] },
        "Inicio"            : { "type"  : ["string", "null"],   "format": "date" },
        "Fim"               : { "type"  : ["string", "null"],   "format": "date" },
        "Pobreza"           : { "type"  : ["boolean", "null"] },
        "PBF"               : { "type"  : ["boolean", "null"] },
        "DescumprePBF"      : { "type"  : ["boolean", "null"] },
        "BPC"               : { "type"  : ["boolean", "null"] },
        "TrabalhoInfantil"  : { "type"  : ["boolean", "null"] },
        "EmAcolhimento"     : { "type"  : ["boolean", "null"] },
        "Beneficiario"      : { "oneOf" : [  {"type": "null" }, {"type": "object", "properties": { 
                                "Id"    : { "type": "integer" } }, "required": ["Id"] } ] },
        "Especialista"      : { "oneOf" : [  {"type": "null" }, {"type": "object", "properties": { 
                                "Id"    : { "type": "integer" } }, "required": ["Id"] } ] },
        "InseridoPor"       : { "oneOf" : [  {"type": "null" }, {"type": "object", "properties": { 
                                "Id"    : { "type": "integer" } }, "required": ["Id"] } ] },
        "AtualizadoPor"     : { "oneOf" : [  {"type": "null" }, {"type": "object", "properties": { 
                                "Id"    : { "type": "integer" } }, "required": ["Id"] } ] },
        "EncerradoPor"      : { "oneOf" : [  {"type": "null" }, {"type": "object", "properties": { 
                                "Id"    : { "type": "integer" } }, "required": ["Id"] } ] }
    },
    "additionalProperties": false
}

