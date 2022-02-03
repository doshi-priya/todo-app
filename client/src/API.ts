import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    const config: any = {
        Headers :{
            token : localStorage.getItem('token')
        }
    }
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos",config
    )
    return todos;
  } catch (error : any) {
    throw new Error(error);
  }
}