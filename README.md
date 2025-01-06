# 상태 관리 학습을 위한 React 프로젝트

## 프로젝트 소개

이 프로젝트는 React의 다양한 상태 관리 방식을 학습하기 위한 모노레포 구조의 프로젝트.

## 프로젝트 구조

project/
├── apps/
│ ├── basic-state/ # useState, useEffect 기본
│ ├── effect-master/ # useEffect 심화
│ ├── props-drilling/ # Props 전달 패턴
│ ├── redux-only/ # Redux 전역 상태 관리
│ └── hybrid-state/ # Redux + 지역 상태 혼합
└── packages/ # 공유 패키지

## 설치 및 실행

### 사전 요구사항

- Node.js >=18
- pnpm 9.15.2

### 설치

- pnpm install

### 실행

# 기본 상태 관리 프로젝트

pnpm dev:basic-state

# Effect 마스터 프로젝트

pnpm dev:effect-master

# Props 드릴링 프로젝트

pnpm dev:props-drilling

# Redux 전용 프로젝트

pnpm dev:redux-only

# 하이브리드 상태 관리 프로젝트

pnpm dev:hybrid-state

## 프로젝트 설명

1. Basic State

React의 기본적인 상태 관리에 중점을 둔 첫 번째 프로젝트
useState와 useEffect 훅을 모두 구현
React의 기본적인 상태 관리 패턴을 학습

2. Effect Master

basic-state 프로젝트를 기반으로 구축
useEffect 구현에만 집중
다양한 사용 사례와 사이드 이펙트 패턴을 학습

3. Props Drilling

effect-master 프로젝트를 확장
컴포넌트 계층 구조와 props 전달 방식을 보여줌
컴포넌트 트리를 통한 상태 관리 방법을 설명

4. Redux Only

Redux를 사용한 중앙 집중식 상태 관리 구현
컴포넌트 상태를 Redux 스토어로 이동
Redux 패턴과 모범 사례를 학습

5. Hybrid State

Redux와 로컬 컴포넌트 상태를 결합
전역 상태와 로컬 상태의 적절한 사용 시점을 보여줌
실용적인 상태 관리 패턴을 학습
