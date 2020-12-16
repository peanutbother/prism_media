// @ts-nocheck

import * as Prism from "../mod.ts";
import { Readable, Buffer } from "../deps.js";

const data = Deno.readFileSync(`./speedrun.pcm`);

const volume = new Prism.VolumeTransformer({
    type: "s16le",
    volume: 10
});

const stream = new Readable();
stream.push(data);
stream.push(null);

const changed = stream.pipe(volume);

const b = [];

changed.on("data", (c) => b.push(c));
changed.on("close", () => {
    const song = Buffer.concat(b);
    Deno.writeFileSync("./speedrunvol.pcm", song);
})