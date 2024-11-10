import React,{useEffect} from 'react'
import Card from './Card'
import { fetchData } from '../features/userSlice'
import { useSelector,useDispatch } from 'react-redux'
const Pro_prac = () => {
    const {data,loading,error} = useSelector((state) => state.userSlice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    },[])
    
  return (
    <div>
      <Card data={data} loading={loading} error={error}/>
    </div>
  )
}
// Redux is used for fetching data
export default Pro_prac
