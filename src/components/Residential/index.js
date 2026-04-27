/* eslint-disable react/destructuring-assignment */
import 'animate.css';
import { React, useEffect, useState } from 'react';
import StepWizard from 'react-step-wizard';

import useToggle from '../../Hooks/useToggle';
import contactInfo from '../../assets/data/contactInfo.json';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import Step4 from './step/Step4';
import Step5 from './step/Step5';
import Step6 from './step/Step6';
import Step7 from './step/Step7';

const custom = {
    enterRight: 'animate__animated animate__fadeIn ',
    enterLeft: 'animate__animated animate__fadeIn ',
    exitRight: '',
    exitLeft: '',
    intro: ' ',
};

const Residential = () => {
    const html = document.getElementsByTagName('html');
    // eslint-disable-next-line no-unused-vars
    const [lang, setLang] = useToggle(true);
    const [newContract, setNewContract] = useState(false);
    useEffect(() => {
        if (lang) {
            html[0].lang = 'ar';
            html[0].dir = 'rtl';
        } else {
            html[0].lang = 'en';
            html[0].dir = '';
        }
        return () => {
            html[0].lang = 'en';
            html[0].dir = '';
        };
    });
    // eslint-disable-next-line no-unused-vars
    const [stepWizard, setStepWizard] = useState(null);
    const [lessor, setLessor] = useState('');
    const [contractImage, setContractImage] = useState('');

    // const [propertyContract, setPropertyContract] = useState('');
    // const [lessorName, setLessorName] = useState('');
    // const [lessorIdNumber, setLessorIdNumber] = useState('');
    // const [lessorPhone, setLessorPhone] = useState('');
    // const [lessorBirthday, setLessorBirthday] = useState('');
    // const [lessorIban, setLessorIban] = useState('');

    const [info, setInfo] = useState({
        lessorOrlessee:'',
        lessor: '',
        propertyContract: '',
        lessorName: '',
        lessorIdNumber: '',
        lessorPhone: '',
        lessorBirthday: '',
        lessorIban: '',
        lesseeName: '',
        lesseeIdNumber: '',
        lesseePhone: '',
        lesseeBirthday: '',
        propertyContractId: '',

        propertyContractDate:'',
        propertyType: '',
        propertyUse: '',
        buildingFloorsNo: '',
        unitsPerFloor: '',
        rentAmount: '',
        paymentMethod: '',
        startingDate: '',
        contractDuration: '',
        unitType: '',
        FloorNo: '',
        apartmentNo: '',
        roomNo: '',
        space:'',
        insurance: '',
        dailyFine: '',
        water: '',
        waterNo: '',
        electricity: '',
        electricityNo: '',
        city: '',
        buildingNo: '',
        postalCode: '',
        extraNo: '',
        contracturl: '',
        brokerAssistantId:''    ,
        area:'',
        recordNumber: '',
        registrationDate: '',
        deedImage: '',
        legalDocumentType: ''});
    const assignStepWizard = (instance) => {
        setStepWizard(instance);
    };

    const handleName = () => {
        console.log('step change');

        console.log('info:', info);
    };

    // const handleComplete = () => {
    //     alert('You r done. TQ');
    // };

    return (
        <div className="contract">
            <div className="container contract__container">
                {/* <HeaderHomeRtl className="appie-header-area-rtl " /> */}
                {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
                <div className=" d-flex flex-column min-vh-100  justify-content-center align-items-center ">
                    <StepWizard
                        instance={assignStepWizard}
                        onStepChange={handleName}
                        transitions={custom}
                        className="contract__content"
                    >
                        <Step1 info={info} setInfo={setInfo} />
                        {/* <SendEmail info={info} setInfo={setInfo} /> */}
                        <Step2 info={info} setInfo={setInfo} />
                        <Step3
                            lessor={lessor}
                            setLessor={setLessor}
                            info={info}
                            setInfo={setInfo}
                            contractImage={contractImage}
                            setContractImage={setContractImage}
                        />
                        <Step4
                            contractImage={contractImage}
                            setContractImage={setContractImage}
                            info={info}
                            setInfo={setInfo}
                        />
                        <Step5
                            contractImage={contractImage}
                            setContractImage={setContractImage}
                            info={info}
                            setInfo={setInfo}
                            newContract={newContract}
                            setNewContract={setNewContract}
                        />
                        <Step6
                            contractImage={contractImage}
                            setContractImage={setContractImage}
                            info={info}
                            setInfo={setInfo}
                            newContract={newContract}
                            setNewContract={setNewContract}
                        />
                        <Step7
                            info={info}
                            contractImage={contractImage}
                            setContractImage={setContractImage}
                            setInfo={setInfo}
                        />

                        {/* <One userCallback={assignUser} />
                        <Two user={user} userCallback={assignUser} />
                        <Three user={user} completeCallback={handleComplete} /> */}
                    </StepWizard>
                    <div className="mt-3" style={{ color: 'white' }}>
                        واجهتك مشكلة ؟
                        <a
                         target="_blank" rel="noopener noreferrer"
                            style={{
                                color: '#03e7b4',
                                paddingRight: '6px',
                                textDecoration: 'underline',
                            }}
                            href={contactInfo.whatsapp}
                        >
                            {'  '}
                            {'  '} كلمنا على واتساب{'  '}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Residential;
