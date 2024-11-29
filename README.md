# 이트리소프트 홈페이지 React App

`GitHub Pages`에 배포된 버전은 `6f9696bb` 버전이며 이후 버전은 `GitLab Pages`에 적용하기 위해 수정한 내용입니다.

## github pages 빌드 및 배포

`gh-pages` 패키지를 이용해서 배포하는 것으로 배포시 수정이 필요한 내용을 정리합니다.

1. `package.json`의 homepage 속성 값을 `https://etree-rnd.github.io`로 변경합니다.
2. 코드가 수정된 부분이 있으면 main으로 먼저 커밋합니다.
3. 수정된 커밋한 코드로 배포하는 명령어는 `yarn deploy -- -m "Deploy React app to GitHub Pages"` 로 실행하면 gh-pages 브랜치로 배포가 진행됩니다.

## gitlab pages 빌드 및 배포

1. `github pages`에서 수정한 `package.json`의 homepage 속성 값을 `https://etreesoft.gitlab-io`로 변경합니다.
2. 코드가 수정된 부분이 있으면 main으로 커밋하면 자동으로 빌드 및 배포가 진행됩니다.
