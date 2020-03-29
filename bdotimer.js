const { Client, RichEmbed } = require("discord.js");
const  client = new Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("Estoy listo!");
    client.user.setActivity("Black Desert Online")
 });
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix +"karanda")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Karanda",
      url: "https://bdocodex.com/sp/npc/23060/",
      description: "El líder de las Arpías.",
      fields: [{
          name: "Drops",    
          value: "Caja de Armas Dandelion, Cristal Mágico Negro - Vigor, Cristal Mágico Negro - Ascenso, Cristal Mágico Negro - Descenso, Piedra Negra (Armas), Piedra Negra (Armaduras), Monedas de Plata y más"
        },
        {
          name: "Ubicación",
          value: "Aparece en la cima de Karanda al Nuroeste de Calpheon"
        },
      ],
    }
});
}else
if (message.content.startsWith(prefix +"kutum")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Kutum",
      url: "https://bdocodex.com/sp/npc/23073/",
      description: "Una entidad ancestral con el nombre de Kutum.",
      fields: [{
          name: "Drops",
          value: "Caja de Armas Secundarias de Kutum, Cristal Mágico Negro - Asalto, Cristal Mágico Negro - Memoria, Piedra Negra (Armas), Piedra Negra (Armaduras), monedas de plata y otros."
        },
        {
          name: "Ubicación",
          value: "Aparece al fondo de la cámara de Arena Rojiza al Este del Desierto"
        },
      ],
    }
});
}else
if (message.content.startsWith(prefix +"kzarka")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Kzarka",
      url: "https://bdocodex.com/sp/npc/23073/",
      description: "El Señor de la Corrupción",
      fields: [{
          name: "Drops",
          value: " Caja de Armas Selladas de Kzarka, Bulto de Armas Liverto, Símbolo de las Sombras, Símbolo del Guardián de Santuario, Piedra Negra (Armas), Piedra Negra (Armaduras), Monedas de Plata y más."
        },
        {
          name: "Ubicación",
          value: "Aparece en Serendia en el Santuario de Serendia."
        },
      ],
    }
});
}else
if (message.content.startsWith(prefix +"muraka")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Muraka",
      url: "https://bddatabase.net/sp/npc/23097/",
      description: "El Rey de los Ogros",
      fields: [{
          name: "Drops",
          value: "Anillo de Ogro Débil, Amplificadores mutagénicos"
        },
        {
          name: "Ubicación",
          value: "Aparece en el Bosque de Mansha."
        },
      ],
    }
});
}else
if (message.content.startsWith(prefix +"nouver")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Nouver",
      url: "https://bdocodex.com/sp/npc/8608/",
      description: "El Dragon del Desierto",
      fields: [{
          name: "Drops",
          value: "Caja de Armas Secundarias de Nouver Sellada, Cristal Mágico Negro - Asalto, Cristal Mágico Negro - Memoria, Piedra Negra (Armas), Piedra Negra (Armaduras), Monedas de Plata y más."
        },
        {
          name: "Ubicación",
          value: "Aparece en el Suroeste del Bazar Grano Arena."
        },
      ],
    }
});
}else
if (message.content.startsWith(prefix +"offin")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Offin",
      url: "https://bdocodex.com/us/npc/23754/",
      description: "Offin, el destructor",
      fields: [{
          name: "Drops",
          value: " Caja de Armas de Luz de Offin, Cinturón de la luz escondida de Valtarra, Cristal Mágico Negro - Cobelinus, Ira del Bosque, Armadura Lemoria, Piedra Negra (Armas), Piedra Negra (Armaduras) y más."
        },
        {
          name: "Ubicación",
          value: "Aparece en Kamasylvia en el Bosque de Holo"
        },
      ],
    }
});
}else
if (message.content.startsWith(prefix +"garmoth")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Garmoth",
      url: "https://bdocodex.com/us/npc/23120/",
      description: "El Dragón Rojo",
      fields: [{
          name: "Drops",
          value: " Corazón de Garmoth, Cronolitas, Caprhas, Anillo avasallador, Piedra Negra (Armas), Piedra Negra (Armaduras) y más."
        },
        {
          name: "Ubicación",
          value: "Aparece en el nido de Garmoth, en Drieghan."
        },
      ],
    }
});
}else
if (message.content.startsWith(prefix +"quint")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Quint",
      url: "https://bdocodex.com/es/npc/23102/",
      description: "El primer troll",
      fields: [{
          name: "Drops",
          value: "Estatua de Quint, Cristal Mágico Negro - Hystria, Cristal Mágico Negro - Arpía, Amplificadores mutagénicos (7-20)."
        },
        {
          name: "Ubicación",
          value: "Aparece en la pradera de Quint cerca de Calpheon"
        },
      ],
    }
});
}else
if (message.content.startsWith(prefix +"vell")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Vell",
      url: "https://bddatabase.net/sp/npc/23080//",
      description: "El Corazón del mar",
      fields: [{
          name: "Drops",
          value: "Poder concentrado de Vell, Polvo Mágico de Vell, Coral, Divisas de plata, Piedra Negra (Armas), Piedra Negra (Armaduras) y más. "
        },
        {
          name: "Ubicación",
          value: "Aparece en el Mar de Margoria"
        },
      ],
    }
});
}else

  if(message.content.startsWith(prefix + "tumadre")){
    const embed = new Discord.RichEmbed() 
    .setTitle("Este es su título, puede contener 256 caracteres")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("https://github.com/CraterMaik")
    .addField("Este es un título de campo, puede contener 256 caracteres",
      "Este es un valor de campo, puede contener 2048 caracteres.")
    .addField("Campo en línea", "Debajo del campo en línea", true)
    .addBlankField(true)
    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
    
    message.channel.send({embed});
  }
  if (message.content.startsWith(prefix +"timeboss")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Lista de Bosses",
      url: "https://bdocodex.com/es/bosstimer/",
      description: "En este enlace de arriba podrás encontrar la lista de boses más detalladamente. Pero aquí también. Formato 24h",
      fields: [{
          name: "Kzarka",
          value: "**Lunes**: 05:00, 09:00, 22:15. **Martes**: 05:00. **Miércoles**: 00:15(Junto al Kutum), 05:00, 22:15(Junto al Karanda). **Jueves**: 16:00. **Viernes**: 00:15 (Junto al Karanda), 19:00, 22:15 (Junto al Kutum). **Sábado**: 19:00 (Junto al Karanda). **Domingo**: 02:00, 12:00, 22:15. "
        },
        {
          name: "Karanda",
          value: "**Lunes**: 00:15 (Junto al Kutum), 16:00. **Martes** 00:15, 19:00. **Miércoles**: 02:00, 09:00, 22:15 (Junto al Kzarka). **Jueves**: No hay. **Viernes**: 00:15 (Junto al Kzarka), 05:00, 12:00.  **Sábado**: 00:15, 19:00. **Domingo**: No hay."
        },
        {
          name: "Offin",
          value: "**Lunes**: 12:00. **Martes**: No hay. **Miércoles**: 19:00. **Jueves**: No hay. **Viernes**: No hay. **Sábado**: 02:00.**Domingo**: No hay."
        },
        {
            name: "Kutum",
            value: "**Lunes**: 00:15(Junto al Karanda), 16:00. **Martes**: 02:00, 12:00. **Miércoles**: 00:15, 16:00. **Jueves**: 02:00, 09:00, 19:00.**Viernes**: 09:00, 22:15(Junto al Kzarka). **Sábado**: 09:00. **Domingo**: 00:15(Junto al Nouver), 05:00."
        },
        {
            name: "Garmoth",
            value: "**Lunes**: No hay . **Martes**: 22:15. **Miércoles**: No hay. **Jueves**: 22:15. **Viernes**: No hay. **Sábado**: No hay. **Domingo**: 19:00."
        },
        {
            name: "Nouver",
            value: "**Lunes**: 19:00. **Martes**: 09:00, 16:00. **Miércoles**: No hay.**Jueves**: 00:15, 05:00, 12:00.**Viernes**: 02:00, 16:00.**Sábado**: 12:00. **Domingo**: 00:15(Junto al Kutum), 09:00, 22:15 (Junto al Kzarka)."
        },
        {
            name: "Muraka",
            value: "**Lunes**: No hay. **Martes**: No hay. **Miércoles**: 23:15(Junto al Quint). **Jueves**: No hay. **Viernes**: No hay. **Sábado**: 16:00(Junto al Quint). **Domingo**: No hay."
        },
        {
            name: "Quint",
            value: "**Lunes**: No hay. **Martes**: No hay. **Miércoles**: 23:15 (Junto al Muraka). **Jueves**: No hay.**Viernes**: No hay.**Sábado**: 16:00 (Junto al Muraka).**Domingo**: No hay."
        },
        {
            name: "Vell",
            value: "**Lunes**: No hay. **Martes**: No hay. **Miércoles**: No hay. **Jueves**: No hay. **Viernes**: No hay. **Sábado**: No hay.**Domingo**: 16:00."
        },
      ],
    }
});
}
});
client.login(config.token);   