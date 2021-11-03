# 修改调整文档

## 介绍
仅记录对原本项目调整内容适应业务需求，不足之处望后续发现者补充内容

## 组件创建方式
组件创建方式来源于avue，目前简化于bigjs目录，内部自成一套，目前可直接迁移化升级。
后续该实现方式会根据组件库的完善而删除，请紧跟升级。

## 自定义组件
-基础组件--basic目录
-图表组件--echart目录
组件注册在components/index.js
后续该实现方式会根据组件库的完善而删除，请紧跟升级。

## 组件配置
自定义组件配置内容页option/components/custom
公用配置调整option/config.js
初始化配置调整option/base.js

## 工具库
工具库在utils目录，该目录包含项目所需工具函数

## 图标本地化迁移

## 环境配置
-代理配置
-缺少依赖配置

## 登录模块
登录模块涉及到api、localStore、cookie等内容

## vuex库
store目录和vuex依赖安装

## 详细页面
build页面的内容
container页面的内容
subgroup页面的内容