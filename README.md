# React-Practice

## useState
변수 선언하기(숫자, 문자열, 배열, 객체)

## useEffect
자식의 데이터를 부모에게 전달 (properties)

## route

페이지 이동
1. 기본 라우팅

- <Route path="/" element={<Home />} /> : 메인 페이지 설정
- <Route path="/about" element={<About />} /> : 소개 페이지 설정

2. 동적 라우팅 (URL 파라미터 사용)

- <Route path="/products/:id" element={<ProductDetail />} />
- :id는 동적 URL 파라미터를 의미하며, useParams() 훅을 사용하여 해당 값을 가져올 수 있습니다.

3. 404 페이지 처리

- <Route path="*" element={<NotFound />} />
- * 경로는 정의되지 않은 모든 URL에 대해 NotFound 컴포넌트를 렌더링합니다.

4. 네비게이션

- import { Link, useNavigate } from 'react-router-dom';
- <Link to="/about">About</Link>
- const navigate = useNavigate();
- navigate('/products');
- Link는 페이지 새로고침 없이 라우팅을 도와줍니다.
- useNavigate는 프로그래밍 방식으로 라우팅을 가능하게 합니다.

결론
- react-router-dom을 사용하면 **SPA(Single Page Application)**에서 페이지 전환을 부드럽게 처리할 수 있습니다.
- Routes, Route, Link, useNavigate, useParams, useLocation 등 핵심 기능을 사용하면 동적 라우팅, 404 페이지 처리도 쉽게 구현할 수 있습니다.
- 네비게이션 바, Breadcrumbs, Protected Routes와 같은 고급 기능도 추가할 수 있습니다.

## redux thunk
api 데이터 받기

주요 포인트 정리
- 비동기 액션 생성: createAsyncThunk를 사용해 API 요청을 정의합니다.
- 비동기 상태 관리: pending, fulfilled, rejected를 통해 로딩, 성공, 실패 상태를 처리합니다.
- Redux 상태 접근: useSelector를 사용해 users, loading, error 상태를 쉽게 가져올 수 있습니다.
- Redux 액션 디스패치: useDispatch를 사용해 fetchUsers 액션을 호출합니다.
- 리액트 라이프사이클 사용: useEffect로 컴포넌트 마운트 시 데이터 로드를 트리거합니다.

## agGrid
테이블 데이터 화면

주요 기능 설명
- 정렬(Sorting): sortable: true를 설정하면 각 열 헤더를 클릭하여 정렬할 수 있습니다.
- 필터링(Filtering): filter: true를 설정하면 열에 필터 기능을 추가할 수 있습니다.
- 숫자 필터: filter: 'agNumberColumnFilter'를 사용하면 숫자 전용 필터를 설정할 수 있습니다.
- 페이징(Pagination): pagination: true, paginationPageSize: 2를 설정하면 데이터 페이지당 2개의 항목을 표시합니다.

스타일 적용
- className="ag-theme-alpine"을 사용하여 agGrid의 Alpine 테마를 적용했습니다. 
- 추가적으로 ag-theme-balham, ag-theme-material 등 다양한 테마를 제공하며, 커스텀 CSS를 통해 디자인을 변경할 수도 있습니다.

## antd (Ant Design)
modal 구현

주요 포인트
- 모달 열기: showModal 함수를 통해 isModalOpen을 true로 설정합니다.
- 모달 닫기: handleOk 및 handleCancel 함수를 통해 isModalOpen을 false로 설정합니다.
- okText, cancelText 속성을 통해 버튼 텍스트를 맞춤 설정할 수 있습니다.
- open (또는 이전 버전에서는 visible) 속성은 모달의 표시 여부를 제어합니다.

주요 기능
- 폼 검증: form.validateFields()를 통해 입력값 검증을 수행합니다.
- 메시지 표시: message.success를 통해 폼 제출 성공 시 알림을 띄웁니다.
- 폼 초기화: form.resetFields()를 사용하여 폼을 초기화합니다.

결론
- 기본 모달은 Modal 컴포넌트를 사용하여 구현할 수 있습니다.
- 폼과의 결합을 통해 입력값을 받아 처리할 수 있습니다.
- 간편 모달 (Modal.info, Modal.confirm 등)을 사용하면 메시지 모달을 빠르게 띄울 수 있습니다.
- Modal은 다양한 사용자 액션 (확인, 취소, 폼 검증 등)을 처리할 수 있는 유연한 API를 제공합니다.