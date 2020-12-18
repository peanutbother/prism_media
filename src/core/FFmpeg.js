import { Buffer, output } from "../../deps.js";

const VERSION_REGEX = /version (.+) Copyright/mi;

class FFmpeg {

    constructor(ops = {}) {
        super();

        this.ops = ops;
        this.location = null;
    }

    async setLocation(ffmpegLocation) {
        if (!ffmpegLocation || typeof ffmpegLocation !== "string") throw new Error("FFmpeg location was not provided!");
        
        try {
            await Deno.stat(ffmpegLocation);
            this.location = ffmpegLocation;
        } catch {
            throw new Error("Could not locate ffmpeg binary file");
        }
    }

    async getInfo() {
        const commands = [
            this.location,
            "ffmpeg",
            "./ffmpeg",
            "avconv",
            "./avconv"
        ];

        for (let command of commands) {
            try {
                const result = await output([command, "-version"], {
                    stdout: "piped"
                });

                return {
                    command: command,
                    name: result.split(" ")[0].trim(),
                    version: VERSION_REGEX.exec(result)[1]
                };
            } catch {
                // do nothing
            }
        }

        throw new Error("FFmpeg/avconv not found!");
    }

    // async create({ args = [] } = this.ops) {
    //     if (!args || !args.length) throw new Error("FFmpeg args were not provided!");
    //     const command = await this.getInfo();

    //     const res = await Deno.run({
    //         cmd: [command.command, ...args],
    //         stdout: "piped"
    //     });

    //     const output = await res.output();
    //     console.log(output)

    //     return Buffer.from(output);
    // }
}

export { FFmpeg };
export default FFmpeg;