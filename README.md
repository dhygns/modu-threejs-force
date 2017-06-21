# modu-threejs-vector
Nature Of CODE에서 소개된 Vector의 특성을 속도와 가속도를 설정하여 움직임을 표현한 예제입니다.


## 필요요소
- ``git(2.14.0.windows.1 혹은 이에 상응하는 osx버전)``에 대한 이해 및 설치
- ``nodejs(4.2.4^)``에 대한 이해 및 설치
- ``npm(2.14.12^)``에 대한 이해 및 설치
- ``graphics programming``에 대한 이해
- ``chorme`` 설치 ( *필수* )

## 의존성
- [Nodejs](https://nodejs.org/ko/) (LTS 버전 설치)
- NPM (Nodejs 설치 과정 중 설치 가능)

## 설치
- step1. cmd 혹은 terminal에서 원하는 경로로 이동한 뒤 아래와 같이 입력
```
git clone https://github.com/dhygns/modu-threejs-vector.git
```
- step2. 이후 생성된 폴더로 이동
```
cd modu-threejs-vector
```
- step3. npm을 사용하여 필요한 module들을 설치합니다.
```
npm install
```

## 빌드
- step1. "*modu-threejs-vector*" 폴더에서 아래의 명령어를 통해 빌드합니다.
```
npm run build
```
해당 명령어 실행후 자동으로 빌드됩니다. 다른 명령어를 실행하고 싶으신 경우는 ```ctrl + c```를 눌러 빠져 나간 후 진행하거나, 새 창을 켜서 실행시키면 됩니다.

## 실행
- step1. "*modu-threejs-vector*" 폴더에서 아래의 명령어를 통해 서버를 실행시킵니다
```
npm run start
```

- step2. Chrome을 켠 후, 주소창에 ``http://localhost:3000``을 입력합니다.

## License

Copyright (c) 2017 Donghyeon Kim (dhygns@naver.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
