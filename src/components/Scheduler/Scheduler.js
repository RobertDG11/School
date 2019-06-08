import React, { Component } from "react";
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT,
  DATETIME_FORMAT
} from "react-big-scheduler";
import data from "./config";
import moment from "moment";
import "moment/locale/ro";
import withDragDropContext from "./withDnDContext";
import "react-big-scheduler/lib/css/style.css";
import { connect } from "react-redux";
import {
  getRooms,
  getEvents,
  addEvent,
  updateEvent
} from "../redux/actions/actions";

import NewEvent from "../Modals/Event/NewEvent";
import QuickEvent from "../Modals/Event/QuickEvent";
import { Loader } from "semantic-ui-react";
import { toast } from "react-toastify";
import http from "../../hoc/Interceptor";
import axios from "axios";

class ConnectedSched extends Component {
  state = { loading: true, booker: undefined };

  async componentDidMount() {
    if (this.props.rooms.length === 0) {
      const response = await this.props.getRooms();
    }

    if (this.props.events.length <= 9) {
      const eventResponse = await this.props.getEvents();
    }

    moment.locale("ro");
    let schedulerData = new SchedulerData(
      new moment().format(DATE_FORMAT),
      ViewTypes.Day,
      false,
      false,
      data.config,
      moment
    );
    schedulerData.setResources(this.props.rooms);
    schedulerData.setEvents(this.props.events);
    schedulerData.setMinuteStep(this.props.minuteStep);

    this.setState({
      viewModel: schedulerData,
      showModal: false,
      dates: {
        classroom: "",
        classroomName: "",
        start: "",
        end: ""
      },
      loading: false
    });
  }

  render() {
    const { viewModel } = this.state;

    return !this.state.loading ? (
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
            viewEventClick={this.ops1}
            viewEventText="Descarca fisierul"
            updateEventStart={this.updateEventStart}
            updateEventEnd={this.updateEventEnd}
            moveEvent={this.moveEvent}
            newEvent={this.hasPermission(2) ? this.quickEventTrigger : null}
            conflictOccurred={this.conflictOccurred}
            rightCustomHeader={
              this.hasPermission(2) ? (
                <NewEvent handleClick={this.newEvent} data={viewModel} />
              ) : null
            }
            slotItemTemplateResolver={this.slotItemTemplateResolver}
          />
        </div>
      </div>
    ) : (
      <Loader active={this.state.loading} />
    );
  }

  close = () => {
    this.setState({ showModal: false });
  };

  hasPermission = userType => {
    if (this.props.isAuth) {
      switch (userType) {
        case 0:
          return this.props.userType === userType;
        case 1:
          return true;
        case 2:
          return this.props.userType === userType || this.props.userType === 0;
        default:
          return false;
      }
    }
    return false;
  };

  prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(this.props.events);
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
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  ops1 = async (schedulerData, event) => {
    try {
      const response = await http.get(`/booking/${event.id}`);
      const fileUrl = response.data[0].file;
      if (fileUrl !== "nofile") {
        try {
          const url = fileUrl.split("|")[0];
          const response = await axios.get(url);
          const file = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", fileUrl.split("|")[1]);
          link.click();
        } catch (error) {}
      }
    } catch (error) {}
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

  newQuickEvent = async (schedulerData, title, color, file) => {
    const newColor = color ? color : "#ff0000";

    const { start, end, classroom } = this.state.dates;
    const userId = this.props.userId;
    const upload = file ? file : "nofile";

    let newEvent = {
      title: title,
      start: start,
      end: end,
      resourceId: classroom,
      bgColor: newColor,
      bookerId: userId,
      file: upload
    };

    let newEventBackend = {
      booker_id: userId,
      classroom_id: classroom,
      name: title,
      start: start,
      end: end,
      color: newColor,
      file: upload
    };

    const response = await this.props.addEvent(newEventBackend);

    newEvent = { id: response.id, ...newEvent };

    schedulerData.addEvent(newEvent);
    this.setState({
      viewModel: schedulerData,
      showModal: false,
      dates: {}
    });
  };

  newEvent = async (schedulerData, slotId, start, end, title, color, file) => {
    if (this.state.viewModel.viewType === ViewTypes.Day) {
      const newColor = color ? color : "#ff0000";
      const userId = this.props.userId;
      const upload = file ? file : "nofile";

      let hasConflict = false;
      schedulerData.events.forEach(function(e) {
        if (schedulerData._getEventSlotId(e) === slotId) {
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
        let newEvent = {
          title: title,
          start: start,
          end: end,
          resourceId: slotId,
          bgColor: newColor,
          bookerId: userId,
          file: upload
        };

        let newEventBackend = {
          booker_id: userId,
          classroom_id: slotId,
          name: title,
          start: start,
          end: end,
          color: newColor,
          file: upload
        };

        const response = await this.props.addEvent(newEventBackend);

        newEvent = { id: response.id, ...newEvent };

        schedulerData.addEvent(newEvent);
        const events = this.props.events;
        events.push(newEvent);
        this.setState({
          viewModel: schedulerData,
          events: events
        });
      }
      return hasConflict;
    }
  };

  updateEventStart = (schedulerData, event, newStart) => {
    const newEvent = {
      id: event.id,
      booker_id: this.props.userId,
      classroom_id: event.slotId,
      name: event.title,
      start: newStart,
      end: event.end,
      color: event.bgColor,
      file: event.file
    };

    this.props.updateEvent(newEvent);

    schedulerData.updateEventStart(event, newStart);

    this.setState({
      viewModel: schedulerData
    });
  };

  updateEventEnd = (schedulerData, event, newEnd) => {
    const newEvent = {
      id: event.id,
      booker_id: this.props.userId,
      classroom_id: event.slotId,
      name: event.title,
      start: event.start,
      end: newEnd,
      color: event.bgColor,
      file: event.file
    };

    this.props.updateEvent(newEvent);

    schedulerData.updateEventEnd(event, newEnd);

    this.setState({
      viewModel: schedulerData
    });
  };

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    const newEvent = {
      id: event.id,
      booker_id: this.props.userId,
      classroom_id: slotId,
      name: event.title,
      start: start,
      end: end,
      color: event.bgColor,
      file: event.file
    };

    this.props.updateEvent(newEvent);

    schedulerData.moveEvent(event, slotId, slotName, start, end);
    this.setState({
      viewModel: schedulerData
    });
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
    toast.error(
      `Nu s-a putut rezerva sala ${slotName} in intervalul ${moment(
        start
      ).format(DATETIME_FORMAT)} - ${moment(end).format(DATETIME_FORMAT)}
    deoarece sala este deja rezervata`,
      {
        position: toast.POSITION.TOP_CENTER
      }
    );
  };

  slotItemTemplateResolver = (
    schedulerData,
    slot,
    slotClickedFunc,
    width,
    clsName
  ) => {
    const classroom = this.props.rooms[slot.slotId - 1];
    return (
      <div className={clsName}>
        {classroom.name}({classroom.capacity} locuri)
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    userType: state.auth.user.user_type,
    userId: state.auth.user.id,
    events: state.scheduler.events,
    rooms: state.scheduler.rooms
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getRooms: () => dispatch(getRooms()),
    getEvents: () => dispatch(getEvents()),
    addEvent: newEvent => dispatch(addEvent(newEvent)),
    updateEvent: newEvent => dispatch(updateEvent(newEvent))
  };
}

const Sched = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedSched);

export default withDragDropContext(Sched);
