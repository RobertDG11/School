import { ViewTypes } from "react-big-scheduler";

const data = {
  config: {
    schedulerWidth: "90%",
    resourceName: "Sala",
    views: [
      {
        viewName: "Zi",
        viewType: ViewTypes.Day,
        showAgenda: false,
        isEventPerspective: false
      },
      {
        viewName: "Saptamana",
        viewType: ViewTypes.Week,
        showAgenda: false,
        isEventPerspective: false
      },
      {
        viewName: "Luna",
        viewType: ViewTypes.Month,
        showAgenda: false,
        isEventPerspective: false
      }
    ],
    checkConflict: true,
    dayStartFrom: 8,
    dayStopTo: 22,
    nonAgendaDayCellHeaderFormat: "HH:mm"
  },
  resources: [
    {
      id: "c1",
      name: "CN100"
    },
    {
      id: "c2",
      name: "CN101"
    },
    {
      id: "c3",
      name: "CN102"
    },
    {
      id: "c4",
      name: "CN200"
    },
    {
      id: "c5",
      name: "CN201"
    },
    {
      id: "c6",
      name: "CN202"
    }
  ],
  events: [
    {
      id: 1,
      start: "2019-04-14 08:00",
      end: "2019-04-14 14:00",
      resourceId: "c1",
      title: "Ore de curs zilnice",
      rrule: "FREQ=WEEKLY;DTSTART=20190414T080000Z;BYDAY=MO,TU,WE,TH,FR",
      movable: false,
      resizable: false,
      bgColor: "#FF0000"
    },
    {
      id: 1,
      start: "2019-04-14 08:00",
      end: "2019-04-14 14:00",
      resourceId: "c2",
      title: "Ore de curs zilnice",
      rrule: "FREQ=WEEKLY;DTSTART=20190414T080000Z;BYDAY=MO,TU,WE,TH,FR",
      movable: false,
      resizable: false,
      bgColor: "#FF0000"
    },
    {
      id: 1,
      start: "2019-04-14 08:00",
      end: "2019-04-14 14:00",
      resourceId: "c3",
      title: "Ore de curs zilnice",
      rrule: "FREQ=WEEKLY;DTSTART=20190414T080000Z;BYDAY=MO,TU,WE,TH,FR",
      movable: false,
      resizable: false,
      bgColor: "#FF0000"
    },
    {
      id: 1,
      start: "2019-04-14 08:00",
      end: "2019-04-14 14:00",
      resourceId: "c4",
      title: "Ore de curs zilnice",
      rrule: "FREQ=WEEKLY;DTSTART=20190414T080000Z;BYDAY=MO,TU,WE,TH,FR",
      movable: false,
      resizable: false,
      bgColor: "#FF0000"
    },
    {
      id: 1,
      start: "2019-04-14 08:00",
      end: "2019-04-14 14:00",
      resourceId: "c5",
      title: "Ore de curs zilnice",
      rrule: "FREQ=WEEKLY;DTSTART=20190414T080000Z;BYDAY=MO,TU,WE,TH,FR",
      movable: false,
      resizable: false,
      bgColor: "#FF0000"
    },
    {
      id: 1,
      start: "2019-04-14 08:00",
      end: "2019-04-14 14:00",
      resourceId: "c6",
      title: "Ore de curs zilnice",
      rrule: "FREQ=WEEKLY;DTSTART=20190414T080000Z;BYDAY=MO,TU,WE,TH,FR",
      movable: false,
      resizable: false,
      bgColor: "#FF0000"
    }
  ]
};

export default data;
