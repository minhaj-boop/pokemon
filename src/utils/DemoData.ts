import { OutputDataTypeOfEventSchedule } from "@/types/store/Global";

export const demoData:OutputDataTypeOfEventSchedule = [
  { 
    time: '05:00',
    eventData: [
     {
      dayId: 2,
      event: [
         {
            date: "2022-09-12",
            title: "Monday – workshops",
            start: "05:00",
            end: "06:00",
            eventId: "react-finland-2022"
          },
      ]
     },
     {
      dayId: 2,
      event: [
         {
            date: "2022-09-13",
            title: "Tuesday – workshops",
            start: "05:00",
            end: "06:00",
            eventId: "react-finland-2022"
          },
      ]
     }
    ]
  }, 
  { time: '05:50',

    eventData:[
      { 
      dayId: 4,
      event:[
        {
          date:"2022-09-15",
          title:"Thursday – conference",
          start:"05:00",
          end:"05:50",
          eventId:"react-finland-2021"
        },
        {
          date:"2022-09-15",
          title:"Thursday – conference",
          start:"05:50",
          end:"06.00",
          eventId:"react-finland-2021"

        }
      ]

    },
    { 
      dayId: 5,
      event:[
        {
          date:"2022-09-16",
          title:"Friday – conference",
          start:"05:00",
          end:"05:50",
          eventId:"react-finland-2021"
        },
        {
          date:"2022-09-16",
          title:"Friday – conference",
          start:"05:50",
          end:"06:00",
          eventId:"react-finland-2021"
        }
       
      ]

    },
  
  ]
  },
  { time: '06:00',
  eventData:[
    {
      dayId:1,
      event:[
        {
      date:"2022-09-12",
      title:"Monday – workshops",
      start:"06:00",
      end:"13:30",
      eventId:"react-finland-2022",
    
        }
      ]
    },
    {
      dayId:2,
      event:[
        {
      date:"2022-09-13",
      title:"Tuesday – workshops",
      start:"06:00",
      end:"14:30",
      eventId:"react-finland-2022",
        },
        {
          date:"2022-09-13",
          title:"Tuesday – workshops",
          start:"06:00",
          end:"09:00",
          eventId:"react-finland-2022",
        }
      ]
    },
    {
      dayId:3,
      event:[
        {
      date:"2022-09-14",
      title:"Wednesday – workshops",
      start:"05:00",
      end:"06:00",
      eventId:"react-finland-2021",
    
        },
        {
          date:"2022-09-14",
          title:"Wednesday – workshops",
          start:"06:00",
          end:"14:00",
          eventId:"react-finland-2021",
        },
        {
          date:"2022-09-14",
          title:"Wednesday – workshops",
          start:"06:00",
          end:"09:00",
          eventId:"react-finland-2021",
        }
      ]
    },
    {
      dayId:4,
      event:[
      {
           date: "2022-09-15",
           title:"Thursday – conference",
           start:"06:00",
           end:"07:30",
           eventId:"react-finland-2022",
      }
    ]
    },
    {
      dayId:5,
      event:[
      {
           date: "2022-09-16",
           title:"Friday – conference",
           start:"06:00",
           end:"07:30",
           eventId:"react-finland-2022",
      }
    ]
    }

  ]

  },
  { time: '07:00',
   eventData:[
    {
      dayId:3,
      event:[{
       date: "2021-09-01",
       title:"Wednesday",
       start:"07:00",
       end:"08:30",
       eventId:"react-finland-2021",
      }]
    },
    {
      dayId:4,
      event:[{
       date: "2021-09-02",
       title: "Thursday",
       start:"07:00",
       end:"08:30",
       eventId:"react-finland-2021",
      }]
    },
    {
      dayId:5,
      event:[{
       date: "2021-09-03",
       title: "Friday",
       start:"07:00",
       end:"08:30",
       eventId:"react-finland-2021",
      }]
    },
   ]
  }, 
  { time: '07:15',
  eventData:[{
    dayId:3,
    event:[{
      date:"2022-09-14",
      title:"Wednesday – workshops",
      start:"07:15",
      end:"09:00",
      eventId:"react-finland-2022",

    }]
  }]
  }, 
  { time: '07:30',
   eventData:[
    {
    dayId:4,
    event:[{
      date:"2022-09-15",
      title:"Thursday – conference",
      start:"07:30",
      end:"08:05",
      eventId: "react-finland-2021",
    }]
   },
   {
    dayId:5,
    event:[{
      date:"2022-09-16",
      title:"Friday – conference",
      start:"07:30",
      end:"08:00",
      eventId: "react-finland-2022",
    }]
   },
  
  ]
   
  },
  { time: '08:00',
  eventData:[
    {
      dayId:5,
      event:[
        {
          date: "2022-09-16",
          title:"Friday – conference",
          start:"08:00",
          end:"09:30",
          eventId:"react-finland-2020",
        },
      ]
  },
  {
    dayId:1,
    event:[
      {
        date: "freezing-edge-2020",
        title:"Conference day",
        start:"08:00",
        end:"09:00",
        eventId:"react-finland-2020",
      },
    ]
},
{
  dayId:1,
  event:[
    {
      date: "2020-06-01",
      title:"Conference day",
      start:"08:00",
      end:"09:00",
      eventId:"react-finland-2020",
    },
  ]
},
{
  dayId:3,
  event:[
    {
      date: "2018-04-25",
      title:"Presentation day",
      start:"08:00",
      end:"09:00",
      eventId:"react-finland-2018",
    },
  ]
},
{
  dayId:4,
  event:[
    {
      date: "2018-04-26",
      title:"reason-conf-2019",
      start:"08:00",
      end:"09:00",
      eventId:"react-finland-2018",
    },
  ]
},
{
  dayId:2,
  event:[
    {
      date: "2019-04-23",
      title:"Pre-conference",
      start:"08:00",
      end:"22:00",
      eventId:"react-finland-2019",
    },
  ]
},
{
  dayId:3,
  event:[
    {
      date: "2019-04-24",
      title:"Workshop day",
      start:"08:00",
      end:"09:00",
      eventId:"react-finland-2019",
    },
  ]
},
{
  dayId:5,
  event:[
    {
      date: "2019-04-26",
      title:"Second conference day",
      start:"08:00",
      end:"09:00",
      eventId:"react-finland-2019",
    },
    {
      date: "2018-10-19",
      title:"Presentation day",
      start:"08:00",
      end:"09:00",
      eventId:"graphql-finland-2018",
    },
  ]
},
{
  dayId:4,
  event:[
    {
      date: "2018-10-18",
      title:"Workshop day",
      start:"08:00",
      end:"09:00",
      eventId:"graphql-finland-2018",
    },
  ]
},

]

  }, 
  { time: '08:05',
    eventData:[
      {
        dayId:4,
        event:[
          {
          date:"2022-09-15",
          title: "Thursday – conference",
          start:"08:05",
          end:"09:35",
          eventId:"react-finland-2022",
          }
        ]
      }
    ]   
  }, 
  { time: '09:00',
   eventData:[
   {
     dayId:1,
    event:[
      {
           date:"2020-06-01",
          title:"Conference day",
          start:"09.00",
          end:"09.15",
          eventId:"freezing-edge-2020",

          }
    ]
  },
  {
    dayId:2,
   event:[
     {
          date:"2018-04-24",
         title:"Workshop day",
         start:"09.00",
         end:"13.00",
         eventId:"react-finland-2018",
         },
         {
          date:"2018-04-24",
         title:"Workshop day",
         start:"09.00",
         end:"18.00",
         eventId:"react-finland-2018",
         },

   ]
 },
 {
  dayId:3,
 event:[
   {
        date:"2018-04-25",
       title:"Presentation day",
       start:"09.00",
       end:"09.15",
       eventId:"react-finland-2018",
       },
       {
        date:"2018-04-24",
       title:"Workshop day",
       start:"09.00",
       end:"11:30",
       eventId:"react-finland-2019",
       },
       

 ]
},
{
  dayId:4,
 event:[
   {
        date:"2018-04-26",
       title:"Presentation day",
       start:"09.00",
       end:"09.15",
       eventId:"react-finland-2018",
       },
       

 ]
},
{
  dayId:5,
 event:[
   {
        date:"2019-04-26",
       title:"Second conference day",
       start:"09.00",
       end:"09.15",
       eventId:"react-finland-2018",
       },
       

 ]
},
{
  dayId:2,
 event:[
   {
        date:"2021-08-31",
       title:"Tuesday",
       start:"09.00",
       end:"12.00",
       eventId:"react-finland-2021",
       },
       

 ]
},
{
  dayId:1,
 event:[
   {
        date:"2022-09-12",
       title:"Monday – workshops",
       start:"09:00",
       end:"10:00",
       eventId:"react-finland-2022",
       },
       

 ]
},
{
  dayId:2,
 event:[
   {
        date:"2022-09-13",
       title:"Tuesday – workshops",
       start:"09:00",
       end:"10:00",
       eventId:"react-finland-2022",
       },
       

 ]
},
{
  dayId:3,
 event:[
   {
        date:"2022-09-14",
       title:"Wednesday – workshops",
       start:"09:00",
       end:"10:00",
       eventId:"react-finland-2021",
       },
       {
        date:"2019-03-27",
       title:"Workshop day",
       start:"08:30",
       end:"09.00",
       eventId:"react-finland-2020",
       },
       {
        date:"2022-09-27",
       title:"Wednesday – workshops",
       start:"09:00",
       end:"10:30",
       eventId:"typeof-2019",
       },

 ]
},
{
  dayId:4,
 event:[
   {
        date:"2019-03-28",
       title:"Conference day 1",
       start:"09:00",
       end:"09:45",
       eventId:"typeof-2019",
       },
       {
        date:"2018-10-18",
       title:"Workshop day",
       start:"09:00",
       end:"11:30",
       eventId:"graphql-finland-2018",
       },
       

 ]
},
{
  dayId:5,
 event:[
   {
        date:"2019-03-29",
       title:"Conference day 2",
       start:"09:00",
       end:"09:45",
       eventId:"Conference day 1",
       },
       

 ]
},
   ]    
},
  { time: '09:15',
   eventData:[
    {
      dayId:5,
      event:[
        {
          date:"2018-10-19",
          title: "Presentation day",
          start:"09:15",
          end: "09:45",
          eventId:"graphql-finland-2018",
        }
      ]
    },
    
    {
      dayId:6,
      event:[
        {
          date:"2019-4-13",
          title: "Community & Dojo Day",
          start:"08:45",
          end: "09:15",
          eventId:"halfstack-vienna-2019",
        },
        {
          date:"2019-4-13",
          title: "Community & Dojo Day",
          start:"09:15",
          end: "12.30",
          eventId:"halfstack-vienna-2019",
        },
      ]
    },
    {
      dayId:3,
      event:[
          { 
            date:"2018-04-25",
            title:"Presentation Day",
            start:"09:15",
            end:"09:45",
            eventId:"react-finland-2018",

        }
      ]
    },
    {
      dayId:4,
      event:[
        { 
          date:"2018-04-26",
          title:"Presentation Day",
          start:"09:15",
          end:"09:45",
          eventId:"react-finland-2018",
      },
      { 
        date:"2018-04-26",
        title:"Second conference day",
        start:"09:15",
        end:"09:45",
        eventId:"react-finland-2018",
    },
    ]
    },
    {
      dayId:2,
      event:[
        { 
          date:"2022-09-13",
          title:"Tuesday – workshops",
          start: "09:15",
          end:"11.00",
          eventId:"react-finland-2022",
      },
      
    ]
    }
   ]

}, 
  { time: '09:30',
eventData:[
  {
    dayId:5,
    event:[
      {
      date:"2022-09-16",
      title:"Friday – conference",
      start:"09:30",
      end:"10:30",
      eventId:"react-finland-2022",
    },
    {
      date:"2019-4-12",
      title:"Conference Day",
      start:"08.45",
      end:"09:30",
      eventId:"halfstack-vienna-2019",
    },
    {
      date:"2019-4-12",
      title:"Conference Day",
      start:"9.30",
      end:"10:30",
      eventId:"reason-conf-2019",
    },

  ]
   
  },
  {
    dayId:4,
    event:[
      {
      date:"2019-4-11",
      title:"Workshop Day",
      start:"8.45",
      end:"9.30",
      eventId:"halfstack-vienna-2019",
    },
    {
      date:"2019-4-11",
      title:"Workshop Day",
      start:"09:30",
      end:"12:30",
      eventId:"reason-conf-2019",
    },
    
  ]
   
  }
  
] }, 
  { time: '09:35',
   eventData:[
    {
      dayId:4,
      event:[
        {
          date:"2022-09-15",
          title:"Thursday – conference",
          start: "09:35",
          end:"10:30",
          eventId:"react-finland-2022",
        }
      ]
    }
   ]

}
]