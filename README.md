# PartWork — 大学生勤工助学管理系统

> 基于 Spring Boot + Vue 的高校勤工助学管理平台，覆盖岗位发布、学生申请、教师审批、考勤统计全流程。

[![Java](https://img.shields.io/badge/Java-17+-blue)](https://www.java.com) [![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-green)](https://spring.io/projects/spring-boot) [![Vue](https://img.shields.io/badge/Vue-3.x-brightgreen)](https://vuejs.org) [![License](https://img.shields.io/badge/License-MIT-yellow)](./LICENSE)

## 项目简介

**PartWork** 面向高校勤工助学场景，实现学生岗位申请、教师审核管理、考勤统计等核心业务的数字化。前后端分离架构，后端 Spring Boot + MyBatis-Plus，前端 Vue。

## 核心功能

| 模块 | 说明 |
|------|------|
| 学生管理 | 注册、信息维护、岗位浏览与申请 |
| 岗位管理 | 岗位发布、编辑、状态管理（教师端） |
| 申请审批 | 学生提交 → 教师审核（通过/驳回） |
| 考勤管理 | 签到签退、工时统计 |
| 权限控制 | 学生/教师角色隔离，接口级权限校验 |

## 技术栈

| 层 | 技术 |
|------|------|
| 后端 | Java 17 + Spring Boot 3.x + MyBatis-Plus + MySQL |
| 前端 | Vue 3.x |
| 接口文档 | Swagger |
| 构建工具 | Maven |

## 项目结构

```
PartWork/
├── backend/                    # 后端代码（3-4人负责）
│   └── src/main/java/com/workstudy/
│       ├── common/             # 通用工具与配置
│       │   ├── util/           # 工具类（日期、加密、校验）
│       │   └── config/         # 配置（数据库、Swagger、跨域）
│       ├── module/student/     # 学生模块（controller/service/mapper/entity）
│       ├── module/job/         # 岗位模块
│       └── WorkStudyApplication.java
├── frontend/                   # 前端代码（2-3人负责）
├── docs/                       # 项目文档（接口文档、数据库设计、开发规范）
└── scripts/                    # 一键启动脚本 & 数据库初始化
```

## 快速开始

```bash
# 1. 初始化数据库
mysql -u root -p < scripts/init-db.sql

# 2. 启动后端
cd backend && mvn spring-boot:run

# 3. 启动前端
cd frontend && npm install && npm run dev
```

## License

MIT
