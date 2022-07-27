■ 　開発環境構築

1. Next のプロジェクトを作成（TypeScript テンプレート）

```
npx create-next-app@latest --ts
```

2. storybook のインストール

```
npx sb init --builder webpack5
```

上のコマンド実行後、Storybook と ESLint を連携するパッケージをインストールする。
※ Storybook インストール時に同時にプラグインの追加もできるが eslintrc｡json には対応していない。（拡張子が js のものだけ）

```
npm i -D eslint-plugin-storybook
```

インストール後、.eslintrc.json に以下のプロパティを追加する。

```
{
  "extends": ["plugin:storybook/recommended", "next/core-web-vitals"]
}
```

3. Stroybook 　の SASS 　対応

```
npm install --save-dev sass-loader style-loader css-loader
```

インストール後、.storybook/main.js に以下のプロパティを追加

```
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
```

4. Prettier の追加

```
npm install --save-dev prettier
```

.prettierrc ファイルを作成し次の内容を保存する。

```
{
  "endOfLine": "lf",
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "tabWidth": 2,
  "printWidth": 60
}
```
