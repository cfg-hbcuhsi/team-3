import React, { Component } from "react";
import { Form, Button, FormControl, Container } from "react-bootstrap";
import Video from "./videoCard";
import "../App.css";
import axios from "axios";

class Biographies extends Component {
  state = {
    videos: [],
    value: "",
  };
  async getVideos(Filter) {
    const url = "http://localhost:4000/api/videos";
    const res = await axios(url, { params: { filter: Filter } });
    return res.data;
  }
  async componentDidMount() {
    if (this.state.videos.length !== 0) {
      return;
    }
    const url = "http://localhost:4000/api/videos";
    const res = await axios(url, { params: { filter: "Software Engineer" } });
    console.log(res.data);
    this.setState({ videos: res.data });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  async handleSearch() {
    const vid = await this.getVideos(this.state.value);
    console.log(vid);
    console.log(this.state.value);
    this.setState({ videos: vid });
  }
  render() {
    return (
      <div>
        <Container style={{ maxWidth: '700px', margin: '0 auto'}} className="">
          <Form inline>
            <FormControl
              size="lg"
              type="text"
              value={this.state.value}
              onChange={(event) => this.handleChange(event)}
              placeholder="Search Biographies"
              htmlSize="50"
              className="mr-sm-2"
            />
            <Button
              variant="outline-primary"
              onClick={() => this.handleSearch()}
            >
              Search
            </Button>
          </Form>
        </Container>
        <Container className="mt-4" style={{ maxWidth: '700px', margin: '0 auto'}}>
          {this.state.videos.map((video) => {
            return <Video className="Results" data={video} />;
          })}
        </Container>
        <br />
      </div>
    );
  }
}
export default Biographies;
