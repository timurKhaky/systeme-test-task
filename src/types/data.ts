export interface IData  {
    id?: number,
    active?: boolean,
    title?: string,
    name?:string,
    description?:string,
    updatedAt?: string,
    publishedAt?: string,
    removedAt?:string
}
export interface IDataList {
    products: IData[] ,

  }


