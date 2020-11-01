# 기여하기

만약 이 프로젝트에 기여하기를 원하신다면, 먼저 [Code of Conduct](./CODE_OF_CONDUCT.md) 문서를 참고하십시오.

## 번역

번역 기여는 **3**파트로 나뉘어져 있습니다. 만약 원하신다면 하나의 pull-request로 진행도 가능합니다.

### Site Documentation

사이트에 대한 설명 파일은 `./github/lang` 경로에 존재합니다. 만약 번역된 파일의 제출을 원하신다면, 다음의 파일들을 올바른 [two-letter iso-code for your language](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)와 함께 제출해 주세요.

e.g. 한국어

- `.github/lang/README.kr.md`
- `.github/lang/CONTRIBUTING.kr.md`

`README.zh.md` 와 `CONTRIBUTING.kr.md`파일 사이의 링크 주소도 올바르게 바꿔주세요. ***Contributing*** 링크를 `README.kr.md` 문서에서 클릭했을 때 `CONTRIBUTING.kr.md` 파일로 연결 되어야 합니다.

### i18n

`lang/` 디렉토리의 언어 파일은 자바스크립트의 형태로 존재합니다. 번역된 파일의 이름을 [two-letter iso-code for your language](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)에 부합하게 적어주세요.

e.g. 힌두어

- `lang/hi.js`

먼저 `lang/en.js`의 내용을 새로운 언어의 파일에 붙여넣고, 번역을 진행해 주세요. 마크업 형식으로 작성된 문장의 형식을 어기지 않도록 주의해 주세요.

### Content

Content 파일들은 `content/` 디렉토리 아래에[two-letter iso-code for your language](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)으로 명명된 폴더 아래에 존재합니다.

e.g. 스페인어 (본토)

- `content/es/`

번역에 앞서 `content/en/` 파일의 내용을 새로운 언어로 작성될 파일에 붙여넣고, 문서의 모든 부분의 번역을 진행해 주세요. 존재할지도 모르는 HTML 형식을 손상하지 않도록 주의를 요합니다. 문서의 상단에 존재하는 frontmatter는 현재 사용되지 않지만, 만약 사용될 경우를 대비해 그것까지 번역을 부탁드립니다.

현재 다음의 파일들이 번역을 요합니다:

- `details.md`
- `index.md`

## 이슈

만약 이슈를 발견한다면, 우선 더 많은 정보를 위해 연락을 취하고, 자신이 발견했다는것을 인정받은 후에 해당 이슈를 고치기 위한 작업을 시작하세요. 작업이 끝나면, PR 요청을 보내주세요.

Pull-request(PR)을 진행하려면, 브랜치를 생성하기전에 현재의 리포지토리를 포크해 주세요. `main` 브랜치에 PR을 보내기 전에 자신이 소유한 리포지토리의 `main` 브랜치를 수정하지 마세요. 만약 조금이라도 불확실한 부분이 있다면 진행전에 반드시 연락을 취하세요.

## 개선사항

다른 개선사항을 추가하기위해 PR을 보내지 마세요. 어떠한 개선사항을 진행하려고 하던지, 이슈를 먼저 제기하세요.
