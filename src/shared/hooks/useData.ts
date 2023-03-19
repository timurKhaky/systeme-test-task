import { useAppDispatch, useAppSelector } from "../../app/store/hooks"
import { changeDataByID, completeChanges, selectDataByID, selectDataList, selectIsDataChanging } from "../../features/data/dataSlice"
import { IData } from "../../types/data"

export const useData = () => {

const dispatch= useAppDispatch()
const data = useAppSelector(selectDataList)
const isDataChanging = useAppSelector(selectIsDataChanging)
const dataByID = useAppSelector(selectDataByID)


const changeData= (item:IData)=> { 
    dispatch(changeDataByID(item))
}

const CompleteChangeData = (item:IData) =>{

    dispatch(completeChanges(item))
}




return {data, changeData, CompleteChangeData, isDataChanging, dataByID}
}

