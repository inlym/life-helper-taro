// 【文件说明】
// 在当前文件引入环境变量，用于其他地方调用（用于后续变更环境变量引入方式，只需要改当前文件就行了）

/** 环境变量 */
export const environments = {
  /** 微信小程序的 appid */
  appid: process.env.TARO_APP_APPID,
  /** 请求地址前缀部分 */
  baseURL: process.env.TARO_APP_BASE_URL,
  /** 阿里云 API 网关摘要签名认证使用的 AppKey */
  aliyunAppKey: process.env.TARO_APP_ALIYUN_APP_KEY,
  /** 阿里云 API 网关摘要签名认证使用的 AppSecret */
  aliyunAppSecret: process.env.TARO_APP_ALIYUN_APP_SECRET
}
