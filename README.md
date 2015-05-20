# 艦これウィジェット ![neko](src/img/icon.png)
艦これウィジェットは推奨環境であるChromeを艦これに最適化させるChrome拡張です

# 使い方
インストールはこちらから。で、準備完了

[Chrome ウェブストア - 艦これウィジェット](https://chrome.google.com/webstore/detail/%E8%89%A6%E3%81%93%E3%82%8C%E3%82%A6%E3%82%A3%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88/iachoklpnnjfgmldgelflgifhdaebnol)

# 機能
- 機能概要
    - 艦これだけの別窓を開いてくれます
    - 遠征・入渠・建造のタイマーを自動で設定してくれます
    - 通知します
    - その他艦娘ぺろぺろ

参考資料 [加賀さんと僕〜艦これウィジェットの紹介と説明〜](http://www.slideshare.net/otiai10/ss-26631311)

# よくある質問

- 専ブラなんすか？
    - 専ブラではありません！Chrome(推奨環境)です！
- 規約違反なんすか？
    - Chromeなので、`（8）不正な方法（特殊なプログラムを介しての）でのアクセスを試みる行為`には該当しないと考えております
- チートできないんすか？
    - チート要素は一切実装しておりません。ｻーｾﾝ
- その他頂いている機能改善やバグ報告など
    - [issues/question/open](https://github.com/otiai10/kanColleWidget/issues?labels=question&page=1&state=open) 

# お問い合わせ/機能要望/バグ報告
- Twitterから
    - [twitter.com/otiai10](https://twitter.com/otiai10)
- GitHubから
    - [github.com/otiai10/kanColleWidget/issues/new](https://github.com/otiai10/kanColleWidget/issues/new) 

# 実装
- 以下の3点に最大限配慮して実装しています
    - 艦これの規約に違反しないこと
    - 艦これサーバに負荷をかけないこと
    - 艦これの面白さを損なわないこと

参考資料 [加賀さんと僕（実装編）〜艦これウィジェットの課題と実装〜](http://www.slideshare.net/otiai10/ss-26908975)

# 開発

以下のレポジトリでOSS開発をしております。ForkするなりPRするなりご自由にどうぞ！
https://github.com/otiai10/kanColleWidget

[README4DEV.md](https://github.com/otiai10/kanColleWidget/blob/develop/README4DEV.md)

# RELEASES
- RELEASEINFO
- 2015/05/20 v1.5.22 <!--version-->
    - 新遠征に対応 
- 2015/05/06 v1.5.20, v1.5.21
    - 編成をまとめるやつのためにレアタイトル隠し機能を廃止しタイトル固定にします
    - 連合艦隊第二艦隊の大破状況表示対応（今んとこAPPモードだけ）
    - Chrome拡張が自動更新されてスクショショートカットがいつの間にか効かなくなる現象のために、自動更新通知アラートを追加
    - 第二艦隊大破進撃防止の影響で黒いのチカチカするんで、それ修正
- 2015/04/29 v1.5.17
    - WHITEモードで下に1px余白あるの修正
- 2015/04/18 v1.5.16
    - ウィンドウを閉じる前に確認を出す設定を追加
- 2015/04/16 v1.5.15.2
    - オリジナル窓のoffsetも修正
- 2015/04/15 v1.5.15.1
    - WHITEモードのズレを修正
- 2015/04/14 v1.5.14,v1.5.15
    - ポップアップ中のresetボタン、loadボタンを削除
    - ポップアップのloadボタンはふっかつ
- 2015/04/08 v1.5.12
    - 運営電文にAmazonのプロモツイートが混じってたので運営アカウント以外をフィルターするようにしました
- 2015/03/31 v1.5.11
    - エイプリルフールネタを仕込んだ
- 2015/03/21 v1.5.10.4
    - 設定画面の[報告系・その他]が出てないバグを修正
    - [サーバ] OCRサーバの挙動安定化
- 2015/03/19 v1.5.10.2, v1.5.10.3
    - 遠征早見表がへんだったのを修正
    - wikiが変わっても早見表変わらないように修正
- 2015/03/16 v1.5.10.1
    - 遠征早見表がへんだったのを修正
- 2015/03/14 v1.5.10
    - 出撃の任務着手忘れ防止機能が効いてないバグを修正
    - 遠征早見表がへんだったのを修正
- 2015/03/06 v1.5.9.1
    - Windowsでクロックモードのサイズが変なのを修正
- 2015/03/04 v1.5.9
    - クロックモードを最前面に固定する設定を追加
- 2015/03/03 v1.5.8
    -「豆サイズ」を追加
    - WHITEモード時にスクショボタン出ないバグを修正
    - スクショボタンで誤クリックしやすいのちょっと改善
    - 設定されてる「仕事しろ」が設定画面で見えないバグを修正
    - 改修工廠早見表を追加
    - 開発・建造報告ツイートに@をつける設定を追加
- 2015/02/24 v1.5.7
    - 改修工廠任務を追加
    - 画像のデフォルトフォーマットをpngに変更
- 2015/02/19 v1.5.6.6
    - 遠征早見表のレイアウト変更に対応
- 2015/02/17 v1.5.6.5
    - 同期設定で「ぜんぶ」以下の場合[save now]ボタンが効かなくなったバグを修正
- 2015/02/16 v1.5.6.4
    - 簡易疲労回復メーターの表示を微調整 (thanks to xia)
    - 新しく追加された「遠洋練習航海」に対応
    - 複数PC同期設定に「ファイルは同期しない」オプションを追加
    - WHITEモードで2pxずれるらしいのでそれ修正
- 2015/01/24 v1.5.6
    - 開発報告窓が出ないバグを修正
    - 開発・建造レシピ検索機能を追加
- 2015/01/14 v1.5.5.8
    - 開発・建造報告のツイッター窓が出ないやつを修正
- 2014/12/27 v1.5.5.7
    - クリスマス気分終了
- 2014/12/02 v1.5.5.6
    - 簡易疲労度メーターが艦隊を区別してないバグを修正
- 2014/11/28 v1.5.5.5
    - 真っ白問題修正
    - バッジ色分けできてないの修正
    - クリスマス気分
- 2014/11/15 v1.5.5.4
    - 連合艦隊の大破進撃防止窓が消えない件の修正
    - 設定下部の「組み合わせツール」のリンク修正
- 2014/11/14 v1.5.5.3
    - バッジの色分けできてないバグを修正
- 2014/11/11 v1.5.5.2
    - 外部Chrome拡張との連携設定を追加
    - 大破進撃防止窓のサイズ覚えてくれないバグを修正
    - 手動タイマーの入力値を次回まで記憶する修正
    - 遠征早見表へのリンクをポップアップにも追加
    - 運営電文の時刻表時のバグを修正
    - ツイッターBotちゃん通知設定を削除
- 2014/10/20 v1.3.15.5
    - 外部Chrome拡張連携への予告
- 2014/10/12 v1.3.15.4
    - 大破進撃防止窓のデザイン改善にともなう隙間の解消
- 2014/10/11 v1.3.15.3
    - 大破進撃防止窓のデザイン改善
- 2014/10/05 v1.3.15.2
    - 「組み合わせツール」のリンクを一部修正
- 2014/09/30 v1.3.15.1
    - バッジに残り時間が表示されないバグを修正
- 2014/09/27 v1.3.15.0
    - バッジに「終了件数を表示する」設定を復活
    - clockmodeの任務進捗をちょっとだけ見やすく修正
    - スクショショートカット効かないバグの修正努力
- 2014/09/23 v1.3.14.2, v1.3.14.3
    - Chrome37,Windowsの窓サイズバグを修正
    - クロックモードからスクショできるように機能追加
    - バッジに表示される残り時間が変なバグをマジで修正
- 2014/09/22 v1.3.14.0, v1.3.14.1
    - バッジに「終了件数を表示する設定」を廃止
    - バッジの「通知タイプによって色を変える設定」を追加
    - バッジに表示される残り時間が変なバグを修正
- 2014/09/10 v1.3.12.0
    - 機能一覧などwikiへのリンク追加
- 2014/08/29 v1.3.11.1
    - スクショのTwitter投稿で謎のHTMLタグ出るの修正
- 2014/08/27 v1.3.11
    - E5夜戦マスで大破進撃防止窓が閉じない不具合を修正（時既に遅し？）
    - 簡易疲労タイマーに20分休憩を追加
    - iOSのPush通知のじゅんび
- 2014/08/17 v1.3.10.3
    - Windowsで大破進撃防止窓が小っさくなる問題を（だいぶ）修正
- 2014/08/16 v1.3.10.2
    - 連合艦隊の大破進撃防止窓が閉じないバグをさらに修正
- 2014/08/15 v1.3.10.0, v1.3.10.1
    - 連合艦隊出撃時の大破進撃防止窓
    - 連合艦隊の大破進撃防止窓が閉じないバグを修正
- 2014/08/09 v1.3.8.12, v1.3.9.0
    - 新しい遠征IDを追加
    - 運営電文ちゃんと新しいのから出すように修正
    - Windowsで窓サイズが変になるの修正しようと努力（自信無い）
    - （窓サイズ修正切り戻し）
- 2014/07/26 v1.3.8.11
    - 一部Windowsで大破進撃防止窓が小さくなる現象の修正（自信無い）
    - clock modeからlaunchできるようにした
- 2014/07/20 v1.3.8.9, v1.3.8.10
    - 運営電文の表示を（おそらく）修正
    - 運営電文の表示を（ぜったい）修正
- 2014/07/19 v1.3.8.8
    - 「運営メンテ情報」を「運営電文を表示する」設定に置き換え
    - 建造時間取得失敗を（たぶん）改善
    - 入渠時間取得失敗を（きっと）改善
- 2014/07/09 v1.3.8.7
    - 夜戦マップ突入のとき大半進撃防止窓が消えないのを修正
- 2014/07/08 v1.3.8.5, v1.3.8.6
    - 大破進撃防止窓が消えるタイミングを「次の戦闘開始」に修正
    - スクショをTwitterに投稿するの復活
- 2014/06/23 v1.3.8.4
    - 窓タイトル微調整
- 2014/06/21 v1.3.8.3
    - Windowsの画面サイズ修正
    - 障害・メンテナンス情報の更新
- 2014/06/18 v1.3.8.2
    - WindowsのWHITEモードでアドレスバー出してるときの画面サイズ修正
    - dev-Chromeで画面が真っ黒になる問題を修正
    - 新しく追加された遠征ID39に対応（遅くなってすみません）
    - 遠征早見表の表示修正
    - 艦これウィジェットの障害・メンテナンス情報ページの追加
- 2014/06/08 v1.3.8.0, v1.3.8.1
    - 三たび凍結されたbotちゃんズの復活
    - ホワイトモードでスクショショートカットを追加
    - 大破進撃とかが真っ白になるバグを修正
    - 自動取得中の妖精さんを追加
    - 遠征早見表を修正
- 2014/05/31 v1.3.7.1
    - 運営のメンテ情報表示が何か変なの修正
    - botちゃん凍結の旨をご報告
- 2014/05/20 v1.3.7
    - TwitterBotちゃんによる通知の復活
- 2014/05/15 v1.3.6.1
    - スクショTwitter連携で1行目が改行されないバグを修正
- 2014/05/14 v1.3.5, v1.3.6
    - 建造時間の自動取得失敗を修正
    - 疲労回復簡易タイマーのスタートを出撃時に変更
    - メモの複数PC同期を追加
    - スクショTwitter連携で改行に対応
    - クロックモードから遠征早見表を追加
- 2014/05/07 v1.3.4
    - スクショTwitter投稿にハッシュタグ付けれる設定を追加
    - スクショTwitter投稿のUIを改善
- 2014/05/04 v1.3.3
    - 任務進捗一覧画面の表示バグ修正
- 2014/05/01 v1.3.2
    - Twitter通知のUIを改善
- 2014/04/29 v1.3.1
    - イベント用遠征IDの追加
    - タイマーのTwitter通知設定を追加
- 2014/04/23 v1.2.1, v1.2.3
    - Twitter投稿するところのUIがクソ過ぎたので修正
    - アップデートでいろいろズレたので微調整しました
- 2014/04/20 v1.2.0
    - スクショ画像をTwitter連携で投稿できる設定を追加
- 2014/04/16 v1.0.9.1, v1.0.9.2
    - WHITEモードで20pxずれるらしいので修正
    - オリジナル窓整形設定でもずれるらしいので修正
- 2014/04/13 v1.0.9
    - Chrome35で通知が出ないバグを修正
- 2014/03/24 v1.0.8
    - エイプリルフールのネタを仕込んだ
- 2014/03/19 v1.0.7
    - 設定済みの通知文字列を初期表示する
    - うっかり消しちゃってた遠征ID33,34の追加
- 2014/03/15 v1.0.6.7, v1.0.6.9
    - 新しい遠征を追加
    - 「うまく同期されない」という声が多かったので複数PC間同期の設定を刷新しました
    - 提督任務実績に「廃棄」を追加
- 2014/03/14 v1.0.6.6
    - 複数PCブラウザ間の同期を部分的にできるように修正
- 2014/03/13 v1.0.6.5
    - 複数PCブラウザ間の同期設定を追加
- 2014/03/02 v1.0.5
    - Chrome34betaでスクショ撮れないバグを事前に修正
- 2014/03/01 v1.0.4.1
    - 災害警報、どぼーん
- 2014/02/27 v1.0.4
    - 新しい遠征の追加
- 2014/02/17 v1.0.1
    - 大破進撃防止窓クリックしても本窓にフォーカスされないバグ修正
    - 手動リマインダー登録したとき全部「遠征開始」音声になっちゃうバグ修正
    - [LAUNCH APP]ボタンが不感症だったの治療
- 2014/02/15 v1.0
    - ストアのリンク公開設定を変えました
- 2014/02/14 v0.10.0.1, v0.10.0.2, v0.10.0.3
    - キャプチャのトリミング機能を追加
    - 手動登録した時に通知が消えないバグを修正
    - 手動登録した時に登録時音声が出ないバグを修正
    - 建造報告ツイッター窓が自動で消えるように修正
    - 大破進撃防止窓のサイズを記憶するように修正
    - キャプチャ編集にテキスト機能を追加
    - 大破進撃防止窓が出ないバグを修正
- 2014/02/08 v0.9.9.10, v0.9.9.11, v0.9.9.12
    - WHITEモードでアドレスバーを出したり隠したりできます
    - Chrome32バグ回避設定を削除
    - オリジナル窓のプレーでもゲーム領域を左上に合わせる設定を削除
    - ↑ 削除したんだけど要望があったので復活
    - クロックモードの表示修正
- 2014/02/01 v0.9.9.7
    - WHITEモードでのスクショショートカットキーを追加
    - クロックモードの表示バグ修正
    - ダウロードフォルダを指定しないのを可能に
    - キャプチャ画面でドラッグアンドドロップできるボタンを追加
- 2014/01/31 v0.9.9.2, v0.9.9.3, v0.9.9.4, v0.9.9.5
    - 遠征開始時の文言変更設定を追加
    - 簡易疲労メータに時刻表示を追加
    - オリジナル窓のプレーでもゲーム領域を左上に合わせる設定を追加
    - 通知押したときもWHITEで起動する設定の追加
- 2014/01/30 v0.9.9.0, v0.9.9.1
    - ホワイトモードのプロトタイプを追加
- 2014/01/30 v0.9.2.0, v0.9.2.1
    - クロックモードの表示バグ修正
    - クロックモードの前回窓サイズとか記憶
    - スクショダウンロードでフォルダ指定を追加
    - スクショの拡張子を"jpeg"から"jpg"に変更
- 2014/01/24 v0.9.0.2
    - キャプチャ画面で編集機能を追加
- 2014/01/21 v0.8.6.3
    - Chrome32のバグを回避する設定の改善
- 2014/01/19 v0.8.6.2
    - Chrome32のバグを回避する設定の改善
    - スクショ結果に余黒領域を含めない修正
- 2014/01/17 v0.8.6.1
    - Chrome32のWindowsにおけるファッキンバグを回避する設定を追加
- 2014/01/16 v0.8.5.5
    - "ページ応答なし"っていうのが超出る問題について
    - (お知らせだけ更新)
- 2014/01/15 v0.8.5.3
    - 任務名の誤りを修正
    - 妖精さん名の誤りを修正
- 2014/01/13 v0.8.5.2
    - クロックモードからリマインダ解除に対するUIを改善
    - 簡易疲労回復通知の通知音声個別設定を追加
    - 建造完了だけは時間ぴったりに通知する
    - クロックモードのhover改善
    - 遠征帰投通知に【遠征名】を追加
    - 時間取得中の妖精さんを追加
    - 遠征完了通知オフだと任務実績集計されていなかったバグを修正
- 2014/01/09 v0.8.3.0
    - 艦娘状態窓をクリックするとウィジェットにフォーカスする変更
    - ポップアップ背景画像をちょっと見やすく修正
- 2014/01/07 v0.8.2.0, v0.8.2.1
    - 艦娘状態窓の前回位置を記憶する修正
    - Windowsでの艦娘状態窓の見切れを修正
- 2014/01/05 v0.8.0.0, v0.8.0.1
    - 大破進撃を防止する設定を追加
- 2013/12/31 v0.7.5.0
    - 音声ファイル設定UIの改善
    - 一部環境でFlashの描画が止まる問題のお知らせ
    - お正月だし艦娘！
- 2013/12/28 v0.7.4.0
    - クロックモードのバグ修正
    - favicon追加
- 2013/12/25 v0.7.3.0
    - 大型建造報告の対応
- 2013/12/24 v0.7.2.0, v0.7.2.1
    - スクショ時のクラッシュ問題を解決
    - 予定の表示順設定が反映されないバグを修正
- 2013/12/23 v0.7.1.0
    - リファクタリング
    - 残り時間表示設定を追加
    - 期間限定エフェクト追加
- 2013/12/20 v0.7.0.3, v0.7.0.4
    - あんまり見てくれないのでアップデート通知をつくりました
    - スクショ時のクラッシュ対応（現在調査・改善中）
    - メンテ情報表示設定追加
    - ファイル設定UIを改善
    - ソフトウェアテスト強化
    - 時間自動取得時に表示される装備娘を追加
    - TODO : クラッシュ問題改善
- 2013/12/06 v0.6.1.1
    - デイリー任務消化表から直接[達成]にできるUIを追加
- 2013/12/05 v0.6.0.4
    - ソフトウェアテストの強化
    - 常に手動設定時の工廠・入渠登録画面のバグ修正
- 2013/12/03 v0.6.0.3
    - 建造報告窓が出ないバグを修正
- 2013/12/01 v0.6.0.2
    - 任務受け忘れ防止アラート機能を追加
    - OCR精度向上
    - 音声ファイル形式制限を追加
    - スクショのショートカットキーを改善
    - リマインダ手動登録時のUIを変更
- 2013/11/27 v0.5.1.2
    - 簡易疲労度メーターと回復通知
    - スクショ撮った画面でファイル名変えれるUI追加
    - 自動取得失敗時に何もしない設定を追加
    - ウィークリー実績が月曜0:00から変な件修正 #193
    - 設定画面のバグ修正
    - テストの強化
- 2013/11/23 v0.5.0.13, v0.5.0.14
    - ウィジェット化してなくても遠征リマインダを有効にするように戻しました
    - クロックモードのバグ修正
    - 任務実績設定をオフにしたら記録すらしないように修正
- 2013/11/22 v0.5.0.11, v0.5.0.12
    - スクショ画像フォーマット.jpg選択可能に
    - 任務実績表示に入渠回数を追加
    - MacOSX10.8以下でのみ起きる通知バグへの対応
    - 課金系APIが叩かれたときの挙動修正
    - 遠征リマインダが登録されないバグを修正
    - リファクタリング
- 2013/11/18 v0.5.0.6, v0.5.0.7, v0.5.0.8
    - 「提督仕事しろ」文言変更設定の修正
    - ウィジェット化時のブラウザバック制御
    - デイリー任務のid間違ってたよ
    - [達成]押して消したあとはもう出てこないように
    - クロックモードが動かないバグの修正
    - 遠征リマインダーをオフにする設定追加
- 2013/11/16 v0.5.0.5
    - クロックモードでのアイコンが出ない不具合を修正
    - デイリー任務消化状況の表示を改善
    - 不足していたデイリー任務を追加
    - 通知音0設定時の挙動修正
- 2013/11/15 v0.5.0.3
    - 建造時にツイート設定を見ていなかった不具合を修正
- 2013/11/15 v0.5.0.2
    - デイリー消化状況表示（クロックモード）
    - レシピメモ（クロックモード）
    - 開発報告ツイート機能
    - 建造報告ツイート機能
    - ウィジェットタイトルのバリエーション追加
- 2013/11/07 v0.3.4.5
    - 新しい任務が追加されちゃった時のUIを追加
- 2013/11/04 v0.3.4.3
    - 追加された任務の対応
- 2013/11/02 v0.3.4.2
    - 追加された任務の対応
    - 運営メンテ時の表示を改善
- 2013/10/31 v0.3.4.1
    - クロックモードの表示バグ修正（できたか不安）
    - 通知の表示順を変えれる設定を追加（終了順とかドックID順とか）
- 2013/10/23 v0.3.3.0, v0.3.4.0
    - 通知消えない詳細設定を追加
    - 数分前通知詳細設定を追加
    - リマインダーの登録後編集機能を改善（クロックモードがパワーアップ）
- 2013/10/18 v0.3.2.11
    - OCR精度向上
- 2013/10/17 v0.3.2.9
    - タイマー設定のバグ修正
    - OCR精度向上
- 2013/10/14 v0.3.2.7
    - タイマー登録後の編集を可能にしました
    - OCR精度向上
- 2013/10/12 v0.3.2.3, v0.3.2.5
    - ウィジェット化の不具合修正
    - OCR精度向上
    - 音声のリセット機能追加
- 2013/10/08 v0.3.2.2
    - サーバ安定の準備
- 2013/10/07 v0.3.2.1
    - 余黒領域が表示されているときのOCR自動取得対応
    - 送信されたOCR失敗ログを見ることができます
- 2013/10/04 v0.3.1.0
    - 通知音声のタイプ別詳細設定を追加
    - 入渠・建造の通知が1分遅いバグを修正
    - OCRサーバのスピード・安定性向上
- 2013/10/01 v0.3.0.2
    - OCRサーバのメンテナンス準備
- 2013/09/29 v0.3.0.1
    - 時間自動取得設定100%解放
    - 新規遠征への対応
- 2013/09/28 v0.3.0.0
    - 入渠・建造、時間自動取得設定の追加ァァァァ！！！！
    -【現在20％リリース中です。サーバ負荷を見つつ100%解放していきます】
- 2013/09/26 v0.2.8.1, v0.2.8.2, v0.2.8.3
    - Retinaでもふつうサイズスクショの設定追加
    - いっぷんまえ通知のバグ修正
- 2013/09/25 v0.2.8
    - Windowsの表示バグ修正
    - スクショのショートカットキーバインドを追加
        -（ctrl + shift + 0 ではたしてよかったのか？）
- 2013/09/25 v0.2.7.11
    - 戦績表示可能になりました
    - 艦隊名編集可能になりました
- 2013/09/24 v0.2.7.10
    - 一部分かりにくい表示を修正
- 2013/09/24 v0.2.7.9
    - 時計モードのバグを修正
- 2013/09/24 v0.2.7.8 
    - アイコンクリック時背景の任意設定
    - その他バグの予防・修正
- 2013/09/21 v0.2.7.7
    - 通知音量設定の追加
    - ウィジェット起動位置の記憶
    - 実績表示のデザイン変更
    - その他バグ修正
    - 第二艦隊遠征帰投時間のバグは現在調査中です
- 2013/09/18 v0.2.7.4
    - リマインダ手動登録ポップアップが閉じない問題修正
    - 第二艦隊遠征帰投時間がバグってるんじゃないか疑惑改善
- 2013/09/16 v0.2.7.3
    - 通知の発着個別設定を追加
    - 着通知時の文言変更設定を追加
    - 入渠時間自動取得はもうすぐ実装できます！
- 2013/09/12 v0.2.7.2
    - ダウンロード・オン・スクショ！の設定追加
    - ちょっとした表示修正
- 2013/09/10 v0.2.7.1
    - ちょっとした機能(時計モード)の追加
- 2013/09/09 v0.2.7
    - スクショ機能・設定を追加
    - 通知時音声設定を追加
    - 通知ポップアップ押した時の挙動を修正
    - その他バグ修正
- 2013/09/07 v0.2.6
    - 入渠修復完了通知! (半自動)
    - 建造完了通知! (半自動)
    - 通知アイコン変更設定を追加
    - 「提督 仕事しろ」変更設定を追加
    - 他
 - 2013/09/04 v0.2.5
    - 通知をクリックしたら前面に
    - 既にある場合LAUNCHしたら前面に
    - 残り時間をバッジにする設定の追加
    - 補給回数など任務に関係ある回数を記録
    - その他バグ修正
- 2013/08/31 ver0.2.4
    - Windowsにおける絶妙なスキマを殲滅、その他表示改善
- 2013/08/29 ver0.2.3
    - 完了までの時間を表示、その他改善
- 2013/08/29 ver0.2.0
    - 遠征完了通知の実装
- 2013/08/27 ver0.1.1
    - 表示の修正
- 2013/08/24 ver0.1.0
    - 公開
