
import { Col, Nav, NavLink, Row, Tab } from 'react-bootstrap'
import './SideBar'


const SideBarComponent = () => {
    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
                <Row>
                    <Col sm={3}>
                        <div className='min-height-1015 border rounded tab-content'>
                            <h5 className='my-3 text-center'>My Dashboard</h5>
                            <Nav variant="pills" className="flex-column ms-4" style={{ width: '250px', borderRadius: '50px' }}>
                                <Nav.Item className='custom-nav-item'>
                                    <Nav.Link eventKey={0}>
                                        nav1
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='custom-nav-item'>
                                    <NavLink eventKey={1}> nav 2</NavLink>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>

                    <Col sm={9}>
                        <div className='h-100 b-solid-2'>
                            <div className='position-relative'>
                                <div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey={0}>tab1</Tab.Pane>
                                        <Tab.Pane eventKey={1}>tab2</Tab.Pane>

                                    </Tab.Content>
                                </div>
                            </div>
                        </div>

                    </Col>

                </Row>

            </Tab.Container>
        </div>
    )
}
export default SideBarComponent;