import { useState } from "react";
import { connect } from "react-redux";
import { Alert, Form, List, Input, Typography } from "antd";
import { studentListFetch } from "../../store/actions/studentActions";
const { Search } = Input;
const { Title } = Typography;

const StudentPage = (props) => {
  const [pageState, setPageState] = useState({ searchField: "" });
  const { studentListFetch, student } = props;

  const handleSearch = () => {
    studentListFetch({ params: { tutor: pageState.searchField } });
  };

  const handleInput = (event) => {
    setPageState((state) => ({ ...state, searchField: event.target.value }));
  };

  return (
    <>
      <Form onFinish={handleSearch}>
        <Search
          loading={student.loading}
          placeholder="Enter tutor email address"
          name="searchField"
          onChange={handleInput}
          onSearch={handleSearch}
          size="large"
          value={pageState.searchField}
        />
      </Form>
      {student.error ? (
        <Alert message={student.error.tutor} type="error" showIcon />
      ) : null}
      <List
        size="large"
        header={<Title level={5}>Student list</Title>}
        bordered
        dataSource={student.list}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    studentListFetch: (params) => dispatch(studentListFetch(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);
