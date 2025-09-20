PartWork  # 项目根目录
├── backend/        # 后端代码（3-4人负责）
├── frontend/       # 前端代码（2-3人负责）
├── docs/           # 共享文档（全员协作）
├── scripts/        # 部署/工具脚本（1人统筹）
└── README.md       # 项目说明（含分工、启动方式）


backend/
├── src/main/java/com/workstudy/
│   ├── common/              # 通用技术支撑（1人负责，全团队依赖）
│   │   ├── util/            # 工具类（日期、加密、校验）
│   │
│   │   └── config/          # 通用配置（数据库、Swagger、跨域）
│   │
│   ├── module/              # 业务模块（核心，按功能拆分，多人并行开发）
│   │   ├── student/         # 学生管理模块（含注册、信息、资格审核）
│   │   │   ├── controller/  # 接口层
│   │   │   ├── service/     # 业务层（接口+实现）
│   │   │   ├── mapper/      # 数据访问层
│   │   │   └── entity/      # 数据实体
│   │   │
│   │   ├── job/             # 岗位管理模块（发布、编辑、查询）
│   │   ├── controller/
│   │   ├── service/
│   │   ├── mapper/
│   │   └── entity/
│   │   
│   │   
│   │
│   └── WorkStudyApplication.java  # 启动类
│
├── src/main/resources/
│   ├── application.yml      # 主配置
│   ├── application-dev.yml  # 开发环境配置
│   └── mapper/              # MyBatis XML映射文件（按模块分目录）
│       ├── student/
│       ├── job/
│       
│
└── pom.xml                  # 依赖管理



PartWork
├── docs/                    # 文档（全员可编辑，用Git管理版本）
│   ├── swagger(接口文档).md          # 后端接口说明（后端更新）
│   ├── sql(数据库设计).md        # 表结构、字段说明（后端共同维护）
│ 
│   └── struction(开发规范).md          # 代码风格、提交规范（团队共识）
│
├── scripts/                 # 脚本（1人负责，简化团队操作）
│   ├── start-backend.sh     # 一键启动后端服务
│   ├── start-frontend.sh    # 一键启动前端服务
│   └── init-db.sql          # 数据库初始化脚本（后端首次运行用）
│
└── .github/ 
# 协作配置（组长负责）
