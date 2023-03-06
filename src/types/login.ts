export interface userType {
  userName: string
  password: string
}
export interface userResType {
  userInfo: {
    id: number
    username: string
    password: string
  }
  auth: string
}