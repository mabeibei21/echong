# 域名 

> http://39.105.204.151:3000



# 注册

- 接口地址:/users/register
- 请求的类型:POST
- 请求的参数:
字段名称     类型     是否必填          说明
username  string         Y             用户名称
password   string         Y             用户密码

**返回值参考**:

  ```json
{
    "code":200,
    "errMsg":"",
    "data":{
        "info":"注册成功",
        "status":1   
     }
 }
  ```



**状态值**：

> ​    1：成功
> ​    2：用户名重复
> ​    0：服务错误




# 登录接口
- 接口地址:/users/login
- 请求的类型:POST
- 请求的参数:
字段名称       类型       是否必填        说明
username    string          Y             用户名称
password     string          Y             用户密码

**返回值参考**:

```json
{
     code: 200,
     errMsg: "",
     data: {
         info: "登陆成功",
         code: 1,
         data:userData
     }
}
```


**状态值**：

> ​    1：成功
> ​    2：密码错误
> ​    3：权限被封



# 修改密码

- 接口地址:/users/updateInfo

- 请求的类型:POST

- 请求的参数:
  字段名称       类型       是否必填        说明
  password     string          Y             用户密码

  id                   string          Y             用户ID

**返回值参考**

```json
{
  code: 200,
  errMsg: "",
  data: {
      info: "修改成功",
      code: 1
   }
}
```



# 修改昵称

- 接口地址:/users/updateInfo

- 请求的类型:POST

- 请求的参数:
  字段名称       类型       是否必填        说明
  name           string           Y             用户昵称

  id                   string          Y             用户ID

**返回值参考**

```json
{
  code: 200,
  errMsg: "",
  data: {
      info: "修改成功",
      code: 1
   }
}
```



# 修改头像

- 接口地址:/users/modifyUserPic

- 请求的类型:POST

- 请求的参数:
  字段名称           类型       是否必填        说明
  filesImg           string           Y             file类型文件

  id                      string           Y             用户ID

**返回值参考**

```json
{
  code: 200,
  errMsg: "",
  data: {
    info: "修改成功",
    urlPic:urlPath
  }
}


{
  code: 200,
  errMsg: "",
  data: {
    info: "服务器错误",
  }
}
```



# 上传图片

- 接口地址:/upload/files
- 请求的类型:POST
- 请求的参数:
  字段名称             类型       是否必填          说明
  filesImg               file             Y                   图片


**返回值参考**

```json
{
  code:200,
  errMsg:"",
  data:{
     urlPath
  }
}
```



# 添加书籍

- 接口地址:/books/addbooks

- 请求的类型:POST

- 请求的参数:
  字段名称             类型       是否必填          说明
  booksAuth       String            Y              书籍作者

  booksName     String            Y              书籍名称

  booksStatus    String             Y              书籍状态(连载中|已完结)

  booksPrice       Number        Y             书籍价格

  booksLogo       String            Y              书籍封面

**返回值参考**

```JSON
{
   code: 200,
   errMsg: "",
   data: {
       info: "添加成功",
       status: 1
   }
}
```







# 删除书籍

- 接口地址:/books/delete
- 请求的类型:GET
- 请求的参数:
  字段名称             类型       是否必填          说明
  id                      Number        Y                 书籍ID

**返回值参考**

```json
{
  code:200,
  errMsg:"",
  data:{
     info:"删除成功",
     status:1
   }
}
```



# 更改书籍

- 接口地址:/books/modify

- 请求的类型:POST

- 请求的参数:
  字段名称             类型       是否必填          说明
  booksAuth       String            Y              书籍作者

  booksName     String            Y              书籍名称

  booksStatus    String             Y              书籍状态(连载中|已完结)

  booksPrice       Number        Y             书籍价格

  booksLogo       String            Y              书籍封面

  id                       Number        Y              书籍ID

**返回值参考**

```json
{
  code:200,
  errMsg:"",
  data:{
     info:"修改成功",
     status:1
  }
}
```



# 获取书籍列表

- 接口地址:`/books/booksList`

- 请求的类型:`GET`

- 请求的参数:
  字段名称             类型       是否必填          说明
  page                 Number        Y                  页码

  limit                  Number        Y                 每页显示多少条

**返回值参考**

```json
{
  code:200,
  errMsg:"",
  data:{
      list:data,
      status:1
  }
}
```



# 添加文章

- 接口地址:`/article/addArticle`

- 请求的类型:`POST`

- 请求的参数:
  字段名称             类型       是否必填          说明
  booksTitle          String          Y               文章标题

  content              String           Y               文章内容

**返回值参考**

```json
{
   code:200,
   errMsg:"",
   data:{
       info:"添加成功",
       status:1
   }
}
```



# 获取文章列表

- 接口地址:`/article/articleList`

- 请求的类型:`GET`

- 请求的参数:
  字段名称             类型        是否必填          说明
  page                 String           Y                页码

  limit                  String           Y                每页显示多少条数据

**返回参数参考**

```json
{
   code:200,
   errMsg:"",
   data:{
     list:data,
     info:"获取成功"
   }
}
```



# 获取文章内容

- 接口地址:`/article/content`
- 请求的类型:`GET`
- 请求的参数:
  字段名称             类型        是否必填          说明
  id                       String              Y                 页码

**返回值参考**

```json
{
   code:200,
   errMsg:"",
   data:{
     data:data,
     status:1
   }
}
```

