1.  sass のインストール

```
npm install --save-dev sass
```

2. TypeScript 対応  
   css ファイルをインポートする際、型情報が無いとエラーが出る事がある。
   その際は Next プロジェクト作成時に生成されている next-env.d.ts に以下の内容を追加する。

```
declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}
```

この設定を行うことで scss を認識してくれる。

> ＋ α 参考サイト（https://satoshimurata.com/css-modules-sample）
> 基本形

```
import * as styles from './index.module.scss';
<div className={styles.classA}></div>
```

マルチクラス or モディファイア
テンプレートリテラルを使って書きます。

```
<div className={`${styles.classB} ${styles.classC}`}></div>
```

ユーザースタイルシートとかを想定して、固定の class 名を付与するなら普通に書けば OK とのこと。

```
<div className={`classD ${styles.classE} ${styles.classF}`}></div>
```

条件付き

```
<div className={`${styles.classG}` ${isApply ? styles.classH : ''}`}></div>
```

インターネットでは classnames や clsx を推奨する記事を見ますが、モディファイアがつくとしてもせいぜい 1 つか 2 つでしょうから、素朴にテンプレートリテラルで書けば十分と考えます。

class 名にハイフンが含まれている場合
ハイフンが含まれている class 名にはそのまま書けないので、括弧で囲います。

失敗する例：

```
<div className={styles.class-i}></div>
```

成功する例：

```
<div className={styles['class-i']}></div>
```

ハイフンは使わずにアンダースコア \_ を使うようにすれば、これを気にせずに書けそうです。

ダイナミックなクラス名
テンプレートリテラルで書きましょう。

```
<div className={styles[`class${variantJ}`]}></div>
```

ダイナミックなクラス名にハイフンを含む場合は、ハイフンを含めないで書くと成功しました。こういう SCSS がある時に…

```
.hyphen-1 { ... }
.hyphen-2 { ... }
```

失敗する例：

```
<div className={styles[`hyphen-${variantK}`]}></div>
```

成功する例：

```
<div className={styles[`hypehn${variantK}`]}></div>
```

DOM に付与される class にはいい感じにハイフンが付いていました。

ハイフンは厄介ですね……。アンダースコアに寄せるのが分かりやすいかもしれません。

以上を合体したもの
合体してすこし複雑になった例です：

```
<div className={`classK ${styles.classL} ${isApply ? styles[`class${variantM}`] : ''}`}></div>
```

続きまして、CSS 編です。

メディアクエリ
こんな mixin を入れたファイルを作って、必要なファイルで include します。

```
// mixins.scss

@use 'sass:map';

$breakpoints: (
"sm": "(min-width: 577px)",
"md": "(min-width: 769px)",
"lg": "(min-width: 993px)",
);

@mixin mq($breakpoint) {
  @media screen and #{map.get($breakpoints, $breakpoint)} {
@content;
}
}
// index.scss

@use './mixins';

@include mixins.mq(md) {
...
}
```

ずっと CSS in JS 脳になっていたおかげで、素朴に SASS の@use をすれば良いだけというところに辿り着くのに時間がかかってしまいました。灯台下暗しでした。

グローバルセレクタ
グローバルセレクタは使わずに作れたら理想ですが、いちおう使えます。

```
.container {
:global(.children) {
...
}
}
```

タグ名はそもそもスコープ付きでグローバルなようです。

```
.container {
div {
...
}
}
```
