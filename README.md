```js
  root = true

  [*]
  end_of_line = lf
  insert_final_newline = true
  charset = utf-8

  [*.{ts,js,json}]
  indent_style = tab
  trim_trailing_whitespace = true
  tab_width = 2
```

### 이 구성을 사용하면 모든 파일이 다음과 같은지 확인합니다.

- LF로 줄을 종료합니다.
- 항상 끝에 빈 줄이 있습니다.
- utf-8 문자 집합을 사용합니다.

또한 특정 확장에 대한 규칙을 설정할 수 있습니다. 이 예의 경우 _.ts, _.js 및 \*.json 파일은 다음과 같습니다.

- 탭을 들여쓰기 스타일로 사용하십시오.
- 저장할 때 줄 끝의 후행 공백을 제거하십시오.
- 두 개의 열 길이로 탭을 표시합니다.
  이 설정을 사용하면 코드 확인을 위한 기본 IDE 도움말이 제공됩니다!

### yarn add

`yarn add -D typescript tslint ts-node gulp del mocha sinon chai gts nyc @types/node @types/mocha @types/sinon @types/chai `
