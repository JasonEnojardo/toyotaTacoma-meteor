import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';

const MainImage = () => (
  <Container fluid className="p-0">
    <Row className="justify-content-center position-relative">
      <Image src="/images/tacoma.avif" fluid alt="2023 Toyota Tacoma Lunar Rock" />

      <div className="top-centered-text text-white">
        <h1 style={{ fontWeight: 'bold', fontSize: '4rem', paddingTop: '20px' }}>2023 Tacoma</h1>
        <p style={{ fontSize: '1.5rem' }}>Unmatched. Unequaled. Unstoppable.</p>
      </div>

      <div className="bottom-left-text text-white">
        <h2 style={{ fontWeight: 'bold', fontSize: '2rem', paddingLeft: '200px' }}>2023 Tacoma</h2>
        <p style={{ fontSize: '2rem', paddingLeft: '200px' }}>Starting MSRP $28,600*</p>
      </div>
    </Row>
  </Container>
);

export default MainImage;
