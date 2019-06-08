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
  }
};

export default data;
