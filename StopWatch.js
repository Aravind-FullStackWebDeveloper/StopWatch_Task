import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [task, setTask] = useState("");

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };
  const handleStop = () => {
    setIsActive(false);
    setTimer(0);
    setTask("");
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <h1 className='text-center mb-4'>{timer}s</h1>
          <div className='d-flex justify-content-center'>
            <Button variant='success' onClick={handleStart} disabled={isActive}>
              <FaPlay />
            </Button>
            <Button
              variant='warning mx-3'
              onClick={handlePause}
              disabled={!isActive}
            >
              <FaPause />
            </Button>
            <Button variant='danger' onClick={handleStop}>
              <FaStop />
            </Button>
          </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <h3>Add Task</h3>
          <Form.Control
            type='text'
            placeholder='Enter task name'
            value={task}
            onChange={handleTaskChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Stopwatch;
