import './App.css';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react';

const App = () => {
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [dimensions, setDimensions] = useState([])

  const getValue = () => {
    setType(document.querySelector('#exampleSelect').value)
    setColor(document.querySelector('#exampleColor').value)
    setDimensions([document.querySelector('#width').value, document.querySelector('#height').value])
  }

  return (
    <Container id='container' fluid className='text-center'>
      <Row>
        {/* input */}
        <Col lg="6">
          <div id='input'>
            <form>

              {/* select */}
              <FormGroup row className='justify-content-center m-0 pt-5'>
                <Label
                  for="exampleSelect"
                  xs={2}
                >
                  Select type:
                </Label>
                <Col xs={7}>
                  <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                  >
                    <option>
                      Straight
                    </option>
                    <option>
                      Striped
                    </option>
                  </Input>
                </Col>
              </FormGroup>
              {/* select */}

              {/* color */}
              <FormGroup row className='justify-content-center'>
                <Label
                  for="exampleColor"
                  xs="2">
                  Select color:
                </Label>
                <Col xs="7">
                  <Input
                    id="exampleColor"
                    name="color"
                    placeholder="color placeholder"
                    type="color"
                  />
                </Col>
              </FormGroup>
              {/* color */}

              {/* dimensions */}
              <Row>
                {/* width */}
                <Col md={6} sm={12}>
                  <FormGroup row className='justify-content-md-end justify-content-center '>
                    <Label
                      for="width"
                      xs="2">
                      Width:
                    </Label>
                    <Col xs="7">
                      <Input
                        id="width"
                        name="width"
                        placeholder="width in centimeters"
                        type="text"
                      />
                    </Col>
                  </FormGroup>
                </Col>
                {/* width */}

                {/* height */}
                <Col md={6}>
                  <FormGroup row className='justify-content-md-start justify-content-center'>
                    <Label
                      for="height"
                      xs="2">
                      Height:
                    </Label>
                    <Col xs="7">
                      <Input
                        id="height"
                        name="height"
                        placeholder="height in centimeters"
                        type="text"
                      />
                    </Col>
                  </FormGroup>
                </Col>
                {/* height */}
              </Row>
              {/* dimensions */}

              {/* button */}
              <Button color='dark' outline onClick={getValue}>Create!</Button>
              {/* button */}
            </form>
          </div>
        </Col>

        {/* output */}
        <Col lg="6">
          <div id='output' className='d-flex justify-content-center align-items-center'>
            {type === 'Straight' ?
              <StraightCurtain type={type} color={color} dimensions={dimensions} />
              :
              <StripedCurtain type={type} color={color} dimensions={dimensions} />
            }
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const StraightCurtain = ({ color, dimensions }) => {
  const width = dimensions[0]
  const width2 = parseInt(dimensions[0]) + 10
  const height = dimensions[1]
  return (
    <div>
      <div id='curtain-top' style={{ width: `${width2}px` }}></div>
      <div id='curtain' style={{ height: `${height}px`, width: `${width}px`, background: color }}></div>
      <div id='curtain-bottom' style={{ width: `${width2}px` }}></div>
    </div>
  )
}

const StripedCurtain = ({ color, dimensions }) => {
  const width = parseInt(dimensions[0])
  const width2 = parseInt(dimensions[0]) + 10
  const height = dimensions[1]
  let arr = []
  for (let i = 0; i < height / 60; i++) {
    arr.push(i + 1)
  }
  return (
    <div>
      <div id='curtain-top' style={{ width: `${width2}px` }}></div>
      <div id='curtain' style={{ height: height + 'px' }}>
        {arr.map(elem =>
          <div>
            <div className='stripe' style={{ width: width, background: color }}></div>
            <div className='space' style={{ width: width }}></div>
          </div>)}
      </div>
      <div id='curtain-bottom' style={{ width: `${width2}px` }}></div>
    </div>
  )
}

export default App;
