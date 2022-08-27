import service from "@/request/index"
import { TLoginData } from "@/type/login"


export function login(data: TLoginData) {
  return service({
      url: "/login",
      method: "POST",
      data
  })
}