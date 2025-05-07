---
title: Liệt kê nhanh
draft: false
tags:
  - react
---
## Common

**Định nghĩa**: Các khái niệm cơ bản và nền tảng của React, giúp hiểu cách thư viện hoạt động và lý do sử dụng nó.

### React là gì

React là thư viện JavaScript để xây dựng giao diện người dùng (UI), tập trung vào ứng dụng web tương tác, đơn trang (SPA).

### Virtual DOM

Virtual DOM là bản sao của DOM thực, được React sử dụng để tối ưu hóa cập nhật giao diện bằng cách chỉ render lại phần thay đổi.

### Component-based architecture

React tổ chức UI thành các component độc lập, tái sử dụng, giúp mã nguồn dễ quản lý và mở rộng.

### JSX

JSX là cú pháp mở rộng của JavaScript, cho phép viết HTML trong JavaScript, giúp tạo giao diện dễ dàng hơn.

### Reconciliation

Reconciliation là quá trình React so sánh Virtual DOM mới và cũ để xác định phần nào của DOM thực cần cập nhật.

### One-way Data Binding

Dữ liệu trong React chỉ chảy theo một hướng (từ parent đến child), giúp dự đoán và kiểm soát trạng thái dễ hơn.

### Declarative UI

React cho phép mô tả giao diện theo cách khai báo, thay vì thao tác thủ công trên DOM.

### Keys

Thuộc tính đặc biệt trong danh sách để giúp React xác định phần tử nào thay đổi, thêm hoặc xóa.

### Controlled vs Uncontrolled Components

Controlled components quản lý dữ liệu form qua state, trong khi uncontrolled components sử dụng ref.

## Components

**Định nghĩa**: Các khối xây dựng cơ bản của React, mỗi component đại diện cho một phần giao diện độc lập.

### Functional Components

Component viết dưới dạng hàm, sử dụng Hooks để quản lý trạng thái và lifecycle, là cách tiếp cận hiện đại.

### Class Components

Component viết dưới dạng lớp ES6, hỗ trợ state và lifecycle methods, ít được sử dụng hơn trong React hiện đại.

### Props

Props là cách truyền dữ liệu từ component cha sang component con, hoạt động như tham số hàm.

### State

State là dữ liệu nội bộ của component, có thể thay đổi và gây ra re-render khi cập nhật.

### Prop Drilling

Hiện tượng truyền props qua nhiều tầng component, gây khó khăn trong quản lý dữ liệu ở ứng dụng lớn.

### Component Lifecycle

Các giai đoạn của component (mounting, updating, unmounting), được quản lý qua phương thức hoặc Hooks.

### Composition vs Inheritance

React ưu tiên sử dụng composition (kết hợp component) thay vì kế thừa để tái sử dụng mã.

### Pure Components

Class component tự động kiểm tra props và state để tránh re-render không cần thiết.

### Memo Components

Functional component sử dụng React.memo để ngăn re-render khi props không thay đổi.

## Lifecycle

**Định nghĩa**: Chu kỳ sống của một component, từ khi được tạo, cập nhật, đến khi bị xóa khỏi DOM.

### Mounting

Giai đoạn component được tạo và thêm vào DOM (ví dụ: `componentDidMount` hoặc `useEffect`).

### Updating

Giai đoạn component được cập nhật do thay đổi props hoặc state (ví dụ: `componentDidUpdate` hoặc `useEffect`).

### Unmounting

Giai đoạn component bị xóa khỏi DOM (ví dụ: `componentWillUnmount` hoặc cleanup trong `useEffect`).

### Error Handling

Xử lý lỗi trong quá trình render hoặc lifecycle bằng Error Boundaries hoặc try-catch.

### getDerivedStateFromProps

Phương thức tĩnh để cập nhật state dựa trên props trong Class Components.

### shouldComponentUpdate

Phương thức kiểm soát việc re-render của Class Components để tối ưu hiệu suất.

## Event Handling

**Định nghĩa**: Cách React xử lý sự kiện người dùng (như click, nhập liệu) để tạo giao diện tương tác.

### onClick

Sự kiện khi người dùng nhấp chuột vào một phần tử, thường gắn vào button hoặc liên kết.

### onChange

Sự kiện khi giá trị của input, select hoặc textarea thay đổi, thường dùng để cập nhật state.

### onSubmit

Sự kiện khi form được gửi, thường dùng để xử lý dữ liệu form.

### onKeyDown

Sự kiện khi người dùng nhấn phím trên bàn phím, hữu ích cho phím tắt.

### Event Bubbling

Hiện tượng sự kiện lan truyền từ phần tử con lên phần tử cha trong DOM.

### Synthetic Events

React sử dụng Synthetic Events để chuẩn hóa sự kiện trên các trình duyệt, đảm bảo tính nhất quán.

### onMouseOver

Sự kiện khi chuột di chuyển qua một phần tử, thường dùng cho hiệu ứng hover.

### onFocus

Sự kiện khi một phần tử nhận được focus, thường dùng trong form.

## Hooks

**Định nghĩa**: Các hàm đặc biệt của React cho phép functional components quản lý trạng thái, side effects và tái sử dụng logic.

### useState

Hook quản lý trạng thái, trả về một cặp giá trị: state và hàm cập nhật.

### useEffect

Hook xử lý side effects (gọi API, cập nhật DOM) khi component render hoặc dependencies thay đổi.

### useLayoutEffect

Tương tự useEffect nhưng chạy đồng bộ sau khi DOM được cập nhật, phù hợp cho tác vụ liên quan đến layout.

### useContext

Hook truy cập giá trị từ Context API, giúp chia sẻ dữ liệu toàn cục mà không cần prop drilling.

### useRef

Hook tạo tham chiếu tới DOM element hoặc giá trị không gây re-render khi thay đổi.

### useReducer

Hook quản lý trạng thái phức tạp bằng reducer, tương tự Redux.

### useMemo

Hook tối ưu hóa hiệu suất bằng cách lưu trữ kết quả tính toán, chỉ tính lại khi dependencies thay đổi.

### useCallback

Hook trả về phiên bản memoized của callback, tránh re-render không cần thiết.

### useImperativeHandle

Hook tùy chỉnh giá trị ref được expose bởi component khi sử dụng forwardRef.

### Custom Hooks

Hàm tự định nghĩa sử dụng các Hook có sẵn để tái sử dụng logic giữa các component.

### useId

Hook tạo ID duy nhất cho các phần tử, hữu ích cho accessibility và form.

### useTransition

Hook trong React 18 để ưu tiên render các cập nhật không khẩn cấp.

### useDeferredValue

Hook trong React 18 để trì hoãn cập nhật giá trị, cải thiện hiệu suất.

## Routing

**Định nghĩa**: Quản lý điều hướng và hiển thị component dựa trên URL trong ứng dụng React.

### React Router DOM

Thư viện quản lý định tuyến, hỗ trợ điều hướng và hiển thị component dựa trên URL.

### Route

Định nghĩa đường dẫn (path) ánh xạ tới một component cụ thể.

### Navigation (NavLink, Link, useNavigate)

Công cụ điều hướng giữa các trang mà không cần tải lại, như Link, NavLink, và useNavigate.

### Parameters (useParams)

Hook truy cập tham số động trong URL (ví dụ: `/user/:id`).

### Nested Routes

Định tuyến lồng nhau để hiển thị component con bên trong component cha dựa trên URL.

### Protected Routes

Route chỉ cho phép truy cập khi người dùng đáp ứng điều kiện (ví dụ: đã đăng nhập).

### Lazy Loading Routes

Tải component theo nhu cầu để giảm thời gian tải ban đầu.

### Outlet

Component trong React Router để render các route con trong Nested Routes.

### useLocation

Hook truy cập thông tin về URL hiện tại (pathname, search, v.v.).

## State Management

**Định nghĩa**: Kỹ thuật quản lý và chia sẻ trạng thái (state) trong ứng dụng React.

### Context API

API tích hợp của React để quản lý trạng thái toàn cục đơn giản, thay thế prop drilling.

### Redux Toolkit

Công cụ chính thức để quản lý trạng thái với Redux, đơn giản hóa cú pháp và cấu trúc.

### Zustand

Thư viện quản lý trạng thái nhẹ, dễ dùng, không cần boilerplate phức tạp.

### Recoil

Thư viện quản lý trạng thái từ Facebook, sử dụng atoms và selectors.

### Actions, Reducers, Store

Khái niệm cốt lõi trong Redux: action mô tả sự kiện, reducer cập nhật trạng thái, store lưu trữ trạng thái.

### Middleware (e.g., Redux Thunk, Redux Saga)

Middleware mở rộng Redux để xử lý logic bất đồng bộ như gọi API.

### Selectors (e.g., Reselect)

Hàm truy xuất và tối ưu hóa dữ liệu từ store, tránh tính toán lặp lại.

### MobX

Thư viện quản lý trạng thái dựa trên reactive programming, đơn giản hơn Redux.

## Call API

**Định nghĩa**: Kỹ thuật giao tiếp với server, lấy hoặc gửi dữ liệu trong ứng dụng React.

### Axios

Thư viện HTTP client để gọi API, hỗ trợ cấu hình dễ dàng và xử lý lỗi.

### Fetch

API tích hợp của JavaScript để thực hiện yêu cầu HTTP, đơn giản nhưng ít tính năng hơn Axios.

### async/await

Cú pháp xử lý bất đồng bộ, giúp mã dễ đọc hơn khi gọi API.

### Error Handling

Xử lý lỗi khi gọi API (ví dụ: try-catch, hiển thị thông báo lỗi).

### Loading States

Quản lý trạng thái loading khi gọi API để cải thiện trải nghiệm người dùng.

### REST API Integration

Kết nối với REST API để thực hiện thao tác CRUD (Create, Read, Update, Delete).

### GraphQL with Apollo Client

Sử dụng Apollo Client để làm việc với GraphQL, hỗ trợ truy vấn và mutation hiệu quả.

### React Query

Thư viện quản lý trạng thái server-side, tự động xử lý caching, refetching, và loading states.

## Performance

**Định nghĩa**: Kỹ thuật tối ưu hóa hiệu suất ứng dụng React, giảm thời gian tải và cải thiện trải nghiệm người dùng.

### Lazy Loading

Tải component hoặc tài nguyên theo nhu cầu để giảm thời gian tải ban đầu.

### Memoization

Lưu trữ kết quả tính toán để tránh thực hiện lại các tác vụ tốn kém.

### Code Splitting

Chia nhỏ mã thành các bundle để tải dần, cải thiện hiệu suất.

### useMemo

Hook memoize giá trị, chỉ tính lại khi dependencies thay đổi.

### useCallback

Hook memoize hàm, ngăn tạo lại hàm trong mỗi lần render.

### React.memo

HOC ngăn component re-render khi props không thay đổi.

### PureComponent

Class component tự động kiểm tra props và state để tránh re-render không cần thiết.

### Profiler API

Công cụ của React để đo lường hiệu suất render của component.

### Tree Shaking

Loại bỏ mã không sử dụng trong quá trình build để giảm kích thước bundle.

### Dynamic Imports

Tải module động để hỗ trợ code splitting và lazy loading.

## Testing

**Định nghĩa**: Kiểm thử ứng dụng để đảm bảo chất lượng mã và chức năng hoạt động như mong đợi.

### Jest

Framework kiểm thử JavaScript, thường dùng để kiểm thử logic trong React.

### React Testing Library

Thư viện kiểm thử component React theo cách gần với người dùng thực tế.

### Enzyme

Thư viện kiểm thử component React, hỗ trợ kiểm tra chi tiết cấu trúc component.

### Unit Test

Kiểm thử từng đơn vị mã (function, component) độc lập.

### Integration Test

Kiểm thử sự tương tác giữa các component hoặc module.

### Snapshot Testing

So sánh kết quả render của component với snapshot để phát hiện thay đổi.

### Mocking (e.g., Mock API, Mock Functions)

Tạo dữ liệu giả để kiểm thử mà không cần gọi API thực.

### Cypress

Công cụ kiểm thử end-to-end để kiểm tra ứng dụng React trong trình duyệt.

### Testing Library Queries

Các hàm như `getBy`, `findBy`, `queryBy` trong React Testing Library để tìm phần tử.

## DevOps

**Định nghĩa**: Công cụ và quy trình để triển khai và vận hành ứng dụng React trong môi trường thực tế.

### CI/CD

Tự động hóa quá trình build, test và deploy để tăng hiệu quả phát triển.

### Vercel

Nền tảng triển khai và quản lý ứng dụng React dễ dàng.

### Netlify

Nền tảng triển khai ứng dụng tĩnh, hỗ trợ CI/CD và domain tùy chỉnh.

### Firebase

Nền tảng của Google để triển khai, lưu trữ và quản lý ứng dụng React.

### GitHub Actions

Công cụ tự động hóa workflow, như chạy test hoặc deploy.

### Docker

Công cụ đóng gói ứng dụng vào container, đảm bảo tính nhất quán trên các môi trường.

### Environment Variables

Quản lý biến môi trường để cấu hình ứng dụng theo môi trường (dev, prod).

### AWS Amplify

Nền tảng triển khai và quản lý ứng dụng React với tích hợp backend.

## Progressive Web Apps (PWA)

**Định nghĩa**: Kỹ thuật biến ứng dụng web thành ứng dụng giống native, hỗ trợ offline và thông báo đẩy.

### Service Workers

Script chạy nền để hỗ trợ offline, caching và push notifications.

### Web App Manifest

Tệp JSON định nghĩa thông tin ứng dụng (tên, icon) để cài đặt như ứng dụng native.

### Offline Support

Cho phép ứng dụng hoạt động khi không có kết nối mạng thông qua caching.

### Push Notifications

Gửi thông báo tới người dùng ngay cả khi ứng dụng không mở.

### Caching Strategies

Chiến lược lưu trữ tài nguyên (cache-first, network-first) để tối ưu hiệu suất.

### Workbox

Thư viện của Google để đơn giản hóa triển khai Service Workers và PWA.

### PWA Installation Prompts

Giao diện nhắc người dùng cài đặt ứng dụng PWA lên thiết bị.

### Lighthouse

Công cụ kiểm tra hiệu suất và tính năng PWA của ứng dụng.

## Advanced Topics

**Định nghĩa**: Khái niệm và kỹ thuật nâng cao để xây dựng ứng dụng React phức tạp và tối ưu.

### Server-Side Rendering (SSR) with Next.js

Render giao diện trên server để cải thiện SEO và tốc độ tải ban đầu.

### Static Site Generation (SSG) with Gatsby

Tạo website tĩnh từ dữ liệu tại thời điểm build, tối ưu hiệu suất.

### TypeScript with React

Sử dụng TypeScript để kiểm tra kiểu dữ liệu, tăng độ an toàn mã.

### Concurrent Rendering (React 18)

Tính năng React 18 để xử lý render không đồng bộ, cải thiện trải nghiệm người dùng.

### Suspense

Cơ chế xử lý dữ liệu bất đồng bộ hoặc lazy loading component.

### Error Boundaries

Component đặc biệt để bắt lỗi JavaScript trong cây component con.

### Portals

Render component vào node DOM khác ngoài cây component chính.

### Higher-Order Components (HOCs)

Pattern tái sử dụng logic bằng cách bọc component.

### Render Props

Pattern chia sẻ logic giữa các component thông qua prop là hàm.

### React Fiber

Kiến trúc mới của React để cải thiện hiệu suất và hỗ trợ Concurrent Rendering.

### Code Splitting with Suspense

Kết hợp Suspense và dynamic imports để tải component theo nhu cầu.

## Styling

**Định nghĩa**: Phương pháp tạo kiểu giao diện trong ứng dụng React.

### CSS Modules

CSS được scope cục bộ cho từng component, tránh xung đột kiểu.

### Styled-Components

Thư viện viết CSS-in-JS, sử dụng tagged template literals.

### Tailwind CSS

Framework CSS utility-first để xây dựng giao diện nhanh chóng.

### Material-UI

Thư viện component UI theo phong cách Material Design.

### Ant Design

Thư viện UI toàn diện với component sẵn dùng cho ứng dụng doanh nghiệp.

### Emotion

Thư viện CSS-in-JS nhẹ, hỗ trợ styled components và inline styles.

### Chakra UI

Thư viện component UI dễ tùy chỉnh, hỗ trợ accessibility và dark mode.

## Build Tools

**Định nghĩa**: Công cụ đóng gói, tối ưu và quản lý mã nguồn trong dự án React.

### Webpack

Công cụ đóng gói module, chuyển đổi và tối ưu mã cho production.

### Vite

Công cụ build hiện đại, nhanh hơn Webpack, phù hợp với React.

### Create React App

Công cụ CLI khởi tạo dự án React với cấu hình sẵn.

### Parcel

Công cụ build không cần cấu hình, phù hợp cho dự án nhỏ.

### Babel

Công cụ chuyển đổi mã JavaScript hiện đại (ES6+) sang phiên bản tương thích trình duyệt.

### ESLint

Công cụ kiểm tra và sửa lỗi cú pháp, đảm bảo chất lượng mã.

### Prettier

Công cụ định dạng mã tự động, giữ mã thống nhất.

### Rollup

Công cụ đóng gói module, tối ưu cho thư viện React.

## Accessibility (a11y)

**Định nghĩa**: Đảm bảo ứng dụng React dễ tiếp cận với mọi người dùng, bao gồm người khuyết tật.

### ARIA Attributes

Thuộc tính cải thiện khả năng truy cập cho người dùng khuyết tật.

### Semantic HTML

Sử dụng thẻ HTML đúng ngữ nghĩa để hỗ trợ screen reader và SEO.

### Keyboard Navigation

Đảm bảo ứng dụng có thể điều hướng bằng bàn phím.

### Screen Reader Support

Tối ưu giao diện để tương thích với phần mềm đọc màn hình.

### Focus Management

Quản lý focus của người dùng khi điều hướng hoặc tương tác.

### Color Contrast

Đảm bảo tỷ lệ tương phản màu phù hợp để hỗ trợ người dùng khiếm thị.

## Animations

**Định nghĩa**: Kỹ thuật tạo hiệu ứng chuyển động trong ứng dụng React để cải thiện trải nghiệm người dùng.

### React Spring

Thư viện tạo animation dựa trên vật lý, mượt mà và dễ sử dụng.

### Framer Motion

Thư viện animation mạnh mẽ, hỗ trợ gesture và keyframe.

### React Transition Group

Thư viện chính thức của React để quản lý animation khi component mount/unmount.

### CSS Animations

Sử dụng CSS keyframes và transitions để tạo hiệu ứng đơn giản.

## Internationalization (i18n)

**Định nghĩa**: Hỗ trợ đa ngôn ngữ và địa phương hóa trong ứng dụng React.

### react-i18next

Thư viện quản lý bản dịch, tích hợp với i18next để hỗ trợ i18n.

### FormatJS

Thư viện định dạng số, ngày tháng và chuỗi đa ngôn ngữ.

### Language Switching

Cơ chế chuyển đổi ngôn ngữ trong ứng dụng (ví dụ: dropdown chọn ngôn ngữ).

## Component Libraries

**Định nghĩa**: Thư viện cung cấp component UI sẵn dùng để tăng tốc phát triển.

### BlueprintJS

Thư viện UI cho ứng dụng desktop-like, phù hợp với dự án doanh nghiệp.

### React Bootstrap

Thư viện tích hợp Bootstrap với React, cung cấp component responsive.

### Semantic UI React

Thư viện UI với các component theo phong cách Semantic UI.

## Development Tools

**Định nghĩa**: Công cụ hỗ trợ phát triển, debug và quản lý dự án React.

### React Developer Tools

Extension trình duyệt để debug component, state và props.

### Storybook

Công cụ phát triển và tài liệu hóa component trong môi trường biệt lập.

### Redux DevTools

Extension để theo dõi trạng thái và hành động trong Redux.

### React Profiler

Công cụ tích hợp để đo lường hiệu suất render của component.

### Pre-commit Hooks

Công cụ như Husky để chạy lint/test trước khi commit mã.

## Security

**Định nghĩa**: Kỹ thuật đảm bảo ứng dụng React an toàn trước các mối đe dọa.

### Cross-Site Scripting (XSS) Prevention

Sử dụng JSX và các thư viện như DOMPurify để ngăn chặn tấn công XSS.

### Secure API Calls

Sử dụng HTTPS và xác thực (OAuth, JWT) khi gọi API.

### Content Security Policy (CSP)

Cấu hình CSP để hạn chế nguồn tài nguyên được tải.

### Dependency Auditing

Sử dụng công cụ như npm audit để kiểm tra lỗ hổng trong thư viện.

## Performance Monitoring

**Định nghĩa**: Công cụ và kỹ thuật để theo dõi và cải thiện hiệu suất ứng dụng.

### Web Vitals

Bộ số liệu (LCP, FID, CLS) để đo lường trải nghiệm người dùng.

### Sentry

Công cụ theo dõi lỗi và hiệu suất ứng dụng trong môi trường thực tế.

### New Relic

Nền tảng giám sát hiệu suất ứng dụng và trải nghiệm người dùng.