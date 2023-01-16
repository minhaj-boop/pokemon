import { OutputDataTypeOfEventSchedule, UnSortedDataTypeOfEventSchedule } from "@/types/store/Global";
import { demoData } from "@/utils/DemoData"


export const giveMeTheStructure: (unsortedData:UnSortedDataTypeOfEventSchedule) => OutputDataTypeOfEventSchedule = (unsortedData) => {
  const workingData = unsortedData
  const mySearch = new RegExp (/react/i); //search all react data
  const final = workingData.filter (conference =>mySearch.test (conference.name) )
  const final_Data = final
  const finalData:OutputDataTypeOfEventSchedule = demoData
  console.log (final_Data)
  return finalData

}