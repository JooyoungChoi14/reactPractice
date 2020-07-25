## 서버사이드 작동시키는 법
1.`server-side/server.js`에서 cors origin을 프론트사이드 URL을 서버사이드 URL 및 PORT 변경
2.`server-side/app/config/db.config.js`에서 MySQL 서버와 포트, 유저ID 및 패스워드 등을 설정
3.디렉토리 터미널에서 `node server.js`로 서버 가동시키기

## 프론트사이드 작동시키는 법
1.`front-side/src/http-common.js`에서 baseURL을 서버사이드 URL 및 PORT 변경
2.`yarn start` 혹은 `npm run-script start`로 ReactJS 가동시키기