// @ts-nocheck
import * as Prism from "../mod.ts";
// import { Readable, Buffer } from "../deps.js";

// const data = Deno.readFileSync(`./speedrun.pcm`);

// const FFmpeg = new Prism.FFmpeg({
//     args: [
//         '-i', 'speedrun_song.mp3',
//         '-analyzeduration', '0',
//         '-loglevel', '0',
//         '-f', 'mp3',
//         '-ar', '48000',
//         '-ac', '2'
//     ]
// });

// const res = await FFmpeg.create();
// console.log(res);

// const stream = new Readable();
// stream.push(data);
// stream.push(null);

// const changed = stream.pipe(volume);

// const b = [];

// changed.on("data", (c) => b.push(c));
// changed.on("close", () => {
//     const song = Buffer.concat(b);
//     Deno.writeFileSync("./speedrunvol.pcm", song);
// })