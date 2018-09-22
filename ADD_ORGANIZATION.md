# Add your Organization

"Who use Angular in Japan" に会社・組織を追加するには、 `src/data/organizations.json` ファイルを編集するプルリクエストを提出してください。

追加する JSON オブジェクトは以下の形式にしたがってください。

- `name`: 会社・組織の名前 (必須)
- `websiteUrl`: 会社・組織の URL (必須)
- `description`: 会社・組織の説明（1 文程度) (必須)
- `publicUrl`: Angular を使っているサービスやプロダクトの公開 URL (任意)
- `ngVersions`: 利用している Angular のバージョン: (必須)
  - `angularjs`: AngularJS (v1.x)を利用しているかどうか
  - `angular`: Angular (v2〜)を利用しているかどうか
  - `ionic`: Ionic を利用しているかどうか

例:

```
    {
      "name": "Awesome Company",
      "websiteUrl": "https://example.com/",
      "description": "Awesome Company is an awesome company.",
      "publicUrl": "",
      "ngVersions": {
        "angular": true,
        "angularjs": false
      }
    }
```
