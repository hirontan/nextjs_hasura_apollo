# nextjs_hasura_apollo

## Hasuraの準備

### URL
https://hasura.io/cloud/

### 準備
1. プロジェクト作成
2. `Env Vars`の`ADMIN SECRET`削除（そもそもない場合は、そのままでOK）
3. コンソールの`Data`にて、`Create Heroku Database`を実行
    - テーブルの作成は個人にお任せ
      - 例
        - users
          - id（Primary Key）
          - name
          - created_at
          - group_id
          - profile_id
        - groups
          - id（Primary Key）
          - name
        - profiles
          - id（Primary Key）
          - nickname
        - profile_users
          - id（Primary Key）
          - profile_id
          - user_id
