import { Button } from '../../component/_root'
import { InfoSmallDeviceLayerPropsType, sideMenuBar } from '@/types/templates/InfoSmallDeviceLayer'
import React, {useState} from 'react'
import Headers from "../../component/view/Info/Header"

const index = ({
  Data,
  menuBarData,
  select,
  props,
  conferenceDetails,
  setMenuBar
}:InfoSmallDeviceLayerPropsType) => {

  const [dragStartPosition, setDragStartPosition] = useState <number | null>(null)
  const [dragEnterPosition, setDragEnterPosition] = useState <number | null>(null)

  //when the drag has been start it will execute
  const dragStart = (e:React.DragEvent<HTMLDivElement>, position:number) => {
    console.log(e)
    setDragStartPosition (position)
  }
  //when the drag enter any particular element, it will execute
  const dragEnter = (e:React.DragEvent<HTMLDivElement>, position:number) => {
    console.log(e)
    setDragEnterPosition (position)
  }

  //when finally drop that element it will happen
  const dropTheElement = (e:React.DragEvent<HTMLDivElement>) => {
    console.log(e)
    const newMenuList:sideMenuBar[] = [...menuBarData] //clone the side menu bar 
    const copyTheDraggedElement:sideMenuBar = newMenuList[dragStartPosition!]! //store the drag start position
    newMenuList.splice (dragStartPosition!, 1) //remove dragged item from the array from it's current position
    newMenuList.splice (dragEnterPosition!, 0, copyTheDraggedElement) //insert dragged item into it's new position in the menu list array
    setMenuBar (newMenuList) //change the menu list
  }
  return (
    <div className = {`container`}>
        {/* header part of this section main wrapper*/}
        <Headers 
          title={conferenceDetails.name} 
          slogan={conferenceDetails.slogan}          
        />

        {/* sidebar with data wrapper */}
        <div className = {`relative -mx-4`}>
          <div className = {`w-full px-4`}>
            {/* tab wrapper */}
            <div className = {`tabs-wrapper flex`}>
                <div className = {`tabs-nav-wrap`}>
                    <div className = {`tab-nav`}>
                      {/* here menu bar will be create with data */}
                        {
                          menuBarData.map((sideBar, ind) => {
                            // console.log (sideBar.name)
                            return (
                              <div 
                                key = {ind}
                                draggable
                                onDragStart={(e:React.DragEvent<HTMLDivElement>) => dragStart (e, ind)}
                                onDragEnter={(e) => dragEnter (e, ind)}
                                onDragEnd={(e) => dropTheElement (e)}
                              >
                                {/* side bar menu part */}
                                <Button 
                                  label={sideBar.name} 
                                  variant={'v2'} 
                                  active = {select.toLowerCase() == sideBar.name.toLowerCase() && true}       
                                /> 
                                {/* show data part */}
                                {
                                  select.toLowerCase() == sideBar.name.toLowerCase() 
                                  &&
                                  <Data
                                    {...props}
                                  />
                                }
                              </div>
                            )
                          })
                        }
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default index