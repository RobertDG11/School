import React from "react";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import { Icon, Button } from "semantic-ui-react";
import { Dashboard } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { reduxForm } from "redux-form";
import { toast } from "react-toastify";

class Uploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      url: ""
    };

    this.uppy = new Uppy({
      meta: { type: "file" },
      restrictions: {
        maxNumberOfFiles: 1,
        maxFileSize: 100000000,
        allowedFileTypes: [".pdf", "text/*", ".zip", ".rar"],
        minNumberOfFiles: 1
      },
      locale: {
        strings: {
          browse: "cauta",
          dropPaste: "Trageti fisierele aici, sau %{browse}"
        }
      }
    })
      .use(Tus, { endpoint: "https://master.tus.io/files/" })
      .on("upload-error", (file, error) => {
        toast.error(
          `Nu s-a putut incarca fisierul ${file}. Incearca mai tarziu!`,
          {
            position: toast.POSITION.TOP_CENTER
          }
        );
      })
      .on("complete", result => {
        const url =
          result.successful[0].uploadURL + "|" + result.successful[0].name;
        this.setState({ url: url });
      })
      .run();

    this.handleModalClick = this.handleModalClick.bind(this);
  }

  componentWillUnmount() {
    this.uppy.close();
  }

  componentDidUpdate() {
    this.props.change("upload", this.state.url);
  }

  handleModalClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div
        style={{
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Dashboard uppy={this.uppy} inline={true} height={300} />
      </div>
    );
  }
}

const formConfiguration = {
  form: "newEvent-form"
};

export default reduxForm(formConfiguration)(Uploader);
