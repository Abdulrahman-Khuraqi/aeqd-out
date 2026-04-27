import { useState } from 'react';
import Select from 'react-select';

import {
  Button,
  ButtonGroup,
  CardTitle,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Row,
} from 'reactstrap';

const Step2 = ({ info, setInfo, previousStep, nextStep, isDevMode }) => {
  const [propertyContractChecked, setPropertyContractChecked] = useState(true);
  const [lessorChecked, setLessorChecked] = useState(true);

  const gotoThree = async () => {
    let valid = true;

    if (info.propertyContract === '') {
      setPropertyContractChecked(false);
      valid = false;
    } else setPropertyContractChecked(true);

    if (info.lessor === '') {
      setLessorChecked(false);
      valid = false;
    } else setLessorChecked(true);

    if (isDevMode) {
      nextStep();
      return;
    }

    if (valid) nextStep();
  };

  const options0 = [
    { value: 'انا المؤجر', label: 'انا المؤجر' },
    { value: 'انا المستأجر', label: 'انا المستأجر' },
  ];

  const options = [
    { value: 'صك إلكتروني', label: 'صك إلكتروني' },
    { value: 'صك ملكية ورقي', label: 'صك ملكية ورقي' },
    { value: 'حجة استحكام', label: 'حجة استحكام' },
    { value: 'صك السجل العقاري', label: 'صك السجل العقاري' },
    { value: 'أخرى', label: 'أخرى' },
  ];

  return (
    <div>
      <div
        className='p-4 text-center shadow-lg'
        style={{ borderRadius: '20px', background: 'white' }}
      >
        <CardTitle className='mb-4 text-2xl font-bold'>معلومات المؤجر</CardTitle>
        <div>
          <Form className='text-right'>
            <Row>
              <Col>
                <FormGroup>
                  <Select
                    required
                    placeholder='هل أنت المؤجر أو المستأجر ؟'
                    options={options0}
                    onChange={(e) =>
                      setInfo((prev) => ({ ...prev, lessorOrlessee: e.value }))
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Select
                    required
                    placeholder='حدد نوع الصك'
                    options={options}
                    onChange={(e) => {
                      setInfo((prev) => ({
                        ...prev,
                        propertyContract: e.value,
                        propertyContractId: '',
                        propertyContractDate: '',
                        deedIssueDate: '',
                        deedDocumentNumber: '',
                        deedTypeName: '',
                        recordNumber: '',
                        registrationDate: '',
                      }));
                    }}
                  />
                  {!propertyContractChecked && (
                    <FormText className='text-red-500'>الرجاء اختيار نوع الصك</FormText>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>المؤجر:</Label>
                  <br />
                  <ButtonGroup size='lg' className='d-block'>
                    <Button
                      className={`border border-gray-300 py-1 px-4 rounded-lg w-1/2 ${info.lessor === 'مالك' ? 'bg-primary-500' : 'bg-transparent'} rounded-r-full`}
                      onClick={() =>
                        setInfo((prev) => ({ ...prev, lessor: 'مالك' }))
                      }
                      outline
                      active={info.lessor === 'مالك'}
                    >
                      مالك
                    </Button>
                    <Button
                      className={`border border-gray-300 py-1 px-4 rounded-lg w-1/2 ${info.lessor === 'وكيل' ? 'bg-primary-500' : 'bg-transparent'} rounded-l-full`}
                      onClick={() =>
                        setInfo((prev) => ({ ...prev, lessor: 'وكيل' }))
                      }
                      outline
                      active={info.lessor === 'وكيل'}
                    >
                      وكيل
                    </Button>
                  </ButtonGroup>
                  {!lessorChecked && (
                    <FormText className='text-red-500'>الرجاء اختيار من المؤجر</FormText>
                  )}
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <a className='btn__main btn1' style={{ display: 'inline-block' }} onClick={gotoThree}>
          التالي
        </a>
        <a
          className='btn__main btn1'
          style={{ display: 'inline-block' }}
          onClick={() => previousStep()}
        >
          السابق
        </a>
      </div>
    </div>
  );
};

export default Step2;
