import { Button } from '../../component/_root'
import { InfoLayerPropsType, sideMenuBar } from '@/types/templates/InfoLayer'
import React, { useState} from 'react'
import Header from "../../component/view/Info/Header"

const index = ({
  children,
  conferenceDetails,
  menuBarData,
  select,
  setMenubar
  
}:InfoLayerPropsType) => {

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
    setMenubar (newMenuList) //change the menu list
  }
  return (
    // main wrapper of conference information of large screen 
    <div className = {`flex-center md:pt-[125px] md:pb-[100px] p-[60px_0_40px]`}>
        <div className  = {`container`}>
            {/* header section part wrapper */}
            <div>
              <Header 
              title={conferenceDetails.name} 
              slogan={conferenceDetails.slogan}                
              />
            </div>
            
            {/* content part wrapper  */}
            <div className = {`relative -mx-4`}>
              <div className = {`w-full px-4`}>
                <div className = {`tabs-wrapper_lg `}>
                    <div className = {`tabs-nav-wrap_lg`}>
                      {/* tab navbar */}
                        <div className = {`tab-nav_lg`}>
                          {/* show the side menu bar */}
                            {
                              menuBarData.map ((sideBar, ind) => {
                                // nav item
                                return (
                                  <div 
                                    key = {ind}
                                    onDragStart={(e:React.DragEvent<HTMLDivElement>) => dragStart (e, ind)}
                                    onDragEnter={(e) => dragEnter (e, ind)}
                                    onDragEnd={(e) => dropTheElement (e)}
                                    draggable
                                  >
                                    <Button 
                                      label={sideBar.name} 
                                      variant={'v2'} 
                                      active = {select.toLowerCase() == sideBar.name.toLowerCase() && true}       
                                    /> 
                                  </div>
                                )
                              })
                            }
                        </div>
                        {/* children will be a content */}
                    </div>
                    {children}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default index