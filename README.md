# nextjs_hasura_apollo

## 準備

### Hasura
##### URL
https://hasura.io/cloud/

##### 準備
1. プロジェクト作成
2. `Env Vars`の`ADMIN SECRET`削除（そもそもない場合は、そのままでOK）
3. コンソールの`Data`にて、`Create Heroku Database`を実行
    - テーブルの作成は個人にお任せ
      - 例
        - users
          - Columns
            - id（Primary Key）
            - name
            - created_at
            - group_id
            - profile_id
          - Foreign Keys
            - group_id → groups.id
            - profile_id → profiles.id
        - groups
          - Columns
            - id（Primary Key）
            - name
        - profiles
          - Columns
            - id（Primary Key）
            - nickname
          - Foreign Keys
            - profile_id → profiles.id
            - user_id → users.id
        - profile_users
          - Columns
            - id（Primary Key）
            - profile_id
            - user_id
          - Foreign Keys
            - profile_id → profiles.id
            - user_id → users.id
      - Relationships
        - 参考: [Guides: Data modelling](https://hasura.io/docs/latest/graphql/core/guides/data-modelling/index.html)


### VS Code

##### 拡張機能
- [ES7](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
