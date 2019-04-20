import React, { Component } from "react";
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT
} from "react-big-scheduler";
import data from "./config";
import moment from "moment";
import "moment/locale/ro";
import withDragDropContext from "./withDnDContext";
import "react-big-scheduler/lib/css/style.css";

import NewEvent from "../Modals/Event/NewEvent";
import QuickEvent from "../Modals/Event/QuickEvent";

class Sched extends Component {
  constructor(props) {
    super(props);

    moment.locale("ro");
    let schedulerData = new SchedulerData(
      new moment().format(DATE_FORMAT),
      ViewTypes.Day,
      false,
      false,
      data.config,
      moment
    );
    schedulerData.setResources(data.resources);
    schedulerData.setEvents(data.events);
    schedulerData.setMinuteStep(this.props.minuteStep);
    this.state = {
      viewModel: schedulerData,
      events: data.events,
      showModal: false,
      dates: {
        classroom: "",
        classroomName: "",
        start: "",
        end: ""
      }
    };
  }

  render() {
    const { viewModel } = this.state;

    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center" }}>Rezerva o sala de clasa</h3>
          <QuickEvent
            showModal={this.state.showModal}
            handleClick={this.newQuickEvent}
            data={this.state.viewModel}
            close={this.close}
          />
          <Scheduler
            schedulerData={viewModel}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
            onSelectDate={this.onSelectDate}
            onViewChange={this.onViewChange}
            eventItemClick={this.eventClicked}
            viewEventClick={this.ops1}
            viewEventText="Descarca fisierul"
            updateEventStart={this.updateEventStart}
            updateEventEnd={this.updateEventEnd}
            moveEvent={this.moveEvent}
            newEvent={this.quickEventTrigger}
            conflictOccurred={this.conflictOccurred}
            rightCustomHeader={
              <NewEvent
                handleClick={this.newEvent}
                data={this.state.viewModel}
              />
            }
          />
        </div>
      </div>
    );
  }

  close = () => {
    this.setState({ showModal: false });
  };

  prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(this.state.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(this.state.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    );
    schedulerData.setEvents(this.state.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(this.state.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  eventClicked = (schedulerData, event) => {
    alert(
      `You just clicked an event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  ops1 = (schedulerData, event) => {
    alert(
      `You just executed ops1 to event: {id: ${event.id}, title: ${
        event.title
      }}`
    );
  };

  ops2 = (schedulerData, event) => {
    alert(
      `You just executed ops2 to event: {id: ${event.id}, title: ${
        event.title
      }}`
    );
  };

  quickEventTrigger = (
    schedulerData,
    slotId,
    slotName,
    start,
    end,
    type,
    item,
    title,
    color
  ) => {
    if (this.state.viewModel.viewType === ViewTypes.Day) {
      this.setState({
        showModal: true,
        dates: { classroom: slotId, classroomName: slotName, start, end }
      });
    }
  };

  newQuickEvent = (schedulerData, title, color) => {
    let newFreshId = 0;
    schedulerData.events.forEach(item => {
      if (item.id >= newFreshId) newFreshId = item.id + 1;
    });

    const newColor = color ? color : "#ff0000";

    const { start, end, classroom } = this.state.dates;

    let newEvent = {
      id: newFreshId,
      title: title,
      start: start,
      end: end,
      resourceId: classroom,
      bgColor: newColor
    };

    schedulerData.addEvent(newEvent);
    const events = this.state.events;
    events.push(newEvent);
    this.setState({
      viewModel: schedulerData,
      events: events,
      showModal: false,
      dates: {}
    });
  };

  newEvent = (schedulerData, slotId, start, end, title, color) => {
    if (this.state.viewModel.viewType === ViewTypes.Day) {
      let newFreshId = 0;
      schedulerData.events.forEach(item => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      const newColor = color ? color : "#ff0000";

      let newEvent = {
        id: newFreshId,
        title: title,
        start: start,
        end: end,
        resourceId: slotId,
        bgColor: newColor
      };
      let hasConflict = false;
      schedulerData.events.forEach(function(e) {
        if (
          schedulerData._getEventSlotId(e) === slotId &&
          e.id !== newFreshId
        ) {
          let eStart = schedulerData.localeMoment(e.start),
            eEnd = schedulerData.localeMoment(e.end);
          let zStart = schedulerData.localeMoment(start),
            zEnd = schedulerData.localeMoment(end);
          if (
            (zStart >= eStart && zStart < eEnd) ||
            (zEnd > eStart && zEnd <= eEnd) ||
            (eStart >= zStart && eStart < zEnd) ||
            (eEnd > zStart && eEnd <= zEnd)
          ) {
            hasConflict = true;
          }
        }
      });
      if (!hasConflict) {
        schedulerData.addEvent(newEvent);
        const events = this.state.events;
        events.push(newEvent);
        this.setState({
          viewModel: schedulerData,
          events: events
        });
        return false;
      }
      return true;
    }
  };

  updateEventStart = (schedulerData, event, newStart) => {
    if (
      window.confirm(
        `Do you want to adjust the start of the event? {eventId: ${
          event.id
        }, eventTitle: ${event.title}, newStart: ${newStart}}`
      )
    ) {
      schedulerData.updateEventStart(event, newStart);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  updateEventEnd = (schedulerData, event, newEnd) => {
    if (
      window.confirm(
        `Do you want to adjust the end of the event? {eventId: ${
          event.id
        }, eventTitle: ${event.title}, newEnd: ${newEnd}}`
      )
    ) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    if (
      window.confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${
          event.title
        }, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      this.setState({
        viewModel: schedulerData
      });
    }
  };

  conflictOccurred = (
    schedulerData,
    action,
    event,
    type,
    slotId,
    slotName,
    start,
    end
  ) => {
    alert(`Conflict occurred. {action: ${action}, event: ${event}`);
  };
}

export default withDragDropContext(Sched);
