import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import process from 'process';
import { ViteDevServer, createServer as createViteServer } from 'vite';

const resolve = (p: string) => path.resolve(__dirname, p);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 5173;
const isProd = !process.env.NODE_ENV;

async function createServer() {
  const app = express();

  let vite: ViteDevServer;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      })
    );
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template: string, render;
      if (!isProd) {
        template = await readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = await readFile(resolve('dist/client/index.html'), 'utf-8');
        // @ts-ignore
        render = (await import('./dist/server/entry-server.js')).render;
      }
      const parts = template.split('<!--ssr-outlet-->');
      const { pipe } = await render(url, {
        onShellReady() {
          res.write(parts[0]);
          pipe(res);
        },
        onShellError(err: Error) {
          console.error(err);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });

  return { app };
}

createServer().then(({ app }) =>
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  })
);
