# Frontend Mentor - FAQ accordion card

## FAQ 아코디언 카드 컴포넌트 제작

## 목차

- [개요](#개요)
  - [작업 목표](#작업-목표)
  - [스크린샷](#스크린샷)
  - [링크](#링크)
- [작업일지](#작업일지)
  - [사용 언어](#사용-언어)
  - [배운 점](#배운-점)
  - [개선할 부분](#개선할-부분)
  - [참고자료](#참고자료)
- [만든 이](#만든-이)


## 개요

### 작업 목표

사용자는 :

- 장치의 화면 크기에 따라 최적의 레이아웃을 본다. (반응형 웹페이지)
- hover 상태일 때 반응하는 요소를 본다.
- 질문을 눌렀을 때 답변이 나온다/숨겨진다.


### 스크린샷

![mobile](/screenshots/mobileMode.png)
![desktop](/screenshots/desktop.png)

### 링크

- 챌린지 출처 URL : [frontendmentor.io](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam)
- 작업물 사이트 URL: [g1hong.github.io/faq-accordion-card/](https://g1hong.github.io/faq-accordion-card/)

## 작업일지

- 시작일 : 2021년 4월 15일
- 종료일 : 2021년 4월 17일

21.04.15 )

- git repository 생성 및 업로드
- global 속성, 모바일기준 illust 위치

21.04.16 )

- 모바일기준 illust css 수정(가상클래스 사용), 완성

21.04.17 )

- 데스크탑 기준 illust css 완성
- FAQ 아코디언 js 완성, illust 위치조정


### 사용 언어

- HTML : 시맨틱 HTML5 markup
- CSS : 사용자 지정 CSS 속성 사용, Flexbox
- Javascript : 질문 클릭 시 답변 나오기/숨기기 구현
- 모바일 화면을 먼저 구현하는 작업흐름

### 배운 점

이번 작업에서 제일 신경쓴 부분은 1. scss 사용하기 2. before/after 가상클래스 사용하기 였습니다.
- 1. scss 사용하기 : 확실히 scss 문법을 사용하니 가시성이 좋고 똑같은 단어를 사용하지 않고 '&'를 사용하면 되니까 작업효율이 매우 좋았습니다.  앞으로도 scss를 애용하고자 합니다.
- 2. before/after 가상클래스 사용하기 : 개인적으로 front-end 작업에 있어서 가장 구현하기 까다로운 부분이 디자인과 동일하게 일러스트 배치하기 라고 생각합니다. 이 과정에서 before/after 클래스를 적극적으로 활용해볼 수 있었습니다. 화면 가로픽셀이 바뀌더라도 최대한 디자인 이미지와 동일하게 이미지가 화면상에 표시되도록 신경써서 작업했습니다.


### 개선할 부분
- 1. github pages 를 이용해 웹호스팅을 했을 때 css가 제대로 적용되지 않고 html만 나와서 아쉬웠습니다. 앞으로 챌린지를 거치면서 scss를 많이 사용하게될 것 같은데 이 문제점을 해결해야 저의 작업물을 홈페이지 형식으로 보여드릴 수 있으므로 꼭 해결방법을 찾고자 합니다.
- (21/4/21) css와 js, 이미지의 경로 지정에 문제가 있었음을 발견하고 이를 해결했습니다.

- 2. 질문을 클릭했을 때 이에 대한 답변 p tag가 나오기/숨기기는 구현했지만 여기에서 더 나아가 다음에 비슷한 작업을 하게되면 display: none에 애니메이션을 넣고자 합니다. [참고사이트](https://blog.hyungsub.com/entry/display-none%EC%97%90-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)

### 참고자료
- [before/after-가상클래스](http://uxuiz.cafe24.com/wp/archives/4726)


## 만든 이
- Github - [홍지원](https://github.com/g1hong)




