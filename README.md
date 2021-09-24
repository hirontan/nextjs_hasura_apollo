# nextjs_hasura_apollo

## Hasuraの準備

### URL
https://hasura.io/cloud/

### 準備
1. プロジェクト作成
2. `Env Vars`の`ADMIN SECRET`削除（そもそもない場合は、そのままでOK）
3. コンソールの`Data`にて、`Create Heroku Database`を実行
    - テーブルの作成は個人にお任せ
      - 今回
        - users
          - id
          - name
          - created_at
          - group_id
          - profile_id
        - groups
          - id
          - name
        - profiles
          - id
          - nickname
        - profile_users
          - id
          - profile_id
          - user_id
