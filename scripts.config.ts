import { DenonConfig } from 'https://deno.land/x/denon@2.5.0/mod.ts';

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: 'deno run server.ts',
      desc: 'run my server.ts file',
      allow: ['net', 'env'],
      unstable: true,
    },
  },
};

export default config;
