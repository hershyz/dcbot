const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

var names = [];
var ids = [];

/*
  Add users to disconnect here:
  addUser(name1, id1);
  addUser(name2, id2);
  addUser(name3, id3);
  etc...
*/

client.on('message', message => {
    try {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
        member.voice.setChannel(null);
    }
    catch {
        console.log("ignored bad message");
    }
});

client.on('voiceStateUpdate', (oldMember, newMember) => {

    setTimeout(() => {
        let newUserChannel = newMember.voiceChannel
        let oldUserChannel = oldMember.voiceChannel
        
        if (oldUserChannel === undefined) {
    
            if (found(newMember.id)) {
                newMember.setChannel(null);
            }
        }
    }, 1000);
});

function addUser(name, id) {
    names.push(name);
    ids.push(id);
    console.log("added user: " + name + ", " + id);
}

function found(id) {
    var i;
    for (i = 0; i < names.length; i++) {
        if (ids[i] == id) {
            console.log("disconnecting " + names[i]);
            return true;
        }
    }
    return false;
}

client.login(''); //Bot client token goes here.
