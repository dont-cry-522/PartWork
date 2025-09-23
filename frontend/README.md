frontend/
├── public/                  # 静态资源（共用）
├── src/
│   ├── api/                 # 接口封装（按后端模块对应，1人维护通用请求）
│   │   ├── student.js       # 学生模块接口
│   │   ├── job.js           # 岗位模块接口
│   │   └── request.js       # 通用请求拦截（含token、错误处理）
│   │
│   ├── views/               # 页面模块（按角色拆分，多人并行）
│   │   ├── student/         # 学生端页面（1人负责）
│   │   │   ├── login/       # 登录页
│   │   │   ├── jobList/     # 岗位列表页
│   │   │   ├── myApply/     # 我的申请页
│   │   │   └── mySalary/    # 我的薪资页
│   │   │
│   │   ├── admin/           # 管理员端页面（1人负责）
│   │   │   ├── jobManage/   # 岗位管理页
│   │   │   ├── studentVerify/ # 学生审核页
│   │   │   └── salaryStat/  # 薪资统计页
│   │   │
│   │   └── common/          # 公共页面（如404、首页）
│   │
│   ├── components/          # 组件（1人负责通用组件，其他人开发业务组件）
│   │   ├── common/          # 通用组件（按钮、表格、弹窗，全项目复用）
│   │   ├── student/         # 学生端业务组件（如岗位卡片、申请表单）
│   │   └── admin/           # 管理员端业务组件（如审核表格、统计图表）
│   │
│   ├── router/              # 路由配置（按角色拆分，避免冲突）
│   │   ├── studentRouter.js
│   │   ├── adminRouter.js
│   │   └── index.js         # 路由汇总
│   │
│   └── utils/               # 工具函数（通用工具1人维护）
│
├── vite.config.js           # 项目配置（1人负责）
└── package.json             # 依赖管理