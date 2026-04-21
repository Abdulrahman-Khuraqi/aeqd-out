/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { Button, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, Row } from 'reactstrap';

const SendEmail = ({ previousStep, nextStep }) => {
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [nameValid, setNameValid] = useState(true);
    const [contactNumberValid, setContactNumberValid] = useState(true);
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const gotoNextStep = () => {     
        //   nextStep(); // on dev mode

        let valid = true;

        if (name === '') {
            setNameValid(false);
            valid = false;
        } else {
            setNameValid(true);
        }

        if (contactNumber === '') {
            setContactNumberValid(false);
            valid = false;
        } else {
            setContactNumberValid(true);
        }

        if (valid) {
            // Here you would typically send the data to a PHP backend
            // For example, using fetch to make a POST request to your PHP script

            const data = { name, contactNumber };

            fetch('send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(datax => {
                console.log('Success:', datax);
                nextStep();
            })
            .catch((error) => {
                console.error('Error:', error);
                toggleModal(); // Show the modal on error
            });
        }
    };

    return (
        <div>
            <div
                className="p-4 text-center shadow-lg"
                style={{ borderRadius: '20px', background: 'white' }}
            >
                <CardTitle className="h4" color="primary">
                    معلومات 
                </CardTitle>
                <div>
                    <Form className="text-right">
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="name">الاسم:</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        invalid={!nameValid}
                                    />
                                    {!nameValid && (
                                        <FormText color="danger">الرجاء إدخال الاسم</FormText>
                                    )}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="contactNumber">رقم التواصل:</Label>
                                    <Input
                                        type="text"
                                        id="contactNumber"
                                        value={contactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)}
                                        invalid={!contactNumberValid}
                                    />
                                    {!contactNumberValid && (
                                        <FormText color="danger">الرجاء إدخال رقم التواصل</FormText>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <Button
                    className="btn__main btn1"
                    onClick={gotoNextStep}
                >
                    التالي
                </Button>
                <Button
                    className="btn__main btn1"
                    onClick={() => previousStep()}
                >
                    السابق
                </Button>
            </div>

            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalBody>
                    فشل في إرسال البريد الإلكتروني. يرجى المحاولة مرة أخرى لاحقًا.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleModal}>إغلاق</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default SendEmail;
