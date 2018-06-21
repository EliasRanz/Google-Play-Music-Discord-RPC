To run this example simply run `node main.js`. Note you must have NodeJS version 8+ for this to run properly. It also requires you to use the [Google Play Music Desktop Player](https://www.googleplaymusicdesktopplayer.com/), with the Playback API enabled.
![](https://media.discordapp.net/attachments/429285101466025985/459466794554359809/AVUVASVHYYLSAAAAAElFTkSuQmCC.png?width=788&height=596)

![](https://media.discordapp.net/attachments/429285101466025985/459467151993208842/unknown.png?width=788&height=506)


*Note*
Right now this is configured for MacOSX. You'll need to change the [following line of code](https://github.com/Xxplosions/Google-Play-Music-Discord-RPC/blob/b20d4d36a62631717c95d3a73f3e98194a14e3b2/main.js#L20)  to use the correct path on Windows. It'll most likely be something like this ```var filepath = `${process.env.APPDATA}\\Google Play Music Desktop Player\\json_store\\playback.json`;```
Example result...

![](https://media.discordapp.net/attachments/429285101466025985/459458775494033408/unknown.png)
