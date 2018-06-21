/* eslint-disable no-console */
const DiscordRPC = require('discord-rpc');
const ClientId = "459426219319099410";
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
var startTimestamp = new Date();
const timeMode = "song-time";

async function fancyTimeFormat(time)
{   
    var minutes = Math.floor(time / 60000);
    var seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

async function updateActivity() {
  if (!rpc)
      return;

  var fs = require('fs');
  var filepath = `/Users/ddceliasr/Library/Application\ Support/Google\ Play\ Music\ Desktop\ Player/json_store/playback.json`;
  if(!fs.existsSync(filepath)) {
    console.log("Can't find "+ filepath +", do you " +
    "have Google Play Music Desktop Player installed with the JSON API enabled?");
    return;
  }
    var obj = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    console.log(obj["song"]["title"]);
  
  if(obj["playing"] == true) {
    if(timeMode === "song-time") {
      startTimestamp = new Date(new Date() - (`${obj["time"].current}`));
      console.log(startTimestamp);
    }

    rpc.setActivity({
      details: `Playing ${obj["song"]["title"]}`,
      state: `By ${obj["song"]["artist"]}`,
      startTimestamp,
      largeImageKey: 'googleplaymusic',
      instance: false,
    });
  } else {
    rpc.setActivity({
      details: `Nothing`,
      largeImageKey: 'googleplaymusic',
      instance: false,
    });
  }
}

rpc.on('ready', () => {
  console.log(`Starting with clentId ${ClientId}`);

  updateActivity();

  // activity can only be set every 15 seconds
  setInterval(() => {
    updateActivity();
  }, 15e3);
});

rpc.login(ClientId).catch(console.error);
