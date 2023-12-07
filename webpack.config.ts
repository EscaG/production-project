import webpack from 'webpack';
import path from 'path';
import { buildWebPackConfig } from './config/build/buildWebPackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3001;
  const apiUrl = env.apiUrl || 'http://localhost:8000';
  const project = 'frontend';

  const config: webpack.Configuration = buildWebPackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project,
  });

  return config;
};
